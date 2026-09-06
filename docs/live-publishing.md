# Live publishing

GitHub remains the source of truth. A successful authenticated master ref update refreshes the Cloudflare LiveContent Durable Object. It reads the actual GitHub head, persists the revision and broadcasts it to connected public pages through hibernating WebSockets. Drafts are never served.

The public loader fetches page content and assets pinned to that commit through a read-only allowlisted Worker route. It updates the contents and page metadata without reloading, rewrites uploaded-media URLs to the pinned route and retains the static page when requests fail. Public responses never contain a GitHub credential. Revision-addressed files are cached immutably; MP4 range responses use the full cached representation.

GitHub Pages now deploys a static fallback with the live bootstrap injected only in build artifacts. Original editable HTML is untouched, avoiding draft conflicts caused by bootstrap installation. A 404 shell renders newly published HTML paths before the background Pages deployment catches up (the initial HTTP status remains 404 until that deployment finishes). Initial social-preview crawlers also depend on the static deployment.

Admin publication checks confirm the live revision rather than waiting for Pages. Existing public tabs need one reload when this feature is first installed. Thereafter saved-and-published edits arrive as soon as the notification and content fetch complete; network latency still applies. GitHub Desktop pushes are discovered within 30 seconds while live visitors are connected. With no visitors the static deployment catches up; the next connection verifies the current head before sending its initial revision (with a five-second freshness window).

Runtime bindings: LIVE_CONTENT / LiveContent, SQLite migration live-v1. The public /live/file route only permits portfolio HTML, the shared stylesheet, typing script and UUID media paths. Backend and websocket failures do not erase the static fallback.

References: [Cloudflare WebSockets](https://developers.cloudflare.com/durable-objects/best-practices/websockets/) and [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
