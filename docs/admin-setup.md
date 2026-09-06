# 콘텐츠 어드민 연결 및 운영

## 현재 구현 상태

- 기존 홈페이지 HTML 24개와 CSS/기존 JavaScript는 수정하지 않았다.
- GitHub Pages의 발행 소스는 인증된 API로 `master` / 루트 `/`, `legacy` 빌드 방식임을 확인했다.
- 현재 작업 폴더를 실제 원격 저장소와 연결했고, 구현은 `codex/content-admin` 브랜치에서 진행했다.
- 관리자 화면 경로: GitHub Pages에 반영한 뒤 `https://jayyoungjun-kim.github.io/admin/`.
- Google 로그인 서버 검증, 단일 이메일 허용, 문구/이미지/링크/메타 편집, 블록 복제/이동/삭제, 새 프로젝트 초안, 비공개 초안 저장, 미리보기, 업로드, 발행 및 배포 상태 조회 구현.
- 실제 Cloudflare 서버는 아직 배포하지 않았다. Google 앱 ID와 Cloudflare 계정 연결도 미완료다. 로그인 화면의 '연결 준비 중'은 이 상태를 표시한다.

## 연결 구조

공개 홈페이지 + `/admin/`: 기존 GitHub Pages.

Google Identity Services: 계정 로그인. 비밀번호는 Google에서만 입력한다. 서버가 서명·발급자·앱 ID·만료·검증된 이메일을 검사하며 `jayyoungjunkim@gmail.com` 이외 계정은 403으로 거부한다. 토큰은 브라우저 메모리에만 보관하며 만료 후 재로그인한다.

Cloudflare Worker: 인증, 편집 검증, GitHub 발행 API. GitHub 토큰은 Worker secret으로 보관한다. 브라우저와 공개 저장소에는 토큰을 넣지 않는다.

D1: Google 계정의 고유 식별자에 연결된 비공개 초안, 버전, 발행 로그.

R2: 발행 전 업로드한 비공개 파일. 공개 버킷이나 공개 도메인을 설정하지 않는다. 발행 시 해당 파일을 GitHub `assets/uploads/`에 함께 커밋한다. 기존 ImageKit/Cloudinary 주소도 계속 사용할 수 있다.

## 활성화에 필요한 계정 설정

아래 값 중 Google client ID, D1 database ID와 Worker URL은 공개 설정이다. 비밀번호/토큰을 대화나 GitHub 파일에 붙여넣지 않는다.

### 1. Google 로그인 앱

Google Cloud에서 본인 소유 프로젝트의 Google Auth Platform을 설정한다.

1. Branding/Audience 등 필수 설정을 완료한다. 계정에 표시되는 동의 사항은 사용자가 확인한다.
2. 테스트 상태라면 테스트 사용자에 `jayyoungjunkim@gmail.com`을 추가한다.
3. OAuth Client 유형은 **Web application**.
4. Authorized JavaScript origins에 `https://jayyoungjun-kim.github.io`를 등록한다. `/admin/` 경로는 넣지 않는다.
5. 로컬 로그인 검증이 필요하면 `http://127.0.0.1:8080`도 별도로 등록한다.
6. 발급된 `...apps.googleusercontent.com` client ID를 준비한다. 이 구현은 GIS callback으로 ID token을 받으므로 client secret이나 별도 redirect endpoint를 사용하지 않는다.

Google 계정 설정: https://console.cloud.google.com/auth/clients
공식 가이드: https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid

### 2. Cloudflare 로그인과 저장소

Node.js 24 및 pnpm 11 환경에서 저장소 루트에서 실행한다. 새 서비스 가입이나 요금제 변경은 사용자가 확인한다. 사용량에 따른 요금/제한은 본인 계정 대시보드를 기준으로 한다.

```sh
pnpm install
pnpm exec wrangler login
pnpm exec wrangler d1 create jay-portfolio-admin
pnpm exec wrangler r2 bucket create jay-portfolio-admin-drafts
```

`wrangler login`에서 계정 권한 연결은 사용자가 수행한다. D1 생성 결과의 실제 `database_id`를 사용한다. 현재 `wrangler.jsonc`의 0으로 된 값은 명시적인 미설정 값이다. R2 활성화에 결제 수단/동의가 필요하면 사용자가 직접 확인한다.

