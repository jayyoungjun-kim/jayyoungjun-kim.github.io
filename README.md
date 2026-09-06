# Jay Youngjun Kim portfolio

The existing portfolio remains static HTML/CSS/JavaScript, served by GitHub Pages from `master` at the repository root. Existing public pages and their design are unchanged by the admin implementation.

`admin/` adds a Korean content editor. `server/` contains a separate Cloudflare Worker which verifies Google ID tokens and allows **only `jayyoungjunkim@gmail.com`**. It stores unpublished drafts in private D1 and uploads in private R2, then publishes an atomic commit to this GitHub repository when requested.

**Activation is not complete.** The Google web client ID, Cloudflare account/resources, Worker GitHub secret and deployed API URL must be configured. The application fails closed until they are present. No default password, test login or client-side authentication bypass exists.

See [the activation and operations guide](docs/admin-setup.md).

```sh
pnpm install
pnpm test
pnpm build          # Validates the Worker bundle without deploying
pnpm preview        # Static admin at http://127.0.0.1:8080/admin/
```

Node.js 24 and pnpm 11 are used. The checked-in lockfile is the dependency baseline.

The admin edits text and selected URL/metadata attributes at their original HTML source positions. It does not regenerate the public page DOM, change CSS/classes, or migrate to a frontend framework. A no-op edit round-trips every original page byte-for-byte. Repeatable existing content blocks can be duplicated, reordered or removed; new projects can reuse an existing project layout. The English home typewriter sentence has a dedicated content editor.

Drafts are private; publishing makes the HTML and uploaded files public in GitHub and Pages. Hiding a home card does not unpublish the linked page. Unpublishing removes its current HTML file; it does not erase public Git history or uploaded media.

Tests cover content preservation, injection prevention, Google token verification and email authorization, private drafts, optimistic concurrency and atomic publishing. GitHub and identity checks are mocked or use locally signed test keys where external account configuration is required; a successful live login/publish still needs to be verified after activation.
