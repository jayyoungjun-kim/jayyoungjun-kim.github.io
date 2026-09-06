# Jay Youngjun Kim portfolio

The portfolio and admin UI run on GitHub Pages, preserving public HTML, CSS, URLs and animations. A Cloudflare Worker validates Google ID tokens and performs GitHub requests with a server-only repository credential. Only the verified account jayyoungjunkim@gmail.com is allowed.

Google Web client and Worker configuration are connected; deployment details and credential renewal are recorded in the setup guide. See [Google login activation](docs/google-login-setup.md). The browser holds the Google ID token in tab memory and never receives the GitHub credential.

Drafts and selected upload files are stored in IndexedDB in the current browser, not in a cloud account. They do not sync across browsers or devices and may be lost if browser data is cleared. A draft backup downloads the current HTML and pending file contents as JSON for manual recovery. There is no automatic backup import or server-side private draft storage.

See [setup and daily operations](docs/admin-setup.md).

```sh
pnpm install
pnpm test
pnpm build
pnpm preview  # http://127.0.0.1:8080/admin/
```

Node.js 24 and pnpm 11 are used for development only. The generated `admin/app.bundle.js` is checked in so the existing GitHub Pages branch deployment can serve it without an application build step. CI verifies tests and bundle reproducibility. Rebuild and commit the bundle whenever admin source changes.

The editor patches text and selected metadata/URL attributes at original source offsets. It does not regenerate the public DOM or change CSS/classes. Existing blocks can be duplicated, reordered and removed; a new project can reuse an existing project's layout. The home typewriter sentence has its own editor. No-op edits round-trip existing source byte-for-byte.

Publishing creates one commit containing the page and its new assets on `master`. A page SHA check and a non-forced ref update prevent overwriting concurrent GitHub Desktop edits. GitHub commit success and Pages deployment status are reported separately. Hiding a card does not unpublish its page; unpublishing does not erase public Git history or uploaded files.

Tests cover content preservation, markup/URL safety, account verification, IndexedDB persistence/concurrency, local drafts and uploads, credential-free backups and atomic publishing. External write operations are mocked in automated tests; no portfolio content is changed for testing.