Worker 이름은 `jay-portfolio-admin-api`, 본인 workers.dev 하위 도메인의 URL을 사용한다. 다른 이름을 쓰려면 `wrangler.jsonc`의 name과 아래 API origin을 함께 맞춘다. 사전 배포의 실제 주소가 필요하면 아래 공개 설정 중 API origin은 배포 후 업데이트해도 된다.

### 3. GitHub 발행용 전용 토큰

GitHub에서 fine-grained personal access token을 생성한다.

- Resource owner: `jayyoungjun-kim`
- Repository access: **Only select repositories** → `jayyoungjun-kim.github.io` 하나
- Repository permissions: **Contents: Read and write**, **Actions: Read-only**, 기본 **Metadata: Read-only**
- 만료일 설정 후 갱신할 수 있도록 기록한다.

기존 GitHub Desktop/CLI의 광범위한 로그인 토큰을 복사해 서버에 재사용하지 않는다. 새 토큰을 발급받아 아래 명령의 비공개 입력 프롬프트에서만 입력한다.

```sh
pnpm exec wrangler secret put GITHUB_TOKEN
```

토큰 생성 화면: https://github.com/settings/personal-access-tokens/new

### 4. 공개 설정과 서버 배포

실제 값으로 실행한다.

```sh
pnpm configure --client-id=YOUR_CLIENT_ID.apps.googleusercontent.com --database-id=YOUR_D1_ID --api-origin=https://YOUR_WORKER.workers.dev
pnpm db:remote
pnpm test
pnpm build
pnpm deploy:api
```

`pnpm configure`가 `wrangler.jsonc`와 `admin/config.js`만 수정한다. 토큰은 기록하지 않는다. `pnpm deploy:api`는 미설정 Google/D1 값을 검사하고 차단한다. 서버 `/api/config`는 secret 값 대신 준비 여부만 반환한다.

### 5. GitHub Pages에 관리자 화면 반영

서버 연결 후 `codex/content-admin`의 변경을 검토하여 `master`에 반영한다. GitHub Desktop에서도 가능하다. 원격 GitHub Pages 배포가 성공하면 `/admin/`에서 Google 로그인을 시작한다.

기존 홈페이지 주소, 디자인, 이미지 서비스는 유지된다. `_config.yml`은 서버/개발 파일을 Pages 빌드 대상에서 제외한다. API 서버는 GitHub Pages에서 실행되는 것이 아니다.

### 6. 실제 계정 연결 후 최종 검증

1. 지정 Google 이메일로 로그인, 다른 계정은 거부되는지 확인.
2. 기존 페이지 문구를 초안에만 저장하고, 공개 홈페이지가 변하지 않는지 확인.
3. 같은 페이지를 두 창에서 열고 오래된 창의 저장이 거부되는지 확인.
4. 초안의 미리보기에서 기존 디자인과 수정 내용을 확인.
5. 실제로 발행할 콘텐츠 1건을 지정해 발행. GitHub 커밋과 Pages 성공, 실제 URL 내용 확인.
6. GitHub Desktop에서 Fetch/Pull하여 어드민 변경을 가져오는지 확인.

실제 계정 연결 전에는 1번과 5번의 성공을 확인한 것으로 보고하지 않는다. 구현 테스트는 외부 서비스를 모의하고, 토큰 검증에는 테스트용 RSA 키를 사용한다.

## 일상적인 콘텐츠 운영

페이지 선택 → 문구/이미지·영상/링크·PDF/검색·공유 수정 → 초안 저장 → 미리보기 → 발행.

