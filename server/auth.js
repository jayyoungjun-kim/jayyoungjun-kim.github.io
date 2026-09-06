import { createRemoteJWKSet, jwtVerify } from 'jose';
import { HttpError, requireValue } from './errors.js';

export const ADMIN_EMAIL = 'jayyoungjunkim@gmail.com';
const googleKeys = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));

export async function authenticate(request, env, keys = googleKeys) {
  requireValue(env.GOOGLE_CLIENT_ID, 503, 'Google 로그인 연결이 아직 완료되지 않았습니다.');
  const token = request.headers.get('Authorization')?.match(/^Bearer ([^\s]+)$/)?.[1];
  requireValue(token && token.length < 10000, 401, 'Google 계정으로 로그인해 주세요.');
  let payload;
  try {
    ({ payload } = await jwtVerify(token, keys, {
      algorithms: ['RS256'],
      issuer: ['https://accounts.google.com', 'accounts.google.com'],
      audience: env.GOOGLE_CLIENT_ID,
      requiredClaims: ['sub', 'iat', 'exp', 'email', 'email_verified'],
      maxTokenAge: '1h',
    }));
  } catch {
    throw new HttpError(401, '로그인이 만료되었거나 유효하지 않습니다. 다시 로그인해 주세요.');
  }
  requireValue(payload.email_verified === true && payload.email === ADMIN_EMAIL, 403,
    `${ADMIN_EMAIL} 계정만 사용할 수 있습니다.`);
  return { sub: payload.sub, email: payload.email, expiresAt: payload.exp };
}
