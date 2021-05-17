(function(){"use strict";var e={5647:function(e,t,n){n(6992),n(8674),n(9601),n(7727),n(6977);var r=n(9963),l=n(6252),o={class:"w-full h-screen"},s=(0,l.Wm)("div",{class:"h-[0rem] border-gray-200"},null,-1),i={class:"flex",style:{height:"calc(100% - 0rem)"}};function a(e,t,n,r,a,u){var c=(0,l.up)("Nav"),d=(0,l.up)("Aside"),f=(0,l.up)("Main"),g=(0,l.up)("log-message-modal"),m=(0,l.up)("log-exception-modal"),p=(0,l.up)("setting-modal");return(0,l.wg)(),(0,l.j4)("div",o,[s,(0,l.Wm)("div",i,[(0,l.Wm)(c),(0,l.Wm)(d),(0,l.Wm)(f),(0,l.Wm)(g),(0,l.Wm)(m),(0,l.Wm)(p)])])}n(4916),n(4765),n(8309);var u=n(3577),c={key:0,class:"absolute inset-0 w-full h-full flex items-center justify-center"},d={class:"p-4 pb-0"},f={class:"divide-y divide-gray-200 px-4 divide-dashed "},g={class:"font-bold"},m={class:"text-sm text-gray-500 font-bold"},p=(0,l.Uk)("Modified ");function v(e,t,n,o,s,i){var a=(0,l.up)("Loading"),v=(0,l.up)("date");return(0,l.wg)(),(0,l.j4)("div",{class:[e.store.aside?"flex-grow lg:flex-shrink-0 lg:w-[20rem] lg:flex-grow-0":"hidden","border-r border-gray-200 h-full relative overflow-auto"]},[e.store.loading_logs?((0,l.wg)(),(0,l.j4)("div",c,[(0,l.Wm)(a)])):((0,l.wg)(),(0,l.j4)(l.HY,{key:1},[(0,l.Wm)("div",d,[(0,l.wy)((0,l.Wm)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.search=t}),class:"flex-1 w-full rounded-lg px-3 py-1 border border-gray-200 cursor:ring-2 cursor:ring-blue-500",placeholder:"Search log files.."},null,512),[[r.nr,e.store.search]])]),(0,l.Wm)("div",f,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.store.sorted_logs,(function(t){var n;return(0,l.wg)(),(0,l.j4)("button",{class:["py-4 text-left w-full cursor:text-blue-600",{"text-blue-600":(null===(n=e.store.current)||void 0===n?void 0:n.name)===t.name}],onClick:(0,r.iM)((function(n){return e.store.openLog(t)}),["prevent"])},[(0,l.Wm)("div",g,(0,u.zw)(t.name),1),(0,l.Wm)("div",m,[p,(0,l.Wm)(v,{timestamp:t.modified_at},null,8,["timestamp"])])],10,["onClick"])})),256))])],64))],2)}var x={class:"bx bx-loader-alt bx-spin text-4xl"};function h(e,t,n,r,o,s){return(0,l.wg)(),(0,l.j4)("i",x)}var b=(0,l.aZ)({});b.render=h;var w=b;function _(e,t,n,r,o,s){return(0,l.wg)(),(0,l.j4)("div",{class:"inline",title:e.unixToString(e.unixTimestamp)},(0,u.zw)(e.unixToDiff(e.unixTimestamp)),9,["title"])}var y=(0,l.aZ)({props:{timestamp:{},parse:{default:!1}},computed:{unixTimestamp:function(){return this.parse?Date.parse(this.timestamp)/1e3:this.timestamp}},created:function(){this.store.dateComponents.add(this)},unmounted:function(){this.store.dateComponents.delete(this)}});y.render=_;var W=y,k={name:"Aside",components:{Date:W,Loading:w}};k.render=v;var j=k,C=(n(7327),{key:0,class:"flex items-center justify-center w-full h-full"}),M=(0,l.Wm)("div",{class:"text-gray-300 text-4xl font-light"},"Select a log..",-1),L={key:1},T={class:" sticky top-0 bg-white"},A={class:"p-5 border-b border-gray-200 grid lg:grid-cols-2 flex-wrap justify-between items-center"},z={class:"text-lg font-bold"},Z={class:"hidden lg:grid grid-cols-2 lg:flex lg:space-x-5 text-sm font-bold text-gray-500 py-1"},S=(0,l.Uk)("Created "),$=(0,l.Uk)("Modified "),O={class:"w-full lg:auto flex space-right items-center lg:flex-row-reverse mt-3 lg:mt-0 flex-wrap -mb-3"},E=(0,l.Wm)("i",{class:"bx bx-refresh text-2xl"},null,-1),R={class:"p-5 divide-y divide-dashed divide-gray-200"},P={class:"py-4"},H={class:"font-bold text-sm inline-flex space-x-4 mb"},I={class:"py-1 text-gray-700 capitalize"},F={key:0,class:"mt-4"},U={class:"font-mono"},D={class:"flex"},Y={class:"p-2 align-top text-gray-500 min-w-[2rem]"},N={key:0,class:"w-full h-[50vh] flex items-center justify-center"},B={key:1,class:"w-full h-[50vh] flex items-center justify-center"},G=(0,l.Wm)("div",{class:"text-center"},[(0,l.Wm)("div",{class:"uppercase text-xl font-bold text-gray-600"},"Such An Empty"),(0,l.Wm)("div",{class:"text-gray-400 mt-2"}," try removing filters")],-1),K={key:2,class:"w-full h-[50vh] flex items-center justify-center"},V=(0,l.Wm)("div",{class:"uppercase text-xl font-light text-gray-600"},"End Of File",-1);function q(e,t,n,o,s,i){var a=(0,l.up)("date"),c=(0,l.up)("filter-env"),d=(0,l.up)("filter-level"),f=(0,l.up)("Loading"),g=(0,l.up)("infinite-scroll");return(0,l.wg)(),(0,l.j4)("div",{class:[e.store.aside?"hidden lg:block":"","flex-grow h-full"]},[(0,l.Wm)(g,{onScrollToEnd:t[3]||(t[3]=function(t){return!e.store.is_end&&e.store.fetchLogNextPage()}),class:"overflow-auto relative",style:{height:"calc(100%)"}},{default:(0,l.w5)((function(){return[null===e.store.current?((0,l.wg)(),(0,l.j4)("div",C,[M])):((0,l.wg)(),(0,l.j4)("div",L,[(0,l.Wm)("div",T,[(0,l.Wm)("div",A,[(0,l.Wm)("div",null,[(0,l.Wm)("div",z,(0,u.zw)(e.store.current.name),1),(0,l.Wm)("div",Z,[(0,l.Wm)("div",null,[S,(0,l.Wm)(a,{timestamp:e.store.current.created_at},null,8,["timestamp"])]),(0,l.Wm)("div",null,[$,(0,l.Wm)(a,{timestamp:e.store.current.modified_at},null,8,["timestamp"])]),(0,l.Wm)("div",null,"Size: "+(0,u.zw)(e.filesize(e.store.current.size)),1)])]),(0,l.Wm)("div",O,[(0,l.Wm)("button",{onClick:t[1]||(t[1]=(0,r.iM)((function(t){return e.store.refreshLog()}),["prevent"])),title:"refresh",class:"w-8 h-8 form-button flex items-center justify-center mb-2"},[E]),(0,l.Wm)(c,{class:"mb-2"}),(0,l.Wm)(d,{class:"mb-2"}),(0,l.wy)((0,l.Wm)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.store.filter=t}),type:"text",class:"form-input mb-2",placeholder:"Filter Logs.."},null,512),[[r.nr,e.store.filter]])])])]),(0,l.Wm)("div",R,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.store.sorted_content,(function(t,n){return(0,l.wg)(),(0,l.j4)("div",P,[(0,l.Wm)("div",H,[(0,l.Wm)("div",{class:["px-2 py-1  border rounded-lg",e.levelClass(t.level)]},(0,u.zw)(t.level),3),(0,l.Wm)("div",I,(0,u.zw)(t.env),1),(0,l.Wm)(a,{class:"py-1 text-gray-700",timestamp:t.time,parse:!0},null,8,["timestamp"])]),(0,l.Wm)("div",{class:"whitespace-pre-wrap font-mono with-links leading-6 py-4 break-all",innerHTML:e.store.applyFilters(t.content)},null,8,["innerHTML"]),""!==t.trace?((0,l.wg)(),(0,l.j4)(l.HY,{key:0},[(0,l.Wm)("button",{onClick:function(t){return e.store.toggleTrace(n)},class:"rounded-lg px-2 py-1 font-bold text-sm text-blue-500 cursor:text-blue-600 underline"},"Toggle Trace",8,["onClick"]),e.store.traceIsOpen(n)?((0,l.wg)(),(0,l.j4)("div",F,[(0,l.Wm)("div",U,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.store.traceToArray(t.trace),(function(t,n){return(0,l.wg)(),(0,l.j4)("div",D,[(0,l.Wm)("div",Y,(0,u.zw)(n),1),(0,l.Wm)("div",{title:t,class:"p-2",innerHTML:e.store.applyFilters(t)},null,8,["title","innerHTML"])])})),256))])])):(0,l.ry)("",!0)],64)):(0,l.ry)("",!0)])})),256)),e.store.loading_log?((0,l.wg)(),(0,l.j4)("div",N,[(0,l.Wm)(f)])):0===e.store.sorted_content.length?((0,l.wg)(),(0,l.j4)("div",B,[G])):e.store.is_end?((0,l.wg)(),(0,l.j4)("div",K,[V])):(0,l.ry)("",!0)])]))]})),_:1})],2)}n(6699),n(2023);var J=n(3246),Q=n.n(J);function X(e,t,n,r,o,s){return(0,l.wg)(),(0,l.j4)("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click")}),class:["rounded-lg border cursor:border-blue-600 cursor:text-blue-600 cursor:bg-blue-50 px-2 py-1 border shadow",e.enabled?"border-green-600 text-green-700":"border-gray-300 text-gray-700"]},(0,u.zw)(e.label)+" "+(0,u.zw)(e.enabled?"enabled":"disabled"),3)}var ee=(0,l.aZ)({props:{label:{},enabled:{}},emits:["click"]});ee.render=X;var te=ee;function ne(e,t,n,r,o,s){return(0,l.wg)(),(0,l.j4)("div",{onScroll:t[1]||(t[1]=function(){return e.scrollCallback&&e.scrollCallback.apply(e,arguments)})},[(0,l.WI)(e.$slots,"default")],32)}var re=(0,l.aZ)({emits:["scroll-to-end"],created:function(){var e=this;this.emitUp=__.throttle((function(){e.$emit("scroll-to-end"),console.log("scrolled to end")}),500,{leading:!0,trailing:!1})},methods:{scrollCallback:function(e){e.target.offsetHeight+e.target.scrollTop>=e.target.scrollHeight&&this.emitUp()}}});re.render=ne;var le=re,oe={ref:"trigger"},se={ref:"menu",class:"z-50"};function ie(e,t,n,o,s,i){return(0,l.wg)(),(0,l.j4)("div",null,[(0,l.Wm)("div",oe,[(0,l.WI)(e.$slots,"trigger",{toggle:e.toggle})],512),(0,l.wy)((0,l.Wm)("div",se,[(0,l.WI)(e.$slots,"default")],512),[[r.F8,e.visible]])])}var ae=n(7211),ue=(0,l.aZ)({name:"popper",props:{position:{default:"bottom"}},data:function(e){return{visible:!1}},created:function(){var e=this;this.toggle=function(){return e.visible=!e.visible},this.documentClickCallback=function(t){t.target===e.$el||e.$el.contains(t.target)||(e.visible=!1)}},watch:{visible:{handler:function(e){e&&(0,ae.fi)(this.$refs.trigger,this.$refs.menu,{placement:this.position})},immediate:!0}},mounted:function(){document.addEventListener("click",this.documentClickCallback)},unmounted:function(){document.removeEventListener("click",this.documentClickCallback)}});ue.render=ie;var ce=ue,de={class:"bg-white rounded border border-gray-200 shadow-md w-[12rem] mt-[2px]"};function fe(e,t,n,o,s,i){var a=(0,l.up)("popper");return(0,l.wg)(),(0,l.j4)(a,{position:"bottom-end"},{trigger:(0,l.w5)((function(t){var n=t.toggle;return[(0,l.Wm)("button",{class:"form-button",onClick:n},(0,u.zw)(e.label),9,["onClick"])]})),default:(0,l.w5)((function(){return[(0,l.Wm)("div",de,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.store.envs,(function(t){return(0,l.wg)(),(0,l.j4)("button",{onClick:(0,r.iM)((function(n){return e.store.toggle_env(t)}),["prevent"]),class:"block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50"},[(0,l.Wm)("i",{class:[e.store.env_is_checked(t)?"bxs-check-square text-blue-600":"bx-square","bx relative top-[3px] text-xl mr-1"]},null,2),(0,l.Wm)("span",null,(0,u.zw)(t),1)],8,["onClick"])})),256))])]})),_:1})}var ge=(0,l.aZ)({components:{Popper:ce},computed:{label:function(){return 0===this.store.filter_envs.length||this.store.filter_envs.length===this.store.envs.length?"All Environments":1===this.store.filter_envs.length?this.store.filter_envs[0]:this.store.filter_envs.length+" Environments"}}});ge.render=fe;var me=ge,pe={class:"bg-white rounded border border-gray-200 shadow-md w-[12rem] mt-[2px]"};function ve(e,t,n,o,s,i){var a=(0,l.up)("popper");return(0,l.wg)(),(0,l.j4)(a,{position:"bottom-end"},{trigger:(0,l.w5)((function(t){var n=t.toggle;return[(0,l.Wm)("button",{class:"form-button",onClick:n},(0,u.zw)(e.label),9,["onClick"])]})),default:(0,l.w5)((function(){return[(0,l.Wm)("div",pe,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.store.levels,(function(t){return(0,l.wg)(),(0,l.j4)("button",{onClick:(0,r.iM)((function(n){return e.store.toggle_level(t)}),["prevent"]),class:"block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50"},[(0,l.Wm)("i",{class:[e.store.level_is_checked(t)?"bxs-check-square text-blue-600":"bx-square","bx relative top-[3px] text-xl mr-1"]},null,2),(0,l.Wm)("span",null,(0,u.zw)(t),1)],8,["onClick"])})),256))])]})),_:1})}var xe=(0,l.aZ)({components:{Popper:ce},computed:{label:function(){return 0===this.store.filter_levels.length||this.store.filter_levels.length===this.store.levels.length?"All Levels":1===this.store.filter_levels.length?this.store.filter_levels[0]:this.store.filter_levels.length+" Levels"}}});xe.render=ve;var he=xe,be=(0,l.aZ)({components:{FilterLevel:he,FilterEnv:me,Popper:ce,InfiniteScroll:le,Date:W,TextFilter:te,Loading:w},methods:{levelClass:function(e){var t=e.includes("EMERGENCY")|e.includes("ALERT")|e.includes("CRITICAL")|e.includes("ERROR"),n=e.includes("WARNING")|e.includes("NOTICE")|e.includes("INFO")|e.includes("DEBUG");return{"bg-red-100 text-red-600 border-red-600":t,"bg-yellow-100 text-yellow-600 border-yellow-600":n}}}});be.render=q;var we=be,_e=n.p+"img/logo.0e3d860e.png",ye={class:"flex-shrink-0 w-[4rem] border-r border-gray-200 h-full flex flex-col items-center py-6 space-y-6"},We=(0,l.Wm)("img",{src:_e,alt:"",class:"w-[2rem]"},null,-1),ke=(0,l.Wm)("div",{class:"h-[0] border-b-2 border-gray-200 w-[2rem]"},null,-1),je=(0,l.Wm)("i",{class:"bx bx-menu text-3xl"},null,-1),Ce=(0,l.Wm)("i",{class:"bx bx-refresh text-3xl"},null,-1),Me=(0,l.Wm)("i",{class:"bx bx-send text-3xl"},null,-1),Le=(0,l.Wm)("i",{class:"bx bx-bug-alt text-3xl"},null,-1),Te=(0,l.Wm)("div",{class:"flex-grow"},null,-1),Ae=(0,l.Wm)("i",{class:"bx bx-cog text-3xl"},null,-1),ze=(0,l.Wm)("i",{class:"bx bxl-github text-3xl"},null,-1);function Ze(e,t,n,r,o,s){return(0,l.wg)(),(0,l.j4)("div",ye,[We,ke,(0,l.Wm)("button",{onClick:t[1]||(t[1]=function(t){return e.store.toggle("aside")}),class:e.store.aside?"text-blue-700":"text-gray-700",title:"Toggle Aside"},[je],2),(0,l.Wm)("button",{onClick:t[2]||(t[2]=function(){var t;return e.store.reloadAll&&(t=e.store).reloadAll.apply(t,arguments)}),class:"text-gray-700  cursor:text-blue-600",title:"Reload"},[Ce]),(0,l.Wm)("button",{onClick:t[3]||(t[3]=function(t){return e.store.toggle("message_modal")}),class:"text-gray-700  cursor:text-blue-600",title:"Trigger A Message"},[Me]),(0,l.Wm)("button",{onClick:t[4]||(t[4]=function(t){return e.store.toggle("exception_modal")}),class:"text-gray-700  cursor:text-blue-600",title:"Trigger An Exception"},[Le]),Te,(0,l.Wm)("button",{onClick:t[5]||(t[5]=function(t){return e.store.toggle("setting_modal")}),class:"text-gray-700  cursor:text-blue-600",title:"Setting"},[Ae]),(0,l.Wm)("a",{href:e.config.github_url,class:"text-gray-700 cursor:text-blue-600",title:"Github"},[ze],8,["href"])])}var Se=(0,l.aZ)({});Se.render=Ze;var $e=Se,Oe=(0,l.Wm)("div",{class:"text-3xl"},"Log A Message",-1),Ee={class:"grid grid-cols-3 gap-2"},Re={class:"pl-2 capitalize"},Pe=(0,l.Wm)("button",{class:"form-submit"},"Send",-1);function He(e,t,n,o,s,i){var a=(0,l.up)("modal");return e.store.message_modal?((0,l.wg)(),(0,l.j4)(a,{key:0,onClose:t[4]||(t[4]=function(t){return e.store.toggle("message_modal")})},{default:(0,l.w5)((function(){return[(0,l.Wm)("form",{onSubmit:t[3]||(t[3]=(0,r.iM)((function(){var t;return e.store.submit_message&&(t=e.store).submit_message.apply(t,arguments)}),["prevent"])),class:"space-y-6"},[Oe,(0,l.Wm)("div",Ee,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.levels,(function(t){return(0,l.wg)(),(0,l.j4)("label",null,[(0,l.wy)((0,l.Wm)("input",{value:t,"onUpdate:modelValue":function(t){return e.store.message_form.level=t},type:"radio",name:"level"},null,8,["value","onUpdate:modelValue"]),[[r.G2,e.store.message_form.level]]),(0,l.Wm)("span",Re,(0,u.zw)(t),1)])})),256))]),(0,l.wy)((0,l.Wm)("textarea",{ref:"focus","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.message_form.message=t}),cols:"30",rows:"6",placeholder:"Message..",class:"form-textarea"},null,512),[[r.nr,e.store.message_form.message]]),Pe,(0,l.Wm)("button",{class:"form-cancel",type:"button",onClick:t[2]||(t[2]=(0,r.iM)((function(t){return e.store.toggle("message_modal")}),["prevent"]))},"Cancel")],32)]})),_:1})):(0,l.ry)("",!0)}function Ie(e,t,n,o,s,i){return(0,l.wg)(),(0,l.j4)("div",{onClick:t[2]||(t[2]=function(t){return e.$emit("close")}),class:"fixed inset-0 w-full h-full bg-black bg-opacity-75 z-20 overflow-auto"},[(0,l.Wm)("div",{onClick:t[1]||(t[1]=(0,r.iM)((function(){}),["stop"])),class:"mx-auto w-full max-w-lg bg-white my-24 rounded-lg p-6 space-y-10"},[(0,l.WI)(e.$slots,"default")])])}var Fe=(0,l.aZ)({name:"Modal",created:function(){document.body.style.overflow="hidden"},unmounted:function(){document.body.style.overflow="auto"},emits:["close"]});Fe.render=Ie;var Ue=Fe,De=(0,l.aZ)({components:{Modal:Ue},created:function(){var e=this;(0,l.YP)((function(){return e.store.message_modal}),(function(t){t&&e.$nextTick((function(){e.$refs.focus.focus()}))}))},data:function(e){return{levels:["emergency","alert","critical","error","warning","notice","info","debug"]}}});De.render=He;var Ye=De,Ne=(0,l.Wm)("div",{class:"text-3xl"},"Log An Exception",-1),Be=(0,l.Wm)("button",{class:"form-submit"},"Send",-1);function Ge(e,t,n,o,s,i){var a=(0,l.up)("modal");return e.store.exception_modal?((0,l.wg)(),(0,l.j4)(a,{key:0,onClose:t[4]||(t[4]=function(t){return e.store.toggle("exception_modal")})},{default:(0,l.w5)((function(){return[(0,l.Wm)("form",{onSubmit:t[3]||(t[3]=(0,r.iM)((function(){var t;return e.store.submit_exception&&(t=e.store).submit_exception.apply(t,arguments)}),["prevent"])),class:"space-y-6"},[Ne,(0,l.wy)((0,l.Wm)("textarea",{ref:"focus","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.store.exception_form.message=t}),cols:"30",rows:"6",placeholder:"Exception Message..",class:"form-textarea"},null,512),[[r.nr,e.store.exception_form.message]]),Be,(0,l.Wm)("button",{class:"form-cancel",type:"button",onClick:t[2]||(t[2]=(0,r.iM)((function(t){return e.store.toggle("exception_modal")}),["prevent"]))},"Cancel")],32)]})),_:1})):(0,l.ry)("",!0)}var Ke=(0,l.aZ)({components:{Modal:Ue},created:function(){var e=this;(0,l.YP)((function(){return e.store.exception_modal}),(function(t){t&&e.$nextTick((function(){e.$refs.focus.focus()}))}))}});Ke.render=Ge;var Ve=Ke,qe={class:"space-y-6"},Je=(0,l.Wm)("div",{class:"capitalize font-bold text-gray-700"},"clickable links",-1);function Qe(e,t,n,r,o,s){var i=(0,l.up)("modal");return e.store.setting_modal?((0,l.wg)(),(0,l.j4)(i,{key:0,onClose:t[2]||(t[2]=function(t){return e.store.toggle("setting_modal")})},{default:(0,l.w5)((function(){return[(0,l.Wm)("div",qe,[(0,l.Wm)("button",{onClick:t[1]||(t[1]=function(t){return e.store.toggle("text_links")}),class:"w-full flex items-center justify-between"},[Je,(0,l.Wm)("div",null,[(0,l.Wm)("i",{class:["bx text-5xl relative top-[3px]",e.store.text_links?"bxs-toggle-right text-blue-600":"bx-toggle-left text-gray-700"]},null,2)])])])]})),_:1})):(0,l.ry)("",!0)}var Xe=(0,l.aZ)({components:{Modal:Ue}});Xe.render=Qe;var et=Xe,tt={name:"App",components:{SettingModal:et,LogExceptionModal:Ve,LogMessageModal:Ye,Nav:$e,Main:we,Aside:j}};tt.render=a;var nt=tt,rt=n(9669),lt=n.n(rt),ot=n(3451),st=n(6021),it=(n(5666),n(1539),n(189),n(8783),n(3948),n(2222),n(561),n(7042),n(3123),n(2262)),at={base_url:"http://localhost:9001/",github_url:"https://github.com/mojtabaahn/laravel-web-logs"},ut=n(4233),ct=(0,it.qj)({logs:[],loading_logs:!1,current_name:(0,ut._)("current_name",""),current:null,current_content:[],loading_log:!1,is_end:!1,text_links:(0,ut._)("text_links",!0),auto_reload:!1,search:"",open_traces:[],dateComponents:new Set,offset:null,filter:(0,ut._)("filter",""),filter_envs:(0,ut._)("filter_envs",[]),filter_levels:(0,ut._)("filter_levels",[]),envs:["production","staging","local"],levels:["emergency","alert","critical","error","warning","notice","info","debug"],exception_form:{message:""},message_form:{message:"",level:"debug"},aside:!0,setting_modal:!1,exception_modal:!1,message_modal:!1,toggle:function(e){this[e]=!this[e]},env_is_checked:function(e){return this.filter_envs.includes(e)},toggle_env:function(e){this.toggleArray(e,this.filter_envs)},level_is_checked:function(e){return this.filter_levels.includes(e)},toggle_level:function(e){this.toggleArray(e,this.filter_levels)},setup:function(){var e=this;return(0,st.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchLogs();case 2:return n=""===e.current_name?e.sorted_logs[0]:e.logs.filter((function(t){return t.name===e.current_name}))[0],t.next=5,e.openLog(n);case 5:e.setupDateInterval();case 6:case"end":return t.stop()}}),t)})))()},teardown:function(){},fetchLogs:function(){var e=this;return(0,st.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading_logs=!0,t.next=3,axios.get(e.url("/index")).then((function(t){e.loading_logs=!1,e.logs=t.data}));case 3:case"end":return t.stop()}}),t)})))()},openLog:function(e){var t=this;return(0,st.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return window.innerWidth<1024&&(t.aside=!1),t.current_name=e.name,t.offset=null,t.current=e,t.current_content=[],t.is_end=!1,n.next=8,t.fetchLogNextPage();case 8:case"end":return n.stop()}}),n)})))()},fetchLogNextPage:function(){var e=this;return(0,st.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading_log=!0,n=e.current,t.next=4,axios.get(e.url("/".concat(n.name,"?").concat(null===e.offset?"":"offset="+e.offset))).then((function(t){e.loading_log=!1,e.current_content=e.current_content.concat(t.data.data),e.offset=t.data.new_offset,e.loading_log=!1,0===t.data.data.length&&(e.is_end=!0)}));case 4:case"end":return t.stop()}}),t)})))()},refreshLog:function(){var e=this;return(0,st.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.openLog(e.current);case 2:case"end":return t.stop()}}),t)})))()},applyFilters:function(e){return this.text_links&&(e=Q()(e)),e=e.replaceAll(/([a-zA-Z0-9\\\/\-_\.]+\/)([a-zA-Z0-9\\\-_]+\.(php))/g,"<span class='is-file' title='$1$2'>$2</span>"),e=e.replaceAll(/\\?([a-zA-Z0-9_]+\\{2})+([a-zA-Z0-9_]+)/g,"<span title='$1$2' class='is-class'>$2</span>"),e=e.replaceAll(/([0-9]+)/g,"<span class='is-number'>$1</span>"),e},get sorted_logs(){var e=this;return this.logs.sort((function(e,t){return t.modified_at-e.modified_at})).filter((function(t){return t.name.includes(e.search)}))},toggleTrace:function(e){var t=this.current.name+":"+e;this.toggleArray(t,this.open_traces)},toggleArray:function(e,t){var n=t.indexOf(e);-1===n?t.push(e):t.splice(n,1)},traceIsOpen:function(e){return this.open_traces.includes(this.current.name+":"+e)},get sorted_content(){var e=this;return this.current_content.slice().reverse().filter((function(t){return t.content.includes(e.filter)})).filter((function(t){return 0===e.filter_levels.length||e.filter_levels.includes(t.level.toLowerCase())})).filter((function(t){return 0===e.filter_envs.length||e.filter_envs.includes(t.env.toLowerCase())}))},traceToArray:function(e){var t=null,n=!0,r=e.split(/#([0-9]+)/gm).reduce((function(e,r){return n?n=!1:null===t?t=r:(e[t]=r,t=null),e}),[]);return r},submit_exception:function(){var e=this;axios.post(this.url("/log-exception"),this.exception_form).then((function(t){console.log(t.data),e.exception_modal=!1,e.exception_form.message=""}))},submit_message:function(){var e=this;axios.post(this.url("/log-message"),this.message_form).then((function(t){console.log(t.data),e.message_modal=!1,e.message_form.message="",e.message_form.level="debug"}))},reloadAll:function(){var e=this;return(0,st.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchLogs();case 2:if(null===e.current){t.next=6;break}return n=e.current.name,t.next=6,e.openLog(e.logs.filter((function(e){return e.name===n}))[0]);case 6:case"end":return t.stop()}}),t)})))()},url:function(e){return e="/web-logs"+e,e},setupDateInterval:function(){var e=this;setInterval((function(){var t,n=(0,ot.Z)(e.dateComponents);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.$forceUpdate()}}catch(l){n.e(l)}finally{n.f()}}),5e3)}}),dt=n(6486),ft=n.n(dt);window.axios=lt(),window.__=ft(),ct.setup();var gt=(0,r.ri)(nt);gt.config.globalProperties.store=ct,gt.config.globalProperties.config=at,gt.config.globalProperties.__=ft(),gt.config.globalProperties.filesize=function(e){var t=0===e?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]},gt.config.globalProperties.unixToDiff=function(e){var t=6e4,n=60*t,r=24*n,l=30*r,o=365*r,s=(new Date).getTime()-1e3*e;return 0===s?"now":s<t?Math.round(s/1e3)+" seconds ago":s<n?Math.round(s/t)+" minutes ago":s<r?Math.round(s/n)+" hours ago":s<l?Math.round(s/r)+" days ago":s<o?Math.round(s/l)+" months ago":Math.round(s/o)+" years ago"},gt.config.globalProperties.unixToString=function(e){var t=new Date(1e3*e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=t.getFullYear(),l=n[t.getMonth()],o=t.getDate(),s=t.getHours(),i=t.getMinutes(),a=t.getSeconds();return o+" "+l+" "+r+" "+s+":"+i+":"+a},gt.mount("#app")}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,r,l,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],l=e[u][1],o=e[u][2];for(var i=!0,a=0;a<r.length;a++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(i=!1,o<s&&(s=o));i&&(e.splice(u--,1),t=l())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,l,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/vendor/web-logs/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,o,s=r[0],i=r[1],a=r[2],u=0;for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(a)var c=a(n);for(t&&t(r);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[s[u]]=0;return n.O(c)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5647)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.b5ffee7e.js.map