- 자동 저장은 아니다. 저장하지 않은 변경사항이 있으면 페이지 이동/탭 닫기 전에 알린다.
- 저장한 초안은 D1에 있고 공개 GitHub에는 아직 없다. Google 로그인 토큰은 저장하지 않는다.
- 홈 영어 타이핑 문장은 별도 '홈 타이핑 소개' 항목에서 수정한다. 기존 타이핑 속도와 각주 효과를 유지하며 HTML 코드는 입력하지 않는다.
- 새 프로젝트는 기존 프로젝트 레이아웃을 복제한다. 복제된 본문·이미지·이전/다음 링크를 바꾼다. 홈 카드는 HOME → 구성·순서에서 링크가 있는 카드를 복제하고 제목·썸네일·링크를 수정한다.
- 블록 이동은 같은 종류의 형제 블록 사이에서 가능하다. 스타일이나 임의 HTML 코드를 편집하는 기능은 제공하지 않는다.
- TBU 카드에 새 링크가 필요하면 링크가 있는 기존 카드를 복제해 내용을 바꾸고 기존 TBU 카드를 삭제한다.
- 이미지/PDF/MP4는 파일당 8MB, 페이지당 새 파일 합계 24MB, 한 번에 최대 20개. 큰 영상은 외부 URL로 연결한다. SVG/HTML/실행 파일은 업로드할 수 없다.
- 미리보기는 sandbox iframe이며 추적 태그/스크립트/영상 임베드는 실행하지 않는다. 홈페이지 자체의 동작은 바꾸지 않는다. 새 업로드 미리보기는 인증된 API로 파일을 가져온다.
- 발행은 페이지 단위다. 여러 페이지를 동시에 묶어 발행하지 않는다. 홈 카드와 상세를 함께 추가할 때 상세를 먼저 발행하고 배포 확인 후 홈 카드를 발행한다.
- '페이지 내리기'는 프로젝트 HTML을 최신 브랜치에서 제거한다. 관련 홈 카드와 다른 페이지 링크는 별도로 정리한다. 이전 Git 이력이나 미디어 파일까지 삭제하는 비밀화 기능이 아니다.

## 충돌과 복구

- 어드민은 GitHub Desktop과 같은 원격 master에 콘텐츠 커밋을 남긴다. Desktop에서 편집하기 전 Fetch/Pull한다.
- 페이지 원본 SHA가 바뀌면 발행을 차단한다. 다른 파일만 변경되었으면 최신 master 위에 발행한다. 마지막 ref 갱신은 `force:false`라 동시 발행 시 다른 커밋을 덮어쓰지 않는다.
- 충돌 시 '초안 내용 내려받기'로 값을 보관하고 최신 원본과 비교한다. 초안을 버린 뒤 최신 페이지를 열어 변경값을 다시 입력한다. 자동 병합은 하지 않는다.
- 발행 요청 중 네트워크 오류가 나면 GitHub 수정 이력부터 확인한다. 이미 커밋됐을 수 있으므로 성공 여부를 확인하기 전 같은 내용을 새로 입력하지 않는다.
- 발행 후 Pages 실패는 GitHub Actions 로그에서 확인한다. 콘텐츠 저장 성공과 홈페이지 배포 성공을 구분한다.
- 공개 콘텐츠 복구는 GitHub Desktop에서 관련 콘텐츠 커밋을 revert하고 push하는 방식으로 한다. 어드민에 임의 커밋 전체를 복구하는 버튼은 두지 않는다.
- R2의 미발행 파일과 D1 초안은 별도 백업/정리 대상이다. R2 임시 파일은 자동 삭제하지 않으므로 오래된 미사용 업로드는 초안 참조를 확인한 뒤 관리한다. 미디어 원본은 별도로 보관한다.

## 운영 보안 기준

- Google ID token은 서버가 Google JWKS로 RS256 서명, issuer, audience, exp/iat, sub, email_verified 및 정확한 이메일을 검증한다.
- 브라우저가 보내는 이메일 문자열이나 단순 비밀번호 비교를 인증에 사용하지 않는다.
- API는 정확한 ADMIN_ORIGIN에만 CORS를 허용하고, 공개 설정 이외 모든 경로에서 서버 인증을 수행한다.
- 발행 가능한 파일은 루트 프로젝트 HTML 및 홈 소개 스크립트의 문자열 항목으로 제한한다. CSS, 관리자 코드, 워크플로, 임의 경로는 수정 API에서 허용하지 않는다.
- 수정값은 텍스트/속성으로 escape하고 위험한 URL 스킴과 임베드 호스트를 차단한다.
- GITHUB_TOKEN 폐기/회전은 GitHub와 Worker secret에서 수행한다. 로그인 Google 계정이 바뀌면 서버 allowlist 변경을 포함해 다시 검토한다.

## 참고

- Google 서버 토큰 검증: https://developers.google.com/identity/gsi/web/guides/verify-google-id-token
- Cloudflare secrets: https://developers.cloudflare.com/workers/configuration/secrets/
- Cloudflare D1: https://developers.cloudflare.com/d1/get-started/
- GitHub 원자적 ref 갱신: https://docs.github.com/en/rest/git/refs#update-a-reference
