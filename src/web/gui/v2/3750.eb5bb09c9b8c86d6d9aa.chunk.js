!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7b7f67f5-e18c-474a-965d-53b795758a0e",e._sentryDebugIdIdentifier="sentry-dbid-7b7f67f5-e18c-474a-965d-53b795758a0e")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"30bb3b259cbd4ba916a329c4a18ea5d88a4aeb61"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[3750],{63750:(e,t,l)=>{l.r(t),l.d(t,{default:()=>_});l(9391),l(41393),l(81454),l(62953);var n=l(96540),a=l(63950),o=l.n(a),r=l(83199),c=l(47731),d=l(71835),s=l(92155),i=l(63314),u=l(32089),m=(l(17333),l(3064),l(14905),l(98992),l(54520),l(72577),l(8872),l(8711));const g=(0,m.default)(r.MenuDropdown).attrs((e=>({background:"transparent",hideShadow:!0,height:{max:"300px"},width:{max:"600px"},overflow:"auto",padding:[2],...e}))).withConfig({displayName:"styled__CheckboxesContainer",componentId:"sc-8uj6na-0"})([""]),f=e=>{let{index:t,item:l,onItemClick:a}=e;const{group:o,label:c,value:d,node:s={}}=l,{selected:i,disabled:u}=s,m=o&&t>0?[3,0,1,0]:[1,0];return n.createElement(r.Flex,{padding:m},o?n.createElement(r.Flex,{gap:2,alignItems:"center"},n.createElement(r.Icon,{name:o.iconName,size:"small"}),n.createElement(r.Text,{color:o.textColor||"textFocus"},o.label)):n.createElement(r.Flex,null,n.createElement(r.Checkbox,{checked:i,disabled:u,onChange:e=>{u||a({value:d,label:c,checked:e})},label:c,value:d,labelPosition:"right"})))};var b=l(47193);const p={live:{iconName:"connectivityStatusLive",label:"Live",textColor:"primary"},offline:{iconName:"connectivityStatusOffline",label:"Offline",textColor:"textFocus"},stale:{iconName:"connectivityStatusStale",label:"Stale",textColor:"textFocus"}},E=(e,t)=>{var l;return t&&Object.keys(t)&&null!==(l=t[e])&&void 0!==l&&l.length?[{group:p[e]},...t[e]]:[]},v=e=>{let{selectedNodes:t,setSelectedNodes:l,activeNodesLimit:a=0}=e;const{nodes:o}=(0,b.A)(),[r,c]=(0,n.useState)([]),d=(0,n.useCallback)((e=>{let{value:n,label:a,checked:o}=e;o&&!t.find((e=>e.value==n))?l((e=>[...e,{value:n,label:a}])):!o&&t.find((e=>e.value==n))&&l((e=>e.filter((e=>e.value!=n))))}),[t]);return(0,n.useEffect)((()=>{o&&c(((e,t,l)=>{const n=e.reduce(((e,n)=>{const a={...n},o=n.isLive?"live":n.isOffline?"offline":"stale";t.find((e=>{let{value:t}=e;return t==n.id}))?a.selected=!0:l==t.length&&(a.disabled=!0);const r={label:n.name,value:n.id,node:a};return e[o]?e[o]=[...e[o],r]:e[o]=[r],e}),{});return[...E("live",n),...E("offline",n),...E("stale",n)]})(o,t,a))}),[o,t]),n.createElement(g,{items:r,Item:f,onItemClick:d,searchMargin:[0,0,4,0],hasSearch:!0})};var x=l(6586),h=l(28738),y=l(58168);const N=e=>{let{isTitle:t,value:l,selectedNodes:a,setSelectedNodes:c=o(),children:d}=e;const s=(0,n.useCallback)((()=>{t||c((e=>e.filter((e=>e.value!=l))))}),[t,l,a,c]),i={gap:1,height:"18px",alignItems:"center",padding:[0,2],margin:[0,0,2,0],round:!0,...t?{}:{background:"nodeBadgeBackground"}};return n.createElement(r.Flex,i,!t&&n.createElement(r.Icon,{name:"x",size:"small",onClick:s,color:"text",cursor:"pointer"}),d)},S=e=>{let{selectedNodes:t,setSelectedNodes:l}=e;return t.length?n.createElement(r.Flex,{flexWrap:!0,gap:2},n.createElement(N,{isTitle:!0},n.createElement(r.TextBig,null,"Selected Nodes:")),t.map((e=>{let{label:a,...o}=e;return n.createElement(N,(0,y.A)({key:o.value,selectedNodes:t,setSelectedNodes:l},o),n.createElement(r.TextSmall,{color:"text"},a))}))):null};var k=l(12602),w=l(73865);const C=e=>{let{selectedNodes:t,setSelectedNodes:l,loading:a,error:o}=e;const{loaded:c,currentPlan:d,maxNodes:s}=(0,w.A)();return n.createElement(r.Flex,{column:!0,gap:4},a&&c?n.createElement(h.A,{height:"280px",title:"Saving selection..."}):n.createElement(n.Fragment,null,n.createElement(r.Flex,{column:!0,margin:[3,0,0,0],gap:4},n.createElement(r.TextBig,null,"Your current"," ",n.createElement(r.TextBig,{strong:!0},d.class," (",d.version,")")," ","plan does not allow more than ",n.createElement(r.TextBig,{strong:!0},s," active nodes"),"."),n.createElement(r.TextBig,null,"To proceed, select the ",n.createElement(r.TextBig,{strong:!0},s," Nodes")," that you wish to keep active. Any Nodes beyond this limit will be deactivated."),o&&n.createElement(r.Flex,{gap:2,alignItems:"center"},n.createElement(r.Icon,{name:"warning_triangle",size:"medium",color:"warning"}),n.createElement(r.TextBig,null,"For some reason, we coudn't save your selection. Please retry."))),n.createElement(u.A,null),n.createElement(v,{selectedNodes:t,setSelectedNodes:l,activeNodesLimit:s}),n.createElement(u.A,null),n.createElement(r.Flex,{column:!0,gap:4},n.createElement(S,{selectedNodes:t,setSelectedNodes:l}),n.createElement(r.TextBig,null,"Remember, you can"," ",n.createElement(k.A,null,n.createElement(r.TextBig,{color:"primary"},"upgrade your space back to the Business plan"))," ","for unlimited access at any time."),n.createElement(r.TextBig,null,"The node selection isn't a commitment, you can modify the active Nodes any time on the"," ",n.createElement(x.A,null,n.createElement(r.TextBig,{color:"primary"},"Space Settings page")),"."))))},I=(0,m.default)(r.ModalContent).attrs((e=>{let{isMobile:t}=e;return{width:t?{base:"95vw"}:{base:150}}})).withConfig({displayName:"styled__PreferredNodesModalContent",componentId:"sc-1v8zr4l-0"})([""]);var A=l(47762),T=l(29848),B=l(87659);const F=(0,s.A)(r.Button),_=e=>{let{onSuccessfulSave:t=o()}=e;const l=(0,T.ly)(),a=(0,c.J)(),[s,u]=(0,d.A)(),m=(0,A.je)(),[g,f]=(0,n.useState)([]),[b,p]=(0,n.useState)(),[E,,v,x]=(0,B.A)(),h=(0,n.useCallback)((()=>{v(),m(g.map((e=>{let{value:t}=e;return t}))).then((()=>{s({header:"Success",text:"You selection was successfully saved"}),t(),l()})).catch((()=>{p(!0),u({header:"Error",text:"Selection failed to be saved"})})).finally((()=>{x()}))}),[g,m]);return n.createElement(r.Modal,{backdropProps:{backdropBlur:!0}},n.createElement(i.Ay,{feature:"PreferredNodesModal"},n.createElement(I,{isMobile:a},n.createElement(r.ModalHeader,null,n.createElement(r.Flex,{gap:2,alignItems:"center"},n.createElement(r.Icon,{name:"netdataPress",color:"text"}),n.createElement(r.H4,null,"Required Action"))),n.createElement(r.ModalBody,null,n.createElement(C,{selectedNodes:g,setSelectedNodes:f,loading:E,error:b})),!E&&n.createElement(r.ModalFooter,null,n.createElement(r.Flex,{gap:4,justifyContent:"end",padding:[1,2]},n.createElement(F,{feature:"SavePreferredNodes",label:"Save",onClick:h,disabled:E||!g.length,payload:{selectedNodes:g.map((e=>{let{value:t}=e;return t})).join(",")}}))))))}},47193:(e,t,l)=>{l.d(t,{A:()=>s});l(62953);var n=l(69765),a=l(67990),o=l(87860),r=l(3914),c=l(47762),d=l(87659);const s=function(){let{polling:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{id:t=""}=(0,n.pr)(),l=(0,a.gr)(t,"ids"),s=(0,a.gr)(t,"loaded"),i=(0,c.Gt)(l),u=(0,r.vt)(),[m,,,g]=(0,d.A)();return(0,o.A)({id:t,spaceId:u,polling:e}),{areDefaultRoomNodesLoaded:s,nodes:i,isClaimNodeModalOpen:m,closeClaimNodeModal:g}}}}]);