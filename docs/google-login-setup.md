# Google 로그인 활성화

현재 변경 브랜치는 Google 로그인 코드를 포함한다. Google OAuth Client ID와 Cloudflare Worker 연결을 마치기 전에는 운영 master에 병합하지 않는다. 기존 홈페이지 디자인과 페이지 소스는 변경하지 않는다.

## 최초 설정

1. https://console.cloud.google.com/auth/clients 에서 본인 Google 계정으로 로그인한다. 프로젝트가 없으면 포트폴리오 관리용 프로젝트를 만든다.
2. Google Auth Platform의 Branding/Audience 기본 설정을 완료한다. 개인 Gmail은 External을 선택하며 Testing이면 테스트 사용자로 jayyoungjunkim@gmail.com을 등록한다. 요청하는 기능은 기본 Google 로그인뿐이며 Drive/Gmail 접근 권한은 사용하지 않는다.
3. Clients에서 Web application OAuth 클라이언트를 만든다. Authorized JavaScript origins에 `https://jayyoungjun-kim.github.io`를 등록한다. 콜백 방식의 Google Identity Services이므로 redirect URI는 사용하지 않는다. Client ID는 공개 설정이며 Client secret은 필요하지 않다.
4. Cloudflare 계정을 만들거나 로그인한다. 로컬에서 `pnpm exec wrangler login`으로 배포 연결한다. 이 프로젝트는 Workers만 사용하며 D1/R2 저장소는 필요하지 않다.
5. `pnpm exec wrangler deploy`로 Worker를 생성하고 HTTPS workers.dev 주소를 확인한다. 비밀 설정이 없는 동안 서버는 503으로 닫힌다.
6. `node scripts/configure-google.js 'GOOGLE_WEB_CLIENT_ID' 'https://WORKER.workers.dev'`로 공개 설정을 적용한다. 이 값들에는 토큰이나 비밀번호를 넣지 않는다.
7. GitHub의 fine-grained 토큰을 이 저장소 하나에만 Contents Read and write, Actions Read-only로 발급한다. `pnpm exec wrangler secret put GITHUB_TOKEN`의 비공개 입력 프롬프트에 입력한다. 토큰을 소스·채팅·명령줄 인자로 보내지 않는다. 매번 로그인할 때 입력할 필요는 없지만 만료·폐기되면 이 서버 비밀값을 교체해야 한다.
8. `pnpm exec wrangler deploy`, `pnpm build`, `pnpm test`를 실행한다. Worker의 `/session`은 허용된 Google ID token 없이는 401을 반환해야 한다.
9. 설정된 코드와 번들을 검토 후 master에 병합한다. GitHub Pages 배포 후 실제 Google 로그인과 콘텐츠 조회를 확인한다. 실제 콘텐츠 발행은 의도한 변경사항으로 확인한다.

## 운영

Google 버튼을 눌러 jayyoungjunkim@gmail.com으로 로그인한다. GitHub 토큰을 브라우저에 입력하지 않는다. 서버가 Google 공개 키로 ID token 서명, 발급자, 대상 Client ID, 만료, 이메일 인증 여부와 허용 이메일을 검증한다. 다른 Google 계정은 로그인 UI를 거치더라도 서버에서 거부된다. ID token은 탭 메모리에만 보관하며 만료되거나 탭을 새로 열면 Google로 다시 인증한다.

GitHub 토큰은 Cloudflare의 secret에 보관된다. API 프록시는 고정 저장소와 콘텐츠 작업만 허용하며 강제 push와 핵심 페이지 삭제를 차단한다. 초안/백업/파일 저장은 기존 브라우저 IndexedDB 방식을 유지한다. 다른 기기로 초안이 자동 동기화되지는 않는다.

설정된 Worker 주소는 빌드 시 관리자 CSP connect-src에 반영된다. 허용된 Google 라이브러리를 제외한 외부 스크립트는 실행되지 않는다. Worker에는 운영 요청 로그를 활성화하지 않았다. 인증 토큰을 로그에 출력하지 않는다.

공식 참고: [Google ID token 검증](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token), [Cloudflare secrets](https://developers.cloudflare.com/workers/configuration/secrets/).

## Connected deployment (2026-09-06)

- Google project: `jay-portfolio-admin`; Web client: `Portfolio Admin Web`.
- Origin: `https://jayyoungjun-kim.github.io`; test user: `jayyoungjunkim@gmail.com`.
- Worker: `https://jay-portfolio-admin-auth.jay-portfolio-content-admin.workers.dev`.
- GitHub credential: `Portfolio Admin Server`, this repository only, Contents write and Actions read. Stored as encrypted Worker secret `GITHUB_TOKEN`; never committed.
- Credential expires **2027-09-06**. Replace the Worker secret before expiry. Google sign-in does not require entering this credential in the browser.
