(function(){"use strict";var e={925:function(e,t,l){var s=l(963),r=l(252);const n={class:"w-full h-screen"},o=(0,r.Wm)("div",{class:"h-[0rem] border-gray-200"},null,-1),i={class:"flex",style:{height:"calc(100% - 0rem)"}};function a(e,t,l,s,a,c){const u=(0,r.up)("Nav"),d=(0,r.up)("Aside"),g=(0,r.up)("Main"),m=(0,r.up)("log-message-modal"),p=(0,r.up)("log-exception-modal"),f=(0,r.up)("setting-modal");return(0,r.wg)(),(0,r.j4)("div",n,[o,(0,r.Wm)("div",i,[(0,r.Wm)(u),(0,r.Wm)(d),(0,r.Wm)(g),(0,r.Wm)(m),(0,r.Wm)(p),(0,r.Wm)(f)])])}var c=l(577);const u={key:0,class:"absolute inset-0 w-full h-full flex items-center justify-center"},d={class:"p-4 pb-0"},g={class:"divide-y divide-gray-200 px-4 divide-dashed "},m={class:"font-bold"},p={class:"text-sm text-gray-500 font-bold"},f=(0,r.Uk)("Modified ");function h(e,t,l,n,o,i){const a=(0,r.up)("Loading"),h=(0,r.up)("date");return(0,r.wg)(),(0,r.j4)("div",{class:[e.store.aside?"flex-grow lg:flex-shrink-0 lg:w-[20rem] lg:flex-grow-0":"hidden","border-r border-gray-200 h-full relative overflow-auto"]},[e.store.loading_logs?((0,r.wg)(),(0,r.j4)("div",u,[(0,r.Wm)(a)])):((0,r.wg)(),(0,r.j4)(r.HY,{key:1},[(0,r.Wm)("div",d,[(0,r.wy)((0,r.Wm)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.store.search=t),class:"flex-1 w-full rounded-lg px-3 py-1 border border-gray-200 cursor:ring-2 cursor:ring-blue-500",placeholder:"Search log files.."},null,512),[[s.nr,e.store.search]])]),(0,r.Wm)("div",g,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.store.sorted_logs,(t=>((0,r.wg)(),(0,r.j4)("button",{class:["py-4 text-left w-full cursor:text-blue-600",{"text-blue-600":e.store.current?.name===t.name}],onClick:(0,s.iM)((l=>e.store.openLog(t)),["prevent"])},[(0,r.Wm)("div",m,(0,c.zw)(t.name),1),(0,r.Wm)("div",p,[f,(0,r.Wm)(h,{timestamp:t.modified_at},null,8,["timestamp"])])],10,["onClick"])))),256))])],64))],2)}const v={class:"bx bx-loader-alt bx-spin text-4xl"};function b(e,t,l,s,n,o){return(0,r.wg)(),(0,r.j4)("i",v)}var x=(0,r.aZ)({});x.render=b;var w=x;function _(e,t,l,s,n,o){return(0,r.wg)(),(0,r.j4)("div",{class:"inline",title:e.unixToString(e.unixTimestamp)},(0,c.zw)(e.unixToDiff(e.unixTimestamp)),9,["title"])}var y=(0,r.aZ)({props:{timestamp:{},parse:{default:!1}},computed:{unixTimestamp(){return this.parse?Date.parse(this.timestamp)/1e3:this.timestamp}},created(){this.store.dateComponents.add(this)},unmounted(){this.store.dateComponents.delete(this)}});y.render=_;var W=y,k={name:"Aside",components:{Date:W,Loading:w}};k.render=h;var j=k;const C={key:0,class:"flex items-center justify-center w-full h-full"},M=(0,r.Wm)("div",{class:"text-gray-300 text-4xl font-light"},"Select a log..",-1),L={key:1},A={class:" sticky top-0 bg-white"},T={class:"p-5 border-b border-gray-200 grid lg:grid-cols-2 flex-wrap justify-between items-center"},z={class:"text-lg font-bold"},$={class:"hidden lg:grid grid-cols-2 lg:flex lg:space-x-5 text-sm font-bold text-gray-500 py-1"},P=(0,r.Uk)("Created "),I=(0,r.Uk)("Modified "),S={class:"w-full lg:auto flex space-right items-center lg:flex-row-reverse mt-3 lg:mt-0 flex-wrap -mb-3"},O=(0,r.Wm)("i",{class:"bx bx-refresh text-2xl"},null,-1),E={class:"p-5 divide-y divide-dashed divide-gray-200"},Z={class:"py-4"},H={class:"font-bold text-sm inline-flex space-x-4 mb"},F={class:"py-1 text-gray-700 capitalize"},U={key:0,class:"mt-4"},Y={class:"font-mono"},D={class:"flex"},N={class:"p-2 align-top text-gray-500 min-w-[2rem]"},R={key:0,class:"w-full h-[50vh] flex items-center justify-center"},V={key:1,class:"w-full h-[50vh] flex items-center justify-center"},B=(0,r.Wm)("div",{class:"text-center"},[(0,r.Wm)("div",{class:"uppercase text-xl font-bold text-gray-600"},"Such An Empty"),(0,r.Wm)("div",{class:"text-gray-400 mt-2"}," try removing filters")],-1),G={key:2,class:"w-full h-[50vh] flex items-center justify-center"},K=(0,r.Wm)("div",{class:"uppercase text-xl font-light text-gray-600"},"End Of File",-1);function q(e,t,l,n,o,i){const a=(0,r.up)("date"),u=(0,r.up)("filter-env"),d=(0,r.up)("filter-level"),g=(0,r.up)("Loading"),m=(0,r.up)("infinite-scroll");return(0,r.wg)(),(0,r.j4)("div",{class:[e.store.aside?"hidden lg:block":"","flex-grow h-full"]},[(0,r.Wm)(m,{onScrollToEnd:t[3]||(t[3]=t=>!e.store.is_end&&e.store.fetchLogNextPage()),class:"overflow-auto relative",style:{height:"calc(100%)"}},{default:(0,r.w5)((()=>[null===e.store.current?((0,r.wg)(),(0,r.j4)("div",C,[M])):((0,r.wg)(),(0,r.j4)("div",L,[(0,r.Wm)("div",A,[(0,r.Wm)("div",T,[(0,r.Wm)("div",null,[(0,r.Wm)("div",z,(0,c.zw)(e.store.current.name),1),(0,r.Wm)("div",$,[(0,r.Wm)("div",null,[P,(0,r.Wm)(a,{timestamp:e.store.current.created_at},null,8,["timestamp"])]),(0,r.Wm)("div",null,[I,(0,r.Wm)(a,{timestamp:e.store.current.modified_at},null,8,["timestamp"])]),(0,r.Wm)("div",null,"Size: "+(0,c.zw)(e.filesize(e.store.current.size)),1)])]),(0,r.Wm)("div",S,[(0,r.Wm)("button",{onClick:t[1]||(t[1]=(0,s.iM)((t=>e.store.refreshLog()),["prevent"])),title:"refresh",class:"w-8 h-8 form-button flex items-center justify-center mb-2"},[O]),(0,r.Wm)(u,{class:"mb-2"}),(0,r.Wm)(d,{class:"mb-2"}),(0,r.wy)((0,r.Wm)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.store.filter=t),type:"text",class:"form-input mb-2",placeholder:"Filter Logs.."},null,512),[[s.nr,e.store.filter]])])])]),(0,r.Wm)("div",E,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.store.sorted_content,((t,l)=>((0,r.wg)(),(0,r.j4)("div",Z,[(0,r.Wm)("div",H,[(0,r.Wm)("div",{class:["px-2 py-1  border rounded-lg",e.levelClass(t.level)]},(0,c.zw)(t.level),3),(0,r.Wm)("div",F,(0,c.zw)(t.env),1),(0,r.Wm)(a,{class:"py-1 text-gray-700",timestamp:t.time,parse:!0},null,8,["timestamp"])]),(0,r.Wm)("div",{class:"whitespace-pre-wrap font-mono with-links leading-6 py-4 break-all",innerHTML:e.store.applyFilters(t.content)},null,8,["innerHTML"]),""!==t.trace?((0,r.wg)(),(0,r.j4)(r.HY,{key:0},[(0,r.Wm)("button",{onClick:t=>e.store.toggleTrace(l),class:"rounded-lg px-2 py-1 font-bold text-sm text-blue-500 cursor:text-blue-600 underline"},"Toggle Trace",8,["onClick"]),e.store.traceIsOpen(l)?((0,r.wg)(),(0,r.j4)("div",U,[(0,r.Wm)("div",Y,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.store.traceToArray(t.trace),((t,l)=>((0,r.wg)(),(0,r.j4)("div",D,[(0,r.Wm)("div",N,(0,c.zw)(l),1),(0,r.Wm)("div",{title:t,class:"p-2",innerHTML:e.store.applyFilters(t)},null,8,["title","innerHTML"])])))),256))])])):(0,r.ry)("",!0)],64)):(0,r.ry)("",!0)])))),256)),e.store.loading_log?((0,r.wg)(),(0,r.j4)("div",R,[(0,r.Wm)(g)])):0===e.store.sorted_content.length?((0,r.wg)(),(0,r.j4)("div",V,[B])):e.store.is_end?((0,r.wg)(),(0,r.j4)("div",G,[K])):(0,r.ry)("",!0)])]))])),_:1})],2)}var J=l(246),Q=l.n(J);function X(e,t,l,s,n,o){return(0,r.wg)(),(0,r.j4)("button",{onClick:t[1]||(t[1]=t=>e.$emit("click")),class:["rounded-lg border cursor:border-blue-600 cursor:text-blue-600 cursor:bg-blue-50 px-2 py-1 border shadow",e.enabled?"border-green-600 text-green-700":"border-gray-300 text-gray-700"]},(0,c.zw)(e.label)+" "+(0,c.zw)(e.enabled?"enabled":"disabled"),3)}var ee=(0,r.aZ)({props:{label:{},enabled:{}},emits:["click"]});ee.render=X;var te=ee;function le(e,t,l,s,n,o){return(0,r.wg)(),(0,r.j4)("div",{onScroll:t[1]||(t[1]=(...t)=>e.scrollCallback&&e.scrollCallback(...t))},[(0,r.WI)(e.$slots,"default")],32)}var se=(0,r.aZ)({emits:["scroll-to-end"],created(){this.emitUp=__.throttle((()=>{this.$emit("scroll-to-end"),console.log("scrolled to end")}),500,{leading:!0,trailing:!1})},methods:{scrollCallback(e){e.target.offsetHeight+e.target.scrollTop>=e.target.scrollHeight&&this.emitUp()}}});se.render=le;var re=se;const ne={ref:"trigger"},oe={ref:"menu",class:"z-50"};function ie(e,t,l,n,o,i){return(0,r.wg)(),(0,r.j4)("div",null,[(0,r.Wm)("div",ne,[(0,r.WI)(e.$slots,"trigger",{toggle:e.toggle})],512),(0,r.wy)((0,r.Wm)("div",oe,[(0,r.WI)(e.$slots,"default")],512),[[s.F8,e.visible]])])}var ae=l(211),ce=(0,r.aZ)({name:"popper",props:{position:{default:"bottom"}},data:e=>({visible:!1}),created(){this.toggle=()=>this.visible=!this.visible,this.documentClickCallback=e=>{e.target===this.$el||this.$el.contains(e.target)||(this.visible=!1)}},watch:{visible:{handler(e){e&&(0,ae.fi)(this.$refs.trigger,this.$refs.menu,{placement:this.position})},immediate:!0}},mounted(){document.addEventListener("click",this.documentClickCallback)},unmounted(){document.removeEventListener("click",this.documentClickCallback)}});ce.render=ie;var ue=ce;const de={class:"bg-white rounded border border-gray-200 shadow-md w-[12rem] mt-[2px]"};function ge(e,t,l,n,o,i){const a=(0,r.up)("popper");return(0,r.wg)(),(0,r.j4)(a,{position:"bottom-end"},{trigger:(0,r.w5)((({toggle:t})=>[(0,r.Wm)("button",{class:"form-button",onClick:t},(0,c.zw)(e.label),9,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Wm)("div",de,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.store.envs,(t=>((0,r.wg)(),(0,r.j4)("button",{onClick:(0,s.iM)((l=>e.store.toggle_env(t)),["prevent"]),class:"block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50"},[(0,r.Wm)("i",{class:[e.store.env_is_checked(t)?"bxs-check-square text-blue-600":"bx-square","bx relative top-[3px] text-xl mr-1"]},null,2),(0,r.Wm)("span",null,(0,c.zw)(t),1)],8,["onClick"])))),256))])])),_:1})}var me=(0,r.aZ)({components:{Popper:ue},computed:{label(){return 0===this.store.filter_envs.length||this.store.filter_envs.length===this.store.envs.length?"All Environments":1===this.store.filter_envs.length?this.store.filter_envs[0]:this.store.filter_envs.length+" Environments"}}});me.render=ge;var pe=me;const fe={class:"bg-white rounded border border-gray-200 shadow-md w-[12rem] mt-[2px]"};function he(e,t,l,n,o,i){const a=(0,r.up)("popper");return(0,r.wg)(),(0,r.j4)(a,{position:"bottom-end"},{trigger:(0,r.w5)((({toggle:t})=>[(0,r.Wm)("button",{class:"form-button",onClick:t},(0,c.zw)(e.label),9,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Wm)("div",fe,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.store.levels,(t=>((0,r.wg)(),(0,r.j4)("button",{onClick:(0,s.iM)((l=>e.store.toggle_level(t)),["prevent"]),class:"block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50"},[(0,r.Wm)("i",{class:[e.store.level_is_checked(t)?"bxs-check-square text-blue-600":"bx-square","bx relative top-[3px] text-xl mr-1"]},null,2),(0,r.Wm)("span",null,(0,c.zw)(t),1)],8,["onClick"])))),256))])])),_:1})}var ve=(0,r.aZ)({components:{Popper:ue},computed:{label(){return 0===this.store.filter_levels.length||this.store.filter_levels.length===this.store.levels.length?"All Levels":1===this.store.filter_levels.length?this.store.filter_levels[0]:this.store.filter_levels.length+" Levels"}}});ve.render=he;var be=ve,xe=(0,r.aZ)({components:{FilterLevel:be,FilterEnv:pe,Popper:ue,InfiniteScroll:re,Date:W,TextFilter:te,Loading:w},methods:{levelClass(e){let t=e.includes("EMERGENCY")|e.includes("ALERT")|e.includes("CRITICAL")|e.includes("ERROR"),l=e.includes("WARNING")|e.includes("NOTICE")|e.includes("INFO")|e.includes("DEBUG");return{"bg-red-100 text-red-600 border-red-600":t,"bg-yellow-100 text-yellow-600 border-yellow-600":l}}}});xe.render=q;var we=xe,_e=l.p+"img/logo.0e3d860e.png";const ye={class:"flex-shrink-0 w-[4rem] border-r border-gray-200 h-full flex flex-col items-center py-6 space-y-6"},We=(0,r.Wm)("img",{src:_e,alt:"",class:"w-[2rem]"},null,-1),ke=(0,r.Wm)("div",{class:"h-[0] border-b-2 border-gray-200 w-[2rem]"},null,-1),je=(0,r.Wm)("i",{class:"bx bx-menu text-3xl"},null,-1),Ce=(0,r.Wm)("i",{class:"bx bx-refresh text-3xl"},null,-1),Me=(0,r.Wm)("i",{class:"bx bx-send text-3xl"},null,-1),Le=(0,r.Wm)("i",{class:"bx bx-bug-alt text-3xl"},null,-1),Ae=(0,r.Wm)("div",{class:"flex-grow"},null,-1),Te=(0,r.Wm)("i",{class:"bx bx-cog text-3xl"},null,-1),ze=(0,r.Wm)("i",{class:"bx bxl-github text-3xl"},null,-1);function $e(e,t,l,s,n,o){return(0,r.wg)(),(0,r.j4)("div",ye,[We,ke,(0,r.Wm)("button",{onClick:t[1]||(t[1]=t=>e.store.toggle("aside")),class:e.store.aside?"text-blue-700":"text-gray-700",title:"Toggle Aside"},[je],2),(0,r.Wm)("button",{onClick:t[2]||(t[2]=(...t)=>e.store.reloadAll&&e.store.reloadAll(...t)),class:"text-gray-700  cursor:text-blue-600",title:"Reload"},[Ce]),(0,r.Wm)("button",{onClick:t[3]||(t[3]=t=>e.store.toggle("message_modal")),class:"text-gray-700  cursor:text-blue-600",title:"Trigger A Message"},[Me]),(0,r.Wm)("button",{onClick:t[4]||(t[4]=t=>e.store.toggle("exception_modal")),class:"text-gray-700  cursor:text-blue-600",title:"Trigger An Exception"},[Le]),Ae,(0,r.Wm)("button",{onClick:t[5]||(t[5]=t=>e.store.toggle("setting_modal")),class:"text-gray-700  cursor:text-blue-600",title:"Setting"},[Te]),(0,r.Wm)("a",{href:e.config.github_url,class:"text-gray-700 cursor:text-blue-600",title:"Github"},[ze],8,["href"])])}var Pe=(0,r.aZ)({});Pe.render=$e;var Ie=Pe;const Se=(0,r.Wm)("div",{class:"text-3xl"},"Log A Message",-1),Oe={class:"grid grid-cols-3 gap-2"},Ee={class:"pl-2 capitalize"},Ze=(0,r.Wm)("button",{class:"form-submit"},"Send",-1);function He(e,t,l,n,o,i){const a=(0,r.up)("modal");return e.store.message_modal?((0,r.wg)(),(0,r.j4)(a,{key:0,onClose:t[4]||(t[4]=t=>e.store.toggle("message_modal"))},{default:(0,r.w5)((()=>[(0,r.Wm)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...t)=>e.store.submit_message&&e.store.submit_message(...t)),["prevent"])),class:"space-y-6"},[Se,(0,r.Wm)("div",Oe,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.levels,(t=>((0,r.wg)(),(0,r.j4)("label",null,[(0,r.wy)((0,r.Wm)("input",{value:t,"onUpdate:modelValue":t=>e.store.message_form.level=t,type:"radio",name:"level"},null,8,["value","onUpdate:modelValue"]),[[s.G2,e.store.message_form.level]]),(0,r.Wm)("span",Ee,(0,c.zw)(t),1)])))),256))]),(0,r.wy)((0,r.Wm)("textarea",{ref:"focus","onUpdate:modelValue":t[1]||(t[1]=t=>e.store.message_form.message=t),cols:"30",rows:"6",placeholder:"Message..",class:"form-textarea"},null,512),[[s.nr,e.store.message_form.message]]),Ze,(0,r.Wm)("button",{class:"form-cancel",type:"button",onClick:t[2]||(t[2]=(0,s.iM)((t=>e.store.toggle("message_modal")),["prevent"]))},"Cancel")],32)])),_:1})):(0,r.ry)("",!0)}function Fe(e,t,l,n,o,i){return(0,r.wg)(),(0,r.j4)("div",{onClick:t[2]||(t[2]=t=>e.$emit("close")),class:"fixed inset-0 w-full h-full bg-black bg-opacity-75 z-20 overflow-auto"},[(0,r.Wm)("div",{onClick:t[1]||(t[1]=(0,s.iM)((()=>{}),["stop"])),class:"mx-auto w-full max-w-lg bg-white my-24 rounded-lg p-6 space-y-10"},[(0,r.WI)(e.$slots,"default")])])}var Ue=(0,r.aZ)({name:"Modal",created(){document.body.style.overflow="hidden"},unmounted(){document.body.style.overflow="auto"},emits:["close"]});Ue.render=Fe;var Ye=Ue,De=(0,r.aZ)({components:{Modal:Ye},created(){(0,r.YP)((()=>this.store.message_modal),(e=>{e&&this.$nextTick((()=>{this.$refs.focus.focus()}))}))},data:e=>({levels:["emergency","alert","critical","error","warning","notice","info","debug"]})});De.render=He;var Ne=De;const Re=(0,r.Wm)("div",{class:"text-3xl"},"Log An Exception",-1),Ve=(0,r.Wm)("button",{class:"form-submit"},"Send",-1);function Be(e,t,l,n,o,i){const a=(0,r.up)("modal");return e.store.exception_modal?((0,r.wg)(),(0,r.j4)(a,{key:0,onClose:t[4]||(t[4]=t=>e.store.toggle("exception_modal"))},{default:(0,r.w5)((()=>[(0,r.Wm)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...t)=>e.store.submit_exception&&e.store.submit_exception(...t)),["prevent"])),class:"space-y-6"},[Re,(0,r.wy)((0,r.Wm)("textarea",{ref:"focus","onUpdate:modelValue":t[1]||(t[1]=t=>e.store.exception_form.message=t),cols:"30",rows:"6",placeholder:"Exception Message..",class:"form-textarea"},null,512),[[s.nr,e.store.exception_form.message]]),Ve,(0,r.Wm)("button",{class:"form-cancel",type:"button",onClick:t[2]||(t[2]=(0,s.iM)((t=>e.store.toggle("exception_modal")),["prevent"]))},"Cancel")],32)])),_:1})):(0,r.ry)("",!0)}var Ge=(0,r.aZ)({components:{Modal:Ye},created(){(0,r.YP)((()=>this.store.exception_modal),(e=>{e&&this.$nextTick((()=>{this.$refs.focus.focus()}))}))}});Ge.render=Be;var Ke=Ge;const qe={class:"space-y-6"},Je=(0,r.Wm)("div",{class:"capitalize font-bold text-gray-700"},"clickable links",-1),Qe={class:"space-y-6"},Xe=(0,r.Wm)("div",{class:"capitalize font-bold text-gray-700"},"Auto Append New Logs",-1),et={key:0,class:"space-y-6"},tt={class:"w-full flex items-center justify-between"},lt=(0,r.Wm)("div",{class:"capitalize font-bold text-gray-700"},"Pulling Interval",-1),st={class:"form-input"},rt=(0,r.Wm)("span",null,"ms",-1);function nt(e,t,l,n,o,i){const a=(0,r.up)("modal");return e.store.setting_modal?((0,r.wg)(),(0,r.j4)(a,{key:0,onClose:t[4]||(t[4]=t=>e.store.toggle("setting_modal"))},{default:(0,r.w5)((()=>[(0,r.Wm)("div",qe,[(0,r.Wm)("button",{onClick:t[1]||(t[1]=t=>e.store.toggle("text_links")),class:"w-full flex items-center justify-between"},[Je,(0,r.Wm)("div",null,[(0,r.Wm)("i",{class:["bx text-5xl relative top-[3px]",e.store.text_links?"bxs-toggle-right text-blue-600":"bx-toggle-left text-gray-700"]},null,2)])])]),(0,r.Wm)("div",Qe,[(0,r.Wm)("button",{onClick:t[2]||(t[2]=(...t)=>e.togglePullInterval&&e.togglePullInterval(...t)),class:"w-full flex items-center justify-between"},[Xe,(0,r.Wm)("div",null,[(0,r.Wm)("i",{class:["bx text-5xl relative top-[3px]",!1!==e.store.pull_interval?"bxs-toggle-right text-blue-600":"bx-toggle-left text-gray-700"]},null,2)])])]),!1!==e.store.pull_interval?((0,r.wg)(),(0,r.j4)("div",et,[(0,r.Wm)("div",tt,[lt,(0,r.Wm)("div",st,[!1!==e.store.pull_interval?(0,r.wy)(((0,r.wg)(),(0,r.j4)("input",{key:0,"onUpdate:modelValue":t[3]||(t[3]=t=>e.store.pull_interval=t),class:"text-center w-[4rem]"},null,512)),[[s.nr,e.store.pull_interval]]):(0,r.ry)("",!0),rt])])])):(0,r.ry)("",!0)])),_:1})):(0,r.ry)("",!0)}var ot=(0,r.aZ)({components:{Modal:Ye},methods:{togglePullInterval(){!1===this.store.pull_interval?this.store.pull_interval=1e3:this.store.pull_interval=!1}}});ot.render=nt;var it=ot,at={name:"App",components:{SettingModal:it,LogExceptionModal:Ke,LogMessageModal:Ne,Nav:Ie,Main:we,Aside:j}};at.render=a;var ct=at,ut=l(669),dt=l.n(ut),gt=l(262),mt={base_url:"http://localhost:9001/",github_url:"https://github.com/mojtabaahn/laravel-web-logs"},pt=l(233),ft=(0,gt.qj)({intervals:{},pull_interval:(0,pt._)("pull_interval",1e3),logs:[],loading_logs:!1,current_name:(0,pt._)("current_name",""),current:null,current_content:[],loading_log:!1,is_end:!1,text_links:(0,pt._)("text_links",!0),auto_reload:!1,search:"",open_traces:[],dateComponents:new Set,start:null,end:null,filter:(0,pt._)("filter",""),filter_envs:(0,pt._)("filter_envs",[]),filter_levels:(0,pt._)("filter_levels",[]),envs:["production","staging","local"],levels:["emergency","alert","critical","error","warning","notice","info","debug"],exception_form:{message:""},message_form:{message:"",level:"debug"},aside:!0,setting_modal:!1,exception_modal:!1,message_modal:!1,toggle(e){this[e]=!this[e]},env_is_checked(e){return this.filter_envs.includes(e)},toggle_env(e){this.toggleArray(e,this.filter_envs)},level_is_checked(e){return this.filter_levels.includes(e)},toggle_level(e){this.toggleArray(e,this.filter_levels)},async setup(){await this.fetchLogs();let e=""===this.current_name?this.sorted_logs[0]:this.logs.filter((e=>e.name===this.current_name))[0];await this.openLog(e),this.setupDateInterval(),this.setupPullInterval()},setupPullInterval(){(0,r.YP)((()=>this.pull_interval),(e=>{clearInterval(this.intervals.pull),this.intervals.pull=setInterval((async()=>{await this.pullLog()}),this.pull_interval)}),{immediate:!0})},async pullLog(){null!==this.current_name&&!1!==this.pull_interval&&await axios.get(this.url(`/${this.current_name}?offset=${this.end}&backward=false`)).then((e=>{this.current_content=this.current_content.concat(e.data.data),console.log(e.data),this.end=e.data.end}))},teardown(){},async fetchLogs(){this.loading_logs=!0,await axios.get(this.url("/index")).then((e=>{this.loading_logs=!1,this.logs=e.data}))},async openLog(e){window.innerWidth<1024&&(this.aside=!1),this.current_name=e.name,this.start=null,this.end=null,this.current=e,this.current_content=[],this.is_end=!1,await this.fetchLogNextPage()},async fetchLogNextPage(){this.loading_log=!0;let e=this.current;await axios.get(this.url(`/${e.name}?${null===this.start?"":"offset="+this.start}`)).then((e=>{this.loading_log=!1,this.current_content=this.current_content.concat(e.data.data),this.start=Math.min(this.start,e.data.new_offset),this.end=Math.max(this.end,e.data.end),this.loading_log=!1,0===e.data.data.length&&(this.is_end=!0)}))},async refreshLog(){await this.openLog(this.current)},applyFilters(e){return this.text_links&&(e=Q()(e)),e=e.replaceAll(/([a-zA-Z0-9\\\/\-_\.]+\/)([a-zA-Z0-9\\\-_]+\.(php))/g,"<span class='is-file' title='$1$2'>$2</span>"),e=e.replaceAll(/\\?([a-zA-Z0-9_]+\\{2})+([a-zA-Z0-9_]+)/g,"<span title='$1$2' class='is-class'>$2</span>"),e=e.replaceAll(/([0-9]+)/g,"<span class='is-number'>$1</span>"),e},get sorted_logs(){return this.logs.sort(((e,t)=>t.modified_at-e.modified_at)).filter((e=>e.name.includes(this.search)))},toggleTrace(e){let t=this.current.name+":"+e;this.toggleArray(t,this.open_traces)},toggleArray(e,t){let l=t.indexOf(e);-1===l?t.push(e):t.splice(l,1)},traceIsOpen(e){return this.open_traces.includes(this.current.name+":"+e)},get sorted_content(){return this.current_content.slice().reverse().filter((e=>e.content.includes(this.filter))).filter((e=>0===this.filter_levels.length||this.filter_levels.includes(e.level.toLowerCase()))).filter((e=>0===this.filter_envs.length||this.filter_envs.includes(e.env.toLowerCase())))},traceToArray(e){let t=null,l=!0,s=e.split(/\#([0-9]+)/gms).reduce(((e,s)=>(l?l=!1:null===t?t=s:(e[t]=s,t=null),e)),[]);return s},submit_exception(){axios.post(this.url("/log-exception"),this.exception_form).then((e=>{console.log(e.data),this.exception_modal=!1,this.exception_form.message=""}))},submit_message(){axios.post(this.url("/log-message"),this.message_form).then((e=>{console.log(e.data),this.message_modal=!1,this.message_form.message="",this.message_form.level="debug"}))},async reloadAll(){if(await this.fetchLogs(),null!==this.current){let e=this.current.name;await this.openLog(this.logs.filter((t=>t.name===e))[0])}},url(e){return e="/web-logs"+e,e},setupDateInterval(){setInterval((()=>{for(const e of this.dateComponents)e.$forceUpdate()}),5e3)}}),ht=l(486),vt=l.n(ht);window.axios=dt(),window.__=vt(),ft.setup();let bt=(0,s.ri)(ct);bt.config.globalProperties.store=ft,bt.config.globalProperties.config=mt,bt.config.globalProperties.__=vt(),bt.config.globalProperties.filesize=e=>{let t=0===e?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]},bt.config.globalProperties.unixToDiff=e=>{let t=6e4,l=60*t,s=24*l,r=30*s,n=365*s,o=(new Date).getTime()-1e3*e;return 0===o?"now":o<t?Math.round(o/1e3)+" seconds ago":o<l?Math.round(o/t)+" minutes ago":o<s?Math.round(o/l)+" hours ago":o<r?Math.round(o/s)+" days ago":o<n?Math.round(o/r)+" months ago":Math.round(o/n)+" years ago"},bt.config.globalProperties.unixToString=e=>{let t=new Date(1e3*e),l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=t.getFullYear(),r=l[t.getMonth()],n=t.getDate(),o=t.getHours(),i=t.getMinutes(),a=t.getSeconds();return n+" "+r+" "+s+" "+o+":"+i+":"+a},bt.mount("#app")}},t={};function l(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(n.exports,n,n.exports,l),n.loaded=!0,n.exports}l.m=e,function(){var e=[];l.O=function(t,s,r,n){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],n=e[c][2];for(var i=!0,a=0;a<s.length;a++)(!1&n||o>=n)&&Object.keys(l.O).every((function(e){return l.O[e](s[a])}))?s.splice(a--,1):(i=!1,n<o&&(o=n));i&&(e.splice(c--,1),t=r())}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,r,n]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){l.p="/vendor/web-logs/"}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,o=s[0],i=s[1],a=s[2],c=0;for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(a)var u=a(l);for(t&&t(s);c<o.length;c++)n=o[c],l.o(e,n)&&e[n]&&e[n][0](),e[o[c]]=0;return l.O(u)},s=self["webpackChunkapp"]=self["webpackChunkapp"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=l.O(void 0,[998],(function(){return l(925)}));s=l.O(s)})();
//# sourceMappingURL=app.daf6f2f4.js.map