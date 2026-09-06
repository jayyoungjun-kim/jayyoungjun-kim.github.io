# Persistent administrator login

The authorized Google account exchanges its ID token for a random 256-bit opaque session. Only a SHA-256 hash indexes the session in Cloudflare ADMIN_SESSIONS KV. Sessions have no scheduled expiry, as requested by the owner. The browser stores the opaque credential in localStorage, never the Google ID token or GitHub credential.

Reload and browser restart restore the saved session. Explicit logout deletes the server session before removing the browser credential. Invalid or revoked sessions return to Google login. Clearing site data or using a different browser requires another Google sign-in. Drafts remain in IndexedDB.

Legacy open clients can still use GET /session with a Google ID token until reloaded. New clients use POST /session for login, GET /session for restoration, and POST /logout for revocation.

Validation covers Google expiry, opaque session restoration, unknown sessions, revocation and unchanged origin/repository restrictions.
