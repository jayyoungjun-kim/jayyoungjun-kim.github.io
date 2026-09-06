import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPair, SignJWT } from 'jose';
import { authenticate, ADMIN_EMAIL } from '../server/auth.js';
const pair = await generateKeyPair('RS256');
const env = { GOOGLE_CLIENT_ID:'test.apps.googleusercontent.com' };
const request = token => new Request('https://api.example/api/pages', {headers:{Authorization:`Bearer ${token}`}});
async function sign(claims = {}, overrides = {}) {
  return new SignJWT({email:ADMIN_EMAIL,email_verified:true,...claims})
    .setProtectedHeader({alg:'RS256'}).setSubject('google-user-123').setIssuedAt()
    .setIssuer(overrides.issuer || 'https://accounts.google.com').setAudience(overrides.audience || env.GOOGLE_CLIENT_ID)
    .setExpirationTime(overrides.expiration || '1h').sign(pair.privateKey);
}
test('accepts verified Google identity for only the requested email', async () => {
  const user = await authenticate(request(await sign()),env,pair.publicKey);
  assert.equal(user.email,ADMIN_EMAIL); assert.equal(user.sub,'google-user-123');
});
test('rejects another email, unverified email, wrong audience/issuer and expired token', async () => {
  for (const [claims, overrides, status] of [
    [{email:'other@gmail.com'},{},403], [{email_verified:false},{},403],
    [{},{audience:'other-client'},401], [{},{issuer:'https://evil.example'},401], [{},{expiration:'0s'},401],
  ]) await assert.rejects(authenticate(request(await sign(claims,overrides)),env,pair.publicKey),{status});
});
test('rejects missing credentials and forged signatures', async () => {
  await assert.rejects(authenticate(new Request('https://api.example'),env,pair.publicKey),{status:401});
  const second = await generateKeyPair('RS256');
  await assert.rejects(authenticate(request(await sign()),env,second.publicKey),{status:401});
  await assert.rejects(authenticate(request('invalid'),{},pair.publicKey),{status:503});
});
