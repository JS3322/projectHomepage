(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{482:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/2020_SeoulVirtualSchool",function(){return c(905)}])},603:function(a,b,c){"use strict";c.d(b,{P4:function(){return j},Et:function(){return k},Pg:function(){return l}});var d=c(5893),e=c(1664),f=c(5675),g=c(3236),h=c(917),i=function(a){var b=a.src,c=a.width,d=a.quality;return"https://localhost/".concat(b,"?w=").concat(c,"&q=").concat(d||75)},j=function(a){var b=a.children,c=a.href,e=a.title,h=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{loader:i,src:h,alt:e,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,d.jsx)(g.AB,{href:c,target:"_blank",children:(0,d.jsx)(g.xv,{mt:2,children:e})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})},k=function(a){var b=a.children,c=a.id,h=a.title,j=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsx)(e.default,{href:"/works/".concat(c),children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{loader:i,src:j,alt:h,className:"grid-item-thumbnail",placeholder:"blur"}),(0,d.jsx)(g.AB,{href:"/works/".concat(c),children:(0,d.jsx)(g.xv,{mt:2,fontSize:20,children:h})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})})},l=function(){return(0,d.jsx)(h.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(a,b,c){"use strict";var d=c(5893),e=c(3319),f=c(9008),g=c(603),h={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(a){var b=a.children,c=a.title;return(0,d.jsx)(e.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:h,transition:{duration:0.4,type:"easeInOut"},style:{position:"relative"},children:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsxs)(f.default,{children:[(0,d.jsxs)("title",{children:[c," - Clean Code"]}),(0,d.jsx)("meta",{property:"og:title",content:c})]}),b,(0,d.jsx)(g.Pg,{})]})})}},117:function(a,b,c){"use strict";c.d(b,{h_:function(){return u},Dx:function(){return r},WZ:function(){return s},dh:function(){return t}});var d=c(5893),e=c(1664),f=c(6052),g=c(5031),h=c(7294),i=c(7375);function j(){return(j=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function k(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var l=["htmlWidth","htmlHeight","alt"],m=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],n=h.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,f=k(a,l);return h.createElement("img",j({width:c,height:d,ref:b,alt:e},f))}),o=(0,f.Gp)(function(a,b){var c,d,e,l,o,p,q,r,s,t,u,v,w,x,y,z=a.fallbackSrc,A=a.fallback,B=a.src,C=a.srcSet,D=a.align,E=a.fit,F=a.loading,G=a.ignoreFallback,H=a.crossOrigin,I=k(a,m),J=null!=F||G|| void 0===z&& void 0===A,K=(d=(c=j({},a,{ignoreFallback:J})).loading,e=c.src,l=c.srcSet,o=c.onLoad,p=c.onError,q=c.crossOrigin,r=c.sizes,s=c.ignoreFallback,t=(0,h.useState)("pending"),u=t[0],v=t[1],(0,h.useEffect)(function(){v(e?"loading":"pending")},[e]),w=(0,h.useRef)(),x=(0,h.useCallback)(function(){if(e){y();var a=new Image();a.src=e,q&&(a.crossOrigin=q),l&&(a.srcset=l),r&&(a.sizes=r),d&&(a.loading=d),a.onload=function(a){y(),v("loaded"),null==o||o(a)},a.onerror=function(a){y(),v("failed"),null==p||p(a)},w.current=a}},[e,q,l,r,o,p,d]),y=function(){w.current&&(w.current.onload=null,w.current.onerror=null,w.current=null)},(0,i.Gw)(function(){if(!s)return"loading"===u&&x(),function(){y()}},[u,x,s]),s?"loaded":u),L=j({ref:b,objectFit:E,objectPosition:D},J?I:(0,g.CE)(I,["onError","onLoad"]));return"loaded"!==K?A||h.createElement(f.m$.img,j({as:n,className:"chakra-image__placeholder",src:z},L)):h.createElement(f.m$.img,j({as:n,src:B,srcSet:C,crossOrigin:H,loading:F,className:"chakra-image"},L))});g.Ts&&(o.displayName="Image");var p=c(3236),q=c(8485),r=function(a){var b=a.children;return(0,d.jsxs)(p.xu,{children:[(0,d.jsx)(e.default,{href:"/works",children:(0,d.jsx)(p.rU,{children:"Works"})}),(0,d.jsxs)("span",{children:[" ",(0,d.jsx)(q.XC,{})," "]}),(0,d.jsx)(p.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},s=function(a){var b=a.src,c=a.alt;return(0,d.jsx)(o,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},t=function(a){var b=a.src,c=a.alt;return(0,d.jsxs)("video",{controls:!0,children:[(0,d.jsx)("source",{src:b,alt:c,type:"video/mp4"}),(0,d.jsx)("strong",{children:"your browser does not support the video tag"})]})},u=function(a){var b=a.children;return(0,d.jsx)(p.Ct,{colorScheme:"green",mr:2,children:b})}},905:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(3236),f=c(2857),g=c(117);b.default=function(){return(0,d.jsx)(f.Z,{title:"2020 서울대학교 모바일가상학교 통합관리시스템",children:(0,d.jsxs)(e.W2,{children:[(0,d.jsxs)(g.Dx,{children:["서울대학교 모바일가상학교 통합관리시스템 ",(0,d.jsx)(e.Ct,{children:"2020"})]}),(0,d.jsx)(g.dh,{src:"/video/project_2020_s.mp4",alt:"2019_HyundaiMotorsMindTravelBook"}),(0,d.jsx)(e.QI,{my:4,children:(0,d.jsx)(e.HC,{children:"데이터 연산 추천서비스 API 개발 및 VR, AR 통합 웹시스템 기획 및 구현과 AWS 마이그레이션 작업"})}),(0,d.jsxs)(e.aV,{ml:4,my:4,children:[(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(e.Ct,{mr:2,children:"Stack"}),(0,d.jsx)("span",{children:"Java8 | JavaScriptES6 | Django2.2 "})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(g.h_,{children:"ENV"}),(0,d.jsx)("span",{children:"Oracle DB 19c | ORM | Tomcat8.5 | Nginx1.14 | Spring Cloud | batch | JPA | Hibernate | AWS EC2 | AWS route 53 | Oracle ADW | centOS7 | ELK | Nest | Storybook6 | babel7 | gulp4 | react16 | node-sass4 | tailwind"})]})]}),(0,d.jsx)(e.X6,{as:"h4",fontSize:16,my:6,children:(0,d.jsx)(e.M5,{children:"주요 업무"})}),(0,d.jsxs)(e.QI,{my:4,children:[(0,d.jsx)(e.HC,{children:"데이터 수집과 통계분석/그래프/리포트 작성. ELK 환경 제공 및 Logstash로 회원접속 로그와 추천서비스 알고리즘 테스트 케이스를 위한 데이터 수집 시스템 개발과 일정기간 동안 사용할 통계 데이터는 oracle view table사용하여 연산작업 줄이며, 중복 문구 및 교환문구를 한 문단으로 저장하고, 교환문구의 포인터를 저장하여 교환작업으로 검색, 트래픽을 고려한 로직 재구현."}),(0,d.jsx)(e.HC,{children:"진단 문항 관리 시스템 기획, 구현 및 최적화 작업. 문항관련 테이블의 update 기록을 수치화하여 테이블 관계성과 조인의 편의성을 고려한 db 모델링 기획 및 shutdownhook 활용 및 lazy generator 활용하여 데이터 늦은 연산작업으로 비동기 체감이 늦는 이슈, 예외처리 고려."}),(0,d.jsx)(e.HC,{children:"자동 카테고리화 시스템 개발. 가중치 변화 적용 시스템 개발하여 데이터 카테고리화 실시간 적용하고 데이터를 각 유형으로 나누기 위해 유클리디 기반 통계 모델링 개발."}),(0,d.jsx)(e.HC,{children:"밀도기반 클러스터링 업데이트. 수시로 바뀌는 클라이언트의 요구사항에 맞춰 실시간 통계 알고리즘을 구현하여 hash값으로 기존 클러스트링 추천 데이터값을 통합 실시간 업데이트 모듈 서비스를 개발하여 솔루션 추천 및 효과예정을 시뮬레이션하여 가중치 서비스 개발."}),(0,d.jsx)(e.HC,{children:"AWS CLOUD 데이터 마이그레이션 작업. centos6 컨테이너를 제공 않는 문제와 cost와 이식성을 고려하여 레거시 앱을 vm 마이그레이션을 적용하였고, bastion 호스트를 구현하여 보안 관리와 스프링 클라우드를 통한 MSA구조로 앱서비스 제공."}),(0,d.jsx)(e.HC,{children:"통합관리 시스템 웹개발 PM 업무. 5억 연구비의 프로젝트에 통합관리 시스템 웹개발 파트 PM으로 참여하여 5개의 기업에 패키지 솔루션 납품 및 추천 시스템 기획, 개발하여 매출액 40% 증가 성과이력."})]})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=482)}),_N_E=a.O()}])