# Content admin with Google login

Complete [Google login setup](google-login-setup.md) before production merge. Sign in at https://jayyoungjun-kim.github.io/admin/ using jayyoungjunkim@gmail.com. GitHub credentials are kept in the Worker secret, never entered in the browser. Local HTML does not support authentication.

## 콘텐츠 수정

페이지 선택 → 문구/이미지·영상/링크·PDF/검색·공유 수정 → 초안 저장 → 미리보기 → 발행.

- 기존 홈페이지의 레이아웃·색상·글꼴·여백·애니메이션은 유지한다.
- 초안 저장과 파일 선택은 GitHub를 변경하지 않는다. 실제 발행 버튼을 누를 때만 공개 저장소에 커밋한다.
- 자동 저장은 아니다. 저장하지 않은 변경사항이 있으면 이동하거나 창을 닫기 전에 알린다.
- 홈 영어 타이핑 문장은 '홈 타이핑 소개'에서 수정한다. 기존 속도와 숫자 각주 효과는 유지한다.
- 새 프로젝트는 기존 프로젝트 레이아웃으로 브라우저 초안을 만든다. 복제된 본문·이미지·이전/다음 링크를 확인해서 수정한다.
- 새 프로젝트를 홈에 추가하려면 상세를 먼저 발행한다. HOME의 구성·순서에서 링크가 있는 카드를 복제하고 제목·썸네일·분류·링크를 수정하여 발행한다.
- 블록 이동은 같은 종류의 형제 블록 사이에서 가능하다. CSS나 임의 HTML 코드를 편집하는 화면은 제공하지 않는다.
- TBU 카드를 상세 링크가 있는 카드로 바꾸려면 링크가 있는 카드를 복제하여 수정하고 기존 TBU 카드를 삭제한다.
- 발행은 페이지 단위다. 여러 페이지를 한 번에 묶는 발행은 지원하지 않는다.

## 초안·파일 보관과 백업

초안과 미발행 파일은 **현재 브라우저 프로필의 IndexedDB**에 저장된다. 별도 비밀 저장소나 암호화 보관함은 아니다. 같은 브라우저의 다음 접속에서는 유지되지만, 다른 기기로 자동 동기화되지 않으며 브라우저 데이터 삭제·시크릿 모드 종료·저장 공간 정리에 의해 사라질 수 있다. 공유 기기에서 민감한 초안을 보관하지 않는다.

'초안 백업'을 누르면 현재 편집 내용이 반영된 HTML/홈 소개 스크립트와 연결된 임시 파일의 바이트를 JSON으로 내려받는다. 토큰은 포함하지 않는다. 백업은 수동 복구용이며 자동 가져오기 기능은 없다. 데이터가 사라진 경우 백업으로 소스와 미디어를 복구할 수 있다.

업로드 제한: 파일당 8MB, 한 페이지의 업로드 경로 최대 20개, 한 번에 발행할 로컬 파일 합계 24MB. PNG/JPG/GIF/WebP/PDF/MP4만 허용한다. 큰 영상은 기존 외부 URL로 연결한다. 기존 ImageKit·Cloudinary도 그대로 사용할 수 있다.

발행 시 파일은 GitHub `assets/uploads/`에 공개된다. 임시 파일은 다른 초안이 참조할 수 있으므로 발행 후 자동 삭제하지 않는다. 저장 공간을 정리하려면 모든 필요한 초안을 백업한 뒤 해당 사이트의 브라우저 데이터를 삭제한다. 이미 GitHub에 발행된 파일은 브라우저 데이터 삭제의 영향을 받지 않는다.

미리보기는 sandbox iframe으로 표시하고 추적 코드·스크립트·영상 임베드는 실행하지 않는다. 실제 홈페이지 동작은 변경하지 않는다.

## GitHub Desktop과 함께 사용

어드민과 GitHub Desktop이 같은 `master`를 수정한다. Desktop에서 작업하기 전에 Fetch/Pull하여 어드민 변경사항을 가져온다.

같은 페이지의 원본 SHA가 바뀌면 어드민 발행이 차단된다. 다른 파일만 바뀌었다면 최신 master 위에 커밋한다. 마지막 ref 갱신은 `force:false`라 동시 발행이 다른 커밋을 덮어쓰지 않는다. 브라우저 초안도 버전과 고유 ID로 동시 수정 및 삭제 후 재생성 충돌을 검사한다.

충돌이 나면 초안을 백업하고 최신 원본을 확인한다. 초안을 버리고 최신 페이지에서 다시 편집한다. 자동 병합은 하지 않는다.

발행 중 네트워크 오류가 나면 GitHub 수정 이력에서 커밋 유무부터 확인한다. 이미 반영됐을 수 있다. Pages 실패는 Actions에서 확인한다. 저장 성공과 배포 성공은 별개다.

'페이지 내리기'는 프로젝트 HTML을 최신 브랜치에서 제거한다. 먼저 해당 페이지 초안을 정리해야 한다. 홈 카드와 다른 페이지 연결은 별도로 정리한다. 이전 Git 이력과 미디어 파일까지 삭제하는 비공개 전환 기능이 아니다. 복구는 GitHub Desktop에서 관련 콘텐츠 커밋을 revert한 뒤 push한다.


## Development and deployment

See [Google login setup](google-login-setup.md). Rebuild admin/app.bundle.js after source or public config changes. The Worker verifies Google ID tokens and forwards permitted content operations to the fixed GitHub repository.
