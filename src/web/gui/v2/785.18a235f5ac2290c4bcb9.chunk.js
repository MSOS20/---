!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9ed79861-050e-4ee2-ae0b-209bed9bcbc6",e._sentryDebugIdIdentifier="sentry-dbid-9ed79861-050e-4ee2-ae0b-209bed9bcbc6")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"30bb3b259cbd4ba916a329c4a18ea5d88a4aeb61"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[785],{52919:(e,t,a)=>{a.d(t,{D7:()=>r,Jp:()=>d,NT:()=>u,N_:()=>h,iS:()=>s,vE:()=>i,v_:()=>o,xI:()=>c,z6:()=>m});var n=a(8711),l=a(83199);const o=n.default.img.withConfig({displayName:"styled__Illustration",componentId:"sc-1yhntgl-0"})(["margin:0 auto;"]),r=(0,n.default)(l.Text).withConfig({displayName:"styled__StyledText",componentId:"sc-1yhntgl-1"})(["display:block;"]),d=n.default.div.withConfig({displayName:"styled__TextHeader",componentId:"sc-1yhntgl-2"})(["margin-bottom:",";font-weight:700;"],(0,l.getSizeBy)(2)),c=n.default.div.withConfig({displayName:"styled__StaticCheckmarks",componentId:"sc-1yhntgl-3"})(["margin-top:",";margin-bottom:",";"],(0,l.getSizeBy)(2),(0,l.getSizeBy)(5)),s=n.default.div.withConfig({displayName:"styled__CheckmarkLine",componentId:"sc-1yhntgl-4"})(["display:flex;align-items:center;"]),i=(0,n.default)(l.Icon).withConfig({displayName:"styled__StyledIcon",componentId:"sc-1yhntgl-5"})(["margin-right:4px;height:18px;> use{fill:",";}"],(0,l.getColor)("primary")),u=(0,n.default)(i).withConfig({displayName:"styled__HelpIcon",componentId:"sc-1yhntgl-6"})(["vertical-align:middle;"]),m=n.default.div.withConfig({displayName:"styled__LearnMoreSection",componentId:"sc-1yhntgl-7"})(["margin-top:",";"],(0,l.getSizeBy)(4)),h=n.default.a.withConfig({displayName:"styled__Link",componentId:"sc-1yhntgl-8"})(["text-decoration:underline;color:",";&:visited{color:",";}"],(0,l.getColor)("success"),(0,l.getColor)("success"))},40785:(e,t,a)=>{a.r(t),a.d(t,{DashboardContent:()=>ze,default:()=>Fe});var n=a(96540),l=a(47767),o=a(43124);var r=a(56820),d=a(3914),c=a(69765),s=a(35304),i=a(21591),u=a(68980),m=a(54621),h=a(91517),b=a(28738);const g=()=>n.createElement(b.A,{title:"Loading charts...","data-testid":"dashboardLoading"});a(62953);var p=a(67602),f=a(3705),v=a(86652),E=a(58388),y=a(11128),C=a(47762),A=a(58168),x=a(83199),w=a(49667);const I=e=>{let{compact:t,...a}=e;const[,l]=(0,p.A)("addChartModal"),o=(0,C.TG)().length>0;return n.createElement(x.Flex,(0,A.A)({column:!0,alignItems:"center",justifyContent:"center",overflow:{vertical:"auto"},flex:!0,basis:0,"data-testid":"dashboardBlankSlate"},a),!t&&n.createElement(x.Flex,{as:"img",src:w.$,height:"35%"}),n.createElement(x.H3,{margin:[6,0,2]},"Empty Dashboard"),o?n.createElement(n.Fragment,null,n.createElement(x.Text,{textAlign:"center"},"Let\u2019s fill your dashboard."),n.createElement(x.Text,{textAlign:"center"},"Go to a node view or node list and add one chart to this Dashboard or just use")):n.createElement(n.Fragment,null,n.createElement(x.Text,{textAlign:"center"},"You don't have any available node to retrieve charts from."),n.createElement(x.Text,{textAlign:"center"},"Please verify your nodes' state and/or connect a new node to Netdata")),!t&&n.createElement(x.Button,{margin:[8,0,0,0],onClick:l,disabled:!o,label:"Add chart","data-testid":"dashboardBlankSlate-addChart"}))};a(3064),a(41393),a(98992),a(72577),a(81454);var k=a(15327),D=a(74618),N=a(45765),S=a(67990),_=a(69388),T=a(23931),z=a(57605),F=a(67544),M=(a(9920),a(3949),a(45387)),B=a(36196),L=a(80925),R=a(13752),j=a(92815),H=a(72582),G=a(64125),U=a(44644),K=a(29217);const O=()=>n.createElement(x.Flex,{column:!0,width:"300px",gap:1},n.createElement(x.TextSmall,{strong:!0},"Not finding a chart?"),n.createElement(x.TextSmall,null,"When selecting",n.createElement(x.TextSmall,{strong:!0,margin:[0,1]},"All Nodes"),"you search and add charts using their context. The outcome will be a composite chart over All Nodes, like on the Overview tab."),n.createElement(x.TextSmall,null,"When you select a",n.createElement(x.TextSmall,{strong:!0,margin:[0,1]},"specific Node"),"you search and add charts using their name. The result is a specific chart over the node selected, like on Single Node tab.")),Y=()=>n.createElement(K.A,{isBasic:!0,plain:!0,content:O,align:"bottom"},n.createElement(x.Icon,{name:"question",color:"textDescription",size:"small"})),J=e=>{let{spaceId:t,roomId:a,value:l,onChange:o,options:r,testid:c,selectedNodeIds:s}=e;const i=null===l||void 0===l?void 0:l.value,u=(0,L.e)(),m=(0,T.R7)(i&&a,i),h=(0,d.dg)(),b=(0,U.CS)({type:"chart",entity:i}),g=(0,n.useMemo)((()=>{u.getNodes({id:"newDashboardChart"}).forEach((e=>e.destroy()));const{info:e,valueRange:n,height:l,colors:o}=(0,M.Ay)(m),r=u.makeChart({attributes:{id:"newDashboardChart",contextScope:[i],host:h?"".concat(window.envSettings.agentApiUrl,"/api/v2"):"".concat(window.envSettings.apiUrl,"/api/v3/spaces/").concat(t,"/rooms/").concat(a),roomId:a,info:e,valueRange:n,height:l+207,enabledNavigation:!1,selectedNodes:s,...o&&{colors:o},toolboxElements:[H.default,R.default,j.default,G.A]}});return u.getRoot().appendChild(r),r}),[u,i]);return(0,n.useLayoutEffect)((()=>{g&&b&&(g.updateAttributes(b),g.trigger("fetch"))}),[g,a,i,b]),(0,n.useLayoutEffect)((()=>()=>g.destroy()),[]),n.createElement(x.Flex,{gap:6,column:!0},n.createElement(x.Flex,{gap:2,column:!0,"data-testid":c},n.createElement(x.Flex,{gap:2},n.createElement(x.H5,null,"Context in room overview"),n.createElement(Y,null)),n.createElement(x.Select,{options:r,value:l,onChange:o,isClearable:!0,form:c})),l&&n.createElement(x.Flex,{height:{min:"320px"},column:!0},n.createElement(B.A,{chart:g,margin:[2,0,0]})))};var W=a(18202);const P={label:"All Nodes",value:"all-nodes"},X={label:"All Nodes (no reachable nodes)",value:"all-nodes",isDisabled:!0},q=e=>{let{id:t,isLive:a,nodeStatus:n,name:l}=e;return{label:a?l:"".concat(l," (").concat(n,")"),value:t,isDisabled:!a}},Q=e=>({value:e,label:e}),V=e=>{let{id:t,onClose:a}=e;const l=(0,d.vt)(),o=(0,c.ID)(),r=(0,u.fz)(t,"name"),s=(0,c.XA)("name"),i=(0,S.CK)(),m=(0,C.BU)().length>0,h=(0,S.nj)(),b=(0,C.Gt)(i),g=(0,F.nM)(t),p=m?P:X,[f,v]=(0,n.useState)(p.value),[E,y]=(0,n.useState)(null),A=(0,n.useMemo)((()=>[p,...b.map(q)]),[b]),w=(0,n.useMemo)((()=>A.find((e=>{let{value:t}=e;return t===f}))),[A,f]),I=(0,n.useCallback)((e=>{v((null===e||void 0===e?void 0:e.value)||p.value),y(null)}),[]),M=(0,n.useMemo)((()=>f===p.value?[]:[f]),[f]),B=(0,_.A)(o,M,{spaceId:l});if(B)throw B;const R=(0,T.R7)(o),j=(0,n.useMemo)((()=>Object.keys(R).sort(((e,t)=>e.localeCompare(t,void 0,{sensitivity:"accent",ignorePunctuation:!0}))).map(Q)),[R]);(0,n.useEffect)((()=>{j.length&&w&&y((e=>e||j[0].value))}),[E,j,w]);const H=(0,n.useMemo)((()=>E&&Q(E)),[E]),G=(0,n.useCallback)((e=>y(null===e||void 0===e?void 0:e.value)),[]),U=R[E],K=(0,L.e)(),O=(0,n.useCallback)((()=>{const e=K.getNode({id:"newDashboardChart"}),t=(0,W.A)(e.getAttributes());g(t.contextScope,t,(()=>setTimeout(a)))}),[f,U]),Y=!E,V=(0,z.A)();return(0,n.useEffect)((()=>(V(!0),()=>V(!1)))),n.createElement(k.GO,{onClose:a},n.createElement(D.z,{onClose:a,title:"Add Chart to Dashboard"},n.createElement(x.Button,{label:"Add chart",icon:"plus",onClick:O,disabled:Y,"data-testid":"addChartModal-addChart-button"})),n.createElement(N.U,null,"Add Charts to ",r),n.createElement(k.Yv,{overflow:"visible"},n.createElement(x.Flex,{gap:6,column:!0},n.createElement(x.Flex,{gap:2,column:!0,"data-testid":"addChartModal-selectNodes"},n.createElement(x.H5,null,"Nodes in ",s),n.createElement(x.Select,{options:A,value:w,onChange:I,isLoading:!h,isClearable:!0,form:"addChartModal-selectNodes"})),H&&n.createElement(J,{id:t,spaceId:l,roomId:o,value:H,onChange:G,options:j,testid:"addChartModal-selectChart",selectedNodeIds:M}))))};var Z=a(83084),$=a(76777),ee=a(27467),te=a(16579),ae=a(63314),ne=(a(14905),a(8872),a(79304)),le=a(44554);const oe=function(e,t){let{containerIds:a,containers:n,layout:l}=e,{extraKey:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r={},d=a.reduce(((e,a)=>{const d=(0,le.bj)(l[a],"vertical");return e[a]={...n[a],level:0,id:a,subMenuIds:d.reduce(((e,n)=>{let{id:l}=n;return"text"!==t(l).type&&e.push("".concat(a,"|").concat(l)),e}),[]),subMenuChartIds:[],link:"".concat((0,ne.A)("menu_".concat(a))),forceVisibility:!0,arFlavour:"anomaly",extraKey:o},d.forEach((e=>{const n="".concat(a,"|").concat(e.id),l=t(e.id);"text"!==l.type&&(r[n]={name:l.title,level:1,id:n,menuGroupId:a,chartIds:[],link:"".concat((0,ne.A)("menu_".concat(a,"_submenu_").concat(n))),arFlavour:"anomaly",showAR:!1,extraKey:o})})),e}),{});return{menuGroupIds:a,menuGroupById:d,subMenuById:r}};var re=a(75793);const de=e=>{let{id:t}=e;const a=(0,u.fz)(t,"name");return n.createElement(re.A,{TextComponent:x.H0,text:a})};var ce=a(46741);const se=()=>{const[,e]=(0,p.A)("addChartModal"),t=(0,ce.JT)("dashboard:Update");return(0,C.TG)().length>0?n.createElement(x.Button,{neutral:!0,flavour:"hollow",label:"Add chart",icon:"chart_added",onClick:e,"data-testid":"dashboardHeaderActionBar-addChart-button","data-ga":"action-bar::click-add-chart::cust-dashboard",disabled:!t}):null},ie=e=>{let{id:t}=e;const a=(0,F.Kv)(t),l=(0,ce.JT)("dashboard:Update");return n.createElement(x.Button,{neutral:!0,flavour:"hollow",label:"Add text",icon:"text_add",onClick:a,"data-testid":"dashboardHeaderActionBar-addText-button","data-ga":"action-bar::click-add-text::cust-dashboard",disabled:!l})};var ue=a(71835),me=a(2025),he=a(64754);const be=e=>{let{id:t}=e;const[,a]=(0,ue.A)(),l=(0,me.DH)(t,{onFail:a}),o=(0,u.fz)(t,"processing"),r=(0,u.fz)(t,"isOwner"),d=(0,u.zN)(t);return n.createElement(he.A,{permission:r?"dashboard:UpdateSelf":"dashboard:Update",flavour:"hollow",label:"Save",icon:"save",onClick:()=>l(),disabled:d,isLoading:o,"data-testid":"dashboardHeaderActionBar-save-button","data-ga":"action-bar::click-save::cust-dashboard"})},ge=e=>{let{id:t}=e;return n.createElement(x.Flex,{gap:2},n.createElement(se,null),n.createElement(ie,{id:t}),n.createElement(be,{id:t}))},pe=(0,n.memo)(ge);var fe=a(58384),ve=a(87659),Ee=a(78969),ye=a(92138),Ce=a(8018),Ae=a(52919);const xe=e=>{let{close:t}=e;const[a,o]=(0,n.useState)(!0),r=(0,u.zi)(),[d,s]=(0,u.TN)({id:r,key:"name"}),i=(0,u.oj)("slug"),h=(0,ye.A)(i),[b,g]=(0,n.useState)(d),p=(0,me.DH)(r),f=(0,m.DF)(),v=(0,l.Zp)(),E=(0,c.r9)(),y=b.length>0,C=a&&y&&b!==d,A=(0,n.useCallback)((()=>{s(b),p().then((e=>{let{data:a}=e;const{slug:n}=a;if(h===n)return void t();const l="".concat(E,"/dashboards/").concat(n);f({id:r,slug:n,path:l}),v(l,{replace:!0}),t()}))}),[t,b,r,E,h]);return n.createElement(k.GO,{onClose:t,"data-testid":"renameDashboard-modal"},n.createElement(D.z,{onClose:t,title:"Rename Dashboard"},n.createElement(x.Button,{label:"Save Changes",onClick:A,disabled:!C})),n.createElement(N.U,{"data-testid":"renameDashboard-title"},"Rename dashboard ",d),n.createElement(k.Yv,null,n.createElement(Ce.A,{value:b,label:"Name",onChange:e=>{g(e.target.value)},isValid:a,setIsValid:o,isDirty:y,instantFeedback:"all",onKeyDown:e=>e.keyCode===Ee.I7&&C&&A(),"data-testid":"renameDashboard-input"}),n.createElement(x.Flex,{column:!0,justifyContent:"between",height:"100%",margin:[8,0,16],"data-testid":"renameDashboard-learnMoreSection"},n.createElement(Ae.z6,null,n.createElement(Ae.NT,{name:"help"}),n.createElement(x.Text,null,"Learn more about Dashboards")," ",n.createElement(Ae.N_,{href:"https://learn.netdata.cloud/docs/cloud/visualize/dashboards",target:"_blank",rel:"noopener noreferrer"},"In our documentation")),n.createElement(Ae.v_,{src:w.$}))))},we=()=>{const e=(0,l.Zp)(),t=(0,d.bq)(),a=(0,c.QW)(),o=(0,u.zi)(),{name:r}=(0,u.fz)(o),s=(0,c.XA)("name"),[i,,m,h]=(0,ve.A)(),[b,,g,p]=(0,ve.A)(),f=(0,n.useCallback)((()=>{e("/spaces/".concat(t,"/rooms/").concat(a,"/dashboards"))}),[t,a]),v=(0,F.A_)(o,{onSuccess:f}),E=(0,ce.JT)("dashboard:Update"),y=(0,ce.JT)("dashboard:Delete");return n.createElement(n.Fragment,null,n.createElement(fe.A,{category:"dashboard",context:"title",testId:"dashboardDropdown"},(e=>{let{close:t}=e;return n.createElement(n.Fragment,null,n.createElement(fe.t,{icon:"pencilOutline",onClick:()=>{t(),g()},"data-testid":"renameDashboard-option","data-ga":"dropdown-item::click-rename-dashboard::cust-dashboard",disabled:!E},"Rename Dashboard"),n.createElement(fe.t,{icon:"trashcan",color:"errorText",onClick:()=>{t(),m()},"data-testid":"removeDashboard-option","data-ga":"dropdown-item::click-remove-dashboard::cust-dashboard",disabled:!y},"Delete Dashboard"))})),b&&n.createElement(xe,{close:p}),i&&n.createElement(x.ConfirmationDialog,{confirmLabel:"Yes, delete","data-ga":"delete-dashboard-dialog","data-testid":"deleteDashboardDialog",handleConfirm:v,handleDecline:h,message:n.createElement(n.Fragment,null,"You are about to delete ",n.createElement("strong",null,r)," from ",n.createElement("strong",null,s),".",n.createElement("br",null),"Are you sure you want to continue?"),title:"Delete ".concat(r)}))},Ie=e=>{let{id:t}=e;return n.createElement(x.Flex,{justifyContent:"between",padding:[3],"data-testid":"dashboardHeader"},n.createElement(x.Flex,{alignItems:"center"},n.createElement(we,null),n.createElement(de,{id:t})),n.createElement(pe,{id:t}))},ke=(0,n.memo)(Ie);var De=a(86008);const Ne=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{navigator:a}=(0,n.useContext)(l.jb),o=(0,l.zy)();(0,n.useEffect)((()=>{if(!t)return;const n=a.block((t=>{const a={...t,retry(){n(),t.retry()}};e(a)}));return n}),[a,e,t,o])}((0,n.useCallback)((t=>{"REPLACE"!==t.action?window.confirm(e)&&t.retry():t.retry()}),[e]),t)},Se=()=>((0,$.A)(),null),_e=(0,n.memo)((e=>{let{id:t}=e;const[a,,,l]=(0,p.A)("addChartModal"),{fullyLoaded:o,cardIds:r,name:d}=(0,u.fz)(t);(e=>{const t=(0,u.zN)(e);Ne("Are you sure you want to leave this dashboard?\nChanges will be lost.",!t)})(t);const[s,{width:i}]=(0,f.A)(),m=(0,c.ID)(),[h,b]=(0,ee.N9)("chartName",{key:m,extraKey:t,flavour:"val"}),g=(0,y.w7)({extraKey:"dashboard",merge:!1,scoped:!0}),A=((0,C.TG)(g),(0,v.Xc)(t)),x=(0,E.T6)(t);return n.createElement(ae.Ay,{feature:"custom-dashboard"},n.createElement(te.A,{getObject:x,ids:A,getMenu:oe,extraKey:t},n.createElement(Se,null),n.createElement(Z.A,{ref:s,overflow:"hidden"},n.createElement(ke,{id:t}),o&&r.length>0&&n.createElement(De.A,{id:t,containerWidth:i,initialChartName:h,onChartNameChange:b}),o&&0===r.length&&n.createElement(I,null),a&&n.createElement(V,{id:t,onClose:l}))))}));var Te=a(85686);const ze=e=>{let{id:t}=e;const a=(0,d.vt)(),l=(0,d.bq)(),o=(0,c.ID)(),r=(0,c.QW)(),s=(0,u.oj)("state");return(0,h.A)(t,{spaceId:a,spaceSlug:l,roomId:o,roomSlug:r})?n.createElement(g,null):n.createElement(ae.Ay,{feature:"Dashboard",dashboardId:t},"notAvailable"==s?n.createElement(Te.A,{flavour:"dashboard"}):n.createElement(_e,{id:t}))},Fe=(0,n.memo)((e=>{let{customDashboardId:t}=e;(0,s.A)(),(e=>{const{dashboardSlug:t=e}=(0,l.g)(),a=(0,o.Xv)(),r=(0,o.Tf)();(0,n.useEffect)((()=>{r!==t&&a(t)}),[r,t]),(0,n.useEffect)((()=>()=>a(null)),[])})(t),(0,r.z1)(t);const a=(0,u.zi)(t),d=(0,u.oj)("slug");(0,m.ZB)({title:d,id:a,destination:d,type:"dashboards",droppable:!0,droppableProps:{dashboardId:a,dropArea:!0}});const c=(0,i.RQ)();return n.createElement(ze,{id:c?a:null})}))}}]);