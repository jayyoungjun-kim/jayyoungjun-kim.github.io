(()=>{var Hi=Object.freeze({GITHUB_OWNER:"jayyoungjun-kim",GITHUB_REPO:"jayyoungjun-kim.github.io",GITHUB_BRANCH:"master"}),tt="https://jayyoungjun-kim.github.io",ci="660453347503-c0dsbipendf78q18c306jbjq9hs9fh94.apps.googleusercontent.com",li="https://jay-portfolio-admin-auth.jay-portfolio-content-admin.workers.dev";var Ui=`/* ============ Debug ============ */

/*
* {
  outline: 1px solid rgba(0, 0, 0, 0.1);
}





/* ============ container ============ */

/* container */

.container {
  display: block;
}





/* ============ gnb ============ */

/* gnb > container */
.gnb-container {
  font-size: 14px;
  z-index: 99;
  width: 100%;
  border: 0.2px solid #444;
  order: -1;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: sticky;
  top: 0;
}

/* gnb > button */

.gnb-button {
  font-weight: 500;
  line-height: inherit;
  cursor: pointer;
  background-color: #ffffff;
  border-bottom: 0.2px;
  border-radius: 0;
  padding: 9px 15px;
  text-decoration: none;
  display: inline-block;  
}

.gnb-button:hover {
  text-decoration: none;
  color: inherit;
}

/* gnb > menu */

.menu1 {
  z-index: 1000;
  height: auto;
  text-align: center;
  background-color: #ffffff;
  flex: 1;
  align-self: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 0 8px 0;
  position: relative;
}

.menu2 {
  height: auto;
  text-align: center;
  background-color: #ffffff;
  border-left: 0.2px solid #444;
  border-right: 0.2px solid #444;
  flex: 1;
  padding: 8px 0 8px 0;
}

.menu3 {
  height: auto;
  text-align: center;
  background-color: #ffffff;
  flex: 1;
  align-self: auto;
  padding: 8px 0 8px 0;
}

.menu2:hover {
  border-left: 0.2px solid #444;
  border-right: 0.2px solid #444;
}





/* ============ contents ============ */

/* contents */

.contents {
  margin: 100px 80px 80px 80px;
}

.contents-project {
  margin: 100px 80px 200px 80px;
}





/* ============ main ============ */

/* main > header */

.main-header {
  padding: 0 0 80px 0;
  overflow: hidden;
  overflow-wrap: break-word;
}

/* main > header > j */

.main-header-j {
  font-size: 200px;
  font-weight: 600;
  line-height: 1.3;
  padding: 0 0 88px 0;
  animation: variable-loop 4s infinite both;
    animation-delay: var(--delay);
    text-align: left;
    --delay: calc((var(--variable-index) + 1) * 0.15s);
}

@keyframes variable-loop {
	0% {
		font-weight: 45;
	}
	50% {
		font-weight: 930;
	}
	100% {
		font-weight: 45;
	}
}

/* main > header > title */

.main-header-title {
  text-align: left;
  font-size: clamp(48px, 2.4vw, 64px);
  font-weight: 700;
  line-height: 1.2;
  padding-bottom: 40px;
  letter-spacing: -0.4px;
}

.main-header-title-footnote {
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  padding-bottom: 4px;
}

/* main > profile */

.main-profile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row dense;
  grid-gap: 0px 40px;
  padding: 0 0 160px 0;
}

.main-profile-kr {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.7;
}

.main-profile-en {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.45;
}

/* banner */

.banner {
  display: flex;
  padding: 36px 40px 36px 30px;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  align-self: stretch;
  background: #F8F8FA;
/*
  background-image: url('https://res.cloudinary.com/ddd7vpef2/image/upload/v1746689646/banner/photo-1484807352052-23338990c6c6_pv2x17.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
*/
  width: 100%;       
  box-sizing: border-box;  
}

.banner-grid {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 24px;
  align-self: stretch;
}

.banner-text {
  color: #444;
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
}

.banner-title {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.banner-subtitle {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.banner-btn {
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #444;
}

.banner-btn-text {
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}


/* main > content */

.main-content {
  margin: 0 0 160px 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}

/* main > content > title */

.main-content-title {
  padding: 0 0 16px 0;
  font-size: 32px;
  font-weight: 600;
}

/* main > content > list */

.main-content-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* \uAE30\uBCF8\uAC12: 1\uB2E8 \uADF8\uB9AC\uB4DC */
  grid-auto-flow: row dense;
  grid-gap: 64px 32px;
}

.main-content-list-img {
  height: auto;
  display: block;
}

.main-content-list-title {
  padding: 8px 0 2px 0;
  word-spacing: 0px;
  letter-spacing: 0px;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: -4px;
}

.main-content-list-category {
  word-spacing: 0px;
  letter-spacing: 0px;
  font-size: 13px;
  font-weight: 400;
}

.badge {
  display: inline-block;
  padding: 4px 7px;
  margin: 0 0 0 4px;
  font-size: 70%;
    font-weight: 700;
    line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 5px;
  position: relative;
  top: -2px;
}

.badge-tbu {
  background-color: #ccc;
}





/* ============ about ============ */

/* about > container */

.about-container {
  height: auto;
  display: block;
  margin-bottom: 160px;
  max-width: 864px;
  margin-right: auto;
}

.about-container-last {
  height: auto;
  display: block;
  margin-bottom: 92px;
  max-width: 864px;
  margin-right: auto;
}

/* about > title */

.about-title-first {
  font-size: 110px;
  font-weight: 700;
  line-height: 1.1;
  padding: 40px 0 40px 0;
}

.about-title {
  font-size: 110px;
  font-weight: 700;
  line-height: 1.1;
  padding: 40px 0 40px 0;
}

/* about > section */

.about-section {
  height: auto;
  display: block;
  padding-bottom: 40px;
}

/* about > section > title */

.about-section-title {
  font-size: 28px;
    font-weight: 700;
    line-height: 1.7;
  padding-bottom: 8px;
}

/* about > section > body */

.about-section-body-kr {
  font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
  padding-bottom: 12px;
}

.about-section-body-en {
  font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color:#777;
  padding-bottom: 12px;
}

.about-section-body-list-kr {
  font-size: 14px;
    font-weight: 500;
    line-height: 1.7;
}

.about-section-body-list-en {
  font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #777;
  padding-bottom: 4px;
}

.about-section-body-footnote {
  font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
  padding-bottom: 6px;
}





/* ============ info ============ */

/* info > container */

.info-container {
  height: auto;
  display: block;
  margin-bottom: 160px;
  max-width: 864px;
  margin-right: auto;
}

.info-container-last {
  height: auto;
  display: block;
  margin-bottom: 40px;
  max-width: 864px;
  margin-right: auto;
}

/* info > title */

.info-title-first {
  font-size: 110px;
  font-weight: 700;
  line-height: 1.1;
  padding: 40px 0 40px 0;
}

.info-title {
  font-size: 110px;
  font-weight: 700;
  line-height: 1.1;
  padding: 40px 0 40px 0;
}

/* info > section */

.info-section {
  height: auto;
  display: block;
  padding-bottom: 40px;
}

.info-section-activity {
  height: auto;
  display: block;
  padding-bottom: 120px;
}

/* info > section > resume & contact */

.info-section-body-kr {
  font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
  padding: 0 0 8px 4px
}

.info-section-body-en {
  font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #777;
  padding: 0 0 8px 4px
}

.info-section-download {
  font-size: 24px;
    font-weight: 500;
    line-height: 1.8;
  padding: 0 8px 0 4px;
  display: inline-block;
}

.info-section-link {
  font-size: 24px;
    font-weight: 500;
    line-height: 1.8;
  padding: 0 8px 0 4px;
  display: inline-block;
}

/* info > section > public activity */

.info-section-date-first {
  font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: #999;
  padding: 0 0 8px 0;
}

.info-section-date {
  font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: #999;
  padding: 40px 0 8px 0;
}

.info-section-public-title {
  font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
  padding-bottom: 24px;
}

.info-section-public-body-kr {
  font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
  padding-bottom: 4px;
}

.info-section-public-body-en {
  font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #777;
  padding-bottom: 12px;
}





/* ============ project ============ */

/* project > container */

.project-container {
  margin: 0 auto;
  padding-top: 40px;
  max-width: 1400px;
}

/* project > header > container */

.project-header {
  width: 100%;
  max-width: 800px;
  padding: 64px 0 130px 0;
  margin: auto;
}

/* project > header > title */

.project-header-title {
  padding: 0 0 24px 0;
  margin: auto;
  text-align: left;
  font-size: 72px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
}

/* project > header > body */

.project-header-body-kr {
  font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
  padding: 0 0 16px 0;
}

.project-header-body-en {
  font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
  padding: 0 0 40px 0;
}

/* project > header > spec */

.project-header-spec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 0px 32px;
}

.project-header-spec {
  width: 100%;
  height: auto;
  display: block;
}

.project-header-spec-title {
  font-size: 16px;
    font-weight: 500;
    line-height: 1.7;
}

.project-header-spec-body {
  padding: 0 0 20px 0;
  font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
}

/* project > img */

.project-img {
  margin: 0 0 0 0;
}

.project-img video {
  width: 100%;
  height: auto;
  display: block;
}

.content-img {
  margin: 0 0 0 0;
}

/* project > body */

.project-body-container {
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 56px 0 200px 0;
}

.project-body-empty {
  width: 800px;
  margin: auto;
  padding: 0 0 200px 0;
}

.project-body-between {
  width: 800px;
  margin: auto;
  padding: 0 0 40px 0;
}

.project-body-label {
  padding: 0 0 4px 0;
  font-size: 13px;
    font-weight: 500;
    line-height: 1.7;
}

.project-body-title {
  font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
  padding-bottom: 24px;
}

.project-body-kr {
  font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
  padding-bottom: 16px;
}

.project-body-en {
  font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
}

.project-body-grid-2 {
  padding: 0 0 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(530px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 20px 20px;
}

.project-body-grid-4 {
  padding: 0 0 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 20px 20px;
}

/* project > stakeholder */

.project-stakeholder-container {
  width: 800px;
  padding: 0 0 120px 0;
  margin: auto;
}

.project-stakeholder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 0px 32px;
}

.project-stakeholder {
height: auto;
display: block;
}

.project-stakeholder-title {
  font-size: 16px;
    font-weight: 500;
    line-height: 1.7;
}

.project-stakeholder-body {
  padding: 0 0 30px 0;
  font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
}

/* project > pagination */

.project-pagination-container {
  width: 800px;
  margin: auto;
}

.project-pagination-grid {
  padding: 0 0 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 0px 32px;
}

.project-pagination {
height: auto;
display: block;
}

.project-pagination-next {
  font-size: 16px;
    font-weight: 500;
    line-height: 1.7;
}

.project-pagination-previous {
  font-size: 16px;
    font-weight: 500;
    line-height: 1.7;
    text-align: right;
}

.project-pagination-next-project {
  padding: 0 0 30px 20px;
  font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
}

.project-pagination-previous-project {
  padding: 0 20px 30px 0;
  font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
    text-align: right;
}





/* ============ common ============ */

/* footer */

.footer {
  margin: 0 0 0 0;
}

.footer-main {
  margin: 0 0 0 0;
}

/* divider */

.divider {
  width: 100%;
  height: 1px;
  background-color: #adadad;
}

.divider-dashed {
  width: 100%;
    height: 1px;
    background-image: radial-gradient(circle, #adadad 30%, transparent 30%);
    background-size: 6px 1px; /* \uC810 \uD06C\uAE30\uC640 \uAC04\uACA9 \uC870\uC815 */
    background-repeat: repeat-x;
    border: none;
}

/* font > body */

body {
  font-family:'Pretendard Variable','sans-serif';
    font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
    color: #212121;
  margin: 0px;
  background-color: #fff;
  word-wrap: break-word;
    word-break: keep-all;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
}

blockquote {
  border-left: 4px solid #ccc; /* \uC67C\uCABD \uBC14 */
  padding-left: 16px; /* \uBC14\uC640 \uD14D\uC2A4\uD2B8 \uAC04\uACA9 */
  margin: 16px 0; /* \uC5EC\uBC31 */
  font-style: italic;
  color: #555;
}

/* font > link */

a {
  border-bottom-width: 0px;
  border-bottom-style: solid;
  border-color: #ffffff;
  padding-bottom: 0px;
  color: #000;
  text-decoration: none;
  position: relative;
}

a:hover {
  border-bottom-width: 0px;
  border-color: #cccccc;
  color: #777;
}

.outbound-link {
  font-size: 10px;
  vertical-align:top;
  color: #aaaaaa;
  padding-left: 2px;
}

/* font > title */

h1 {
  font-size: 46px;
  font-weight: 400;
}

h2 {
  font-size: 36px;
  font-weight: 400;
}

h3 {
  font-size: 26px;
  font-weight: 400;
}

h4 {
  font-size: 16px;
  font-weight: 700;
}

/* font > list */

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 10px;
  margin-block-end: 20px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 30px;
}

ol {
  display: block;
  list-style-type: decimal;
  margin-block-start: 10px;
  margin-block-end: 10px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

li {
  padding: 0 0 4px 8px;
}

/* font > sup */

sup {
  font-size: 6px;
    padding-left: 4px;
}

sup-main-header {
  font-size: 0.4em;
  padding: 0 0 0 4px;
  vertical-align: super; /* \uC218\uC9C1 \uC815\uB82C\uC744 \uC704\uB85C */
}

sup-about {
  font-size: 8px;
    padding-left: 1px;
    vertical-align: super;  
}

/* img */

img-index {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

/* ===== \uBAA8\uBC14\uC77C \uC88C\uC6B0 \uD754\uB4E4\uB9BC \uBC29\uC9C0 ===== */
html,
body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden !important;
}

/* ===== \uBA54\uB274 \uACE0\uC815 (\uBAA8\uB4E0 \uBE0C\uB77C\uC6B0\uC800 \uB300\uC751) ===== */
.gnb-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
}

/* ===== \uCF58\uD150\uCE20\uAC00 \uBA54\uB274\uC5D0 \uAC00\uB824\uC9C0\uC9C0 \uC54A\uAC8C ===== */
.contents,
.contents-project {
  padding-top: 48px;
}

/* ===== \uACE0\uC815 width\uB85C \uC778\uD55C overflow \uBC29\uC9C0 ===== */
.project-header,
.project-body-container,
.project-body-empty,
.project-body-between {
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* ===== \uBBF8\uB514\uC5B4 \uC694\uC18C overflow \uBC29\uC9C0 ===== */
img,
video,
iframe {
  max-width: 100%;
  height: auto;
}



/* ============ screen resolution ============ */

/* content grid system */

@media only screen and (min-width: 2880px) {
  .main-content-list {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: row dense;
    grid-gap: 64px 32px;
  }
}

@media only screen and (min-width: 2288px) and (max-width: 2879px) {
  .main-content-list {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row dense;
    grid-gap: 64px 32px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 2287px) {
  .main-content-list {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-flow: row dense;
    grid-gap: 64px 32px;
  }
}

@media only screen and (min-width:0px) and (max-width:1023px) {
  
  /* ============  contents ============ */

  /* contents */
  
  .contents {
    margin: 40px 24px 24px 24px;
  }





  /* ============  main ============ */

  /*  main > header */

  .main-header {
    padding: 0 0 80px 0;
    overflow: hidden;
    overflow-wrap: break-word;
  }

  /*  main > header > j */

  .main-header-j {
    font-size: 200px;
      font-weight: 500;
      line-height: 0.8;
    padding: 40px 0 260px 0;
  }

  /*  main > header > title */

  .main-header-title {
    text-align: left;
    font-size: clamp(18px, 4.8vw, 40px);
    font-weight: 600;
    line-height: 1.3;
    padding-bottom: 24px;
  }

  .main-header-title-footnote {
    text-align: left;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      color: #777;
    padding-bottom: 8px;
  }

  /*  main > profile */

  .main-profile {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row dense;
    grid-gap: 24px;
    padding: 0 0 80px 0;
  }
  
  .main-profile-kr {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.7;
  }
  
  .main-profile-en {
    font-size: 13px;
        font-weight: 400;
        line-height: 1.5;
        color: #777;
  }

  /* banner */

  .banner {
    display: block;
    padding: 32px;
    width: 100%
  }

  .banner-grid {
    display: block;
    width: 100%;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    padding: 16px 0 0 0;
  }

  .banner-text {
    gap: 6px;
    padding: 0 0 20px 0;
  }

  .banner-title {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  
  .banner-subtitle {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  
  .banner-btn {
    color: #595959;
    stroke: #777;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }


  /*  main > content */

  .main-content {
    margin: 0 0 80px 0;
  }

  /*  main > content > title */

  .main-content-title { 
    padding: 0 0 12px 0;
    font-size: 22px;
  }

  /*  main > content > list */

  .main-content-list-title {
    font-weight: 500;
  }

  .main-content-list-category {
    font-size: 12px;
    line-height: 18px;
  }





  /* ============  about ============ */

  /*  about > container */

  .about-container {
    margin-bottom: 120px;
  }

  .about-container-last {
    margin-bottom: 48px;
  }

  /*  about > title */

  .about-title-first {
    font-size: 48px;
      font-weight: 600;
    padding: 40px 0 40px 0;
  }

  .about-title {
    font-size: 48px;
      font-weight: 600;
    padding: 40px 0 40px 0;
  }

  /* about > section > title */

  .about-section-title {
    font-size: 20px;
      font-weight: 600;
      line-height: 1.7;
    padding-bottom: 8px;
  }

  /* about > section > body */

  .about-section-body-kr {
    font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
    padding-bottom: 12px;
  }

  .about-section-body-en {
    font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      color:#777;
    padding-bottom: 12px;
  }

  .about-section-body-list-en {
    font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      color: #777;
    padding-bottom: 4px;
  }

  .about-section-body-footnote {
    font-size: 13px;
      font-weight: 400;
      line-height: 1.7;
    padding-bottom: 6px;
  }

  



  /* ============  info ============ */

  /*  info > container */

  .info-container {
    margin-bottom: 144px;
  }

  .info-container-last {
    margin-bottom: 0px;
  }

  /* info > title */

  .info-title-first {
    font-size: 48px;
      font-weight: 600;
    padding: 40px 0 40px 0;
  }

  .info-title {
    font-size: 48px;
      font-weight: 600;
    padding: 40px 0 40px 0;
  }

  /* info > section */
  
  .info-section {
    height: auto;
    display: block;
    padding-bottom: 40px;
  }

  /* info > section > resume & contact */

  .info-section-download {
    font-size: 20px;
      font-weight: 500;
      line-height: 1.8;
    padding: 0 8px 0 4px;
    display: inline-block;
  }
  
  .info-section-link {
    font-size: 20px;
      font-weight: 500;
      line-height: 1.8;
    padding: 0 8px 0 4px;
    display: inline-block;
  }

  .info-section-body-kr {
    font-size: 14px;
        font-weight: 500;
        line-height: 1.7;
    br {
      display: none;
    }
  }

  .info-section-body-en {
    font-size: 13px;
        font-weight: 400;
        line-height: 1.5;
    br {
      display: none;
    }
  }

  .info-section-link {
    display: block;
    margin-bottom: 8px;
  }

  .info-section-link:last-child {
    margin-bottom: 0;
  }

  /* info > section > public activity */

  .info-section-date-first {
    font-size: 13px;
      font-weight: 500;
      line-height: 1.4;
      color: #999;
    padding: 0 0 8px 0;
  }

  .info-section-date {
    font-size: 13px;
      font-weight: 500;
      line-height: 1.4;
      color: #999;
    padding: 52px 0 8px 0;
  }

  .info-section-public-title {
    font-size: 18px;
      font-weight: 600;
      line-height: 1.5;
    padding-bottom: 16px;
  }
  
  .info-section-public-body-kr {
    font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
    padding-bottom: 8px;
  }
  
  .info-section-public-body-en {
    font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      color: #777;
    padding-bottom: 32px;
  }


Z\xD2\xDAhcxxxxxxxxAhhhhhhhhhhhhhhjxxdfsu

  /* ============  project ============ */

  /*  project > container */

  .project-container {
    padding-top: 40px;
  }

  /*  project > header > container */

  .project-header {
    max-width: 100%;
    width: 100%;
    padding: 40px 0 80px 0;
    margin: 0 0 0 0;
  }

  /*  project > header > title */

  .project-header-title {
    font-size: 32px;
      font-weight: 500;
      line-height: 1.1;
      letter-spacing: -1px;
    padding: 0 0 24px 0;
  }

  /* project > header > body */

  .project-header-body-kr {
    font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
    padding-bottom: 12px;
  }

  .project-header-body-en {
    font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      color: #777;
    padding-bottom: 24px;
  }

  /*  project > header > spec */

  .project-header-spec-grid {
    grid-template-columns: 1fr;
  }

  .project-header-spec-title {
    font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
  }
  
  .project-header-spec-body {
    padding: 0 0 20px 0;
    font-size: 13px;
      font-weight: 400;
      line-height: 1.7;
  }
  

  /*  project > body */

  .project-body-container {
    max-width: 100%;
    width: 100%;
    margin: auto;
    padding: 24px 0 100px 0;
  }

  .project-body-empty {
    width: 100%;
    margin: auto;
    padding: 0 0 100px 0;
  }

  .project-body-between {
    width: 100%;
    margin: auto;
    padding: 0 0 20px 0;
  }

  .project-body-title {
    font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
    padding-bottom: 16px;
  }

  .project-body-kr {
    font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
    padding-bottom: 12px;
  }

  .project-body-en {
    font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      color: #777;
  }

  .project-body-grid-2 {
    padding: 0 0 10px 0;
    grid-template-columns: 1fr;
    grid-gap: 10px 10px;
  }
  
  .project-body-grid-4 {
    padding: 0 0 10px 0;
    grid-template-columns: 1fr;
    grid-gap: 10px 10px;
  }

  /*  project > stakeholder */

  .project-stakeholder-container {
    width: auto;
    padding: 0 0 80px 0;
  }

  .project-stakeholder-grid {
    grid-template-columns: 1fr;
  }

  .project-stakeholder-title {
    font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
  }
  
  .project-stakeholder-body {
    padding: 0 0 20px 0;
    font-size: 13px;
      font-weight: 400;
      line-height: 1.7;
  }

  /*  project > pagination */

  .project-pagination-container {
    width: auto;
  }

  .project-pagination-grid {
    grid-template-columns: 1fr;
    padding: 0 0 6px 0;
  }

  .project-pagination-next {
    font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
  }

  .project-pagination-previous {
    font-size: 14px;
      font-weight: 500;
      line-height: 1.7;
      text-align: right;
  }

  .project-pagination-next-project {
    padding: 0 0 20px 16px;
    font-size: 13px;
      font-weight: 400;
      line-height: 1.7;
  }
  
  .project-pagination-previous-project {
    padding: 0 16px 20px 0;
    font-size: 13px;
      font-weight: 400;
      line-height: 1.7;
      text-align: right;
  }


  


  /* ============  common ============ */

  /*  footer */

  .footer {
    font-size: 13px;
    padding: 0 0 16px 0;
  }

  .footer-main {
    font-size: 13px;
    padding: 40px 0 16px 0;
  }

  /*  font */



  /*  font > list */

  ul {
    padding-inline-start: 26px;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 14px;
    margin-block-end: 14px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 26px;
  }

  li {
    padding: 0 0 8px 4px;
  }
}
`;var qa=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),K="\uFFFD",n;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(n||(n={}));var re={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function Lt(e){return e>=55296&&e<=57343}function Yi(e){return e>=56320&&e<=57343}function Qi(e,t){return(e-55296)*1024+9216+t}function wt(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function yt(e){return e>=64976&&e<=65007||qa.has(e)}var g;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(g||(g={}));var es=65536,kt=class{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=es,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,i){let{line:s,col:r,offset:c}=this,l=r+i,m=c+i;return{code:t,startLine:s,endLine:s,startCol:l,endCol:l,startOffset:m,endOffset:m}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){let i=this.html.charCodeAt(this.pos+1);if(Yi(i))return this.pos++,this._addGap(),Qi(t,i)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,n.EOF;return this._err(g.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,i){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=i}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,i){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(i)return this.html.startsWith(t,this.pos);for(let s=0;s<t.length;s++)if((this.html.charCodeAt(this.pos+s)|32)!==t.charCodeAt(s))return!1;return!0}peek(t){let i=this.pos+t;if(i>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,n.EOF;let s=this.html.charCodeAt(i);return s===n.CARRIAGE_RETURN?n.LINE_FEED:s}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,n.EOF;let t=this.html.charCodeAt(this.pos);return t===n.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,n.LINE_FEED):t===n.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,Lt(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===n.LINE_FEED||t===n.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){wt(t)?this._err(g.controlCharacterInInputStream):yt(t)&&this._err(g.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}};var P;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(P||(P={}));function Ft(e,t){for(let i=e.attrs.length-1;i>=0;i--)if(e.attrs[i].name===t)return e.attrs[i].value;return null}var is=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function vi(e){return e>=55296&&e<=57343||e>1114111?65533:is.get(e)??e}function Gi(e){let t=atob(e),i=t.length&-2,s=new Uint16Array(i/2);for(let r=0,c=0;r<i;r+=2){let l=t.charCodeAt(r),m=t.charCodeAt(r+1);s[c++]=l|m<<8}return s}var di=Gi("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IA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YwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWls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ZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");var $;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.FLAG13=8192]="FLAG13",e[e.BRANCH_LENGTH=8064]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})($||($={}));var J;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(J||(J={}));var Ki=32;function hi(e){return e>=J.ZERO&&e<=J.NINE}function as(e){return e>=J.UPPER_A&&e<=J.UPPER_F||e>=J.LOWER_A&&e<=J.LOWER_F}function ss(e){return e>=J.UPPER_A&&e<=J.UPPER_Z||e>=J.LOWER_A&&e<=J.LOWER_Z||hi(e)}function ns(e){return e===J.EQUALS||ss(e)}var V;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(V||(V={}));var be;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(be||(be={}));var xt=class{decodeTree;emitCodePoint;errors;constructor(t,i,s){this.decodeTree=t,this.emitCodePoint=i,this.errors=s}state=V.EntityStart;consumed=1;result=0;treeIndex=0;excess=1;decodeMode=be.Strict;runConsumed=0;startEntity(t){this.decodeMode=t,this.state=V.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1,this.runConsumed=0}write(t,i){switch(this.state){case V.EntityStart:return t.charCodeAt(i)===J.NUM?(this.state=V.NumericStart,this.consumed+=1,this.stateNumericStart(t,i+1)):(this.state=V.NamedEntity,this.stateNamedEntity(t,i));case V.NumericStart:return this.stateNumericStart(t,i);case V.NumericDecimal:return this.stateNumericDecimal(t,i);case V.NumericHex:return this.stateNumericHex(t,i);case V.NamedEntity:return this.stateNamedEntity(t,i)}}stateNumericStart(t,i){return i>=t.length?-1:(t.charCodeAt(i)|Ki)===J.LOWER_X?(this.state=V.NumericHex,this.consumed+=1,this.stateNumericHex(t,i+1)):(this.state=V.NumericDecimal,this.stateNumericDecimal(t,i))}stateNumericHex(t,i){for(;i<t.length;){let s=t.charCodeAt(i);if(hi(s)||as(s)){let r=s<=J.NINE?s-J.ZERO:(s|Ki)-J.LOWER_A+10;this.result=this.result*16+r,this.consumed++,i++}else return this.emitNumericEntity(s,3)}return-1}stateNumericDecimal(t,i){for(;i<t.length;){let s=t.charCodeAt(i);if(hi(s))this.result=this.result*10+(s-J.ZERO),this.consumed++,i++;else return this.emitNumericEntity(s,2)}return-1}emitNumericEntity(t,i){if(this.consumed<=i)return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===J.SEMI)this.consumed+=1;else if(this.decodeMode===be.Strict)return 0;return this.emitCodePoint(vi(this.result),this.consumed),this.errors&&(t!==J.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,i){let{decodeTree:s}=this,r=s[this.treeIndex],c=(r&$.VALUE_LENGTH)>>14;for(;i<t.length;){if(c===0&&(r&$.FLAG13)!==0){let m=(r&$.BRANCH_LENGTH)>>7;if(this.runConsumed===0){let E=r&$.JUMP_TABLE;if(t.charCodeAt(i)!==E)return this.result===0?0:this.emitNotTerminatedNamedEntity();i++,this.excess++,this.runConsumed++}for(;this.runConsumed<m;){if(i>=t.length)return-1;let E=this.runConsumed-1,u=s[this.treeIndex+1+(E>>1)],h=E%2===0?u&255:u>>8&255;if(t.charCodeAt(i)!==h)return this.runConsumed=0,this.result===0?0:this.emitNotTerminatedNamedEntity();i++,this.excess++,this.runConsumed++}this.runConsumed=0,this.treeIndex+=1+(m>>1),r=s[this.treeIndex],c=(r&$.VALUE_LENGTH)>>14}if(i>=t.length)break;let l=t.charCodeAt(i);if(l===J.SEMI&&c!==0&&(r&$.FLAG13)!==0)return this.emitNamedEntityData(this.treeIndex,c,this.consumed+this.excess);if(this.treeIndex=rs(s,r,this.treeIndex+Math.max(1,c),l),this.treeIndex<0)return this.result===0||this.decodeMode===be.Attribute&&(c===0||ns(l))?0:this.emitNotTerminatedNamedEntity();if(r=s[this.treeIndex],c=(r&$.VALUE_LENGTH)>>14,c!==0){if(l===J.SEMI)return this.emitNamedEntityData(this.treeIndex,c,this.consumed+this.excess);this.decodeMode!==be.Strict&&(r&$.FLAG13)===0&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}i++,this.excess++}return-1}emitNotTerminatedNamedEntity(){let{result:t,decodeTree:i}=this,s=(i[t]&$.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,s,this.consumed),this.errors?.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,i,s){let{decodeTree:r}=this;return this.emitCodePoint(i===1?r[t]&~($.VALUE_LENGTH|$.FLAG13):r[t+1],s),i===3&&this.emitCodePoint(r[t+2],s),s}end(){switch(this.state){case V.NamedEntity:return this.result!==0&&(this.decodeMode!==be.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case V.NumericDecimal:return this.emitNumericEntity(0,2);case V.NumericHex:return this.emitNumericEntity(0,3);case V.NumericStart:return this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case V.EntityStart:return 0}}};function rs(e,t,i,s){let r=(t&$.BRANCH_LENGTH)>>7,c=t&$.JUMP_TABLE;if(r===0)return c!==0&&s===c?i:-1;if(c){let u=s-c;return u<0||u>=r?-1:e[i+u]-1}let l=r+1>>1,m=0,E=r-1;for(;m<=E;){let u=m+E>>>1,h=u>>1,b=e[i+h]>>(u&1)*8&255;if(b<s)m=u+1;else if(b>s)E=u-1;else return e[i+l+u]}return-1}var C;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(C||(C={}));var De;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(De||(De={}));var oe;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(oe||(oe={}));var d;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(d||(d={}));var a;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(a||(a={}));var os=new Map([[d.A,a.A],[d.ADDRESS,a.ADDRESS],[d.ANNOTATION_XML,a.ANNOTATION_XML],[d.APPLET,a.APPLET],[d.AREA,a.AREA],[d.ARTICLE,a.ARTICLE],[d.ASIDE,a.ASIDE],[d.B,a.B],[d.BASE,a.BASE],[d.BASEFONT,a.BASEFONT],[d.BGSOUND,a.BGSOUND],[d.BIG,a.BIG],[d.BLOCKQUOTE,a.BLOCKQUOTE],[d.BODY,a.BODY],[d.BR,a.BR],[d.BUTTON,a.BUTTON],[d.CAPTION,a.CAPTION],[d.CENTER,a.CENTER],[d.CODE,a.CODE],[d.COL,a.COL],[d.COLGROUP,a.COLGROUP],[d.DD,a.DD],[d.DESC,a.DESC],[d.DETAILS,a.DETAILS],[d.DIALOG,a.DIALOG],[d.DIR,a.DIR],[d.DIV,a.DIV],[d.DL,a.DL],[d.DT,a.DT],[d.EM,a.EM],[d.EMBED,a.EMBED],[d.FIELDSET,a.FIELDSET],[d.FIGCAPTION,a.FIGCAPTION],[d.FIGURE,a.FIGURE],[d.FONT,a.FONT],[d.FOOTER,a.FOOTER],[d.FOREIGN_OBJECT,a.FOREIGN_OBJECT],[d.FORM,a.FORM],[d.FRAME,a.FRAME],[d.FRAMESET,a.FRAMESET],[d.H1,a.H1],[d.H2,a.H2],[d.H3,a.H3],[d.H4,a.H4],[d.H5,a.H5],[d.H6,a.H6],[d.HEAD,a.HEAD],[d.HEADER,a.HEADER],[d.HGROUP,a.HGROUP],[d.HR,a.HR],[d.HTML,a.HTML],[d.I,a.I],[d.IMG,a.IMG],[d.IMAGE,a.IMAGE],[d.INPUT,a.INPUT],[d.IFRAME,a.IFRAME],[d.KEYGEN,a.KEYGEN],[d.LABEL,a.LABEL],[d.LI,a.LI],[d.LINK,a.LINK],[d.LISTING,a.LISTING],[d.MAIN,a.MAIN],[d.MALIGNMARK,a.MALIGNMARK],[d.MARQUEE,a.MARQUEE],[d.MATH,a.MATH],[d.MENU,a.MENU],[d.META,a.META],[d.MGLYPH,a.MGLYPH],[d.MI,a.MI],[d.MO,a.MO],[d.MN,a.MN],[d.MS,a.MS],[d.MTEXT,a.MTEXT],[d.NAV,a.NAV],[d.NOBR,a.NOBR],[d.NOFRAMES,a.NOFRAMES],[d.NOEMBED,a.NOEMBED],[d.NOSCRIPT,a.NOSCRIPT],[d.OBJECT,a.OBJECT],[d.OL,a.OL],[d.OPTGROUP,a.OPTGROUP],[d.OPTION,a.OPTION],[d.P,a.P],[d.PARAM,a.PARAM],[d.PLAINTEXT,a.PLAINTEXT],[d.PRE,a.PRE],[d.RB,a.RB],[d.RP,a.RP],[d.RT,a.RT],[d.RTC,a.RTC],[d.RUBY,a.RUBY],[d.S,a.S],[d.SCRIPT,a.SCRIPT],[d.SEARCH,a.SEARCH],[d.SECTION,a.SECTION],[d.SELECT,a.SELECT],[d.SOURCE,a.SOURCE],[d.SMALL,a.SMALL],[d.SPAN,a.SPAN],[d.STRIKE,a.STRIKE],[d.STRONG,a.STRONG],[d.STYLE,a.STYLE],[d.SUB,a.SUB],[d.SUMMARY,a.SUMMARY],[d.SUP,a.SUP],[d.TABLE,a.TABLE],[d.TBODY,a.TBODY],[d.TEMPLATE,a.TEMPLATE],[d.TEXTAREA,a.TEXTAREA],[d.TFOOT,a.TFOOT],[d.TD,a.TD],[d.TH,a.TH],[d.THEAD,a.THEAD],[d.TITLE,a.TITLE],[d.TR,a.TR],[d.TRACK,a.TRACK],[d.TT,a.TT],[d.U,a.U],[d.UL,a.UL],[d.SVG,a.SVG],[d.VAR,a.VAR],[d.WBR,a.WBR],[d.XMP,a.XMP]]);function we(e){var t;return(t=os.get(e))!==null&&t!==void 0?t:a.UNKNOWN}var D=a,Wi={[C.HTML]:new Set([D.ADDRESS,D.APPLET,D.AREA,D.ARTICLE,D.ASIDE,D.BASE,D.BASEFONT,D.BGSOUND,D.BLOCKQUOTE,D.BODY,D.BR,D.BUTTON,D.CAPTION,D.CENTER,D.COL,D.COLGROUP,D.DD,D.DETAILS,D.DIR,D.DIV,D.DL,D.DT,D.EMBED,D.FIELDSET,D.FIGCAPTION,D.FIGURE,D.FOOTER,D.FORM,D.FRAME,D.FRAMESET,D.H1,D.H2,D.H3,D.H4,D.H5,D.H6,D.HEAD,D.HEADER,D.HGROUP,D.HR,D.HTML,D.IFRAME,D.IMG,D.INPUT,D.LI,D.LINK,D.LISTING,D.MAIN,D.MARQUEE,D.MENU,D.META,D.NAV,D.NOEMBED,D.NOFRAMES,D.NOSCRIPT,D.OBJECT,D.OL,D.P,D.PARAM,D.PLAINTEXT,D.PRE,D.SCRIPT,D.SECTION,D.SELECT,D.SOURCE,D.STYLE,D.SUMMARY,D.TABLE,D.TBODY,D.TD,D.TEMPLATE,D.TEXTAREA,D.TFOOT,D.TH,D.THEAD,D.TITLE,D.TR,D.TRACK,D.UL,D.WBR,D.XMP]),[C.MATHML]:new Set([D.MI,D.MO,D.MN,D.MS,D.MTEXT,D.ANNOTATION_XML]),[C.SVG]:new Set([D.TITLE,D.FOREIGN_OBJECT,D.DESC]),[C.XLINK]:new Set,[C.XML]:new Set,[C.XMLNS]:new Set},it=new Set([D.H1,D.H2,D.H3,D.H4,D.H5,D.H6]),Kr=new Set([d.STYLE,d.SCRIPT,d.XMP,d.IFRAME,d.NOEMBED,d.NOFRAMES,d.PLAINTEXT]);var o;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(o||(o={}));var ee={DATA:o.DATA,RCDATA:o.RCDATA,RAWTEXT:o.RAWTEXT,SCRIPT_DATA:o.SCRIPT_DATA,PLAINTEXT:o.PLAINTEXT,CDATA_SECTION:o.CDATA_SECTION};function cs(e){return e>=n.DIGIT_0&&e<=n.DIGIT_9}function at(e){return e>=n.LATIN_CAPITAL_A&&e<=n.LATIN_CAPITAL_Z}function ls(e){return e>=n.LATIN_SMALL_A&&e<=n.LATIN_SMALL_Z}function Be(e){return ls(e)||at(e)}function Ji(e){return Be(e)||cs(e)}function Mt(e){return e+32}function ji(e){return e===n.SPACE||e===n.LINE_FEED||e===n.TABULATION||e===n.FORM_FEED}function Zi(e){return ji(e)||e===n.SOLIDUS||e===n.GREATER_THAN_SIGN}function ds(e){return e===n.NULL?g.nullCharacterReference:e>1114111?g.characterReferenceOutsideUnicodeRange:Lt(e)?g.surrogateCharacterReference:yt(e)?g.noncharacterCharacterReference:wt(e)||e===n.CARRIAGE_RETURN?g.controlCharacterReference:null}var st=class{constructor(t,i){this.options=t,this.handler=i,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=o.DATA,this.returnState=o.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new kt(i),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new xt(di,(s,r)=>{this.preprocessor.pos=this.entityStartPos+r-1,this._flushCodePointConsumedAsCharacterReference(s)},i.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(g.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:s=>{this._err(g.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+s)},validateNumericCharacterReference:s=>{let r=ds(s);r&&this._err(r,1)}}:void 0)}_err(t,i=0){var s,r;(r=(s=this.handler).onParseError)===null||r===void 0||r.call(s,this.preprocessor.getError(t,i))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;let t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t?.())}write(t,i,s){this.active=!0,this.preprocessor.write(t,i),this._runParsingLoop(),this.paused||s?.()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let i=0;i<t;i++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,i){return this.preprocessor.startsWith(t,i)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:P.START_TAG,tagName:"",tagID:a.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:P.END_TAG,tagName:"",tagID:a.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:P.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:P.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,i){this.currentCharacterToken={type:t,chars:i,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,i;let s=this.currentToken;if(Ft(s,this.currentAttr.name)===null){if(s.attrs.push(this.currentAttr),s.location&&this.currentLocation){let r=(t=(i=s.location).attrs)!==null&&t!==void 0?t:i.attrs=Object.create(null);r[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(g.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){let t=this.currentToken;this.prepareToken(t),t.tagID=we(t.tagName),t.type===P.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(g.endTagWithAttributes),t.selfClosing&&this._err(g.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case P.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case P.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case P.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){let t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:P.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,i){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=i;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,i)}_emitCodePoint(t){let i=ji(t)?P.WHITESPACE_CHARACTER:t===n.NULL?P.NULL_CHARACTER:P.CHARACTER;this._appendCharToCurrentCharacterToken(i,t<65536?String.fromCharCode(t):String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(P.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=o.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?be.Attribute:be.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===o.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===o.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===o.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case o.DATA:{this._stateData(t);break}case o.RCDATA:{this._stateRcdata(t);break}case o.RAWTEXT:{this._stateRawtext(t);break}case o.SCRIPT_DATA:{this._stateScriptData(t);break}case o.PLAINTEXT:{this._statePlaintext(t);break}case o.TAG_OPEN:{this._stateTagOpen(t);break}case o.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case o.TAG_NAME:{this._stateTagName(t);break}case o.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case o.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case o.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case o.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case o.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case o.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case o.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case o.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case o.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case o.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case o.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case o.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case o.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case o.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case o.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case o.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case o.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case o.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case o.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case o.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case o.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case o.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case o.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case o.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case o.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case o.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case o.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case o.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case o.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case o.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case o.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case o.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case o.BOGUS_COMMENT:{this._stateBogusComment(t);break}case o.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case o.COMMENT_START:{this._stateCommentStart(t);break}case o.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case o.COMMENT:{this._stateComment(t);break}case o.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case o.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case o.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case o.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case o.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case o.COMMENT_END:{this._stateCommentEnd(t);break}case o.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case o.DOCTYPE:{this._stateDoctype(t);break}case o.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case o.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case o.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case o.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case o.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case o.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case o.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case o.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case o.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case o.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case o.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case o.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case o.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case o.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case o.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case o.CDATA_SECTION:{this._stateCdataSection(t);break}case o.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case o.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case o.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case o.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case n.LESS_THAN_SIGN:{this.state=o.TAG_OPEN;break}case n.AMPERSAND:{this._startCharacterReference();break}case n.NULL:{this._err(g.unexpectedNullCharacter),this._emitCodePoint(t);break}case n.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case n.AMPERSAND:{this._startCharacterReference();break}case n.LESS_THAN_SIGN:{this.state=o.RCDATA_LESS_THAN_SIGN;break}case n.NULL:{this._err(g.unexpectedNullCharacter),this._emitChars(K);break}case n.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case n.LESS_THAN_SIGN:{this.state=o.RAWTEXT_LESS_THAN_SIGN;break}case n.NULL:{this._err(g.unexpectedNullCharacter),this._emitChars(K);break}case n.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case n.LESS_THAN_SIGN:{this.state=o.SCRIPT_DATA_LESS_THAN_SIGN;break}case n.NULL:{this._err(g.unexpectedNullCharacter),this._emitChars(K);break}case n.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case n.NULL:{this._err(g.unexpectedNullCharacter),this._emitChars(K);break}case n.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(Be(t))this._createStartTagToken(),this.state=o.TAG_NAME,this._stateTagName(t);else switch(t){case n.EXCLAMATION_MARK:{this.state=o.MARKUP_DECLARATION_OPEN;break}case n.SOLIDUS:{this.state=o.END_TAG_OPEN;break}case n.QUESTION_MARK:{this._err(g.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=o.BOGUS_COMMENT,this._stateBogusComment(t);break}case n.EOF:{this._err(g.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(g.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=o.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(Be(t))this._createEndTagToken(),this.state=o.TAG_NAME,this._stateTagName(t);else switch(t){case n.GREATER_THAN_SIGN:{this._err(g.missingEndTagName),this.state=o.DATA;break}case n.EOF:{this._err(g.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(g.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=o.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:{this.state=o.BEFORE_ATTRIBUTE_NAME;break}case n.SOLIDUS:{this.state=o.SELF_CLOSING_START_TAG;break}case n.GREATER_THAN_SIGN:{this.state=o.DATA,this.emitCurrentTagToken();break}case n.NULL:{this._err(g.unexpectedNullCharacter),i.tagName+=K;break}case n.EOF:{this._err(g.eofInTag),this._emitEOFToken();break}default:i.tagName+=String.fromCodePoint(at(t)?Mt(t):t)}}_stateRcdataLessThanSign(t){t===n.SOLIDUS?this.state=o.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=o.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){Be(t)?(this.state=o.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=o.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();let i=this.currentToken;switch(i.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=o.BEFORE_ATTRIBUTE_NAME,!1;case n.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=o.SELF_CLOSING_START_TAG,!1;case n.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=o.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=o.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===n.SOLIDUS?this.state=o.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=o.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){Be(t)?(this.state=o.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=o.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=o.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case n.SOLIDUS:{this.state=o.SCRIPT_DATA_END_TAG_OPEN;break}case n.EXCLAMATION_MARK:{this.state=o.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=o.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){Be(t)?(this.state=o.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=o.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=o.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===n.HYPHEN_MINUS?(this.state=o.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=o.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===n.HYPHEN_MINUS?(this.state=o.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=o.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case n.HYPHEN_MINUS:{this.state=o.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case n.LESS_THAN_SIGN:{this.state=o.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case n.NULL:{this._err(g.unexpectedNullCharacter),this._emitChars(K);break}case n.EOF:{this._err(g.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case n.HYPHEN_MINUS:{this.state=o.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case n.LESS_THAN_SIGN:{this.state=o.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case n.NULL:{this._err(g.unexpectedNullCharacter),this.state=o.SCRIPT_DATA_ESCAPED,this._emitChars(K);break}case n.EOF:{this._err(g.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=o.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case n.HYPHEN_MINUS:{this._emitChars("-");break}case n.LESS_THAN_SIGN:{this.state=o.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case n.GREATER_THAN_SIGN:{this.state=o.SCRIPT_DATA,this._emitChars(">");break}case n.NULL:{this._err(g.unexpectedNullCharacter),this.state=o.SCRIPT_DATA_ESCAPED,this._emitChars(K);break}case n.EOF:{this._err(g.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=o.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===n.SOLIDUS?this.state=o.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:Be(t)?(this._emitChars("<"),this.state=o.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=o.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){Be(t)?(this.state=o.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=o.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=o.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(re.SCRIPT,!1)&&Zi(this.preprocessor.peek(re.SCRIPT.length))){this._emitCodePoint(t);for(let i=0;i<re.SCRIPT.length;i++)this._emitCodePoint(this._consume());this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=o.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case n.HYPHEN_MINUS:{this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case n.LESS_THAN_SIGN:{this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case n.NULL:{this._err(g.unexpectedNullCharacter),this._emitChars(K);break}case n.EOF:{this._err(g.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case n.HYPHEN_MINUS:{this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case n.LESS_THAN_SIGN:{this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case n.NULL:{this._err(g.unexpectedNullCharacter),this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(K);break}case n.EOF:{this._err(g.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case n.HYPHEN_MINUS:{this._emitChars("-");break}case n.LESS_THAN_SIGN:{this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case n.GREATER_THAN_SIGN:{this.state=o.SCRIPT_DATA,this._emitChars(">");break}case n.NULL:{this._err(g.unexpectedNullCharacter),this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(K);break}case n.EOF:{this._err(g.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===n.SOLIDUS?(this.state=o.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(re.SCRIPT,!1)&&Zi(this.preprocessor.peek(re.SCRIPT.length))){this._emitCodePoint(t);for(let i=0;i<re.SCRIPT.length;i++)this._emitCodePoint(this._consume());this.state=o.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=o.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.SOLIDUS:case n.GREATER_THAN_SIGN:case n.EOF:{this.state=o.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case n.EQUALS_SIGN:{this._err(g.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=o.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=o.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:case n.SOLIDUS:case n.GREATER_THAN_SIGN:case n.EOF:{this._leaveAttrName(),this.state=o.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case n.EQUALS_SIGN:{this._leaveAttrName(),this.state=o.BEFORE_ATTRIBUTE_VALUE;break}case n.QUOTATION_MARK:case n.APOSTROPHE:case n.LESS_THAN_SIGN:{this._err(g.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case n.NULL:{this._err(g.unexpectedNullCharacter),this.currentAttr.name+=K;break}default:this.currentAttr.name+=String.fromCodePoint(at(t)?Mt(t):t)}}_stateAfterAttributeName(t){switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.SOLIDUS:{this.state=o.SELF_CLOSING_START_TAG;break}case n.EQUALS_SIGN:{this.state=o.BEFORE_ATTRIBUTE_VALUE;break}case n.GREATER_THAN_SIGN:{this.state=o.DATA,this.emitCurrentTagToken();break}case n.EOF:{this._err(g.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=o.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.QUOTATION_MARK:{this.state=o.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case n.APOSTROPHE:{this.state=o.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case n.GREATER_THAN_SIGN:{this._err(g.missingAttributeValue),this.state=o.DATA,this.emitCurrentTagToken();break}default:this.state=o.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case n.QUOTATION_MARK:{this.state=o.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case n.AMPERSAND:{this._startCharacterReference();break}case n.NULL:{this._err(g.unexpectedNullCharacter),this.currentAttr.value+=K;break}case n.EOF:{this._err(g.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case n.APOSTROPHE:{this.state=o.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case n.AMPERSAND:{this._startCharacterReference();break}case n.NULL:{this._err(g.unexpectedNullCharacter),this.currentAttr.value+=K;break}case n.EOF:{this._err(g.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:{this._leaveAttrValue(),this.state=o.BEFORE_ATTRIBUTE_NAME;break}case n.AMPERSAND:{this._startCharacterReference();break}case n.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=o.DATA,this.emitCurrentTagToken();break}case n.NULL:{this._err(g.unexpectedNullCharacter),this.currentAttr.value+=K;break}case n.QUOTATION_MARK:case n.APOSTROPHE:case n.LESS_THAN_SIGN:case n.EQUALS_SIGN:case n.GRAVE_ACCENT:{this._err(g.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case n.EOF:{this._err(g.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:{this._leaveAttrValue(),this.state=o.BEFORE_ATTRIBUTE_NAME;break}case n.SOLIDUS:{this._leaveAttrValue(),this.state=o.SELF_CLOSING_START_TAG;break}case n.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=o.DATA,this.emitCurrentTagToken();break}case n.EOF:{this._err(g.eofInTag),this._emitEOFToken();break}default:this._err(g.missingWhitespaceBetweenAttributes),this.state=o.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case n.GREATER_THAN_SIGN:{let i=this.currentToken;i.selfClosing=!0,this.state=o.DATA,this.emitCurrentTagToken();break}case n.EOF:{this._err(g.eofInTag),this._emitEOFToken();break}default:this._err(g.unexpectedSolidusInTag),this.state=o.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){let i=this.currentToken;switch(t){case n.GREATER_THAN_SIGN:{this.state=o.DATA,this.emitCurrentComment(i);break}case n.EOF:{this.emitCurrentComment(i),this._emitEOFToken();break}case n.NULL:{this._err(g.unexpectedNullCharacter),i.data+=K;break}default:i.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(re.DASH_DASH,!0)?(this._createCommentToken(re.DASH_DASH.length+1),this.state=o.COMMENT_START):this._consumeSequenceIfMatch(re.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(re.DOCTYPE.length+1),this.state=o.DOCTYPE):this._consumeSequenceIfMatch(re.CDATA_START,!0)?this.inForeignNode?this.state=o.CDATA_SECTION:(this._err(g.cdataInHtmlContent),this._createCommentToken(re.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=o.BOGUS_COMMENT):this._ensureHibernation()||(this._err(g.incorrectlyOpenedComment),this._createCommentToken(2),this.state=o.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case n.HYPHEN_MINUS:{this.state=o.COMMENT_START_DASH;break}case n.GREATER_THAN_SIGN:{this._err(g.abruptClosingOfEmptyComment),this.state=o.DATA;let i=this.currentToken;this.emitCurrentComment(i);break}default:this.state=o.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){let i=this.currentToken;switch(t){case n.HYPHEN_MINUS:{this.state=o.COMMENT_END;break}case n.GREATER_THAN_SIGN:{this._err(g.abruptClosingOfEmptyComment),this.state=o.DATA,this.emitCurrentComment(i);break}case n.EOF:{this._err(g.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="-",this.state=o.COMMENT,this._stateComment(t)}}_stateComment(t){let i=this.currentToken;switch(t){case n.HYPHEN_MINUS:{this.state=o.COMMENT_END_DASH;break}case n.LESS_THAN_SIGN:{i.data+="<",this.state=o.COMMENT_LESS_THAN_SIGN;break}case n.NULL:{this._err(g.unexpectedNullCharacter),i.data+=K;break}case n.EOF:{this._err(g.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){let i=this.currentToken;switch(t){case n.EXCLAMATION_MARK:{i.data+="!",this.state=o.COMMENT_LESS_THAN_SIGN_BANG;break}case n.LESS_THAN_SIGN:{i.data+="<";break}default:this.state=o.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===n.HYPHEN_MINUS?this.state=o.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=o.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===n.HYPHEN_MINUS?this.state=o.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=o.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==n.GREATER_THAN_SIGN&&t!==n.EOF&&this._err(g.nestedComment),this.state=o.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){let i=this.currentToken;switch(t){case n.HYPHEN_MINUS:{this.state=o.COMMENT_END;break}case n.EOF:{this._err(g.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="-",this.state=o.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){let i=this.currentToken;switch(t){case n.GREATER_THAN_SIGN:{this.state=o.DATA,this.emitCurrentComment(i);break}case n.EXCLAMATION_MARK:{this.state=o.COMMENT_END_BANG;break}case n.HYPHEN_MINUS:{i.data+="-";break}case n.EOF:{this._err(g.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="--",this.state=o.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){let i=this.currentToken;switch(t){case n.HYPHEN_MINUS:{i.data+="--!",this.state=o.COMMENT_END_DASH;break}case n.GREATER_THAN_SIGN:{this._err(g.incorrectlyClosedComment),this.state=o.DATA,this.emitCurrentComment(i);break}case n.EOF:{this._err(g.eofInComment),this.emitCurrentComment(i),this._emitEOFToken();break}default:i.data+="--!",this.state=o.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:{this.state=o.BEFORE_DOCTYPE_NAME;break}case n.GREATER_THAN_SIGN:{this.state=o.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case n.EOF:{this._err(g.eofInDoctype),this._createDoctypeToken(null);let i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(g.missingWhitespaceBeforeDoctypeName),this.state=o.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(at(t))this._createDoctypeToken(String.fromCharCode(Mt(t))),this.state=o.DOCTYPE_NAME;else switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.NULL:{this._err(g.unexpectedNullCharacter),this._createDoctypeToken(K),this.state=o.DOCTYPE_NAME;break}case n.GREATER_THAN_SIGN:{this._err(g.missingDoctypeName),this._createDoctypeToken(null);let i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=o.DATA;break}case n.EOF:{this._err(g.eofInDoctype),this._createDoctypeToken(null);let i=this.currentToken;i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=o.DOCTYPE_NAME}}_stateDoctypeName(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:{this.state=o.AFTER_DOCTYPE_NAME;break}case n.GREATER_THAN_SIGN:{this.state=o.DATA,this.emitCurrentDoctype(i);break}case n.NULL:{this._err(g.unexpectedNullCharacter),i.name+=K;break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.name+=String.fromCodePoint(at(t)?Mt(t):t)}}_stateAfterDoctypeName(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.GREATER_THAN_SIGN:{this.state=o.DATA,this.emitCurrentDoctype(i);break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(re.PUBLIC,!1)?this.state=o.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(re.SYSTEM,!1)?this.state=o.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(g.invalidCharacterSequenceAfterDoctypeName),i.forceQuirks=!0,this.state=o.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:{this.state=o.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case n.QUOTATION_MARK:{this._err(g.missingWhitespaceAfterDoctypePublicKeyword),i.publicId="",this.state=o.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case n.APOSTROPHE:{this._err(g.missingWhitespaceAfterDoctypePublicKeyword),i.publicId="",this.state=o.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case n.GREATER_THAN_SIGN:{this._err(g.missingDoctypePublicIdentifier),i.forceQuirks=!0,this.state=o.DATA,this.emitCurrentDoctype(i);break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(g.missingQuoteBeforeDoctypePublicIdentifier),i.forceQuirks=!0,this.state=o.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.QUOTATION_MARK:{i.publicId="",this.state=o.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case n.APOSTROPHE:{i.publicId="",this.state=o.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case n.GREATER_THAN_SIGN:{this._err(g.missingDoctypePublicIdentifier),i.forceQuirks=!0,this.state=o.DATA,this.emitCurrentDoctype(i);break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(g.missingQuoteBeforeDoctypePublicIdentifier),i.forceQuirks=!0,this.state=o.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){let i=this.currentToken;switch(t){case n.QUOTATION_MARK:{this.state=o.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case n.NULL:{this._err(g.unexpectedNullCharacter),i.publicId+=K;break}case n.GREATER_THAN_SIGN:{this._err(g.abruptDoctypePublicIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=o.DATA;break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){let i=this.currentToken;switch(t){case n.APOSTROPHE:{this.state=o.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case n.NULL:{this._err(g.unexpectedNullCharacter),i.publicId+=K;break}case n.GREATER_THAN_SIGN:{this._err(g.abruptDoctypePublicIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=o.DATA;break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:{this.state=o.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case n.GREATER_THAN_SIGN:{this.state=o.DATA,this.emitCurrentDoctype(i);break}case n.QUOTATION_MARK:{this._err(g.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),i.systemId="",this.state=o.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case n.APOSTROPHE:{this._err(g.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),i.systemId="",this.state=o.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(g.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=o.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=o.DATA;break}case n.QUOTATION_MARK:{i.systemId="",this.state=o.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case n.APOSTROPHE:{i.systemId="",this.state=o.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(g.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=o.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:{this.state=o.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case n.QUOTATION_MARK:{this._err(g.missingWhitespaceAfterDoctypeSystemKeyword),i.systemId="",this.state=o.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case n.APOSTROPHE:{this._err(g.missingWhitespaceAfterDoctypeSystemKeyword),i.systemId="",this.state=o.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case n.GREATER_THAN_SIGN:{this._err(g.missingDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=o.DATA,this.emitCurrentDoctype(i);break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(g.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=o.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.QUOTATION_MARK:{i.systemId="",this.state=o.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case n.APOSTROPHE:{i.systemId="",this.state=o.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case n.GREATER_THAN_SIGN:{this._err(g.missingDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=o.DATA,this.emitCurrentDoctype(i);break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(g.missingQuoteBeforeDoctypeSystemIdentifier),i.forceQuirks=!0,this.state=o.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){let i=this.currentToken;switch(t){case n.QUOTATION_MARK:{this.state=o.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case n.NULL:{this._err(g.unexpectedNullCharacter),i.systemId+=K;break}case n.GREATER_THAN_SIGN:{this._err(g.abruptDoctypeSystemIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=o.DATA;break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){let i=this.currentToken;switch(t){case n.APOSTROPHE:{this.state=o.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case n.NULL:{this._err(g.unexpectedNullCharacter),i.systemId+=K;break}case n.GREATER_THAN_SIGN:{this._err(g.abruptDoctypeSystemIdentifier),i.forceQuirks=!0,this.emitCurrentDoctype(i),this.state=o.DATA;break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:i.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){let i=this.currentToken;switch(t){case n.SPACE:case n.LINE_FEED:case n.TABULATION:case n.FORM_FEED:break;case n.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=o.DATA;break}case n.EOF:{this._err(g.eofInDoctype),i.forceQuirks=!0,this.emitCurrentDoctype(i),this._emitEOFToken();break}default:this._err(g.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=o.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){let i=this.currentToken;switch(t){case n.GREATER_THAN_SIGN:{this.emitCurrentDoctype(i),this.state=o.DATA;break}case n.NULL:{this._err(g.unexpectedNullCharacter);break}case n.EOF:{this.emitCurrentDoctype(i),this._emitEOFToken();break}default:}}_stateCdataSection(t){switch(t){case n.RIGHT_SQUARE_BRACKET:{this.state=o.CDATA_SECTION_BRACKET;break}case n.EOF:{this._err(g.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===n.RIGHT_SQUARE_BRACKET?this.state=o.CDATA_SECTION_END:(this._emitChars("]"),this.state=o.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case n.GREATER_THAN_SIGN:{this.state=o.DATA;break}case n.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=o.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(n.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&Ji(this.preprocessor.peek(1))?o.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){Ji(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===n.SEMICOLON&&this._err(g.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}};var qi=new Set([a.DD,a.DT,a.LI,a.OPTGROUP,a.OPTION,a.P,a.RB,a.RP,a.RT,a.RTC]),Xi=new Set([...qi,a.CAPTION,a.COLGROUP,a.TBODY,a.TD,a.TFOOT,a.TH,a.THEAD,a.TR]),Pt=new Set([a.APPLET,a.CAPTION,a.HTML,a.MARQUEE,a.OBJECT,a.TABLE,a.TD,a.TEMPLATE,a.TH]),hs=new Set([...Pt,a.OL,a.UL]),Es=new Set([...Pt,a.BUTTON]),Vi=new Set([a.ANNOTATION_XML,a.MI,a.MN,a.MO,a.MS,a.MTEXT]),zi=new Set([a.DESC,a.FOREIGN_OBJECT,a.TITLE]),ms=new Set([a.TR,a.TEMPLATE,a.HTML]),gs=new Set([a.TBODY,a.TFOOT,a.THEAD,a.TEMPLATE,a.HTML]),us=new Set([a.TABLE,a.TEMPLATE,a.HTML]),ps=new Set([a.TD,a.TH]),Ht=class{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,i,s){this.treeAdapter=i,this.handler=s,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=a.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===a.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===C.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,i){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=i,this.currentTagId=i,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,i,!0)}pop(){let t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,i){let s=this._indexOf(t);this.items[s]=i,s===this.stackTop&&(this.current=i)}insertAfter(t,i,s){let r=this._indexOf(t)+1;this.items.splice(r,0,i),this.tagIDs.splice(r,0,s),this.stackTop++,r===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,r===this.stackTop)}popUntilTagNamePopped(t){let i=this.stackTop+1;do i=this.tagIDs.lastIndexOf(t,i-1);while(i>0&&this.treeAdapter.getNamespaceURI(this.items[i])!==C.HTML);this.shortenToLength(Math.max(i,0))}shortenToLength(t){for(;this.stackTop>=t;){let i=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(i,this.stackTop<t)}}popUntilElementPopped(t){let i=this._indexOf(t);this.shortenToLength(Math.max(i,0))}popUntilPopped(t,i){let s=this._indexOfTagNames(t,i);this.shortenToLength(Math.max(s,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(it,C.HTML)}popUntilTableCellPopped(){this.popUntilPopped(ps,C.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,i){for(let s=this.stackTop;s>=0;s--)if(t.has(this.tagIDs[s])&&this.treeAdapter.getNamespaceURI(this.items[s])===i)return s;return-1}clearBackTo(t,i){let s=this._indexOfTagNames(t,i);this.shortenToLength(s+1)}clearBackToTableContext(){this.clearBackTo(us,C.HTML)}clearBackToTableBodyContext(){this.clearBackTo(gs,C.HTML)}clearBackToTableRowContext(){this.clearBackTo(ms,C.HTML)}remove(t){let i=this._indexOf(t);i>=0&&(i===this.stackTop?this.pop():(this.items.splice(i,1),this.tagIDs.splice(i,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===a.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){let i=this._indexOf(t)-1;return i>=0?this.items[i]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===a.HTML}hasInDynamicScope(t,i){for(let s=this.stackTop;s>=0;s--){let r=this.tagIDs[s];switch(this.treeAdapter.getNamespaceURI(this.items[s])){case C.HTML:{if(r===t)return!0;if(i.has(r))return!1;break}case C.SVG:{if(zi.has(r))return!1;break}case C.MATHML:{if(Vi.has(r))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,Pt)}hasInListItemScope(t){return this.hasInDynamicScope(t,hs)}hasInButtonScope(t){return this.hasInDynamicScope(t,Es)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){let i=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case C.HTML:{if(it.has(i))return!0;if(Pt.has(i))return!1;break}case C.SVG:{if(zi.has(i))return!1;break}case C.MATHML:{if(Vi.has(i))return!1;break}}}return!0}hasInTableScope(t){for(let i=this.stackTop;i>=0;i--)if(this.treeAdapter.getNamespaceURI(this.items[i])===C.HTML)switch(this.tagIDs[i]){case t:return!0;case a.TABLE:case a.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===C.HTML)switch(this.tagIDs[t]){case a.TBODY:case a.THEAD:case a.TFOOT:return!0;case a.TABLE:case a.HTML:return!1}return!0}hasInSelectScope(t){for(let i=this.stackTop;i>=0;i--)if(this.treeAdapter.getNamespaceURI(this.items[i])===C.HTML)switch(this.tagIDs[i]){case t:return!0;case a.OPTION:case a.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&qi.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&Xi.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&Xi.has(this.currentTagId);)this.pop()}};var pe;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(pe||(pe={}));var $i={type:pe.Marker},Ut=class{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,i){let s=[],r=i.length,c=this.treeAdapter.getTagName(t),l=this.treeAdapter.getNamespaceURI(t);for(let m=0;m<this.entries.length;m++){let E=this.entries[m];if(E.type===pe.Marker)break;let{element:u}=E;if(this.treeAdapter.getTagName(u)===c&&this.treeAdapter.getNamespaceURI(u)===l){let h=this.treeAdapter.getAttrList(u);h.length===r&&s.push({idx:m,attrs:h})}}return s}_ensureNoahArkCondition(t){if(this.entries.length<3)return;let i=this.treeAdapter.getAttrList(t),s=this._getNoahArkConditionCandidates(t,i);if(s.length<3)return;let r=new Map(i.map(l=>[l.name,l.value])),c=0;for(let l=0;l<s.length;l++){let m=s[l];m.attrs.every(E=>r.get(E.name)===E.value)&&(c+=1,c>=3&&this.entries.splice(m.idx,1))}}insertMarker(){this.entries.unshift($i)}pushElement(t,i){this._ensureNoahArkCondition(t),this.entries.unshift({type:pe.Element,element:t,token:i})}insertElementAfterBookmark(t,i){let s=this.entries.indexOf(this.bookmark);this.entries.splice(s,0,{type:pe.Element,element:t,token:i})}removeEntry(t){let i=this.entries.indexOf(t);i!==-1&&this.entries.splice(i,1)}clearToLastMarker(){let t=this.entries.indexOf($i);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){let i=this.entries.find(s=>s.type===pe.Marker||this.treeAdapter.getTagName(s.element)===t);return i&&i.type===pe.Element?i:null}getElementEntry(t){return this.entries.find(i=>i.type===pe.Element&&i.element===t)}};var Te={createDocument(){return{nodeName:"#document",mode:oe.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,i){return{nodeName:e,tagName:e,attrs:i,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,i){let s=e.childNodes.indexOf(i);e.childNodes.splice(s,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,i,s){let r=e.childNodes.find(c=>c.nodeName==="#documentType");if(r)r.name=t,r.publicId=i,r.systemId=s;else{let c={nodeName:"#documentType",name:t,publicId:i,systemId:s,parentNode:null};Te.appendChild(e,c)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){let t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){let i=e.childNodes[e.childNodes.length-1];if(Te.isTextNode(i)){i.value+=t;return}}Te.appendChild(e,Te.createTextNode(t))},insertTextBefore(e,t,i){let s=e.childNodes[e.childNodes.indexOf(i)-1];s&&Te.isTextNode(s)?s.value+=t:Te.insertBefore(e,Te.createTextNode(t),i)},adoptAttributes(e,t){let i=new Set(e.attrs.map(s=>s.name));for(let s=0;s<t.length;s++)i.has(t[s].name)||e.attrs.push(t[s])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}};var ta="html",Ts="about:legacy-compat",fs="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",ia=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],Is=[...ia,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],Cs=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),aa=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],_s=[...aa,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function ea(e,t){return t.some(i=>e.startsWith(i))}function sa(e){return e.name===ta&&e.publicId===null&&(e.systemId===null||e.systemId===Ts)}function na(e){if(e.name!==ta)return oe.QUIRKS;let{systemId:t}=e;if(t&&t.toLowerCase()===fs)return oe.QUIRKS;let{publicId:i}=e;if(i!==null){if(i=i.toLowerCase(),Cs.has(i))return oe.QUIRKS;let s=t===null?Is:ia;if(ea(i,s))return oe.QUIRKS;if(s=t===null?aa:_s,ea(i,s))return oe.LIMITED_QUIRKS}return oe.NO_QUIRKS}var ra={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},Ns="definitionurl",Ds="definitionURL",Bs=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),Os=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:C.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:C.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:C.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:C.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:C.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:C.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:C.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:C.XML}],["xml:space",{prefix:"xml",name:"space",namespace:C.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:C.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:C.XMLNS}]]),Ss=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),Rs=new Set([a.B,a.BIG,a.BLOCKQUOTE,a.BODY,a.BR,a.CENTER,a.CODE,a.DD,a.DIV,a.DL,a.DT,a.EM,a.EMBED,a.H1,a.H2,a.H3,a.H4,a.H5,a.H6,a.HEAD,a.HR,a.I,a.IMG,a.LI,a.LISTING,a.MENU,a.META,a.NOBR,a.OL,a.P,a.PRE,a.RUBY,a.S,a.SMALL,a.SPAN,a.STRONG,a.STRIKE,a.SUB,a.SUP,a.TABLE,a.TT,a.U,a.UL,a.VAR]);function oa(e){let t=e.tagID;return t===a.FONT&&e.attrs.some(({name:s})=>s===De.COLOR||s===De.SIZE||s===De.FACE)||Rs.has(t)}function Ei(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===Ns){e.attrs[t].name=Ds;break}}function mi(e){for(let t=0;t<e.attrs.length;t++){let i=Bs.get(e.attrs[t].name);i!=null&&(e.attrs[t].name=i)}}function Yt(e){for(let t=0;t<e.attrs.length;t++){let i=Os.get(e.attrs[t].name);i&&(e.attrs[t].prefix=i.prefix,e.attrs[t].name=i.name,e.attrs[t].namespace=i.namespace)}}function Aa(e){let t=Ss.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=we(e.tagName))}function Ls(e,t){return t===C.MATHML&&(e===a.MI||e===a.MO||e===a.MN||e===a.MS||e===a.MTEXT)}function ws(e,t,i){if(t===C.MATHML&&e===a.ANNOTATION_XML){for(let s=0;s<i.length;s++)if(i[s].name===De.ENCODING){let r=i[s].value.toLowerCase();return r===ra.TEXT_HTML||r===ra.APPLICATION_XML}}return t===C.SVG&&(e===a.FOREIGN_OBJECT||e===a.DESC||e===a.TITLE)}function ca(e,t,i,s){return(!s||s===C.HTML)&&ws(e,t,i)||(!s||s===C.MATHML)&&Ls(e,t)}var ys="hidden",ks=8,Fs=3,A;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(A||(A={}));var xs={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},ma=new Set([a.TABLE,a.TBODY,a.TFOOT,a.THEAD,a.TR]),da={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:Te,onParseError:null},Qe=class{constructor(t,i,s=null,r=null){this.fragmentContext=s,this.scriptHandler=r,this.currentToken=null,this.stopped=!1,this.insertionMode=A.INITIAL,this.originalInsertionMode=A.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...da,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=i??this.treeAdapter.createDocument(),this.tokenizer=new st(this.options,this),this.activeFormattingElements=new Ut(this.treeAdapter),this.fragmentContextID=s?we(this.treeAdapter.getTagName(s)):a.UNKNOWN,this._setContextModes(s??this.document,this.fragmentContextID),this.openElements=new Ht(this.document,this.treeAdapter,this)}static parse(t,i){let s=new this(i);return s.tokenizer.write(t,!0),s.document}static getFragmentParser(t,i){let s={...da,...i};t??(t=s.treeAdapter.createElement(d.TEMPLATE,C.HTML,[]));let r=s.treeAdapter.createElement("documentmock",C.HTML,[]),c=new this(s,r,t);return c.fragmentContextID===a.TEMPLATE&&c.tmplInsertionModeStack.unshift(A.IN_TEMPLATE),c._initTokenizerForFragmentParsing(),c._insertFakeRootElement(),c._resetInsertionMode(),c._findFormInFragmentContext(),c}getFragment(){let t=this.treeAdapter.getFirstChild(this.document),i=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,i),i}_err(t,i,s){var r;if(!this.onParseError)return;let c=(r=t.location)!==null&&r!==void 0?r:xs,l={code:i,startLine:c.startLine,startCol:c.startCol,startOffset:c.startOffset,endLine:s?c.startLine:c.endLine,endCol:s?c.startCol:c.endCol,endOffset:s?c.startOffset:c.endOffset};this.onParseError(l)}onItemPush(t,i,s){var r,c;(c=(r=this.treeAdapter).onItemPush)===null||c===void 0||c.call(r,t),s&&this.openElements.stackTop>0&&this._setContextModes(t,i)}onItemPop(t,i){var s,r;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(r=(s=this.treeAdapter).onItemPop)===null||r===void 0||r.call(s,t,this.openElements.current),i){let c,l;this.openElements.stackTop===0&&this.fragmentContext?(c=this.fragmentContext,l=this.fragmentContextID):{current:c,currentTagId:l}=this.openElements,this._setContextModes(c,l)}}_setContextModes(t,i){let s=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===C.HTML;this.currentNotInHTML=!s,this.tokenizer.inForeignNode=!s&&t!==void 0&&i!==void 0&&!this._isIntegrationPoint(i,t)}_switchToTextParsing(t,i){this._insertElement(t,C.HTML),this.tokenizer.state=i,this.originalInsertionMode=this.insertionMode,this.insertionMode=A.TEXT}switchToPlaintextParsing(){this.insertionMode=A.TEXT,this.originalInsertionMode=A.IN_BODY,this.tokenizer.state=ee.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===d.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==C.HTML))switch(this.fragmentContextID){case a.TITLE:case a.TEXTAREA:{this.tokenizer.state=ee.RCDATA;break}case a.STYLE:case a.XMP:case a.IFRAME:case a.NOEMBED:case a.NOFRAMES:case a.NOSCRIPT:{this.tokenizer.state=ee.RAWTEXT;break}case a.SCRIPT:{this.tokenizer.state=ee.SCRIPT_DATA;break}case a.PLAINTEXT:{this.tokenizer.state=ee.PLAINTEXT;break}default:}}_setDocumentType(t){let i=t.name||"",s=t.publicId||"",r=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,i,s,r),t.location){let l=this.treeAdapter.getChildNodes(this.document).find(m=>this.treeAdapter.isDocumentTypeNode(m));l&&this.treeAdapter.setNodeSourceCodeLocation(l,t.location)}}_attachElementToTree(t,i){if(this.options.sourceCodeLocationInfo){let s=i&&{...i,startTag:i};this.treeAdapter.setNodeSourceCodeLocation(t,s)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{let s=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(s??this.document,t)}}_appendElement(t,i){let s=this.treeAdapter.createElement(t.tagName,i,t.attrs);this._attachElementToTree(s,t.location)}_insertElement(t,i){let s=this.treeAdapter.createElement(t.tagName,i,t.attrs);this._attachElementToTree(s,t.location),this.openElements.push(s,t.tagID)}_insertFakeElement(t,i){let s=this.treeAdapter.createElement(t,C.HTML,[]);this._attachElementToTree(s,null),this.openElements.push(s,i)}_insertTemplate(t){let i=this.treeAdapter.createElement(t.tagName,C.HTML,t.attrs),s=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(i,s),this._attachElementToTree(i,t.location),this.openElements.push(i,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(s,null)}_insertFakeRootElement(){let t=this.treeAdapter.createElement(d.HTML,C.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,a.HTML)}_appendCommentNode(t,i){let s=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(i,s),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(s,t.location)}_insertCharacters(t){let i,s;if(this._shouldFosterParentOnInsertion()?({parent:i,beforeElement:s}=this._findFosterParentingLocation(),s?this.treeAdapter.insertTextBefore(i,t.chars,s):this.treeAdapter.insertText(i,t.chars)):(i=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(i,t.chars)),!t.location)return;let r=this.treeAdapter.getChildNodes(i),c=s?r.lastIndexOf(s):r.length,l=r[c-1];if(this.treeAdapter.getNodeSourceCodeLocation(l)){let{endLine:E,endCol:u,endOffset:h}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(l,{endLine:E,endCol:u,endOffset:h})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(l,t.location)}_adoptNodes(t,i){for(let s=this.treeAdapter.getFirstChild(t);s;s=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(s),this.treeAdapter.appendChild(i,s)}_setEndLocation(t,i){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&i.location){let s=i.location,r=this.treeAdapter.getTagName(t),c=i.type===P.END_TAG&&r===i.tagName?{endTag:{...s},endLine:s.endLine,endCol:s.endCol,endOffset:s.endOffset}:{endLine:s.startLine,endCol:s.startCol,endOffset:s.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,c)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let i,s;return this.openElements.stackTop===0&&this.fragmentContext?(i=this.fragmentContext,s=this.fragmentContextID):{current:i,currentTagId:s}=this.openElements,t.tagID===a.SVG&&this.treeAdapter.getTagName(i)===d.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(i)===C.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===a.MGLYPH||t.tagID===a.MALIGNMARK)&&s!==void 0&&!this._isIntegrationPoint(s,i,C.HTML)}_processToken(t){switch(t.type){case P.CHARACTER:{this.onCharacter(t);break}case P.NULL_CHARACTER:{this.onNullCharacter(t);break}case P.COMMENT:{this.onComment(t);break}case P.DOCTYPE:{this.onDoctype(t);break}case P.START_TAG:{this._processStartTag(t);break}case P.END_TAG:{this.onEndTag(t);break}case P.EOF:{this.onEof(t);break}case P.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,i,s){let r=this.treeAdapter.getNamespaceURI(i),c=this.treeAdapter.getAttrList(i);return ca(t,r,c,s)}_reconstructActiveFormattingElements(){let t=this.activeFormattingElements.entries.length;if(t){let i=this.activeFormattingElements.entries.findIndex(r=>r.type===pe.Marker||this.openElements.contains(r.element)),s=i===-1?t-1:i-1;for(let r=s;r>=0;r--){let c=this.activeFormattingElements.entries[r];this._insertElement(c.token,this.treeAdapter.getNamespaceURI(c.element)),c.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=A.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(a.P),this.openElements.popUntilTagNamePopped(a.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case a.TR:{this.insertionMode=A.IN_ROW;return}case a.TBODY:case a.THEAD:case a.TFOOT:{this.insertionMode=A.IN_TABLE_BODY;return}case a.CAPTION:{this.insertionMode=A.IN_CAPTION;return}case a.COLGROUP:{this.insertionMode=A.IN_COLUMN_GROUP;return}case a.TABLE:{this.insertionMode=A.IN_TABLE;return}case a.BODY:{this.insertionMode=A.IN_BODY;return}case a.FRAMESET:{this.insertionMode=A.IN_FRAMESET;return}case a.SELECT:{this._resetInsertionModeForSelect(t);return}case a.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case a.HTML:{this.insertionMode=this.headElement?A.AFTER_HEAD:A.BEFORE_HEAD;return}case a.TD:case a.TH:{if(t>0){this.insertionMode=A.IN_CELL;return}break}case a.HEAD:{if(t>0){this.insertionMode=A.IN_HEAD;return}break}}this.insertionMode=A.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let i=t-1;i>0;i--){let s=this.openElements.tagIDs[i];if(s===a.TEMPLATE)break;if(s===a.TABLE){this.insertionMode=A.IN_SELECT_IN_TABLE;return}}this.insertionMode=A.IN_SELECT}_isElementCausesFosterParenting(t){return ma.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){let i=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case a.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(i)===C.HTML)return{parent:this.treeAdapter.getTemplateContent(i),beforeElement:null};break}case a.TABLE:{let s=this.treeAdapter.getParentNode(i);return s?{parent:s,beforeElement:i}:{parent:this.openElements.items[t-1],beforeElement:null}}default:}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){let i=this._findFosterParentingLocation();i.beforeElement?this.treeAdapter.insertBefore(i.parent,t,i.beforeElement):this.treeAdapter.appendChild(i.parent,t)}_isSpecialElement(t,i){let s=this.treeAdapter.getNamespaceURI(t);return Wi[s].has(i)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){hr(this,t);return}switch(this.insertionMode){case A.INITIAL:{nt(this,t);break}case A.BEFORE_HTML:{ot(this,t);break}case A.BEFORE_HEAD:{At(this,t);break}case A.IN_HEAD:{ct(this,t);break}case A.IN_HEAD_NO_SCRIPT:{lt(this,t);break}case A.AFTER_HEAD:{dt(this,t);break}case A.IN_BODY:case A.IN_CAPTION:case A.IN_CELL:case A.IN_TEMPLATE:{ua(this,t);break}case A.TEXT:case A.IN_SELECT:case A.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case A.IN_TABLE:case A.IN_TABLE_BODY:case A.IN_ROW:{gi(this,t);break}case A.IN_TABLE_TEXT:{_a(this,t);break}case A.IN_COLUMN_GROUP:{vt(this,t);break}case A.AFTER_BODY:{Gt(this,t);break}case A.AFTER_AFTER_BODY:{Qt(this,t);break}default:}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){dr(this,t);return}switch(this.insertionMode){case A.INITIAL:{nt(this,t);break}case A.BEFORE_HTML:{ot(this,t);break}case A.BEFORE_HEAD:{At(this,t);break}case A.IN_HEAD:{ct(this,t);break}case A.IN_HEAD_NO_SCRIPT:{lt(this,t);break}case A.AFTER_HEAD:{dt(this,t);break}case A.TEXT:{this._insertCharacters(t);break}case A.IN_TABLE:case A.IN_TABLE_BODY:case A.IN_ROW:{gi(this,t);break}case A.IN_COLUMN_GROUP:{vt(this,t);break}case A.AFTER_BODY:{Gt(this,t);break}case A.AFTER_AFTER_BODY:{Qt(this,t);break}default:}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){ui(this,t);return}switch(this.insertionMode){case A.INITIAL:case A.BEFORE_HTML:case A.BEFORE_HEAD:case A.IN_HEAD:case A.IN_HEAD_NO_SCRIPT:case A.AFTER_HEAD:case A.IN_BODY:case A.IN_TABLE:case A.IN_CAPTION:case A.IN_COLUMN_GROUP:case A.IN_TABLE_BODY:case A.IN_ROW:case A.IN_CELL:case A.IN_SELECT:case A.IN_SELECT_IN_TABLE:case A.IN_TEMPLATE:case A.IN_FRAMESET:case A.AFTER_FRAMESET:{ui(this,t);break}case A.IN_TABLE_TEXT:{rt(this,t);break}case A.AFTER_BODY:{vs(this,t);break}case A.AFTER_AFTER_BODY:case A.AFTER_AFTER_FRAMESET:{Gs(this,t);break}default:}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case A.INITIAL:{Ks(this,t);break}case A.BEFORE_HEAD:case A.IN_HEAD:case A.IN_HEAD_NO_SCRIPT:case A.AFTER_HEAD:{this._err(t,g.misplacedDoctype);break}case A.IN_TABLE_TEXT:{rt(this,t);break}default:}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,g.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?Er(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case A.INITIAL:{nt(this,t);break}case A.BEFORE_HTML:{Ws(this,t);break}case A.BEFORE_HEAD:{Zs(this,t);break}case A.IN_HEAD:{fe(this,t);break}case A.IN_HEAD_NO_SCRIPT:{Vs(this,t);break}case A.AFTER_HEAD:{qs(this,t);break}case A.IN_BODY:{te(this,t);break}case A.IN_TABLE:{ve(this,t);break}case A.IN_TABLE_TEXT:{rt(this,t);break}case A.IN_CAPTION:{Xn(this,t);break}case A.IN_COLUMN_GROUP:{Ii(this,t);break}case A.IN_TABLE_BODY:{Jt(this,t);break}case A.IN_ROW:{Zt(this,t);break}case A.IN_CELL:{qn(this,t);break}case A.IN_SELECT:{Da(this,t);break}case A.IN_SELECT_IN_TABLE:{er(this,t);break}case A.IN_TEMPLATE:{ir(this,t);break}case A.AFTER_BODY:{sr(this,t);break}case A.IN_FRAMESET:{nr(this,t);break}case A.AFTER_FRAMESET:{or(this,t);break}case A.AFTER_AFTER_BODY:{cr(this,t);break}case A.AFTER_AFTER_FRAMESET:{lr(this,t);break}default:}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?mr(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case A.INITIAL:{nt(this,t);break}case A.BEFORE_HTML:{Js(this,t);break}case A.BEFORE_HEAD:{js(this,t);break}case A.IN_HEAD:{Xs(this,t);break}case A.IN_HEAD_NO_SCRIPT:{zs(this,t);break}case A.AFTER_HEAD:{$s(this,t);break}case A.IN_BODY:{Wt(this,t);break}case A.TEXT:{Un(this,t);break}case A.IN_TABLE:{ht(this,t);break}case A.IN_TABLE_TEXT:{rt(this,t);break}case A.IN_CAPTION:{Vn(this,t);break}case A.IN_COLUMN_GROUP:{zn(this,t);break}case A.IN_TABLE_BODY:{pi(this,t);break}case A.IN_ROW:{Na(this,t);break}case A.IN_CELL:{$n(this,t);break}case A.IN_SELECT:{Ba(this,t);break}case A.IN_SELECT_IN_TABLE:{tr(this,t);break}case A.IN_TEMPLATE:{ar(this,t);break}case A.AFTER_BODY:{Sa(this,t);break}case A.IN_FRAMESET:{rr(this,t);break}case A.AFTER_FRAMESET:{Ar(this,t);break}case A.AFTER_AFTER_BODY:{Qt(this,t);break}default:}}onEof(t){switch(this.insertionMode){case A.INITIAL:{nt(this,t);break}case A.BEFORE_HTML:{ot(this,t);break}case A.BEFORE_HEAD:{At(this,t);break}case A.IN_HEAD:{ct(this,t);break}case A.IN_HEAD_NO_SCRIPT:{lt(this,t);break}case A.AFTER_HEAD:{dt(this,t);break}case A.IN_BODY:case A.IN_TABLE:case A.IN_CAPTION:case A.IN_COLUMN_GROUP:case A.IN_TABLE_BODY:case A.IN_ROW:case A.IN_CELL:case A.IN_SELECT:case A.IN_SELECT_IN_TABLE:{Ia(this,t);break}case A.TEXT:{Yn(this,t);break}case A.IN_TABLE_TEXT:{rt(this,t);break}case A.IN_TEMPLATE:{Oa(this,t);break}case A.AFTER_BODY:case A.IN_FRAMESET:case A.AFTER_FRAMESET:case A.AFTER_AFTER_BODY:case A.AFTER_AFTER_FRAMESET:{fi(this,t);break}default:}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===n.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case A.IN_HEAD:case A.IN_HEAD_NO_SCRIPT:case A.AFTER_HEAD:case A.TEXT:case A.IN_COLUMN_GROUP:case A.IN_SELECT:case A.IN_SELECT_IN_TABLE:case A.IN_FRAMESET:case A.AFTER_FRAMESET:{this._insertCharacters(t);break}case A.IN_BODY:case A.IN_CAPTION:case A.IN_CELL:case A.IN_TEMPLATE:case A.AFTER_BODY:case A.AFTER_AFTER_BODY:case A.AFTER_AFTER_FRAMESET:{ga(this,t);break}case A.IN_TABLE:case A.IN_TABLE_BODY:case A.IN_ROW:{gi(this,t);break}case A.IN_TABLE_TEXT:{Ca(this,t);break}default:}}};function Ms(e,t){let i=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return i?e.openElements.contains(i.element)?e.openElements.hasInScope(t.tagID)||(i=null):(e.activeFormattingElements.removeEntry(i),i=null):fa(e,t),i}function Ps(e,t){let i=null,s=e.openElements.stackTop;for(;s>=0;s--){let r=e.openElements.items[s];if(r===t.element)break;e._isSpecialElement(r,e.openElements.tagIDs[s])&&(i=r)}return i||(e.openElements.shortenToLength(Math.max(s,0)),e.activeFormattingElements.removeEntry(t)),i}function Hs(e,t,i){let s=t,r=e.openElements.getCommonAncestor(t);for(let c=0,l=r;l!==i;c++,l=r){r=e.openElements.getCommonAncestor(l);let m=e.activeFormattingElements.getElementEntry(l),E=m&&c>=Fs;!m||E?(E&&e.activeFormattingElements.removeEntry(m),e.openElements.remove(l)):(l=Us(e,m),s===t&&(e.activeFormattingElements.bookmark=m),e.treeAdapter.detachNode(s),e.treeAdapter.appendChild(l,s),s=l)}return s}function Us(e,t){let i=e.treeAdapter.getNamespaceURI(t.element),s=e.treeAdapter.createElement(t.token.tagName,i,t.token.attrs);return e.openElements.replace(t.element,s),t.element=s,s}function Ys(e,t,i){let s=e.treeAdapter.getTagName(t),r=we(s);if(e._isElementCausesFosterParenting(r))e._fosterParentElement(i);else{let c=e.treeAdapter.getNamespaceURI(t);r===a.TEMPLATE&&c===C.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,i)}}function Qs(e,t,i){let s=e.treeAdapter.getNamespaceURI(i.element),{token:r}=i,c=e.treeAdapter.createElement(r.tagName,s,r.attrs);e._adoptNodes(t,c),e.treeAdapter.appendChild(t,c),e.activeFormattingElements.insertElementAfterBookmark(c,r),e.activeFormattingElements.removeEntry(i),e.openElements.remove(i.element),e.openElements.insertAfter(t,c,r.tagID)}function Ti(e,t){for(let i=0;i<ks;i++){let s=Ms(e,t);if(!s)break;let r=Ps(e,s);if(!r)break;e.activeFormattingElements.bookmark=s;let c=Hs(e,r,s.element),l=e.openElements.getCommonAncestor(s.element);e.treeAdapter.detachNode(c),l&&Ys(e,l,c),Qs(e,r,s)}}function ui(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function vs(e,t){e._appendCommentNode(t,e.openElements.items[0])}function Gs(e,t){e._appendCommentNode(t,e.document)}function fi(e,t){if(e.stopped=!0,t.location){let i=e.fragmentContext?0:2;for(let s=e.openElements.stackTop;s>=i;s--)e._setEndLocation(e.openElements.items[s],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){let s=e.openElements.items[0],r=e.treeAdapter.getNodeSourceCodeLocation(s);if(r&&!r.endTag&&(e._setEndLocation(s,t),e.openElements.stackTop>=1)){let c=e.openElements.items[1],l=e.treeAdapter.getNodeSourceCodeLocation(c);l&&!l.endTag&&e._setEndLocation(c,t)}}}}function Ks(e,t){e._setDocumentType(t);let i=t.forceQuirks?oe.QUIRKS:na(t);sa(t)||e._err(t,g.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,i),e.insertionMode=A.BEFORE_HTML}function nt(e,t){e._err(t,g.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,oe.QUIRKS),e.insertionMode=A.BEFORE_HTML,e._processToken(t)}function Ws(e,t){t.tagID===a.HTML?(e._insertElement(t,C.HTML),e.insertionMode=A.BEFORE_HEAD):ot(e,t)}function Js(e,t){let i=t.tagID;(i===a.HTML||i===a.HEAD||i===a.BODY||i===a.BR)&&ot(e,t)}function ot(e,t){e._insertFakeRootElement(),e.insertionMode=A.BEFORE_HEAD,e._processToken(t)}function Zs(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.HEAD:{e._insertElement(t,C.HTML),e.headElement=e.openElements.current,e.insertionMode=A.IN_HEAD;break}default:At(e,t)}}function js(e,t){let i=t.tagID;i===a.HEAD||i===a.BODY||i===a.HTML||i===a.BR?At(e,t):e._err(t,g.endTagWithoutMatchingOpenElement)}function At(e,t){e._insertFakeElement(d.HEAD,a.HEAD),e.headElement=e.openElements.current,e.insertionMode=A.IN_HEAD,e._processToken(t)}function fe(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:{e._appendElement(t,C.HTML),t.ackSelfClosing=!0;break}case a.TITLE:{e._switchToTextParsing(t,ee.RCDATA);break}case a.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,ee.RAWTEXT):(e._insertElement(t,C.HTML),e.insertionMode=A.IN_HEAD_NO_SCRIPT);break}case a.NOFRAMES:case a.STYLE:{e._switchToTextParsing(t,ee.RAWTEXT);break}case a.SCRIPT:{e._switchToTextParsing(t,ee.SCRIPT_DATA);break}case a.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=A.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(A.IN_TEMPLATE);break}case a.HEAD:{e._err(t,g.misplacedStartTagForHeadElement);break}default:ct(e,t)}}function Xs(e,t){switch(t.tagID){case a.HEAD:{e.openElements.pop(),e.insertionMode=A.AFTER_HEAD;break}case a.BODY:case a.BR:case a.HTML:{ct(e,t);break}case a.TEMPLATE:{ye(e,t);break}default:e._err(t,g.endTagWithoutMatchingOpenElement)}}function ye(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==a.TEMPLATE&&e._err(t,g.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(a.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,g.endTagWithoutMatchingOpenElement)}function ct(e,t){e.openElements.pop(),e.insertionMode=A.AFTER_HEAD,e._processToken(t)}function Vs(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.BASEFONT:case a.BGSOUND:case a.HEAD:case a.LINK:case a.META:case a.NOFRAMES:case a.STYLE:{fe(e,t);break}case a.NOSCRIPT:{e._err(t,g.nestedNoscriptInHead);break}default:lt(e,t)}}function zs(e,t){switch(t.tagID){case a.NOSCRIPT:{e.openElements.pop(),e.insertionMode=A.IN_HEAD;break}case a.BR:{lt(e,t);break}default:e._err(t,g.endTagWithoutMatchingOpenElement)}}function lt(e,t){let i=t.type===P.EOF?g.openElementsLeftAfterEof:g.disallowedContentInNoscriptInHead;e._err(t,i),e.openElements.pop(),e.insertionMode=A.IN_HEAD,e._processToken(t)}function qs(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.BODY:{e._insertElement(t,C.HTML),e.framesetOk=!1,e.insertionMode=A.IN_BODY;break}case a.FRAMESET:{e._insertElement(t,C.HTML),e.insertionMode=A.IN_FRAMESET;break}case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:case a.NOFRAMES:case a.SCRIPT:case a.STYLE:case a.TEMPLATE:case a.TITLE:{e._err(t,g.abandonedHeadElementChild),e.openElements.push(e.headElement,a.HEAD),fe(e,t),e.openElements.remove(e.headElement);break}case a.HEAD:{e._err(t,g.misplacedStartTagForHeadElement);break}default:dt(e,t)}}function $s(e,t){switch(t.tagID){case a.BODY:case a.HTML:case a.BR:{dt(e,t);break}case a.TEMPLATE:{ye(e,t);break}default:e._err(t,g.endTagWithoutMatchingOpenElement)}}function dt(e,t){e._insertFakeElement(d.BODY,a.BODY),e.insertionMode=A.IN_BODY,Kt(e,t)}function Kt(e,t){switch(t.type){case P.CHARACTER:{ua(e,t);break}case P.WHITESPACE_CHARACTER:{ga(e,t);break}case P.COMMENT:{ui(e,t);break}case P.START_TAG:{te(e,t);break}case P.END_TAG:{Wt(e,t);break}case P.EOF:{Ia(e,t);break}default:}}function ga(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function ua(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function en(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function tn(e,t){let i=e.openElements.tryPeekProperlyNestedBodyElement();i&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(i,t.attrs))}function an(e,t){let i=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&i&&(e.treeAdapter.detachNode(i),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,C.HTML),e.insertionMode=A.IN_FRAMESET)}function sn(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,C.HTML)}function nn(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&it.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,C.HTML)}function rn(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,C.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function on(e,t){let i=e.openElements.tmplCount>0;(!e.formElement||i)&&(e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,C.HTML),i||(e.formElement=e.openElements.current))}function An(e,t){e.framesetOk=!1;let i=t.tagID;for(let s=e.openElements.stackTop;s>=0;s--){let r=e.openElements.tagIDs[s];if(i===a.LI&&r===a.LI||(i===a.DD||i===a.DT)&&(r===a.DD||r===a.DT)){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.popUntilTagNamePopped(r);break}if(r!==a.ADDRESS&&r!==a.DIV&&r!==a.P&&e._isSpecialElement(e.openElements.items[s],r))break}e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,C.HTML)}function cn(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,C.HTML),e.tokenizer.state=ee.PLAINTEXT}function ln(e,t){e.openElements.hasInScope(a.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,C.HTML),e.framesetOk=!1}function dn(e,t){let i=e.activeFormattingElements.getElementEntryInScopeWithTagName(d.A);i&&(Ti(e,t),e.openElements.remove(i.element),e.activeFormattingElements.removeEntry(i)),e._reconstructActiveFormattingElements(),e._insertElement(t,C.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function hn(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,C.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function En(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(a.NOBR)&&(Ti(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,C.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function mn(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,C.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function gn(e,t){e.treeAdapter.getDocumentMode(e.document)!==oe.QUIRKS&&e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,C.HTML),e.framesetOk=!1,e.insertionMode=A.IN_TABLE}function pa(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,C.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function Ta(e){let t=Ft(e,De.TYPE);return t!=null&&t.toLowerCase()===ys}function un(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,C.HTML),Ta(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function pn(e,t){e._appendElement(t,C.HTML),t.ackSelfClosing=!0}function Tn(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._appendElement(t,C.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function fn(e,t){t.tagName=d.IMG,t.tagID=a.IMG,pa(e,t)}function In(e,t){e._insertElement(t,C.HTML),e.skipNextNewLine=!0,e.tokenizer.state=ee.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=A.TEXT}function Cn(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,ee.RAWTEXT)}function _n(e,t){e.framesetOk=!1,e._switchToTextParsing(t,ee.RAWTEXT)}function ha(e,t){e._switchToTextParsing(t,ee.RAWTEXT)}function bn(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,C.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===A.IN_TABLE||e.insertionMode===A.IN_CAPTION||e.insertionMode===A.IN_TABLE_BODY||e.insertionMode===A.IN_ROW||e.insertionMode===A.IN_CELL?A.IN_SELECT_IN_TABLE:A.IN_SELECT}function Nn(e,t){e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,C.HTML)}function Dn(e,t){e.openElements.hasInScope(a.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,C.HTML)}function Bn(e,t){e.openElements.hasInScope(a.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(a.RTC),e._insertElement(t,C.HTML)}function On(e,t){e._reconstructActiveFormattingElements(),Ei(t),Yt(t),t.selfClosing?e._appendElement(t,C.MATHML):e._insertElement(t,C.MATHML),t.ackSelfClosing=!0}function Sn(e,t){e._reconstructActiveFormattingElements(),mi(t),Yt(t),t.selfClosing?e._appendElement(t,C.SVG):e._insertElement(t,C.SVG),t.ackSelfClosing=!0}function Ea(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,C.HTML)}function te(e,t){switch(t.tagID){case a.I:case a.S:case a.B:case a.U:case a.EM:case a.TT:case a.BIG:case a.CODE:case a.FONT:case a.SMALL:case a.STRIKE:case a.STRONG:{hn(e,t);break}case a.A:{dn(e,t);break}case a.H1:case a.H2:case a.H3:case a.H4:case a.H5:case a.H6:{nn(e,t);break}case a.P:case a.DL:case a.OL:case a.UL:case a.DIV:case a.DIR:case a.NAV:case a.MAIN:case a.MENU:case a.ASIDE:case a.CENTER:case a.FIGURE:case a.FOOTER:case a.HEADER:case a.HGROUP:case a.DIALOG:case a.DETAILS:case a.ADDRESS:case a.ARTICLE:case a.SEARCH:case a.SECTION:case a.SUMMARY:case a.FIELDSET:case a.BLOCKQUOTE:case a.FIGCAPTION:{sn(e,t);break}case a.LI:case a.DD:case a.DT:{An(e,t);break}case a.BR:case a.IMG:case a.WBR:case a.AREA:case a.EMBED:case a.KEYGEN:{pa(e,t);break}case a.HR:{Tn(e,t);break}case a.RB:case a.RTC:{Dn(e,t);break}case a.RT:case a.RP:{Bn(e,t);break}case a.PRE:case a.LISTING:{rn(e,t);break}case a.XMP:{Cn(e,t);break}case a.SVG:{Sn(e,t);break}case a.HTML:{en(e,t);break}case a.BASE:case a.LINK:case a.META:case a.STYLE:case a.TITLE:case a.SCRIPT:case a.BGSOUND:case a.BASEFONT:case a.TEMPLATE:{fe(e,t);break}case a.BODY:{tn(e,t);break}case a.FORM:{on(e,t);break}case a.NOBR:{En(e,t);break}case a.MATH:{On(e,t);break}case a.TABLE:{gn(e,t);break}case a.INPUT:{un(e,t);break}case a.PARAM:case a.TRACK:case a.SOURCE:{pn(e,t);break}case a.IMAGE:{fn(e,t);break}case a.BUTTON:{ln(e,t);break}case a.APPLET:case a.OBJECT:case a.MARQUEE:{mn(e,t);break}case a.IFRAME:{_n(e,t);break}case a.SELECT:{bn(e,t);break}case a.OPTION:case a.OPTGROUP:{Nn(e,t);break}case a.NOEMBED:case a.NOFRAMES:{ha(e,t);break}case a.FRAMESET:{an(e,t);break}case a.TEXTAREA:{In(e,t);break}case a.NOSCRIPT:{e.options.scriptingEnabled?ha(e,t):Ea(e,t);break}case a.PLAINTEXT:{cn(e,t);break}case a.COL:case a.TH:case a.TD:case a.TR:case a.HEAD:case a.FRAME:case a.TBODY:case a.TFOOT:case a.THEAD:case a.CAPTION:case a.COLGROUP:break;default:Ea(e,t)}}function Rn(e,t){if(e.openElements.hasInScope(a.BODY)&&(e.insertionMode=A.AFTER_BODY,e.options.sourceCodeLocationInfo)){let i=e.openElements.tryPeekProperlyNestedBodyElement();i&&e._setEndLocation(i,t)}}function Ln(e,t){e.openElements.hasInScope(a.BODY)&&(e.insertionMode=A.AFTER_BODY,Sa(e,t))}function wn(e,t){let i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i))}function yn(e){let t=e.openElements.tmplCount>0,{formElement:i}=e;t||(e.formElement=null),(i||t)&&e.openElements.hasInScope(a.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(a.FORM):i&&e.openElements.remove(i))}function kn(e){e.openElements.hasInButtonScope(a.P)||e._insertFakeElement(d.P,a.P),e._closePElement()}function Fn(e){e.openElements.hasInListItemScope(a.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(a.LI),e.openElements.popUntilTagNamePopped(a.LI))}function xn(e,t){let i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.popUntilTagNamePopped(i))}function Mn(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function Pn(e,t){let i=t.tagID;e.openElements.hasInScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i),e.activeFormattingElements.clearToLastMarker())}function Hn(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(d.BR,a.BR),e.openElements.pop(),e.framesetOk=!1}function fa(e,t){let i=t.tagName,s=t.tagID;for(let r=e.openElements.stackTop;r>0;r--){let c=e.openElements.items[r],l=e.openElements.tagIDs[r];if(s===l&&(s!==a.UNKNOWN||e.treeAdapter.getTagName(c)===i)){e.openElements.generateImpliedEndTagsWithExclusion(s),e.openElements.stackTop>=r&&e.openElements.shortenToLength(r);break}if(e._isSpecialElement(c,l))break}}function Wt(e,t){switch(t.tagID){case a.A:case a.B:case a.I:case a.S:case a.U:case a.EM:case a.TT:case a.BIG:case a.CODE:case a.FONT:case a.NOBR:case a.SMALL:case a.STRIKE:case a.STRONG:{Ti(e,t);break}case a.P:{kn(e);break}case a.DL:case a.UL:case a.OL:case a.DIR:case a.DIV:case a.NAV:case a.PRE:case a.MAIN:case a.MENU:case a.ASIDE:case a.BUTTON:case a.CENTER:case a.FIGURE:case a.FOOTER:case a.HEADER:case a.HGROUP:case a.DIALOG:case a.ADDRESS:case a.ARTICLE:case a.DETAILS:case a.SEARCH:case a.SECTION:case a.SUMMARY:case a.LISTING:case a.FIELDSET:case a.BLOCKQUOTE:case a.FIGCAPTION:{wn(e,t);break}case a.LI:{Fn(e);break}case a.DD:case a.DT:{xn(e,t);break}case a.H1:case a.H2:case a.H3:case a.H4:case a.H5:case a.H6:{Mn(e);break}case a.BR:{Hn(e);break}case a.BODY:{Rn(e,t);break}case a.HTML:{Ln(e,t);break}case a.FORM:{yn(e);break}case a.APPLET:case a.OBJECT:case a.MARQUEE:{Pn(e,t);break}case a.TEMPLATE:{ye(e,t);break}default:fa(e,t)}}function Ia(e,t){e.tmplInsertionModeStack.length>0?Oa(e,t):fi(e,t)}function Un(e,t){var i;t.tagID===a.SCRIPT&&((i=e.scriptHandler)===null||i===void 0||i.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function Yn(e,t){e._err(t,g.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function gi(e,t){if(e.openElements.currentTagId!==void 0&&ma.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=A.IN_TABLE_TEXT,t.type){case P.CHARACTER:{_a(e,t);break}case P.WHITESPACE_CHARACTER:{Ca(e,t);break}}else Et(e,t)}function Qn(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,C.HTML),e.insertionMode=A.IN_CAPTION}function vn(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,C.HTML),e.insertionMode=A.IN_COLUMN_GROUP}function Gn(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(d.COLGROUP,a.COLGROUP),e.insertionMode=A.IN_COLUMN_GROUP,Ii(e,t)}function Kn(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,C.HTML),e.insertionMode=A.IN_TABLE_BODY}function Wn(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(d.TBODY,a.TBODY),e.insertionMode=A.IN_TABLE_BODY,Jt(e,t)}function Jn(e,t){e.openElements.hasInTableScope(a.TABLE)&&(e.openElements.popUntilTagNamePopped(a.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function Zn(e,t){Ta(t)?e._appendElement(t,C.HTML):Et(e,t),t.ackSelfClosing=!0}function jn(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,C.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function ve(e,t){switch(t.tagID){case a.TD:case a.TH:case a.TR:{Wn(e,t);break}case a.STYLE:case a.SCRIPT:case a.TEMPLATE:{fe(e,t);break}case a.COL:{Gn(e,t);break}case a.FORM:{jn(e,t);break}case a.TABLE:{Jn(e,t);break}case a.TBODY:case a.TFOOT:case a.THEAD:{Kn(e,t);break}case a.INPUT:{Zn(e,t);break}case a.CAPTION:{Qn(e,t);break}case a.COLGROUP:{vn(e,t);break}default:Et(e,t)}}function ht(e,t){switch(t.tagID){case a.TABLE:{e.openElements.hasInTableScope(a.TABLE)&&(e.openElements.popUntilTagNamePopped(a.TABLE),e._resetInsertionMode());break}case a.TEMPLATE:{ye(e,t);break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TBODY:case a.TD:case a.TFOOT:case a.TH:case a.THEAD:case a.TR:break;default:Et(e,t)}}function Et(e,t){let i=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,Kt(e,t),e.fosterParentingEnabled=i}function Ca(e,t){e.pendingCharacterTokens.push(t)}function _a(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function rt(e,t){let i=0;if(e.hasNonWhitespacePendingCharacterToken)for(;i<e.pendingCharacterTokens.length;i++)Et(e,e.pendingCharacterTokens[i]);else for(;i<e.pendingCharacterTokens.length;i++)e._insertCharacters(e.pendingCharacterTokens[i]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}var ba=new Set([a.CAPTION,a.COL,a.COLGROUP,a.TBODY,a.TD,a.TFOOT,a.TH,a.THEAD,a.TR]);function Xn(e,t){let i=t.tagID;ba.has(i)?e.openElements.hasInTableScope(a.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=A.IN_TABLE,ve(e,t)):te(e,t)}function Vn(e,t){let i=t.tagID;switch(i){case a.CAPTION:case a.TABLE:{e.openElements.hasInTableScope(a.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=A.IN_TABLE,i===a.TABLE&&ht(e,t));break}case a.BODY:case a.COL:case a.COLGROUP:case a.HTML:case a.TBODY:case a.TD:case a.TFOOT:case a.TH:case a.THEAD:case a.TR:break;default:Wt(e,t)}}function Ii(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.COL:{e._appendElement(t,C.HTML),t.ackSelfClosing=!0;break}case a.TEMPLATE:{fe(e,t);break}default:vt(e,t)}}function zn(e,t){switch(t.tagID){case a.COLGROUP:{e.openElements.currentTagId===a.COLGROUP&&(e.openElements.pop(),e.insertionMode=A.IN_TABLE);break}case a.TEMPLATE:{ye(e,t);break}case a.COL:break;default:vt(e,t)}}function vt(e,t){e.openElements.currentTagId===a.COLGROUP&&(e.openElements.pop(),e.insertionMode=A.IN_TABLE,e._processToken(t))}function Jt(e,t){switch(t.tagID){case a.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,C.HTML),e.insertionMode=A.IN_ROW;break}case a.TH:case a.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(d.TR,a.TR),e.insertionMode=A.IN_ROW,Zt(e,t);break}case a.CAPTION:case a.COL:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=A.IN_TABLE,ve(e,t));break}default:ve(e,t)}}function pi(e,t){let i=t.tagID;switch(t.tagID){case a.TBODY:case a.TFOOT:case a.THEAD:{e.openElements.hasInTableScope(i)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=A.IN_TABLE);break}case a.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=A.IN_TABLE,ht(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TD:case a.TH:case a.TR:break;default:ht(e,t)}}function Zt(e,t){switch(t.tagID){case a.TH:case a.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,C.HTML),e.insertionMode=A.IN_CELL,e.activeFormattingElements.insertMarker();break}case a.CAPTION:case a.COL:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:case a.TR:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=A.IN_TABLE_BODY,Jt(e,t));break}default:ve(e,t)}}function Na(e,t){switch(t.tagID){case a.TR:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=A.IN_TABLE_BODY);break}case a.TABLE:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=A.IN_TABLE_BODY,pi(e,t));break}case a.TBODY:case a.TFOOT:case a.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(a.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=A.IN_TABLE_BODY,pi(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TD:case a.TH:break;default:ht(e,t)}}function qn(e,t){let i=t.tagID;ba.has(i)?(e.openElements.hasInTableScope(a.TD)||e.openElements.hasInTableScope(a.TH))&&(e._closeTableCell(),Zt(e,t)):te(e,t)}function $n(e,t){let i=t.tagID;switch(i){case a.TD:case a.TH:{e.openElements.hasInTableScope(i)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(i),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=A.IN_ROW);break}case a.TABLE:case a.TBODY:case a.TFOOT:case a.THEAD:case a.TR:{e.openElements.hasInTableScope(i)&&(e._closeTableCell(),Na(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:break;default:Wt(e,t)}}function Da(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.OPTION:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e._insertElement(t,C.HTML);break}case a.OPTGROUP:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop(),e._insertElement(t,C.HTML);break}case a.HR:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop(),e._appendElement(t,C.HTML),t.ackSelfClosing=!0;break}case a.INPUT:case a.KEYGEN:case a.TEXTAREA:case a.SELECT:{e.openElements.hasInSelectScope(a.SELECT)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),t.tagID!==a.SELECT&&e._processStartTag(t));break}case a.SCRIPT:case a.TEMPLATE:{fe(e,t);break}default:}}function Ba(e,t){switch(t.tagID){case a.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===a.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===a.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop();break}case a.OPTION:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop();break}case a.SELECT:{e.openElements.hasInSelectScope(a.SELECT)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode());break}case a.TEMPLATE:{ye(e,t);break}default:}}function er(e,t){let i=t.tagID;i===a.CAPTION||i===a.TABLE||i===a.TBODY||i===a.TFOOT||i===a.THEAD||i===a.TR||i===a.TD||i===a.TH?(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),e._processStartTag(t)):Da(e,t)}function tr(e,t){let i=t.tagID;i===a.CAPTION||i===a.TABLE||i===a.TBODY||i===a.TFOOT||i===a.THEAD||i===a.TR||i===a.TD||i===a.TH?e.openElements.hasInTableScope(i)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),e.onEndTag(t)):Ba(e,t)}function ir(e,t){switch(t.tagID){case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:case a.NOFRAMES:case a.SCRIPT:case a.STYLE:case a.TEMPLATE:case a.TITLE:{fe(e,t);break}case a.CAPTION:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:{e.tmplInsertionModeStack[0]=A.IN_TABLE,e.insertionMode=A.IN_TABLE,ve(e,t);break}case a.COL:{e.tmplInsertionModeStack[0]=A.IN_COLUMN_GROUP,e.insertionMode=A.IN_COLUMN_GROUP,Ii(e,t);break}case a.TR:{e.tmplInsertionModeStack[0]=A.IN_TABLE_BODY,e.insertionMode=A.IN_TABLE_BODY,Jt(e,t);break}case a.TD:case a.TH:{e.tmplInsertionModeStack[0]=A.IN_ROW,e.insertionMode=A.IN_ROW,Zt(e,t);break}default:e.tmplInsertionModeStack[0]=A.IN_BODY,e.insertionMode=A.IN_BODY,te(e,t)}}function ar(e,t){t.tagID===a.TEMPLATE&&ye(e,t)}function Oa(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(a.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):fi(e,t)}function sr(e,t){t.tagID===a.HTML?te(e,t):Gt(e,t)}function Sa(e,t){var i;if(t.tagID===a.HTML){if(e.fragmentContext||(e.insertionMode=A.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===a.HTML){e._setEndLocation(e.openElements.items[0],t);let s=e.openElements.items[1];s&&!(!((i=e.treeAdapter.getNodeSourceCodeLocation(s))===null||i===void 0)&&i.endTag)&&e._setEndLocation(s,t)}}else Gt(e,t)}function Gt(e,t){e.insertionMode=A.IN_BODY,Kt(e,t)}function nr(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.FRAMESET:{e._insertElement(t,C.HTML);break}case a.FRAME:{e._appendElement(t,C.HTML),t.ackSelfClosing=!0;break}case a.NOFRAMES:{fe(e,t);break}default:}}function rr(e,t){t.tagID===a.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==a.FRAMESET&&(e.insertionMode=A.AFTER_FRAMESET))}function or(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.NOFRAMES:{fe(e,t);break}default:}}function Ar(e,t){t.tagID===a.HTML&&(e.insertionMode=A.AFTER_AFTER_FRAMESET)}function cr(e,t){t.tagID===a.HTML?te(e,t):Qt(e,t)}function Qt(e,t){e.insertionMode=A.IN_BODY,Kt(e,t)}function lr(e,t){switch(t.tagID){case a.HTML:{te(e,t);break}case a.NOFRAMES:{fe(e,t);break}default:}}function dr(e,t){t.chars=K,e._insertCharacters(t)}function hr(e,t){e._insertCharacters(t),e.framesetOk=!1}function Ra(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==C.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function Er(e,t){if(oa(t))Ra(e),e._startTagOutsideForeignContent(t);else{let i=e._getAdjustedCurrentElement(),s=e.treeAdapter.getNamespaceURI(i);s===C.MATHML?Ei(t):s===C.SVG&&(Aa(t),mi(t)),Yt(t),t.selfClosing?e._appendElement(t,s):e._insertElement(t,s),t.ackSelfClosing=!0}}function mr(e,t){if(t.tagID===a.P||t.tagID===a.BR){Ra(e),e._endTagOutsideForeignContent(t);return}for(let i=e.openElements.stackTop;i>0;i--){let s=e.openElements.items[i];if(e.treeAdapter.getNamespaceURI(s)===C.HTML){e._endTagOutsideForeignContent(t);break}let r=e.treeAdapter.getTagName(s);if(r.toLowerCase()===t.tagName){t.tagName=r,e.openElements.shortenToLength(i);break}}}var po=new Set([d.AREA,d.BASE,d.BASEFONT,d.BGSOUND,d.BR,d.COL,d.EMBED,d.FRAME,d.HR,d.IMG,d.INPUT,d.KEYGEN,d.LINK,d.META,d.PARAM,d.SOURCE,d.TRACK,d.WBR]);function Ge(e,t){return Qe.parse(e,t)}function Ci(e,t,i){typeof e=="string"&&(i=t,t=e,e=null);let s=Qe.getFragmentParser(e,i);return s.tokenizer.write(t,!0),s.getFragment()}var ie=class extends Error{constructor(t,i){super(i),this.status=t}};function R(e,t,i){if(!e)throw new ie(t,i)}var _i=e=>e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;"),gr=new Set(["br","strong","b","em","i","u","a","ul","ol","li"]);function Ke(e,{source:t=!1}={}){let i=Ci(e);function s(r){if(r.nodeName==="#text")return t?_i(r.value.replace(/\s+/g," ")):_i(r.value).replace(/\r?\n/g,"<br>");if(["script","style","iframe","object","svg","sup","sup-about"].includes(r.tagName))return"";let c=(r.childNodes||[]).map(s).join("");if(["div","p"].includes(r.tagName))return"<br>"+c;if(!gr.has(r.tagName))return c;if(r.tagName==="br")return"<br>";if(r.tagName==="a"){let l=r.attrs.find(E=>E.name==="href")?.value||"",m=new URL(l,"https://jayyoungjun-kim.github.io/");return R(["https:","http:","mailto:","tel:"].includes(m.protocol)&&!m.username&&!m.password&&!/[\u0000-\u0020\u007f\\]/.test(l),422,"\uC62C\uBC14\uB978 \uB9C1\uD06C \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694."),`<a href="${_i(l)}" target="_blank" rel="noreferrer">${c}</a>`}return`<${r.tagName}>${c}</${r.tagName}>`}return i.childNodes.map(s).join("").trim().replace(/^(?:<br>)+|(?:<br>)+$/g,"")}function La(e){let t=Ci(e),i=s=>s.nodeName==="#text"?s.value:s.tagName==="br"?`
`:(s.childNodes||[]).map(i).join("");return i(t)}var jt=(e,t)=>e.attrs?.find(i=>i.name===t)?.value,Vt=e=>(jt(e,"class")||"").split(/\s+/),M=(e,t)=>Vt(e).includes(t),Y=e=>e.sourceCodeLocation,me=e=>(e.childNodes||[]).filter(t=>t.tagName&&Y(t)),Xt=e=>["sup","sup-about"].includes(e.tagName)?"":e.nodeName==="#text"?e.value:(e.childNodes||[]).map(Xt).join(" "),de=(e,t)=>{if(t(e))return e;for(let i of e.childNodes||[]){let s=de(i,t);if(s)return s}},wa=e=>String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;"),ur=e=>"s"+Y(e).startOffset,pr={category:"\uC791\uC5C5 \uCE74\uD14C\uACE0\uB9AC",card:"\uC791\uC5C5 \uCE74\uB4DC",aboutGroup:"\uC18C\uAC1C \uC139\uC158",infoGroup:"\uC815\uBCF4 \uC139\uC158",aboutItem:"\uC18C\uAC1C \uD56D\uBAA9",infoItem:"\uB0B4\uC6A9 \uBE14\uB85D",news:"\uC18C\uC2DD",detail:"\uBCF8\uBB38 \uC139\uC158",part:"\uB0B4\uC6A9 \uC694\uC18C",fixed:"\uD398\uC774\uC9C0 \uAE30\uBCF8 \uC815\uBCF4"};function ke(e,t,i=[]){if(t==="JavaScript/script.js")return{sections:[{id:"intro",title:"\uC6C0\uC9C1\uC774\uB294 \uC601\uC5B4 \uC18C\uAC1C",kind:"fixed",parent:null,fieldIds:i.map(h=>h.id),children:[],movable:!1}],rootKinds:[]};let s=Ge(e,{sourceCodeLocationInfo:!0}),r=de(s,h=>M(h,"contents")),c=t==="index.html"||["about.html","info.html"].includes(t)?r:de(s,h=>M(h,"project-container")),l=[],m=new Map;function E(h,p,b=null,N=!0){if(!Y(h))return;let L=de(h,y=>Vt(y).some(W=>/^(main-content-title|main-content-list-title|about-title(-first)?|info-title(-first)?|about-section-title|info-section-public-title|project-body-title|project-header-title)$/.test(W))),k=de(h,y=>y.tagName==="img"),O={id:ur(h),kind:p,parent:b,title:Xt(L||h).trim().replace(/\s+/g," ").slice(0,72)||(k?"\uC774\uBBF8\uC9C0":pr[p]||"\uD14D\uC2A4\uD2B8"),thumbnail:k&&jt(k,"src")||"",movable:N,start:Y(h).startOffset,end:Y(h).endOffset,children:[],fieldIds:[]};return["detail","detailPart"].includes(p)&&!L&&(O.title=k?"\uC774\uBBF8\uC9C0":de(h,y=>["video","iframe"].includes(y.tagName))?"\uC601\uC0C1":O.title),p==="detail"&&(M(h,"project-body-empty")||M(h,"project-body-between"))&&(O.title="\uC5EC\uBC31"),M(h,"project-stakeholder-container")&&(O.title="\uD504\uB85C\uC81D\uD2B8 \uCC38\uC5EC\uC790"),M(h,"project-pagination-container")&&(O.title="\uC774\uC804 \xB7 \uB2E4\uC74C \uD504\uB85C\uC81D\uD2B8"),l.push(O),m.set(O.id,h),b&&l.find(y=>y.id===b)?.children.push(O.id),O}if(c){for(let h of me(c))if(!M(h,"footer"))if(t==="index.html"){if(M(h,"main-content")){let p=E(h,"category"),b=de(h,N=>M(N,"main-content-list"));for(let N of me(b||{}))M(N,"main-content-list-img")&&E(N,"card",p.id)}else if(M(h,"main-header")||M(h,"main-profile")){let p=E(h,"fixed",null,!1);p&&(p.title=M(h,"main-header")?"\uCCAB \uD654\uBA74 \xB7 \uAC01\uC8FC":"\uC18C\uAC1C \uBB38\uAD6C")}}else if(["about.html","info.html"].includes(t)){let p=t==="about.html"?"about":"info";if(Vt(h).some(b=>b===p+"-container"||b===p+"-container-last")){let b=E(h,p+"Group");for(let N of me(h))if(M(N,p+"-section")||M(N,"info-section-activity")){let L=E(N,M(N,"info-section-activity")?"news":p==="about"?"aboutItem":"infoItem",b.id);for(let k of me(N))!M(k,"divider")&&!M(k,"divider-dashed")&&E(k,"part",L.id)}}}else["script","style","noscript"].includes(h.tagName)||E(h,"detail",null,!M(h,"project-header")&&!M(h,"project-pagination-container"))}if(c&&!["index.html","about.html","info.html"].includes(t)){let L=function(O,y){if(!O.length&&!y)return;let W=O.filter(ne=>!p(ne));if(!W.length&&!y)return;let Q=y||O[0],se=y||O.at(-1),Ee=O.map(ne=>de(ne,Z=>M(Z,"project-body-title"))).find(Boolean),le=O.reduce((ne,Z)=>ne+(de(Z,X=>X.tagName==="img")?1:0),0),ue={id:"g"+Y(Q).startOffset,kind:"detail",parent:null,title:Ee?Xt(Ee).trim():le?"\uC774\uBBF8\uC9C0 \uC139\uC158":"\uCF58\uD150\uCE20 \uC139\uC158",thumbnail:jt(de(Q,ne=>ne.tagName==="img")||{},"src")||"",movable:!0,start:Y(Q).startOffset,end:Y(se).endOffset,children:[],fieldIds:[],virtual:!y,insertAt:y?Y(y).endTag.startOffset:Y(se).endOffset};l.push(ue),y&&m.set(ue.id,y);for(let ne of W)E(ne,"detailPart",ue.id)};l.length=0,m.clear();let h=[],p=O=>M(O,"project-body-empty")||M(O,"project-body-between"),b=O=>M(O,"project-body-container")||M(O,"project__bodytext"),N=O=>M(O,"project-header")||M(O,"project-pagination-container")||M(O,"project-stakeholder-container"),k=()=>{L(h),h=[]};for(let O of me(c))if(!(["script","style","noscript"].includes(O.tagName)||M(O,"footer"))){if(jt(O,"data-cms-section")){k(),L(me(O),O);continue}if(N(O)){k(),E(O,"fixed",null,!1);continue}!p(O)&&h.some(b)&&k(),h.push(O)}k()}for(let h of i){let b=l.filter(N=>h.start>=N.start&&h.end<=N.end).at(-1);b&&b.fieldIds.push(h.id)}let u=new Set(l.flatMap(h=>h.fieldIds));for(let[h,p,b]of[["settings","\uAC80\uC0C9 \xB7 \uACF5\uC720 \uC124\uC815",N=>N.type==="meta"],["shared","\uBA54\uB274 \xB7 \uD478\uD130",()=>!0]]){let N=i.filter(L=>!u.has(L.id)&&b(L));N.length&&(l.push({id:h,title:p,kind:"settings",parent:null,fieldIds:N.map(L=>L.id),children:[],movable:!1}),N.forEach(L=>u.add(L.id)))}return{sections:l,rootKinds:t==="index.html"?["category"]:t==="about.html"?["aboutGroup"]:t==="info.html"?["infoGroup"]:c?["story","gallery","text"]:[],_nodes:m,_root:c,_doc:s}}var zt={story:"\uC774\uBBF8\uC9C0 + \uD14D\uC2A4\uD2B8",gallery:"\uC774\uBBF8\uC9C0 \uBAA8\uC74C",category:"\uC791\uC5C5 \uCE74\uD14C\uACE0\uB9AC",card:"\uC791\uC5C5 \uCE74\uB4DC",aboutGroup:"\uC18C\uAC1C \uC139\uC158",infoGroup:"\uC815\uBCF4 \uC139\uC158",aboutItem:"\uC81C\uBAA9 + \uD55C\uAD6D\uC5B4\xB7\uC601\uC5B4 \uBCF8\uBB38",infoItem:"\uD55C\uAD6D\uC5B4\xB7\uC601\uC5B4 \uBCF8\uBB38",links:"\uB9C1\uD06C \uBAA9\uB85D",news:"\uB0A0\uC9DC + \uC18C\uC2DD",text:"\uC81C\uBAA9 + \uBCF8\uBB38",image:"\uC774\uBBF8\uC9C0",video:"\uC601\uC0C1",twoImages:"\uC774\uBBF8\uC9C0 2\uC5F4",spacer:"\uC5EC\uBC31",paragraph:"\uBCF8\uBB38 \uBB38\uB2E8",list:"\uBAA9\uB85D",link:"\uB9C1\uD06C",footnote:"\uAC01\uC8FC"};function bi(e,t){return e?e.kind==="detail"?["image","twoImages","video","text"]:e.kind==="category"?["card"]:e.kind==="aboutGroup"?["aboutItem"]:e.kind==="infoGroup"?["infoItem","links","news"]:["aboutItem","infoItem","news"].includes(e.kind)?["paragraph","list","link","footnote"]:[]:ke("",t).rootKinds}function gt(e,t,i=""){let s=wa(i.trim()||zt[e]),r=t==="about.html"?"about":"info",c=l=>`<div class="${l}-kr">\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694.</div><div class="${l}-en">Add your text here.</div>`;switch(e){case"category":return`<div class="main-content"><div class="main-content-title">${s}</div><div class="main-content-list"></div></div>`;case"card":return`<div class="main-content-list-img"><a href="index.html" class="main-content-list-link"><img class="content__img" src="" alt="${s}"><div class="main-content-list-title">${s}</div><div class="main-content-list-category">\uC791\uC5C5 \uBD84\uB958</div></a></div>`;case"aboutGroup":case"infoGroup":return`<div class="${r}-container"><div class="divider"></div><div class="${r}-title">${s}</div></div>`;case"aboutItem":return`<div class="about-section"><div class="about-section-title">${s}</div>${c("about-section-body")}</div>`;case"infoItem":return`<div class="info-section">${c("info-section-body")}</div>`;case"links":return`<div class="info-section"><div class="info-section-link"><a href="https://example.com/" target="_blank" rel="noreferrer">${s}</a><span class="outbound-link">\u2197</span></div></div>`;case"news":return`<div class="info-section-activity"><div class="info-section-date">${new Date().toISOString().slice(0,10)}</div><div class="info-section-public-title">${s}</div>${c("info-section-public-body")}</div>`;case"story":return`<section data-cms-section="true" style="padding-bottom:80px">${gt("image",t,i)}${gt("text",t,i).replace('class="project-body-container"','class="project-body-container" style="padding-bottom:0"')}</section>`;case"gallery":return`<section data-cms-section="true" style="padding-bottom:80px">${gt("twoImages",t,i)}</section>`;case"text":return`<div class="project-body-container"><div class="project-body-label">\uC139\uC158</div><div class="project-body-title">${s}</div>${c("project-body")}</div>`;case"image":return'<div class="project__img"><img src="" alt=""></div>';case"twoImages":return'<div class="project-body-grid-2"><div class="project__img"><img src="" alt=""></div><div class="project__img"><img src="" alt=""></div></div>';case"video":return'<div class="project-img video"><video controls playsinline src="" poster=""></video></div>';case"spacer":return'<div class="project-body-empty"></div>';case"paragraph":return`<div class="${r}-section-body-kr">${s}</div>`;case"list":return`<div class="${r}-section-body-kr"><ul><li>${s}</li><li>\uBAA9\uB85D \uB0B4\uC6A9</li></ul></div>`;case"link":return`<div class="${r==="info"?"info-section-link":"about-section-body-footnote"}"><a href="https://example.com/" target="_blank" rel="noreferrer">${s}</a></div>`;case"footnote":return`<div class="${r}-section-body-${r==="about"?"footnote":"kr"}">${s}</div>`;default:throw new Error("\uCD94\uAC00\uD560 \uC139\uC158 \uC720\uD615\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.")}}function mt(e,t){for(let i of t.sort((s,r)=>r.start-s.start))e=e.slice(0,i.start)+i.text+e.slice(i.end);return e}function Ni(e,t,i){let s=ke(e,t),r=s.sections,c=new Map(r.map(p=>[p.id,p])),l=c.get(i.id),m=c.get(i.target),E=c.get(i.parent),u=e,h=l?.parent?c.get(l.parent):null;if(h?.virtual){let p=e.slice(0,h.start)+'<section data-cms-section="true">'+e.slice(h.start,h.end)+"</section>"+e.slice(h.end),b=ke(p,t).sections,N={...i};for(let L of["id","parent","target"])N[L]&&(N[L]=b[r.findIndex(k=>k.id===N[L])]?.id);return Ni(p,t,N)}if(i.action==="add"){if(R(typeof i.title=="string"&&i.title.length<=180,422,"\uC139\uC158 \uC81C\uBAA9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."),R(i.parent?E:!!s._root,422,"\uCD94\uAC00\uD560 \uC704\uCE58\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694."),R((E?bi(E,t):[...s.rootKinds,"image","video","twoImages","spacer"]).includes(i.template),422,"\uC774 \uC704\uCE58\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC5C6\uB294 \uC720\uD615\uC785\uB2C8\uB2E4."),E?.virtual){let O=e.slice(E.start,E.end),y=gt(i.template,t,i.title),W=r.find(Ee=>Ee.parent===E.id&&M(s._nodes.get(Ee.id),"project-body-container")),Q=i.template==="text"?O.length:W?W.start-E.start:O.length,se='<section data-cms-section="true">'+O.slice(0,Q)+y+O.slice(Q)+"</section>";return u=e.slice(0,E.start)+se+e.slice(E.end),R(u.length<65e4,413,"\uD398\uC774\uC9C0\uAC00 \uB108\uBB34 \uD07D\uB2C8\uB2E4."),u}let p=E?s._nodes.get(E.id):s._root;E?.kind==="category"&&(p=de(p,O=>M(O,"main-content-list"))),R(Y(p)?.endTag,422,"\uC139\uC158\uC758 \uCD94\uAC00 \uC704\uCE58\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let b=me(p).find(O=>M(O,"footer")||M(O,"project-pagination-container")||M(O,"project-stakeholder-container")),N=E?.kind==="detail"&&i.template!=="text"?me(p).find(O=>M(O,"project-body-container")):null;R(!i.target||m&&m.parent===(E?.id||null),422,"\uCD94\uAC00\uD560 \uBE14\uB85D \uC704\uCE58\uB97C \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");let L=m?i.position==="before"?m.start:m.end:N?Y(N).startOffset:b?Y(b).startOffset:Y(p).endTag.startOffset,k=gt(i.template,t,i.title);!E&&t!=="index.html"&&!["about.html","info.html"].includes(t)&&!["story","gallery"].includes(i.template)&&(k='<section data-cms-section="true">'+k+"</section>"),u=e.slice(0,L)+`
`+k+`
`+e.slice(L)}else{R(l&&l.movable,422,"\uC774 \uC139\uC158\uC740 \uAD6C\uC870\uB97C \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");let p=s._nodes.get(l.id),b=e.slice(l.start,l.end),N=l.virtual&&["move","duplicate"].includes(i.action)?'<section data-cms-section="true">'+b+"</section>":b;if(i.action==="remove")u=mt(e,[{start:l.start,end:l.end,text:""}]);else if(i.action==="duplicate")u=e.slice(0,l.end)+`
`+N+e.slice(l.end);else if(i.action==="move"){R(m&&m.id!==l.id&&m.movable&&l.parent===m.parent&&(l.kind===m.kind||l.kind==="detail"||["infoItem","news"].includes(l.kind)&&["infoItem","news"].includes(m.kind)),422,"\uAC19\uC740 \uBAA9\uB85D \uC548\uC758 \uC139\uC158\uB07C\uB9AC \uC774\uB3D9\uD574 \uC8FC\uC138\uC694.");let L=i.position==="after"?m.end:m.start;u=mt(e,[{start:l.start,end:l.end,text:""},{start:L,end:L,text:N+`
`}])}else if(i.action==="transfer"){R(l.kind==="card"&&E?.kind==="category"&&E.id!==l.parent,422,"\uC791\uC5C5 \uCE74\uB4DC\uB294 \uB2E4\uB978 \uCE74\uD14C\uACE0\uB9AC\uB85C \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");let L=de(s._nodes.get(E.id),O=>M(O,"main-content-list"));R(Y(L)?.endTag,422,"\uC791\uC5C5 \uBAA9\uB85D\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."),R(!i.target||m?.kind==="card"&&m.parent===E.id,422,"\uC774\uB3D9\uD560 \uC791\uC5C5 \uC704\uCE58\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");let k=m?i.position==="after"?m.end:m.start:Y(L).endTag.startOffset;u=mt(e,[{start:l.start,end:l.end,text:""},{start:k,end:k,text:`
`+N+`
`}])}else if(i.action==="linkCard")R(l.kind==="card"&&typeof i.href=="string"&&/^[a-z0-9][a-z0-9-]*\.html$/.test(i.href),422,"\uC5F0\uACB0\uD560 \uC0C1\uC138 \uD398\uC774\uC9C0\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694."),R(!de(p,L=>L.tagName==="a"),422,"\uAE30\uC874 \uC5F0\uACB0 \uC8FC\uC18C\uC5D0\uC11C \uC218\uC815\uD574 \uC8FC\uC138\uC694."),u=mt(e,[{start:Y(p).startTag.endOffset,end:Y(p).startTag.endOffset,text:`<a class="main-content-list-link" href="${wa(i.href)}">`},{start:Y(p).endTag.startOffset,end:Y(p).endTag.startOffset,text:"</a>"}]);else throw new Error("\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC139\uC158 \uC791\uC5C5\uC785\uB2C8\uB2E4.")}return R(u.length<65e4,413,"\uD398\uC774\uC9C0\uAC00 \uB108\uBB34 \uD07D\uB2C8\uB2E4."),Tr(u,t)}function Tr(e,t){if(!["about.html","info.html"].includes(t))return e;let i=ke(e,t),s=[],r=t==="about.html"?"about":"info",c=i.sections.filter(l=>l.kind===r+"Group");return c.forEach((l,m)=>{let E=i._nodes.get(l.id),u=Y(E).attrs.class;s.push({start:u.startOffset,end:u.endOffset,text:`class="${r}-container${m===c.length-1?"-last":""}"`});let h=me(E).find(N=>M(N,"divider"));m===0&&h&&s.push({start:Y(h).startOffset,end:Y(h).endOffset,text:""}),m>0&&!h&&s.push({start:Y(E).startTag.endOffset,end:Y(E).startTag.endOffset,text:'<div class="divider"></div>'});let p=me(E).find(N=>Vt(N).some(L=>L===r+"-title"||L===r+"-title-first"));if(p){let N=Y(p).attrs.class;s.push({start:N.startOffset,end:N.endOffset,text:`class="${r}-title${m===0?"-first":""}"`})}let b=me(E).filter(N=>M(N,"info-section-activity"));{for(let N of me(E).filter(L=>M(L,"divider-dashed")))s.push({start:Y(N).startOffset,end:Y(N).endOffset,text:""});b.slice(1).forEach(N=>s.push({start:Y(N).startOffset,end:Y(N).startOffset,text:`<div class="divider-dashed"></div>
`}))}}),mt(e,s)}var Ce="JavaScript/script.js",ya=new Set(["script","style","noscript","template","svg"]),fr=new Set(["main-content-list-img","project-body-container","project__img","info-section","about-section"]),qt=e=>e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"),Bi=e=>qt(e).replaceAll('"',"&quot;").replaceAll("'","&#39;"),Ie=(e,t)=>e.attrs?.find(i=>i.name===t)?.value,Oi=e=>(Ie(e,"class")||"").split(/\s+/);function ut(e,t,i=[]){if(t(e,i),!ya.has(e.tagName))for(let s of e.childNodes||[])ut(s,t,[e,...i])}function Si(e){return Ge(e,{sourceCodeLocationInfo:!0})}function Di(e,t){let i=[e,...t].find(s=>Ie(s,"class"));return(Ie(i||e,"class")||e.tagName||"\uBB38\uAD6C").replaceAll("-"," ")}function ka(e){let t=/const text = ('[^']*'|"(?:\\.|[^"\\])*");/.exec(e);R(t,422,"\uD648 \uC18C\uAC1C \uC2A4\uD06C\uB9BD\uD2B8 \uD615\uC2DD\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");let i=t[1],s=i.startsWith('"')?JSON.parse(i):i.slice(1,-1),r=t.index+13;return{id:"intro",type:"text",label:"\uD648 \uC601\uC5B4 \uC18C\uAC1C \xB7 \uC22B\uC790 1, 2, 3\uC740 \uAC01\uC8FC\uB85C \uD45C\uC2DC",value:s,start:r,end:r+i.length,kind:"js-string"}}function he(e,t){if(t===Ce){let u=[ka(e)];return{title:"\uD648 \uD0C0\uC774\uD551 \uC18C\uAC1C",fields:u,blocks:[],...ke(e,t,u)}}let i=Si(e),s=[],r=[],c=[];ut(i,(u,h)=>{!u.sourceCodeLocation?.endTag||h.some(p=>c.includes(p))||Oi(u).some(p=>/^(about-section-(title|body.*)|info-section-(body.*|public-title|public-body.*|date)|project-body-(title|kr|en|label)|project-header-body-(kr|en))$/.test(p))&&c.push(u)});let l=t;ut(i,(u,h)=>{let p=u.sourceCodeLocation;if(!p||h.some(N=>ya.has(N.tagName)||c.includes(N)))return;if(c.includes(u)){let N=Ke(e.slice(p.startTag.endOffset,p.endTag.startOffset),{source:!0});s.push({id:`r${p.startOffset}`,type:"text",label:Di(u,h),value:N,plain:La(N),rich:!0,start:p.startTag.endOffset,end:p.endTag.startOffset,kind:"rich"});return}if(u.tagName==="title"&&(l=u.childNodes?.map(N=>N.value||"").join("")||t),u.nodeName==="#text"&&u.value.trim()||u.nodeName==="#comment"&&u.data==="cms-empty"){let N=h.some(L=>L.tagName==="head")?"meta":"text";s.push({id:`t${p.startOffset}`,type:N,label:Di(h[0],h.slice(1)),value:u.value?.trim()||"",start:p.startOffset,end:p.endOffset,kind:"text"})}for(let N of u.attrs||[]){let L;if(["img","source","video"].includes(u.tagName)&&["src","poster","alt"].includes(N.name)&&(L="media"),u.tagName==="iframe"&&N.name==="src"&&(L="media"),u.tagName==="a"&&N.name==="href"&&(L="link"),u.tagName==="meta"&&N.name==="content"&&(/^og:/.test(Ie(u,"property")||"")||Ie(u,"name")==="description")&&(L="meta"),u.tagName==="link"&&N.name==="href"&&/icon/.test(Ie(u,"rel")||"")&&(L="media"),!L)continue;let k=p.attrs?.[N.name];k&&s.push({id:`a${k.startOffset}`,type:L,label:`${u.tagName==="meta"?Ie(u,"property")||Ie(u,"name"):Di(u,h)} \xB7 ${N.name}`,value:N.value,start:k.startOffset,end:k.endOffset,kind:"attr",attribute:N.name,tag:u.tagName,url:["href","src","poster"].includes(N.name)||u.tagName==="meta"&&["og:image","og:url"].includes(Ie(u,"property"))})}let b=Oi(u).find(N=>fr.has(N));if(b&&p.endTag){let N=[];ut(u,k=>{k.nodeName==="#text"&&k.value.trim()&&N.push(k.value.trim())});let L=h[0]?.sourceCodeLocation;r.push({id:`b${p.startOffset}`,label:N.join(" ").slice(0,95)||b,className:b,start:p.startOffset,end:p.endOffset,parent:L?.startOffset??-1})}});let{sections:m,rootKinds:E}=ke(e,t,s);return{title:l,fields:s,blocks:r,sections:m,rootKinds:E}}function Ir(e,t){if(R(typeof e=="string"&&e.length<=4096,422,"\uC8FC\uC18C\uAC00 \uB108\uBB34 \uAE41\uB2C8\uB2E4."),!e)return;R(!/[\u0000-\u0020\u007f\\]/.test(e),422,"\uC8FC\uC18C\uC5D0 \uACF5\uBC31\uC774\uB098 \uC81C\uC5B4 \uBB38\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");let i=new URL(e,"https://jayyoungjun-kim.github.io/");R(["https:","http:",...t.tag==="a"?["mailto:","tel:"]:[]].includes(i.protocol),422,"\uC6F9 \uC8FC\uC18C \uB610\uB294 \uC774\uBA54\uC77C \uB9C1\uD06C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694."),R(!i.username&&!i.password,422,"\uC778\uC99D\uC815\uBCF4\uAC00 \uD3EC\uD568\uB41C \uC8FC\uC18C\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),t.tag==="iframe"&&R(["player.vimeo.com","www.youtube.com","www.youtube-nocookie.com"].includes(i.hostname),422,"\uC601\uC0C1 \uC784\uBCA0\uB4DC\uB294 YouTube\uC640 Vimeo \uC8FC\uC18C\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")}function pt(e,t,i){R(i&&typeof i=="object"&&!Array.isArray(i),422,"\uC218\uC815 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");let s=new Map(he(e,t).fields.map(c=>[c.id,c])),r=[];for(let[c,l]of Object.entries(i)){let m=s.get(c);if(R(m&&typeof l=="string"&&l.length<5e4,422,"\uC218\uC815\uD560 \uD56D\uBAA9\uC744 \uB2E4\uC2DC \uBD88\uB7EC\uC640 \uC8FC\uC138\uC694."),l===m.value)continue;m.url&&Ir(l,m);let E;if(m.kind==="rich")E=Ke(l)||"<!--cms-empty-->";else if(m.kind==="text"){let u=e.slice(m.start,m.end);R(m.type!=="meta"||l.trim(),422,"\uD398\uC774\uC9C0 \uC81C\uBAA9\uC740 \uBE44\uC6CC\uB458 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),E=(u.match(/^\s*/)?.[0]||"")+(l.trim()?qt(l):"<!--cms-empty-->")+(u.match(/\s*$/)?.[0]||"")}else m.kind==="js-string"?(R(!/[<>&]/.test(l),422,"\uD648 \uD0C0\uC774\uD551 \uC18C\uAC1C\uC5D0\uB294 HTML \uAE30\uD638(<, >, &)\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),E=JSON.stringify(l)):E=`${m.attribute}="${Bi(l)}"`;r.push({start:m.start,end:m.end,replacement:E})}for(let c of r.sort((l,m)=>m.start-l.start))e=e.slice(0,c.start)+c.replacement+e.slice(c.end);return e}function Fa(e,t,i){R(t!==Ce,422,"\uC774 \uD56D\uBAA9\uC5D0\uB294 \uBE14\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");let s=he(e,t).blocks,r=s.find(h=>h.id===i.id);R(r,422,"\uBE14\uB85D\uC744 \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");let c=e.slice(r.start,r.end);if(i.action==="duplicate")return e.slice(0,r.end)+`
`+c+e.slice(r.end);if(i.action==="remove")return e.slice(0,r.start)+e.slice(r.end);R(["up","down"].includes(i.action),422,"\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE14\uB85D \uC791\uC5C5\uC785\uB2C8\uB2E4.");let l=s.filter(h=>h.parent===r.parent&&h.className===r.className),m=l[l.indexOf(r)+(i.action==="up"?-1:1)];R(m,422,"\uB354 \uC774\uB3D9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");let[E,u]=[r,m].sort((h,p)=>h.start-p.start);return e.slice(0,E.start)+e.slice(u.start,u.end)+e.slice(E.end,u.start)+e.slice(E.start,E.end)+e.slice(u.end)}function xa(e,t,i){let s=he(e,t),r={};for(let l of s.fields)l.kind==="text"&&l.label.includes("project header title")&&(r[l.id]=i),l.type==="meta"&&l.kind==="text"&&(r[l.id]=`${i} \u2014 Jay Youngjun Kim`);let c=Si(e);return ut(c,l=>{let m=Ie(l,"property"),E=l.sourceCodeLocation?.attrs?.content;E&&m==="og:title"&&(r[`a${E.startOffset}`]=`${i} \u2014 Jay Youngjun Kim`),E&&m==="og:url"&&(r[`a${E.startOffset}`]=`https://jayyoungjun-kim.github.io/${t}`)}),pt(e,t,r)}function $t(e,t,i,s=""){if(t===Ce)return`<html><body><p>${qt(ka(e).value)}</p></body></html>`;let r=Si(e),c=[];function l(E,u=!1){let h=E.sourceCodeLocation;if(!u&&h&&(["script","noscript","iframe","base","object","embed","form"].includes(E.tagName)||E.tagName==="meta"&&Ie(E,"http-equiv"))){c.push({start:h.startOffset,end:h.endOffset,text:""});return}for(let p of E.attrs||[])if(/^on/i.test(p.name)){let b=h?.attrs?.[p.name];b&&c.push({start:b.startOffset,end:b.endOffset,text:""})}s&&Oi(E).includes("main-header-title")&&h?.endTag&&c.push({start:h.startTag.endOffset,end:h.endTag.startOffset,text:qt(s).replace(/[123]/g,p=>`<sup-main-header>${p}</sup-main-header>`)});for(let p of E.childNodes||[])l(p)}l(r);for(let E of c.sort((u,h)=>h.start-u.start))e=e.slice(0,E.start)+E.text+e.slice(E.end);let m=`default-src 'none'; style-src https: 'unsafe-inline'; img-src https: http: data: blob:; font-src https:; media-src https: blob:; base-uri ${i}; form-action 'none'`;return e.replace(/<head[^>]*>/i,E=>`${E}<meta http-equiv="Content-Security-Policy" content="${Bi(m)}"><base href="${Bi(i)}/">`)}var Ne=e=>String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");function Ma(e,t,i={},s="https://jayyoungjun-kim.github.io",r="",c=""){s=s.replace(/\/$/,"");let l=he(e,t),m=pt(e,t,i),E=he(m,t),u=E.sections.filter(y=>!y.parent&&y.kind!=="settings"),h=[],p=y=>l.sections[E.sections.indexOf(y)]?.id||y.id,b=Ge(m,{sourceCodeLocationInfo:!0}),N=new Map,L=y=>{y.sourceCodeLocation?.startTag&&N.set(y.sourceCodeLocation.startOffset,y);for(let W of y.childNodes||[])L(W)};L(b);for(let y of E.sections){if(y.kind==="settings")continue;let W=N.get(y.start);if(!W||y.virtual)continue;let Q=W.sourceCodeLocation.startTag.endOffset-1;h.push({start:Q,end:Q,value:` data-editor-section="${Ne(p(y))}"`})}u.forEach((y,W)=>{let Q=p(y),se=le=>`<div class="cms-gap"><button data-cms-add="${Ne(Q)}" data-position="${le}">\uFF0B \uC5EC\uAE30\uC5D0 \uBE14\uB85D \uCD94\uAC00</button></div>`,Ee=y.movable?`<button draggable="true" data-cms-drag="${Ne(Q)}" aria-label="\uBE14\uB85D ${W+1} \uC21C\uC11C \uC774\uB3D9">\u283F \uC774\uB3D9</button><button data-cms-action="up" data-id="${Ne(Q)}">\u2191</button><button data-cms-action="down" data-id="${Ne(Q)}">\u2193</button><button data-cms-action="duplicate" data-id="${Ne(Q)}">\uBCF5\uC81C</button><button data-cms-action="remove" data-id="${Ne(Q)}">\uC0AD\uC81C</button>`:"";h.push({start:y.start,end:y.start,edge:1,value:`${W===0&&E.rootKinds.length?se("before"):""}<section class="cms-module${r===Q?" cms-selected":""}" data-cms-block="${Ne(Q)}"><div class="cms-bar"><span>${W+1} \xB7 ${Ne(y.title)}</span><div>${Ee}<button data-cms-edit="${Ne(Q)}">\uD3B8\uC9D1</button></div></div><div class="cms-original">`}),h.push({start:y.end,end:y.end,value:`</div></section>${E.rootKinds.length?se("after"):""}`})});let k=m;for(let y of h.sort((W,Q)=>Q.start-W.start||(Q.edge||0)-(W.edge||0)))k=k.slice(0,y.start)+y.value+k.slice(y.end);return k=$t(k,t,s,c).replace(/<video\b[^>]*>/gi,y=>y.replace(/\s(?:autoplay|preload)(?:="[^"]*")?/gi,"").replace(">",' preload="none">')),k.replace("</head>",`<style>
 .cms-module{position:relative;outline:1px solid #dce3ec;border-radius:6px;margin:0!important;min-width:0;background:white}.cms-module:hover{outline:2px solid #8eaef4}.cms-module.cms-selected{outline:2px solid #346ee8}.cms-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;background:#f4f6f9;border-radius:6px 6px 0 0;font:12px/1.5 system-ui,sans-serif;color:#536175;position:relative;z-index:2}.cms-bar>span{max-width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cms-bar>div{display:flex;gap:5px}.cms-bar button,.cms-gap button{font:12px/1.5 system-ui,sans-serif;border:1px solid #d5deeb;border-radius:5px;padding:5px 9px;background:white;color:#375278;cursor:pointer}.cms-gap{text-align:center;padding:12px 0;clear:both}.cms-gap button{border-style:dashed;background:#f6f9ff}.cms-original{cursor:pointer;overflow:hidden}.cms-original a{pointer-events:none}.cms-module.cms-drop{outline:3px dashed #346ee8}.cms-original [data-editor-section]:hover{outline:1px dashed #9db7eb;outline-offset:2px}.cms-original img{pointer-events:none}.cms-original .main-header-title:empty:before{content:'\uD648 \uD0C0\uC774\uD551 \uC18C\uAC1C \xB7 \uBCC4\uB3C4 \uD3B8\uC9D1';font:16px system-ui;color:#8793a4}.cms-original video{pointer-events:none}.cms-module img{height:auto}.cms-original img[src=""],.cms-original img:not([src]){min-height:160px;background:#eef2f7;outline:1px dashed #aebed4}.cms-original section[data-cms-section]{display:block}body{overflow-x:hidden!important}.cms-readonly .cms-bar,.cms-readonly .cms-gap{display:none}.cms-readonly .cms-module{outline:0}.cms-readonly .cms-original{cursor:default}
 </style>`+"</head>")}var Pa="",ei=-1,Tt="desktop",Fe=!1,Ri=1e3,ti,Ae=(e,t,i)=>{let s=document.createElement(e);return s.className=t||"",i!==void 0&&(s.textContent=i),s},We=(e,t)=>{let i=Ae("button","",e);return i.type="button",i.onclick=t,i};function Ha(){ti?.(),ti=null}function Ua(e,t,i,s){ti?.();let r=!1,c,l,m,E=0,u="",h;Pa!==t.current.page&&(Pa=t.current.page,ei=-1,Ri=1e3);let p=t.current.sections,b=p[ei];b?.kind==="settings"&&(b=null),e.replaceChildren(),e.className="visual-workbench";let N=Ae("section","canvas-area"),L=Ae("div","canvas-toolbar"),k=Ae("div","canvas-stage"),O=Ae("div","site-canvas");O.setAttribute("aria-label","\uC2E4\uC81C \uD398\uC774\uC9C0 \uBE14\uB85D \uD3B8\uC9D1"),O.attachShadow({mode:"open"});let y=Ae("p","canvas-note","\uBE14\uB85D\uC744 \uD074\uB9AD\uD574 \uD3B8\uC9D1\uD558\uC138\uC694. \uBE14\uB85D \uC0AC\uC774\uC758 \uFF0B\uB85C \uCD94\uAC00\uD558\uACE0 \u283F\uB85C \uC21C\uC11C\uB97C \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");L.append(Ae("strong","","\uD654\uBA74\uC73C\uB85C \uD3B8\uC9D1"));let W=We("PC",()=>{Tt="desktop",X(),Z()}),Q=We("\uBAA8\uBC14\uC77C",()=>{Tt="mobile",X(),Z()}),se=We("\uD654\uBA74\uB9CC \uBCF4\uAE30",()=>{Fe=!Fe,O.shadowRoot.querySelector(".canvas-page")?.classList.toggle("cms-readonly",Fe),Z(),X()}),Ee=We("\uD3B8\uC9D1 \uD328\uB110 \uB2EB\uAE30",()=>{ei=-1,b=null,le.hidden=!0,e.classList.remove("with-inspector"),X()});L.append(W,Q,se),t.current.rootKinds.length&&L.append(We("\uFF0B \uBE14\uB85D \uCD94\uAC00",()=>t.add(null,t.current.rootKinds))),t.current.page==="index.html"&&L.append(We("\uD0C0\uC774\uD551 \uC18C\uAC1C",t.openIntro)),N.append(L,y,k),k.append(O);let le=Ae("aside","canvas-inspector");le.setAttribute("aria-label","\uBE14\uB85D \uB0B4\uC6A9 \uD3B8\uC9D1");let ue=Ae("div","canvas-panel-heading");ue.append(Ae("strong","","\uBE14\uB85D \uD3B8\uC9D1"),Ee);let ne=Ae("div");le.append(ue,ne),e.append(N,le);function Z(){W.setAttribute("aria-pressed",String(Tt==="desktop")),Q.setAttribute("aria-pressed",String(Tt==="mobile")),se.setAttribute("aria-pressed",String(Fe)),se.textContent=Fe?"\uBE14\uB85D \uD3B8\uC9D1\uC73C\uB85C":"\uD654\uBA74\uB9CC \uBCF4\uAE30"}function X(){if(r)return;let f=Math.max(280,k.clientWidth),T=Tt==="mobile"?390:Math.max(1e3,f),S=Math.min(1,f/T);O.style.width=T+"px",O.style.transform=`scale(${S})`;let w=O.shadowRoot?.querySelector(".canvas-page");w&&(Ri=Math.max(w.scrollHeight,300)),k.style.height=Ri*S+"px"}function St(f){let T=p.find(S=>S.id===f);T?.kind==="part"&&(T=p.find(S=>S.id===T.parent)),T&&(b=T,ei=p.indexOf(T),$e(),qe())}function qe(){let f=O.shadowRoot;if(!f)return;let T=b;for(;T?.parent;)T=p.find(S=>S.id===T.parent);f.querySelectorAll("[data-cms-block]").forEach(S=>S.classList.toggle("cms-selected",S.dataset.cmsBlock===T?.id))}function $e(){if(le.hidden=!b,e.classList.toggle("with-inspector",!!b),!b){X();return}s(b.id),i(ne,{...t,update:()=>{t.update(),clearTimeout(c),c=setTimeout(I,350)}},"content"),X()}function Ue(f,T){let S=p.find(_=>_.id===f);if(S)if(T==="up"||T==="down"){let _=p.filter(U=>U.movable&&!U.parent),w=_.indexOf(S),v=_[w+(T==="up"?-1:1)];v&&t.act({action:"move",id:f,target:v.id,position:T==="up"?"before":"after"})}else t.act({action:T,id:f})}function Rt(){h?.abort(),h=new AbortController;let f=O.shadowRoot;if(!f?.querySelector(".canvas-page"))return;f.querySelector(".canvas-page").classList.toggle("cms-readonly",Fe),qe();let T=(_,w)=>f.addEventListener(_,w,{signal:h.signal});T("click",_=>{if(_.preventDefault(),Fe)return;let w=_.target,v=w.closest("[data-cms-add]");if(v){t.add(null,t.current.rootKinds,{target:v.dataset.cmsAdd,position:v.dataset.position});return}let U=w.closest("[data-cms-action]");if(U){Ue(U.dataset.id,U.dataset.cmsAction);return}let Le=w.closest("[data-cms-edit]"),G=w.closest("[data-editor-section]"),H=w.closest("[data-cms-block]");St(Le?.dataset.cmsEdit||G?.dataset.editorSection||H?.dataset.cmsBlock)});let S;T("dragstart",_=>{let w=_.target.closest("[data-cms-drag]");if(!w){_.preventDefault();return}S=w.dataset.cmsDrag,_.dataTransfer.setData("text/plain",S),_.dataTransfer.effectAllowed="move"}),T("dragover",_=>{let w=_.target.closest("[data-cms-block]"),v=p.find(U=>U.id===w?.dataset.cmsBlock);!S||!v?.movable||v.id===S||(_.preventDefault(),f.querySelectorAll(".cms-drop").forEach(U=>U.classList.remove("cms-drop")),w.classList.add("cms-drop"))}),T("drop",_=>{_.preventDefault();let w=_.target.closest("[data-cms-block]"),v=p.find(U=>U.id===w?.dataset.cmsBlock);if(S&&v?.movable&&v.id!==S){let U=w.getBoundingClientRect();t.act({action:"move",id:S,target:v.id,position:_.clientY>U.top+U.height/2?"after":"before"})}S=null,f.querySelectorAll(".cms-drop").forEach(U=>U.classList.remove("cms-drop"))}),T("dragend",()=>{S=null,f.querySelectorAll(".cms-drop").forEach(_=>_.classList.remove("cms-drop"))}),f.querySelectorAll("[data-cms-drag]").forEach(_=>_.addEventListener("keydown",w=>{["ArrowUp","ArrowDown"].includes(w.key)&&(w.preventDefault(),Ue(_.dataset.cmsDrag,w.key==="ArrowUp"?"up":"down"))})),f.querySelectorAll("img").forEach(_=>{_.addEventListener("load",X),_.addEventListener("error",X)}),document.fonts?.ready.then(X),m?.disconnect(),m=new ResizeObserver(X),m.observe(f.querySelector(".canvas-page")),X()}async function I(){let f=++E;try{let T=Ma(t.current.source,t.current.page,t.changes,t.siteOrigin,b?.id,u),S=[...new Set(T.match(/\/assets\/uploads\/[a-f0-9-]{36}\.(?:png|jpg|gif|webp|pdf|mp4)/g)||[])];for(let G of S){let H=await t.localImage(G);T=T.replaceAll(G,H)}if(r||f!==E)return;let _=new DOMParser().parseFromString(T,"text/html");_.querySelectorAll("script,iframe,object,embed,form,svg,math,template").forEach(G=>G.remove());for(let G of _.querySelectorAll("[src],[href],[poster]"))for(let H of["src","href","poster"])if(G.hasAttribute(H)){let j=G.getAttribute(H);j&&G.setAttribute(H,new URL(j,t.siteOrigin.replace(/\/$/,"")+"/").href)}let w=O.shadowRoot;w.replaceChildren();let v=Ae("style");v.textContent=Ui.replaceAll("@media only screen and","@container canvas")+`
`+Array.from(_.querySelectorAll("head style")).map(G=>G.textContent).join(`
`)+`
:host{display:block;color:#111;font-family:Pretendard,Arial,sans-serif}.canvas-viewport{container-type:inline-size;container-name:canvas}.canvas-page{display:flow-root;background:white}.canvas-page *{box-sizing:border-box}`;let U=Ae("div","canvas-viewport"),Le=Ae("div","canvas-page");for(;_.body.firstChild;)Le.append(_.body.firstChild);U.append(Le),w.append(v,U);for(let G of _.querySelectorAll('head link[rel="stylesheet"]'))G.href.endsWith("/css/style.css")||(G.onload=X,w.prepend(G));Rt()}catch(T){y.textContent="\uD654\uBA74 \uBC18\uC601\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911: "+T.message}}t.current.page==="index.html"&&t.api&&t.api("/api/page?page=JavaScript/script.js").then(f=>{r||(u=f.fields[0].value,I())}).catch(()=>{}),l=new ResizeObserver(X),l.observe(k),Z(),$e(),I(),ti=()=>{r=!0,h?.abort(),clearTimeout(c),l?.disconnect(),m?.disconnect()}}var ii;function wi(e){ii=e}var ft="",Je=0,Ya,Oe,It,Cr="content",x=(e,t,i)=>{let s=document.createElement(e);return t&&(s.className=t),i!==void 0&&(s.textContent=i),s},_e=(e,t,i="")=>{let s=x("button",i,e);return s.type="button",s.onclick=t,s},_r={category:"\uCE74\uD14C\uACE0\uB9AC",card:"\uC791\uC5C5",aboutGroup:"\uC139\uC158",infoGroup:"\uC139\uC158",aboutItem:"\uC18C\uAC1C",infoItem:"\uB0B4\uC6A9",news:"\uC18C\uC2DD",detail:"\uC139\uC158",part:"\uB0B4\uC6A9",fixed:"\uAE30\uBCF8 \uC815\uBCF4",settings:"\uC124\uC815"};function Ct(e){if(e.attribute==="alt")return"\uC774\uBBF8\uC9C0 \uC124\uBA85";if(e.attribute==="poster")return"\uC601\uC0C1 \uD45C\uC9C0 \uC774\uBBF8\uC9C0";if(e.url)return e.type==="meta"?e.label.includes("image")?"\uACF5\uC720 \uC774\uBBF8\uC9C0":"\uACF5\uC720 \uC8FC\uC18C":e.tag==="a"?"\uC5F0\uACB0 \uC8FC\uC18C":e.tag==="iframe"?"YouTube \xB7 Vimeo \uC784\uBCA0\uB4DC \uC8FC\uC18C":["source","video"].includes(e.tag)?"\uC601\uC0C1 \uC8FC\uC18C":"\uC774\uBBF8\uC9C0 \uC8FC\uC18C";let t=e.label;return/og:title/.test(t)?"\uACF5\uC720 \uC81C\uBAA9":/description/.test(t)?"\uAC80\uC0C9 \xB7 \uACF5\uC720 \uC124\uBA85":/og:type/.test(t)?"\uCF58\uD150\uCE20 \uC720\uD615":/list title/.test(t)?"\uC791\uC5C5 \uC81C\uBAA9":/list category/.test(t)?"\uC791\uC5C5 \uBD84\uB958":/main content title/.test(t)?"\uCE74\uD14C\uACE0\uB9AC \uC774\uB984":/footnote/.test(t)?"\uCEA1\uC158":/date/.test(t)?"\uB0A0\uC9DC":/footnote/.test(t)?"\uAC01\uC8FC":/body.*kr|profile kr/.test(t)?"\uBCF8\uBB38 \xB7 \uD55C\uAD6D\uC5B4":/body.*en|profile en/.test(t)?"\uBCF8\uBB38 \xB7 English":/title/.test(t)?"\uC81C\uBAA9":/spec/.test(t)?"\uD504\uB85C\uC81D\uD2B8 \uC815\uBCF4":/label/.test(t)?"\uC18C\uC81C\uBAA9":/footer/.test(t)?"\uD558\uB2E8 \uBB38\uAD6C":/menu/.test(t)?"\uBA54\uB274 \uC774\uB984":/download/.test(t)?"\uB2E4\uC6B4\uB85C\uB4DC \uC774\uB984":/link/.test(t)?"\uB9C1\uD06C \uC774\uB984":/badge/.test(t)?"\uC0C1\uD0DC \uD45C\uC2DC":/header j/.test(t)?"\uCCAB \uD654\uBA74 \uC774\uB2C8\uC15C":e.type==="meta"?"\uD398\uC774\uC9C0 \uC81C\uBAA9":"\uB0B4\uC6A9"}function Qa(e,t,i="content"){return i==="content"&&t.current.source&&t.current.page!=="JavaScript/script.js"?Ua(e,t,Li,wi):(Ha(),Li(e,t,i))}function Li(e,t,i="content"){let{current:s,changes:r,update:c,act:l,upload:m,api:E,pages:u}=t;Cr=i,ft!==s.page&&(ft=s.page,Je=0,Oe=null);let h=s.sections||[];if(Ya!==s&&Oe){let I=h.filter(T=>T.kind===Oe.kind&&T.title===Oe.title&&T.thumbnail===Oe.thumbnail),f=I[Math.min(Oe.occurrence,I.length-1)];f&&(Je=h.indexOf(f))}if(ii){let I=h.findIndex(f=>f.id===ii);I>=0&&(Je=I),ii=null}Ya=s;let p=h.filter(I=>i==="settings"?I.kind==="settings":I.kind!=="settings"),b=h[Je];if(p.includes(b)||(b=p[0]),b&&(Je=h.indexOf(b),Oe={title:b.title,kind:b.kind,thumbnail:b.thumbnail,occurrence:h.filter(I=>I.kind===b.kind&&I.title===b.title&&I.thumbnail===b.thumbnail).indexOf(b)}),e.replaceChildren(),e.className="section-workbench",!b&&i==="settings"){e.append(x("p","empty","\uC774 \uD398\uC774\uC9C0\uC5D0\uB294 \uBCC4\uB3C4 \uC124\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));return}let N=x("aside","section-outline");N.setAttribute("aria-label","\uD398\uC774\uC9C0 \uC139\uC158");let L=x("div","outline-heading");L.append(x("h2","",i==="settings"?"\uD398\uC774\uC9C0 \uC124\uC815":"\uD398\uC774\uC9C0 \uAD6C\uC131"),x("span","count",String(p.filter(I=>!I.parent).length))),N.append(L),i==="content"&&N.append(x("p","outline-help","\u283F \uC190\uC7A1\uC774\uB97C \uB4DC\uB798\uADF8\uD574 \uC21C\uC11C\uB97C \uBC14\uAFB8\uC138\uC694."));let k=I=>{Je=h.indexOf(I),Oe={title:I.title,kind:I.kind,thumbnail:I.thumbnail,occurrence:h.filter(f=>f.kind===I.kind&&f.title===I.title&&f.thumbnail===I.thumbnail).indexOf(I)},Li(e,t,i)},O=I=>[I,...I.children.flatMap(f=>O(h.find(T=>T.id===f)))],y=async I=>{await l(I)};function W(I,f){return I&&I.id!==f.id&&(I.parent===f.parent&&I.movable&&f.movable&&(I.kind===f.kind||I.kind==="detail"||["infoItem","news"].includes(I.kind)&&["infoItem","news"].includes(f.kind))||I.kind==="card"&&(f.kind==="category"||f.kind==="card"))}function Q(I,f){I.ondragover=T=>{let S=h.find(_=>_.id===It);W(S,f)&&(T.preventDefault(),T.stopPropagation(),I.classList.add("drop-target"),T.dataTransfer.dropEffect="move")},I.ondragleave=()=>I.classList.remove("drop-target"),I.ondrop=T=>{T.preventDefault(),T.stopPropagation(),I.classList.remove("drop-target");let S=h.find(_=>_.id===It);It=null,W(S,f)&&(S.kind==="card"&&(f.kind==="category"||S.parent!==f.parent)?y({action:"transfer",id:S.id,parent:f.kind==="category"?f.id:f.parent,target:f.kind==="card"?f.id:void 0,position:T.clientY>I.getBoundingClientRect().top+I.getBoundingClientRect().height/2?"after":"before"}):y({action:"move",id:S.id,target:f.id,position:T.clientY>I.getBoundingClientRect().top+I.getBoundingClientRect().height/2?"after":"before"}))}}function se(I){let f=_e("\u283F",()=>{},"drag-handle");return f.draggable=!0,f.title="\uB4DC\uB798\uADF8\uD558\uC5EC \uC774\uB3D9 \xB7 \uD0A4\uBCF4\uB4DC \u2191 \u2193",f.setAttribute("aria-label",`${I.title} \uC21C\uC11C \uC774\uB3D9`),f.ondragstart=T=>{It=I.id,T.stopPropagation(),T.dataTransfer.effectAllowed="move",T.dataTransfer.setData("text/plain",I.id)},f.ondragend=()=>{It=null,e.querySelectorAll(".drop-target").forEach(T=>T.classList.remove("drop-target"))},f.onkeydown=T=>{["ArrowUp","ArrowDown"].includes(T.key)&&(T.preventDefault(),le(I,T.key==="ArrowUp"?-1:1))},f}function Ee(I){return h.filter(f=>f.parent===I.parent&&f.movable&&(f.kind===I.kind||I.kind==="detail"||["infoItem","news"].includes(I.kind)&&["infoItem","news"].includes(f.kind)))}function le(I,f){let T=Ee(I),S=T[T.indexOf(I)+f];S&&y({action:"move",id:I.id,target:S.id,position:f<0?"before":"after"})}function ue(I){let f=x("div","section-actions");if(!I.movable)return f;for(let[T,S]of[["\u2191",()=>le(I,-1)],["\u2193",()=>le(I,1)],["\uBCF5\uC81C",()=>y({action:"duplicate",id:I.id})],["\uC0AD\uC81C",()=>y({action:"remove",id:I.id})]]){let _=_e(T,S,T==="\uC0AD\uC81C"?"quiet danger":"quiet");if(_.setAttribute("aria-label",`${I.title} ${T==="\u2191"?"\uC704\uB85C \uC774\uB3D9":T==="\u2193"?"\uC544\uB798\uB85C \uC774\uB3D9":T}`),T==="\u2191"||T==="\u2193"){let w=Ee(I);_.disabled=T==="\u2191"?w.indexOf(I)===0:w.indexOf(I)===w.length-1}f.append(_)}return f}function ne(I,f){let T=x("div","outline-row"+(b?.id===I.id?" selected":""));if(T.style.setProperty("--depth",f),I.movable?T.append(se(I)):T.append(x("span","row-icon",I.kind==="settings"?"\u2699":"\u2022")),I.thumbnail){let w=x("img","outline-thumb");w.alt="",w.loading="lazy",w.referrerPolicy="no-referrer";try{let v=new URL(I.thumbnail,t.siteOrigin);["https:","http:"].includes(v.protocol)&&(w.src=v.href)}catch{}w.onerror=()=>{w.hidden=!0},T.append(w)}let S=I.kind==="detail"?String(h.filter(w=>w.kind==="detail").indexOf(I)+1).padStart(2,"0")+" \xB7 ":"",_=_e(S+I.title,()=>k(I),"section-select");_.setAttribute("aria-current",String(b?.id===I.id)),T.append(_),Q(T,I),N.append(T);for(let w of I.children){let v=h.find(U=>U.id===w);["part","detailPart"].includes(v.kind)||ne(v,f+1)}}p.filter(I=>!I.parent).forEach(I=>ne(I,0)),i==="content"&&s.rootKinds?.length&&N.append(_e(ft==="index.html"?"+ \uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00":"+ \uC139\uC158 \uCD94\uAC00",()=>t.add(null,s.rootKinds),"add-outline")),i==="content"&&ft==="index.html"&&N.append(_e("\uC601\uC5B4 \uD0C0\uC774\uD551 \uC18C\uAC1C \uD3B8\uC9D1 \u2197",()=>t.openIntro(),"intro-shortcut"));let Z=x("section","section-inspector");if(Z.setAttribute("aria-label","\uC120\uD0DD\uD55C \uC139\uC158 \uD3B8\uC9D1"),e.append(N,Z),!b){Z.append(x("h2","","\uCCAB \uC139\uC158\uC744 \uCD94\uAC00\uD558\uC138\uC694"),x("p","muted","\uC67C\uCABD\uC758 \uCD94\uAC00 \uBC84\uD2BC\uC5D0\uC11C \uC6D0\uD558\uB294 \uAD6C\uC131\uC744 \uC120\uD0DD\uD558\uC138\uC694."));return}let X=x("div","inspector-heading"),St=x("div");St.append(x("p","eyebrow",_r[b.kind]),x("h2","",b.title)),X.append(St,ue(b)),Z.append(X);let qe=document.getElementById("field-search").value.toLowerCase();function $e(I,f){if(!I)return;let T=x("img","asset-preview");if(T.alt="\uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30",T.loading="lazy",T.referrerPolicy="no-referrer",T.onerror=()=>{T.hidden=!0,f.append(x("span","image-fallback","\uC774\uBBF8\uC9C0\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C8 \uD30C\uC77C\uC774\uB098 \uC8FC\uC18C\uB97C \uC120\uD0DD\uD558\uC138\uC694."))},f.append(T),I.startsWith("/assets/uploads/"))t.localImage(I).then(S=>{T.isConnected&&(T.src=S)});else try{let S=new URL(I,t.siteOrigin);["https:","http:"].includes(S.protocol)&&(T.src=S.href)}catch{T.hidden=!0}}function Ue(I,f){let T=I.fieldIds.map(_=>s.fields.find(w=>w.id===_)).filter(Boolean),S=0;for(let _ of T){if(qe&&!`${I.title} ${Ct(_)} ${r[_.id]??_.value}`.toLowerCase().includes(qe))continue;S++;let w=x("div","edit-field"),v=x("label","field-label",Ct(_));v.htmlFor=_.id,w.append(v);let U=r[_.id]??_.value;if(_.type==="media"&&_.url&&_.tag==="img"&&$e(U,w),_.rich&&/title|date|label/.test(_.label)&&!U.includes("<a ")){let H=x("input");H.id=_.id,H.value=_.plain??U,H.oninput=()=>{let j=H.value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");j===_.value?delete r[_.id]:r[_.id]=j,c()},r[_.id]!==void 0&&(H.value=r[_.id].replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&amp;","&")),w.append(H),f.append(w);continue}if(_.rich){let H=x("div","rich-editor");H.contentEditable="true",H.setAttribute("role","textbox"),H.setAttribute("aria-multiline","true"),H.setAttribute("aria-label",Ct(_)),H.id=_.id,H.innerHTML=U;let j=()=>{let q=Ke(H.innerHTML);q===_.value?delete r[_.id]:r[_.id]=q,c()},Ye=x("div","rich-toolbar");for(let[q,Xa]of[["\uAD75\uAC8C","bold"],["\uAE30\uC6B8\uC784","italic"],["\uBAA9\uB85D","insertUnorderedList"],["\uB9C1\uD06C \uD574\uC81C","unlink"]]){let Pi=_e(q,()=>{H.focus(),document.execCommand(Xa),j()},"quiet");Pi.onmousedown=Va=>Va.preventDefault(),Ye.append(Pi)}let et=_e("\uB9C1\uD06C",()=>{let q=window.prompt("\uC5F0\uACB0\uD560 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694. \uAE00\uC744 \uC120\uD0DD\uD55C \uC0C1\uD0DC\uC5D0\uC11C \uB9C1\uD06C\uB97C \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","https://");if(q)try{Ke('<a href="'+q.replaceAll('"',"&quot;")+'">\uB9C1\uD06C</a>'),H.focus(),document.execCommand("createLink",!1,q),j()}catch{window.alert("\uC62C\uBC14\uB978 \uC6F9 \uC8FC\uC18C \uB610\uB294 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.")}},"quiet");et.onmousedown=q=>q.preventDefault(),Ye.append(et),H.oninput=j,H.onkeydown=q=>{q.key==="Enter"&&(q.preventDefault(),document.execCommand("insertLineBreak"),j())},H.onpaste=q=>{q.preventDefault(),document.execCommand("insertText",!1,q.clipboardData.getData("text/plain")),j()},w.append(Ye,H),f.append(w);continue}let Le=_.type==="text"&&U.length>65||/본문|각주|설명/.test(Ct(_))&&!_.url,G=x(Le?"textarea":"input");if(G.id=_.id,G.value=U,Le&&(G.rows=Math.min(12,Math.max(3,Math.ceil(U.length/75)))),G.oninput=()=>{G.value===_.value?delete r[_.id]:r[_.id]=G.value,c()},w.append(G),_.url&&_.tag!=="iframe"){let H=x("div","field-tools");if(H.append(_e(["img","video","source"].includes(_.tag)?"\uD30C\uC77C \uC120\uD0DD \xB7 \uAD50\uCCB4":"\uD30C\uC77C \uC5F0\uACB0",()=>m(_.id),"upload")),_.tag==="a"&&b.kind==="card"){let j=x("select");j.setAttribute("aria-label","\uC5F0\uACB0\uD560 \uC0C1\uC138 \uD398\uC774\uC9C0"),j.append(new Option("\uC0C1\uC138 \uD398\uC774\uC9C0 \uC120\uD0DD\u2026",""));for(let Ye of u.filter(et=>et.path.endsWith(".html")&&!["index.html","about.html","info.html"].includes(et.path)))j.append(new Option(Ye.path.replace(".html","").replaceAll("-"," "),Ye.path));j.value=U,j.onchange=()=>{j.value&&(G.value=j.value,G.oninput())},H.append(j)}w.append(H)}f.append(w)}return S}if(Ue(b,Z),b.kind==="card"){if(!b.fieldIds.some(T=>s.fields.find(S=>S.id===T)?.tag==="a")){let T=x("label","category-picker","\uC5F0\uACB0\uD560 \uC0C1\uC138 \uD398\uC774\uC9C0"),S=x("select");S.append(new Option("\uD398\uC774\uC9C0 \uC120\uD0DD\u2026",""));for(let _ of u.filter(w=>w.path.endsWith(".html")&&!["index.html","about.html","info.html"].includes(w.path)))S.append(new Option(_.path.replace(".html","").replaceAll("-"," "),_.path));S.onchange=()=>{S.value&&y({action:"linkCard",id:b.id,href:S.value})},T.append(S),Z.append(T)}let I=x("label","category-picker","\uC18C\uC18D \uCE74\uD14C\uACE0\uB9AC"),f=x("select");for(let T of h.filter(S=>S.kind==="category"))f.append(new Option(T.title,T.id));f.value=b.parent,f.onchange=()=>y({action:"transfer",id:b.id,parent:f.value}),I.append(f),Z.append(I)}for(let I of b.children){let f=h.find(T=>T.id===I);if(f.kind==="part"){let T=x("section","semantic-field");Ue(f,T);let S=x("details","field-options");S.append(x("summary","","\uD56D\uBAA9 \uAD6C\uC131"),ue(f)),T.append(S),Z.append(T)}else if(f.kind==="detailPart"){let T=x("section","inline-block"),S=x("div","inline-heading");S.append(se(f),x("h3","",f.thumbnail?"\uC774\uBBF8\uC9C0":Ct(s.fields.find(_=>_.id===f.fieldIds[0])||{label:"",type:"text"})),ue(f)),T.append(S),Ue(f,T),Q(T,f),Z.append(T)}else{let T=x("article",f.kind==="card"?"work-card":"child-card"),S=x("div","child-heading");S.append(se(f),_e(f.title,()=>k(f),"child-title"),ue(f)),T.append(S),f.kind==="card"?$e(f.thumbnail,T):T.append(x("p","child-summary",O(f).flatMap(_=>_.fieldIds).map(_=>s.fields.find(w=>w.id===_)).filter(_=>_?.type==="text").map(_=>_.plain??_.value).join(" ").slice(0,180))),T.append(_e("\uB0B4\uC6A9 \uD3B8\uC9D1 \u2192",()=>k(f),"edit-child")),Q(T,f),Z.append(T)}}let Rt=bi(b,ft);Rt.length&&Z.append(_e(b.kind==="category"?"+ \uC791\uC5C5 \uCE74\uB4DC \uCD94\uAC00":"+ \uB0B4\uC6A9 \uBE14\uB85D \uCD94\uAC00",()=>t.add(b,Rt),"add-block")),b.kind==="card"&&Z.append(x("p","editor-tip","\uCE74\uB4DC\uB294 \uD648 \uD654\uBA74\uC758 \uC378\uB124\uC77C\uC785\uB2C8\uB2E4. \uC0C1\uC138 \uD398\uC774\uC9C0 \uBCF8\uBB38\uC740 \uC67C\uCABD \uD504\uB85C\uC81D\uD2B8 \uBA54\uB274\uC5D0\uC11C \uD3B8\uC9D1\uD558\uC138\uC694.")),b.kind==="detail"&&Z.append(x("p","muted","\uC774\uBBF8\uC9C0\uC640 \uD14D\uC2A4\uD2B8\uB294 \uD558\uB098\uC758 \uC139\uC158\uC73C\uB85C \uD568\uAED8 \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC544\uB798 \uCD94\uAC00 \uBC84\uD2BC\uC73C\uB85C \uC774\uBBF8\uC9C0\uB098 \uC124\uBA85\uC744 \uB354 \uB123\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))}var xe=e=>typeof e=="string"&&(/^[a-z0-9][a-z0-9-]{0,79}\.html$/.test(e)||e===Ce),Me=e=>["index.html","about.html","info.html",Ce].includes(e),_t=e=>e.split("/").map(encodeURIComponent).join("/"),br=e=>new TextDecoder().decode(Uint8Array.from(atob(e.replace(/\s/g,"")),t=>t.charCodeAt(0)));function yi(e){let t="";for(let i=0;i<e.length;i+=8192)t+=String.fromCharCode(...e.subarray(i,i+8192));return btoa(t)}var Ze=class{constructor(t,i=fetch){this.env=t,this.fetcher=i}async request(t,i="GET",s){R(this.env.GITHUB_TOKEN,503,"GitHub \uBC1C\uD589 \uC5F0\uACB0\uC774 \uC544\uC9C1 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");let r=await this.fetcher(`https://api.github.com/repos/${_t(this.env.GITHUB_OWNER)}/${_t(this.env.GITHUB_REPO)}${t}`,{method:i,headers:{Authorization:`Bearer ${this.env.GITHUB_TOKEN}`,Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","Content-Type":"application/json"},credentials:"omit",cache:"no-store",redirect:"error",...s?{body:JSON.stringify(s)}:{}});if(!r.ok)throw r.status===401?new ie(401,"\uD1A0\uD070\uC774 \uB9CC\uB8CC\uB418\uC5C8\uAC70\uB098 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC5F0\uACB0\uD574 \uC8FC\uC138\uC694."):r.status===403?new ie(403,"\uD1A0\uD070\uC758 \uC800\uC7A5\uC18C \uAD8C\uD55C \uB610\uB294 GitHub \uC694\uCCAD \uD55C\uB3C4\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694."):r.status===404?new ie(404,"GitHub \uD30C\uC77C\uC774\uB098 \uC800\uC7A5\uC18C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."):[409,422].includes(r.status)?new ie(409,"\uC6D0\uACA9 \uB0B4\uC6A9\uC774 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uCD5C\uC2E0 \uB0B4\uC6A9\uC744 \uD655\uC778\uD55C \uB4A4 \uB2E4\uC2DC \uBC1C\uD589\uD574 \uC8FC\uC138\uC694."):new ie(502,"GitHub \uC694\uCCAD\uC744 \uC644\uB8CC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAD8C\uD55C\xB7\uC694\uCCAD \uD55C\uB3C4\uB97C \uD655\uC778\uD55C \uB4A4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.");return r.status===204?null:r.json()}async head(){let t=await this.request(`/git/ref/heads/${_t(this.env.GITHUB_BRANCH)}`),i=await this.request(`/git/commits/${t.object.sha}`);return{sha:t.object.sha,tree:i.tree.sha}}async connect(){let t=await this.fetcher("https://api.github.com/user",{headers:{Authorization:`Bearer ${this.env.GITHUB_TOKEN}`,Accept:"application/vnd.github+json"},credentials:"omit",cache:"no-store",redirect:"error"});R(t.ok,401,"GitHub \uD1A0\uD070\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");let i=await t.json();R(i.login===this.env.GITHUB_OWNER,403,`${this.env.GITHUB_OWNER} \uACC4\uC815\uC758 \uD1A0\uD070\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`);let s=await this.request("");return R(s.full_name===`${this.env.GITHUB_OWNER}/${this.env.GITHUB_REPO}`,403,"\uC5F0\uACB0\uD560 \uC800\uC7A5\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694."),{login:i.login}}async pages(){let t=await this.head(),i=await this.request(`/git/trees/${t.tree}?recursive=1`);return R(!i.truncated,502,"\uC800\uC7A5\uC18C \uD30C\uC77C \uBAA9\uB85D\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4."),{head:t,pages:i.tree.filter(s=>s.type==="blob"&&xe(s.path)).map(s=>({path:s.path,sha:s.sha}))}}async file(t,i=this.env.GITHUB_BRANCH){R(xe(t),422,"\uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC740 \uD30C\uC77C\uC785\uB2C8\uB2E4.");let s=await this.request(`/contents/${_t(t)}?ref=${encodeURIComponent(i)}`);return R(s.type==="file"&&s.encoding==="base64"&&s.size<7e5,422,"\uD3B8\uC9D1\uD560 \uC218 \uC788\uB294 \uD30C\uC77C \uD06C\uAE30\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4."),{sha:s.sha,source:br(s.content)}}async optionalFile(t,i){try{return await this.file(t,i)}catch(s){if(s.status===404)return null;throw s}}async publish({page:t,source:i,baseSha:s,assets:r=[],deleting:c=!1}){R(xe(t)&&(!c||!Me(t)),422,"\uC774 \uD30C\uC77C\uC740 \uBC1C\uD589\uD558\uAC70\uB098 \uB0B4\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");let l=await this.head(),m=await this.optionalFile(t,l.sha);if(R((m?.sha||null)===s,409,"GitHub Desktop \uB610\uB294 \uB2E4\uB978 \uCC3D\uC5D0\uC11C \uC774 \uD398\uC774\uC9C0\uB97C \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4. \uCD08\uC548\uC744 \uBCF4\uAD00\uD558\uACE0 \uCD5C\uC2E0 \uD398\uC774\uC9C0\uC640 \uBE44\uAD50\uD574 \uC8FC\uC138\uC694."),!c&&m?.source===i&&!r.length)return{sha:l.sha,unchanged:!0};let E=[];for(let p of r){let b=await this.request("/git/blobs","POST",{encoding:"base64",content:yi(p.bytes)});E.push({path:p.path,mode:"100644",type:"blob",sha:b.sha})}E.push(c?{path:t,mode:"100644",type:"blob",sha:null}:{path:t,mode:"100644",type:"blob",content:i});let u=await this.request("/git/trees","POST",{base_tree:l.tree,tree:E}),h=await this.request("/git/commits","POST",{message:`content: ${c?"unpublish":"update"} ${t} via admin`,tree:u.sha,parents:[l.sha]});return await this.request(`/git/refs/heads/${_t(this.env.GITHUB_BRANCH)}`,"PATCH",{sha:h.sha,force:!1}),{sha:h.sha,unchanged:!1}}};var je=class{constructor(t=globalThis.indexedDB,i="jay-portfolio-admin-v1"){this.ready=new Promise((s,r)=>{R(t,503,"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uCD08\uC548 \uC800\uC7A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC77C\uBC18 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uC5B4 \uC8FC\uC138\uC694.");let c=t.open(i,1);c.onupgradeneeded=()=>{c.result.createObjectStore("drafts",{keyPath:"page"}),c.result.createObjectStore("uploads",{keyPath:"name"})},c.onsuccess=()=>{c.result.onversionchange=()=>c.result.close(),s(c.result)},c.onerror=()=>r(new Error("\uBE0C\uB77C\uC6B0\uC800 \uC800\uC7A5 \uACF5\uAC04\uC744 \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC800\uC7A5 \uC124\uC815\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.")),c.onblocked=()=>r(new Error("\uB2E4\uB978 \uAD00\uB9AC\uC790 \uD0ED\uC744 \uB2EB\uC740 \uB4A4 \uB2E4\uC2DC \uC811\uC18D\uD574 \uC8FC\uC138\uC694."))})}async get(t,i){let s=await this.ready;return new Promise((r,c)=>{let l=s.transaction(t).objectStore(t).get(i);l.onsuccess=()=>r(l.result||null),l.onerror=()=>c(l.error)})}async all(t){let i=await this.ready;return new Promise((s,r)=>{let c=i.transaction(t).objectStore(t).getAll();c.onsuccess=()=>s(c.result),c.onerror=()=>r(c.error)})}async mutate(t,i,s){let r=await this.ready;return new Promise((c,l)=>{let m=r.transaction(t,"readwrite"),E=m.objectStore(t),u=E.get(i),h,p;u.onsuccess=()=>{try{h=s(u.result||null),h===null?E.delete(i):E.put(h)}catch(b){p=b,m.abort()}},m.oncomplete=()=>c(h),m.onabort=()=>l(p||new Error("\uCD08\uC548\uC744 \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uBE0C\uB77C\uC6B0\uC800 \uC800\uC7A5 \uC6A9\uB7C9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.")),m.onerror=()=>{}})}save(t,i){return this.mutate("drafts",t.page,s=>(R(i.revision===0?!s:s?.draftId===i.draftId&&s?.revision===i.revision,409,"\uB2E4\uB978 \uCC3D\uC5D0\uC11C \uCD08\uC548\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uBD88\uB7EC\uC640 \uC8FC\uC138\uC694."),{...t,draftId:s?.draftId||crypto.randomUUID(),revision:(s?.revision||0)+1,updatedAt:new Date().toISOString()}))}remove(t,i){return this.mutate("drafts",t,s=>(R(s?.draftId===i.draftId&&s?.revision===i.revision,409,"\uCD08\uC548\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uBD88\uB7EC\uC640 \uC8FC\uC138\uC694."),null))}};var ai=class{constructor(t,i,{store:s,githubFactory:r}={}){this.repository=t,this.siteOrigin=i,this.store=s,this.githubFactory=r||(c=>new Ze(c)),this.github=null}async connect(t){R(/^github_pat_[A-Za-z0-9_]+$/.test(t),401,"\uC774 \uC800\uC7A5\uC18C \uC804\uC6A9 fine-grained \uD1A0\uD070(github_pat_\uB85C \uC2DC\uC791)\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694."),this.disconnect();let i=this.githubFactory({...this.repository,GITHUB_TOKEN:t}),s=await i.connect();return this.store||(this.store=new je),await this.store.ready,this.github=i,s}disconnect(){this.github&&(this.github.env.GITHUB_TOKEN=""),this.github=null}async edit(t,i){let s=await this.store.get("drafts",t);if(s)return R(s.revision===i.revision&&s.draftId===i.draftId&&s.baseSha===i.baseSha,409,"\uCD08\uC548\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uBD88\uB7EC\uC640 \uC8FC\uC138\uC694."),s;R(i.revision===0,409,"\uCD08\uC548\uC774 \uC774\uBBF8 \uBC1C\uD589\uB418\uAC70\uB098 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");let r=await this.github.file(t);return R(r.sha===i.baseSha,409,"GitHub \uC6D0\uBCF8\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uBD88\uB7EC\uC640 \uC8FC\uC138\uC694."),{page:t,source:r.source,baseSha:r.sha,revision:0}}data(t,i){let{fields:s,...r}=he(t.source,t.page);return{...r,source:t.source,page:t.page,fields:s.map(({start:c,end:l,kind:m,...E})=>E),revision:t.revision,undoAvailable:!!t.undo?.length,draftId:t.draftId||null,baseSha:t.baseSha,updatedAt:t.updatedAt||null,conflict:i!==void 0&&i!==t.baseSha}}async request(t,{method:i="GET",body:s={}}={}){R(this.github,401,"GitHub\uC5D0 \uBA3C\uC800 \uC5F0\uACB0\uD574 \uC8FC\uC138\uC694.");let r=this.github,c=new URL(t,"https://admin.invalid"),l=c.pathname;if(l==="/api/pages"){let E=await r.pages(),u=await this.store.all("drafts"),h=new Map(E.pages.map(p=>[p.path,{...p,core:Me(p.path)}]));for(let p of u)h.set(p.page,{...h.get(p.page),path:p.page,draft:!0,newPage:!p.baseSha,revision:p.revision,core:Me(p.page)});return{pages:[...h.values()],head:E.head.sha}}if(l==="/api/deployment"){let E=c.searchParams.get("sha");R(/^[a-f0-9]{40}$/.test(E||""),422,"\uBC1C\uD589 \uBC88\uD638\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");let h=(await r.request(`/actions/runs?head_sha=${E}&per_page=20`)).workflow_runs.find(p=>/pages/i.test(p.name));return{status:h?.status||"queued",conclusion:h?.conclusion||null,url:h?.html_url||`https://github.com/${this.repository.GITHUB_OWNER}/${this.repository.GITHUB_REPO}/actions`}}if(l==="/api/uploads"&&i==="POST"){R(s instanceof Blob&&s.size<=8*1024*1024,413,"\uD30C\uC77C\uC740 8MB \uC774\uD558\uB85C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");let E=Nr(new Uint8Array(await s.slice(0,16).arrayBuffer()),s.type),u=`${crypto.randomUUID()}.${E}`;return await this.store.mutate("uploads",u,()=>({name:u,blob:s})),{name:u,url:`/assets/uploads/${u}`}}if(l.startsWith("/api/uploads/")){let E=await this.store.get("uploads",l.slice(13));return R(E,404,"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC784\uC2DC \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."),E.blob}if(l==="/api/projects"&&i==="POST"){R(xe(s.page)&&!Me(s.page)&&xe(s.template)&&!Me(s.template),422,"\uD504\uB85C\uC81D\uD2B8 \uC8FC\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694."),R(typeof s.title=="string"&&s.title.trim()&&s.title.length<200,422,"\uD504\uB85C\uC81D\uD2B8 \uC81C\uBAA9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694."),R(!await r.optionalFile(s.page),409,"\uAC19\uC740 \uC8FC\uC18C\uC758 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC788\uC2B5\uB2C8\uB2E4.");let E=await r.file(s.template);return this.data(await this.store.save({page:s.page,baseSha:null,source:xa(E.source,s.page,s.title.trim())},{revision:0}))}let m=c.searchParams.get("page");if(R(xe(m||""),422,"\uD398\uC774\uC9C0\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694."),l==="/api/page"){let E=await this.store.get("drafts",m),u=await r.optionalFile(m);return R(E||u,404,"\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),this.data(E||{page:m,source:u.source,baseSha:u.sha,revision:0},u?.sha||null)}if(l==="/api/draft"&&i==="DELETE")return await this.store.remove(m,s),{ok:!0};if(["/api/draft","/api/preview","/api/block","/api/backup","/api/structure","/api/undo"].includes(l)&&i==="POST"){let E=await this.edit(m,s),u=pt(E.source,m,s.changes||{});if(R(u.length<65e4,413,"\uD398\uC774\uC9C0\uAC00 \uB108\uBB34 \uD07D\uB2C8\uB2E4."),l==="/api/backup"){let h=[];for(let p of va(u)){let b=await this.store.get("uploads",p);b&&h.push({name:p,type:b.blob.type,base64:yi(new Uint8Array(await b.blob.arrayBuffer()))})}return{format:"jay-portfolio-backup-v1",page:m,baseSha:E.baseSha,savedAt:new Date().toISOString(),source:u,uploads:h}}if(l==="/api/preview"){let h="";if(m==="index.html"){let p=await this.store.get("drafts",Ce);h=he(p?.source||(await r.file(Ce)).source,Ce).fields[0].value}return{html:$t(u,m,this.siteOrigin,h)}}if(l==="/api/structure"){let h=he(E.source,m).sections,p=he(u,m).sections,b={...s.operation};for(let N of["id","parent","target"])if(b[N]){let L=h.findIndex(k=>k.id===b[N]);R(L>=0,422,"\uC139\uC158\uC744 \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694."),b[N]=p[L].id}E.undo=[...E.undo||[],u].slice(-10),u=Ni(u,m,b)}if(l==="/api/undo"&&(R(!Object.keys(s.changes||{}).length,409,"\uBA3C\uC800 \uD604\uC7AC \uBB38\uAD6C\uB97C \uC800\uC7A5\uD55C \uB4A4 \uAD6C\uC131\uC744 \uB418\uB3CC\uB824 \uC8FC\uC138\uC694."),R(E.undo?.length,422,"\uB418\uB3CC\uB9B4 \uAD6C\uC131 \uBCC0\uACBD\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."),E.undo=[...E.undo],u=E.undo.pop()),l==="/api/block"){let h=he(E.source,m).blocks.findIndex(p=>p.id===s.operation?.id);R(h>=0,422,"\uBE14\uB85D\uC744 \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694."),u=Fa(u,m,{...s.operation,id:he(u,m).blocks[h].id})}return this.data(await this.store.save({...E,source:u},s))}if(l==="/api/publish"&&i==="POST"){let E=await this.store.get("drafts",m);R(E&&E.revision===s.revision&&E.draftId===s.draftId,409,"\uBC1C\uD589\uD560 \uCD08\uC548\uC744 \uBA3C\uC800 \uC800\uC7A5\uD574 \uC8FC\uC138\uC694.");let u=[],h=0,p=va(E.source);R(p.length<=20,422,"\uD55C \uD398\uC774\uC9C0\uC5D0\uC11C \uC5C5\uB85C\uB4DC \uD30C\uC77C\uC740 \uCD5C\uB300 20\uAC1C\uAE4C\uC9C0 \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");for(let L of p){let k=await this.store.get("uploads",L);if(k)h+=k.blob.size,R(h<=24*1024*1024,413,"\uD55C \uBC88\uC5D0 \uBC1C\uD589\uD558\uB294 \uD30C\uC77C\uC740 \uD569\uACC4 24MB\uAE4C\uC9C0\uC785\uB2C8\uB2E4."),u.push({path:`assets/uploads/${L}`,bytes:new Uint8Array(await k.blob.arrayBuffer())});else try{await r.request(`/contents/assets/uploads/${L}?ref=${encodeURIComponent(this.repository.GITHUB_BRANCH)}`)}catch(O){throw O.status===404?new ie(422,"\uCD08\uC548\uC758 \uC784\uC2DC \uD30C\uC77C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC120\uD0DD\uD55C \uB4A4 \uBC1C\uD589\uD574 \uC8FC\uC138\uC694."):O}}let b=await r.publish({page:m,source:E.source,baseSha:E.baseSha,assets:u}),N=!1;try{await this.store.remove(m,s)}catch{N=!0}return{...b,cleanupPending:N,siteUrl:`${this.siteOrigin}/${m===Ce?"index.html":m}`}}if(l==="/api/unpublish"&&i==="POST")return R(!Me(m)&&!await this.store.get("drafts",m),409,"\uCD08\uC548\uC744 \uC815\uB9AC\uD55C \uB4A4 \uD504\uB85C\uC81D\uD2B8 \uD398\uC774\uC9C0\uB97C \uB0B4\uB824 \uC8FC\uC138\uC694."),{...await r.publish({page:m,baseSha:s.baseSha,deleting:!0}),message:"\uACF5\uAC1C \uD398\uC774\uC9C0 \uD30C\uC77C\uC744 \uB0B4\uB838\uC2B5\uB2C8\uB2E4. \uD648 \uCE74\uB4DC\uC640 \uB2E4\uB978 \uD398\uC774\uC9C0\uC758 \uB9C1\uD06C\uB3C4 \uC815\uB9AC\uD574 \uC8FC\uC138\uC694. Git \uC774\uB825\uC740 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4."};throw new ie(404,"\uC694\uCCAD\uD55C \uAE30\uB2A5\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}};function va(e){return[...new Set([...e.matchAll(/\/assets\/uploads\/([a-f0-9-]{36}\.(?:png|jpg|gif|webp|pdf|mp4))/g)].map(t=>t[1]))]}function Nr(e,t){let i=String.fromCharCode(...e.subarray(0,12));if(t==="image/png"&&e[0]===137&&i.slice(1,8)===`PNG\r

`)return"png";if(t==="image/jpeg"&&e[0]===255&&e[1]===216&&e[2]===255)return"jpg";if(t==="image/gif"&&/^GIF8[79]a/.test(i))return"gif";if(t==="image/webp"&&i.startsWith("RIFF")&&i.slice(8)==="WEBP")return"webp";if(t==="application/pdf"&&i.startsWith("%PDF-"))return"pdf";if(t==="video/mp4"&&i.slice(4,8)==="ftyp")return"mp4";throw new ie(422,"PNG, JPG, GIF, WebP, PDF, MP4 \uD30C\uC77C\uB9CC \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")}var si=class extends ai{constructor(t,i,s){super(t,i),this.apiOrigin=s}async connect(t){if(this.disconnect(),!this.apiOrigin)throw new ie(503,"Google \uB85C\uADF8\uC778 \uC11C\uBC84 \uC124\uC815\uC774 \uC544\uC9C1 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");let i={...this.repository,GITHUB_TOKEN:t},s=async(m,E={})=>{let u=new URL(m),h=`/repos/${this.repository.GITHUB_OWNER}/${this.repository.GITHUB_REPO}`;if(u.origin!=="https://api.github.com"||!u.pathname.startsWith(h))throw new Error("Invalid API target");return fetch(this.apiOrigin+"/github"+u.pathname.slice(h.length)+u.search,{...E,headers:{...E.headers,Authorization:`Bearer ${i.GITHUB_TOKEN}`}})},r=await fetch(this.apiOrigin+"/session",{headers:{Authorization:`Bearer ${t}`},credentials:"omit",cache:"no-store",redirect:"error"});if(!r.ok)throw new ie(r.status,"jayyoungjunkim@gmail.com \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.");let c=await r.json(),l=new Ze(i,s);return await l.request(""),this.store||(this.store=new je),await this.store.ready,this.github=l,c}};var ni=new si(Hi,tt,li),B=e=>document.getElementById(e),Dt=!1,Bt=[],F=null,ge={},Fi="content",bt=!1,Ga,ki,Ve=new Set,Xe={"index.html":"HOME","about.html":"ABOUT","info.html":"INFO","JavaScript/script.js":"\uD648 \uD0C0\uC774\uD551 \uC18C\uAC1C"},xi=e=>e in Xe;function z(e,t=!1){B("notice").textContent=e,B("notice").className=t?"error":""}function Se(){return Object.keys(ge).length>0}function ri(){let e=bt||!Dt||!F;for(let t of["save","preview","export-draft"])B(t).disabled=e;B("undo-structure").disabled=e||!F?.undoAvailable,B("save").disabled=e||!Se(),B("publish").disabled=e||!Se()&&!F?.revision||F?.conflict,B("discard").disabled=e||!F?.revision,B("unpublish").hidden=!F||xi(F.page)||!F.baseSha,B("unpublish").disabled=e||F?.conflict||!!F?.revision||Se(),B("unpublish").title="\uC800\uC7A5\uD55C \uCD08\uC548\uACFC \uBBF8\uC800\uC7A5 \uB0B4\uC6A9\uC744 \uBA3C\uC800 \uC815\uB9AC\uD55C \uB4A4 \uD398\uC774\uC9C0\uB97C \uB0B4\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",F&&(B("draft-status").textContent=Se()?"\uC800\uC7A5\uD558\uC9C0 \uC54A\uC740 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.":F.revision?`\uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uCD08\uC548 \xB7 ${new Date(F.updatedAt).toLocaleString("ko-KR")}`:"\uD604\uC7AC \uBC1C\uD589\uB41C \uB0B4\uC6A9")}async function ce(e){if(bt)return;bt=!0,B("workspace").inert=!0,B("project-form").inert=!0,B("logout").disabled=!0;let t=[...document.querySelectorAll("#workspace button, #workspace input, #workspace textarea, #project-dialog button")],i=t.map(s=>s.disabled);t.forEach(s=>s.disabled=!0);try{await e()}catch(s){z(s.message||"\uC694\uCCAD\uC744 \uC644\uB8CC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",!0)}finally{bt=!1,B("workspace").inert=!1,B("project-form").inert=!1,B("logout").disabled=!1,t.forEach((s,r)=>s.disabled=i[r]),ri()}}async function ae(e,t={}){try{return await ni.request(e,t)}catch(i){throw i.status===401&&oi(!0),i instanceof TypeError?new Error("GitHub\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uBC1C\uD589 \uC911\uC774\uC5C8\uB2E4\uBA74 \uC218\uC815 \uC774\uB825\uC5D0\uC11C \uBC18\uC601 \uC5EC\uBD80\uB97C \uBA3C\uC800 \uD655\uC778\uD574 \uC8FC\uC138\uC694."):i}}function oi(e=!1){Dt=!1,ni.disconnect(),B("login").hidden=!1,B("workspace").hidden=!0,B("logout").hidden=!0,B("account").textContent="",e&&z("\uC5F0\uACB0\uC774 \uD574\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4. Google\uB85C \uB2E4\uC2DC \uB85C\uADF8\uC778\uD558\uBA74 \uD3B8\uC9D1\uD558\uB358 \uB0B4\uC6A9\uC744 \uACC4\uC18D \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",!0),ri()}async function Dr(e){await ce(async()=>{try{let t=await ni.connect(e);e="",Dt=!0,B("account").textContent=t.login,B("login").hidden=!0,B("workspace").hidden=!1,B("logout").hidden=!1,await Re(),F||await Pe("index.html"),z("Google\uB85C \uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4. \uCD08\uC548\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4.")}catch(t){throw oi(),t}})}function Br(){if(location.origin!==tt){B("connection").textContent="\uAD00\uB9AC\uC790 \uD654\uBA74\uC740 \uC628\uB77C\uC778 \uD648\uD398\uC774\uC9C0\uC5D0\uC11C \uC5F4\uC5B4 \uC8FC\uC138\uC694. \uB85C\uCEEC \uD30C\uC77C\uC5D0\uC11C\uB294 \uB85C\uADF8\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";return}if(!ci||!li){B("connection").textContent="Google \uB85C\uADF8\uC778 \uC5F0\uACB0\uC744 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uCD5C\uCD08 \uC11C\uBE44\uC2A4 \uC124\uC815\uC774 \uC644\uB8CC\uB418\uBA74 \uB85C\uADF8\uC778 \uBC84\uD2BC\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.";return}B("connection").textContent="Google \uB85C\uADF8\uC778 \uBC84\uD2BC\uC744 \uBD88\uB7EC\uC624\uACE0 \uC788\uC2B5\uB2C8\uB2E4.";let e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async=!0,e.onload=()=>{google.accounts.id.initialize({client_id:ci,callback:t=>Dr(t.credential),auto_select:!1}),google.accounts.id.renderButton(B("google-login"),{type:"standard",theme:"outline",size:"large",text:"signin_with"}),B("connection").textContent="jayyoungjunkim@gmail.com \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uC138\uC694."},e.onerror=()=>{B("connection").textContent="Google \uB85C\uADF8\uC778 \uBC84\uD2BC\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC778\uD130\uB137 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uACE0 \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694."},document.head.append(e)}async function Re(){Bt=(await ae("/api/pages")).pages,Mi()}function Mi(){B("pages").replaceChildren();let e=B("page-search").value.toLowerCase();for(let t of[!0,!1]){let i=document.createElement("p");i.className="group-name",i.textContent=t?"\uAE30\uBCF8 \uD398\uC774\uC9C0":"\uD504\uB85C\uC81D\uD2B8",B("pages").append(i);let s=Bt.filter(r=>xi(r.path)===t&&`${Xe[r.path]||""} ${r.path}`.toLowerCase().includes(e));s.sort((r,c)=>t?Object.keys(Xe).indexOf(r.path)-Object.keys(Xe).indexOf(c.path):r.path.localeCompare(c.path));for(let r of s){let c=document.createElement("button");if(c.className=F?.page===r.path?"active":"",c.textContent=Xe[r.path]||r.path.replace(".html","").replaceAll("-"," "),r.draft){let l=document.createElement("span");l.className="draft-dot",l.textContent=r.newPage?"\uC0C8 \uCD08\uC548":"\uCD08\uC548",c.append(l)}c.onclick=()=>ce(async()=>{await Ai()&&await Pe(r.path)}),B("pages").append(c)}}}async function Ai(){return!Se()||await ze("\uC800\uC7A5\uD558\uC9C0 \uC54A\uC740 \uBCC0\uACBD\uC0AC\uD56D","\uC800\uC7A5\uD558\uC9C0 \uC54A\uC740 \uB0B4\uC6A9\uC744 \uBC84\uB9AC\uACE0 \uC774\uB3D9\uD560\uAE4C\uC694? \uC800\uC7A5\uD55C \uCD08\uC548\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4.","\uC774\uB3D9")}async function Pe(e){F=await ae(`/api/page?page=${encodeURIComponent(e)}`),ge={},Fi="content";for(let t of B("tabs").children)t.setAttribute("aria-selected",String(t.dataset.tab==="content"));B("field-search").value="",B("page-title").textContent=Xe[e]||F.title.replace(" \u2014 Jay Youngjun Kim",""),B("page-path").textContent=e,B("conflict").hidden=!F.conflict,Mi(),He(),ri()}var Nt=new Map;async function Or(e){if(Nt.has(e))return Nt.get(e);try{let t=await ae("/api/uploads/"+e.split("/").pop()),i=URL.createObjectURL(t);return Ve.add(i),Nt.set(e,i),i}catch{return new URL(e,tt).href}}function He(){F&&Qa(B("fields"),{current:F,changes:ge,pages:Bt,siteOrigin:tt,localImage:Or,api:ae,update:ri,upload:e=>{Ga=e,B("file-upload").click()},act:Ka,add:Sr,openIntro:()=>ce(async()=>{await Ai()&&await Pe("JavaScript/script.js")})},Fi)}async function Ka(e){await ce(async()=>{let t=F.sections.find(i=>i.id===e.id);if(!(e.action==="remove"&&!await ze("\uC139\uC158 \uC0AD\uC81C",`\u201C${t?.title||"\uC120\uD0DD\uD55C \uC139\uC158"}\u201D\uACFC \uC548\uC758 \uB0B4\uC6A9\uC744 \uCD08\uC548\uC5D0\uC11C \uC0AD\uC81C\uD560\uAE4C\uC694? \uBC1C\uD589 \uC804\uAE4C\uC9C0 \uD648\uD398\uC774\uC9C0\uB294 \uC720\uC9C0\uB429\uB2C8\uB2E4.`,"\uC0AD\uC81C"))){if(F=await ae(`/api/structure?page=${encodeURIComponent(F.page)}`,{method:"POST",body:{...Ot(),operation:e}}),ge={},e.action==="add"){let i=e.title||zt[e.template],s=F.sections.filter(r=>r.title===i);s.length&&wi(s.at(-1).id)}await Re(),He(),z("\uAD6C\uC131\uC744 \uCD08\uC548\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uBC1C\uD589\uD558\uBA74 \uD648\uD398\uC774\uC9C0\uC5D0 \uBC18\uC601\uB429\uB2C8\uB2E4.")}})}var Wa,Ja;function Sr(e,t,i={}){Ja=i,Wa=e?.id||null,B("section-form").reset();let s=B("section-type");s.replaceChildren();for(let r of t)s.append(new Option(zt[r],r));B("section-dialog-title").textContent=e?`${e.title}\uC5D0 \uCD94\uAC00`:"\uC0C8 \uC139\uC158 \uCD94\uAC00",B("section-dialog").showModal()}B("section-form").onsubmit=e=>{e.preventDefault();let t={...Ja,action:"add",parent:Wa,template:B("section-type").value,title:B("section-name").value};B("section-dialog").close(),Ka(t)};B("undo-structure").onclick=()=>ce(async()=>{Se()&&!await ze("\uAD6C\uC131 \uB418\uB3CC\uB9AC\uAE30","\uD604\uC7AC \uD3B8\uC9D1 \uC911\uC778 \uBB38\uAD6C\uC640 \uB9C8\uC9C0\uB9C9 \uAD6C\uC131 \uBCC0\uACBD\uC744 \uC774\uC804 \uC0C1\uD0DC\uB85C \uB418\uB3CC\uB9B4\uAE4C\uC694?","\uB418\uB3CC\uB9AC\uAE30")||(F=await ae(`/api/undo?page=${encodeURIComponent(F.page)}`,{method:"POST",body:{...Ot(),changes:{}}}),ge={},await Re(),He(),z("\uB9C8\uC9C0\uB9C9 \uAD6C\uC131 \uBCC0\uACBD\uC744 \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4."))});function Ot(){return{revision:F.revision,draftId:F.draftId,baseSha:F.baseSha,changes:ge}}async function Za(){F=await ae(`/api/draft?page=${encodeURIComponent(F.page)}`,{method:"POST",body:Ot()}),ge={},await Re(),He()}function ze(e,t,i="\uD655\uC778"){return new Promise(s=>{let r=B("confirm-dialog");B("confirm-title").textContent=e,B("confirm-message").textContent=t,B("confirm-yes").textContent=i;let c=!1,l=m=>{c||(c=!0,r.close(),s(m))};B("confirm-yes").onclick=()=>l(!0),B("confirm-no").onclick=()=>l(!1),r.oncancel=m=>{m.preventDefault(),l(!1)},r.showModal()})}B("logout").onclick=async()=>{if(!bt&&await Ai()){clearTimeout(ki),F=null,ge={},Bt=[],Nt.clear(),B("preview-frame").srcdoc="",B("fields").replaceChildren(),B("pages").replaceChildren();for(let e of Ve)URL.revokeObjectURL(e);Ve.clear(),oi(),z("\uB85C\uADF8\uC544\uC6C3\uD588\uC2B5\uB2C8\uB2E4.")}};B("page-search").oninput=Mi;B("field-search").oninput=He;B("tabs").onclick=e=>{let t=e.target.closest("[data-tab]");if(t){Fi=t.dataset.tab;for(let i of B("tabs").children)i.setAttribute("aria-selected",String(i===t));He()}};B("save").onclick=()=>ce(async()=>{await Za(),z("\uCD08\uC548\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uD648\uD398\uC774\uC9C0\uC5D0\uB294 \uC544\uC9C1 \uBC18\uC601\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")});B("publish").onclick=()=>ce(async()=>{if(!await ze("\uD648\uD398\uC774\uC9C0\uC5D0 \uBC1C\uD589",`${F.page}\uC758 \uCD08\uC548\uC744 \uACF5\uAC1C \uD648\uD398\uC774\uC9C0\uC5D0 \uBC18\uC601\uD560\uAE4C\uC694? \uBCC0\uACBD\uC0AC\uD56D\uACFC \uC5C5\uB85C\uB4DC \uD30C\uC77C\uC740 \uACF5\uAC1C GitHub \uC800\uC7A5\uC18C\uC5D0 \uAE30\uB85D\uB429\uB2C8\uB2E4.`,"\uBC1C\uD589"))return;(Se()||!F.revision)&&await Za();let e=await ae(`/api/publish?page=${encodeURIComponent(F.page)}`,{method:"POST",body:{revision:F.revision,draftId:F.draftId}});z(e.unchanged?"\uBC1C\uD589\uB41C \uB0B4\uC6A9\uACFC \uAC19\uC2B5\uB2C8\uB2E4.":"GitHub\uC5D0 \uBC18\uC601\uD588\uC2B5\uB2C8\uB2E4. \uD648\uD398\uC774\uC9C0 \uBC30\uD3EC \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."),e.cleanupPending&&z("GitHub \uBC18\uC601\uC740 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCD08\uC548 \uC815\uB9AC\uC5D0 \uC2E4\uD328\uD588\uC73C\uBBC0\uB85C \uC218\uC815 \uC774\uB825\uC744 \uD655\uC778\uD55C \uB4A4 \uCD08\uC548\uC744 \uC815\uB9AC\uD574 \uC8FC\uC138\uC694."),await Re(),await Pe(F.page),e.unchanged||ja(e.sha,0)});async function ja(e,t){clearTimeout(ki);try{let i=await ae(`/api/deployment?sha=${e}`);if(i.status==="completed"){z(i.conclusion==="success"?"\uD648\uD398\uC774\uC9C0 \uBC30\uD3EC\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"GitHub\uC5D0\uB294 \uC800\uC7A5\uD588\uC9C0\uB9CC \uD648\uD398\uC774\uC9C0 \uBC30\uD3EC\uAC00 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uBC30\uD3EC \uC774\uB825\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.",i.conclusion!=="success");let s=document.createElement("a");s.href=i.url,s.textContent="\uBC30\uD3EC \uC774\uB825 \u2197",s.target="_blank",s.rel="noopener",B("notice").append(s);return}t<20&&Dt?ki=setTimeout(()=>ja(e,t+1),1e4):z("GitHub\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uBC30\uD3EC\uAC00 \uACC4\uC18D \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4. GitHub Actions\uC5D0\uC11C \uC0C1\uD0DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.")}catch{z("GitHub\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uBC30\uD3EC \uC0C1\uD0DC\uB294 GitHub Actions\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.")}}B("preview").onclick=()=>ce(async()=>{let{html:e}=await ae(`/api/preview?page=${encodeURIComponent(F.page)}`,{method:"POST",body:Ot()});for(let i of Ve)URL.revokeObjectURL(i);Ve.clear(),Nt.clear();let t=[...new Set(e.match(/\/assets\/uploads\/[a-f0-9-]{36}\.(?:png|jpg|gif|webp|pdf|mp4)/g)||[])];for(let i of t)try{let s=await ae(`/api/uploads/${i.split("/").at(-1)}`,{blob:!0}),r=URL.createObjectURL(s);Ve.add(r),e=e.replaceAll(i,r)}catch{}B("preview-frame").srcdoc=e,B("preview-dialog").showModal()});B("mobile-preview").onclick=()=>{let e=B("preview-frame").classList.toggle("mobile");B("mobile-preview").textContent=e?"\uC804\uCCB4 \uD3ED":"\uBAA8\uBC14\uC77C \uD3ED"};for(let e of document.querySelectorAll("[data-close]"))e.onclick=()=>B(e.dataset.close).close();B("discard").onclick=()=>ce(async()=>{if(!await ze("\uCD08\uC548 \uBC84\uB9AC\uAE30","\uC800\uC7A5\uD55C \uCD08\uC548\uACFC \uD654\uBA74\uC758 \uBBF8\uC800\uC7A5 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uBC84\uB9B4\uAE4C\uC694? \uD604\uC7AC \uBC1C\uD589\uB41C \uD648\uD398\uC774\uC9C0\uB294 \uC720\uC9C0\uB429\uB2C8\uB2E4.","\uCD08\uC548 \uBC84\uB9AC\uAE30"))return;await ae(`/api/draft?page=${encodeURIComponent(F.page)}`,{method:"DELETE",body:{revision:F.revision,draftId:F.draftId}});let e=!F.baseSha;ge={},await Re(),await Pe(e?"index.html":F.page),z("\uCD08\uC548\uC744 \uBC84\uB838\uC2B5\uB2C8\uB2E4.")});B("unpublish").onclick=()=>ce(async()=>{if(!await ze("\uACF5\uAC1C \uD398\uC774\uC9C0 \uB0B4\uB9AC\uAE30","\uC774 \uC8FC\uC18C\uC758 \uD398\uC774\uC9C0\uAC00 \uB354 \uC774\uC0C1 \uC5F4\uB9AC\uC9C0 \uC54A\uAC8C \uB429\uB2C8\uB2E4. \uD648 \uCE74\uB4DC\uC640 \uB2E4\uB978 \uD398\uC774\uC9C0\uC758 \uC5F0\uACB0\uC740 \uBCC4\uB3C4\uB85C \uC815\uB9AC\uD574\uC57C \uD569\uB2C8\uB2E4. GitHub\uC758 \uACFC\uAC70 \uC774\uB825\uC740 \uACF5\uAC1C \uC0C1\uD0DC\uB85C \uB0A8\uC2B5\uB2C8\uB2E4.","\uD398\uC774\uC9C0 \uB0B4\uB9AC\uAE30"))return;let e=await ae(`/api/unpublish?page=${encodeURIComponent(F.page)}`,{method:"POST",body:{baseSha:F.baseSha}});ge={},F=null,await Re(),await Pe("index.html"),z(e.message)});B("new-project").onclick=()=>ce(async()=>{if(!await Ai())return;B("project-form").reset();let e=B("project-form").elements.template;e.replaceChildren();for(let t of Bt.filter(i=>!xi(i.path)&&!i.newPage)){let i=document.createElement("option");i.value=t.path,i.textContent=t.path,e.append(i)}B("project-dialog").showModal()});B("project-form").onsubmit=e=>{e.preventDefault(),ce(async()=>{let t=new FormData(e.target),i=t.get("slug")+".html";await ae("/api/projects",{method:"POST",body:{title:t.get("title"),page:i,template:t.get("template")}}),B("project-dialog").close(),ge={},await Re(),await Pe(i),z("\uC0C8 \uD504\uB85C\uC81D\uD2B8 \uCD08\uC548\uC744 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uBCF5\uC81C\uB41C \uBB38\uAD6C\xB7\uC774\uBBF8\uC9C0\xB7\uB9C1\uD06C\uB97C \uC218\uC815\uD574 \uC8FC\uC138\uC694.")})};B("file-upload").onchange=()=>{let e=B("file-upload").files[0];B("file-upload").value="",e&&ce(async()=>{if(e.size>8*1024*1024)throw new Error("\uD30C\uC77C\uC740 8MB \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574 \uC8FC\uC138\uC694. \uD070 \uC601\uC0C1\uC740 \uC678\uBD80 \uC601\uC0C1 \uC8FC\uC18C\uB85C \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");let t=await ae("/api/uploads",{method:"POST",headers:{"Content-Type":e.type},body:e});ge[Ga]=t.url,He(),z("\uD30C\uC77C\uC744 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uBC1C\uD589\uD558\uBA74 GitHub\uC5D0 \uC5C5\uB85C\uB4DC\uB429\uB2C8\uB2E4.")})};B("history").onclick=()=>window.open("https://github.com/jayyoungjun-kim/jayyoungjun-kim.github.io/commits/master/","_blank","noopener");B("remote-preview").onclick=()=>window.open(`https://jayyoungjun-kim.github.io/${F.page==="JavaScript/script.js"?"index.html":F.page}`,"_blank","noopener");B("export-draft").onclick=()=>ce(async()=>{let e=await ae(`/api/backup?page=${encodeURIComponent(F.page)}`,{method:"POST",body:Ot()}),t=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),i=document.createElement("a");i.href=t,i.download=`${F.page.replaceAll("/","-")}-draft.json`,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3),z("\uCD08\uC548\uACFC \uC5F0\uACB0\uB41C \uC784\uC2DC \uD30C\uC77C\uC744 \uBC31\uC5C5\uD588\uC2B5\uB2C8\uB2E4. \uD1A0\uD070\uC740 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")});window.addEventListener("pagehide",()=>{ni.disconnect(),Dt=!1});window.addEventListener("pageshow",e=>{e.persisted&&oi(!0)});window.addEventListener("beforeunload",e=>{Se()&&(e.preventDefault(),e.returnValue="")});Br();})();
