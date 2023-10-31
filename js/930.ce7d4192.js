"use strict";(self["webpackChunkpanacea"]=self["webpackChunkpanacea"]||[]).push([[930],{4619:function(e,a,t){t.d(a,{Z:function(){return b}});var o=t(6252),i=t(237);const s=e=>((0,o.dD)("data-v-27741ac8"),e=e(),(0,o.Cn)(),e),r={class:"container"},n={class:"main__footer"},c=s((()=>(0,o._)("div",{class:"footer__logo"},[(0,o._)("img",{src:i,alt:"FooterLogo"})],-1))),l={class:"footer__menu"},u={class:"menu__item"},d={class:"menu__item"},v=s((()=>(0,o._)("p",{class:"footer__descript"},"Panacea - An international gaming platform offering it's players only the best quality. All rights reserved.",-1)));function m(e,a,t,i,s,m){const f=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("footer",null,[(0,o._)("div",r,[(0,o._)("div",n,[c,(0,o._)("ul",l,[(0,o._)("div",u,[(0,o._)("li",null,[(0,o.Wm)(f,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Main")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(f,{to:"/Contacts"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1})])]),(0,o._)("div",d,[(0,o._)("li",null,[(0,o.Wm)(f,{to:"/Privacy"},{default:(0,o.w5)((()=>[(0,o.Uk)("Privacy policy")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(f,{to:"/Terms"},{default:(0,o.w5)((()=>[(0,o.Uk)("Terms of use")])),_:1})])])])]),v])])}var f={name:"TheFooter"},p=t(3744);const g=(0,p.Z)(f,[["render",m],["__scopeId","data-v-27741ac8"]]);var b=g},679:function(e,a,t){t.d(a,{Z:function(){return X}});var o=t(6252),i=t(3577),s=t(5080),r=t(5585),n=t(87),c=t(9981),l=t(6750),u=t(8388);const d=e=>((0,o.dD)("data-v-61b8caec"),e=e(),(0,o.Cn)(),e),v={class:"container"},m=d((()=>(0,o._)("img",{src:s,alt:"Logo",class:"logo"},null,-1))),f={class:"active"},p={class:"right_header"},g={key:0,class:"log_button",href:"https://api.panaceadayz.us/v1/Player.SteamLogin"},b=d((()=>(0,o._)("img",{src:r,alt:"IconProfile"},null,-1))),h={class:"user__info"},w={class:"user__name"},y=d((()=>(0,o._)("img",{src:n,alt:"arrow"},null,-1))),A={class:"user__balance"},I={class:"user__img"},k=["src"],B=d((()=>(0,o._)("span",null,null,-1))),C=[B],D=d((()=>(0,o._)("div",{class:"item__name"},"Profile",-1))),L=d((()=>(0,o._)("div",{class:"item__icon"},[(0,o._)("img",{src:c,alt:"ItemIcon"})],-1))),P=d((()=>(0,o._)("div",{class:"item__name"},"Balance",-1))),R=d((()=>(0,o._)("div",{class:"item__icon"},[(0,o._)("img",{src:l,alt:"ItemIcon"})],-1))),W=d((()=>(0,o._)("img",{src:u,alt:"LogOut"},null,-1)));function _(e,a,t,s,r,n){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",v,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[m])),_:1}),(0,o._)("nav",null,[(0,o._)("ul",{class:(0,i.C_)(["menu",{"menu-active":!0===e.IsMenuOpen}])},[(0,o._)("li",f,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(c,{to:"/store"},{default:(0,o.w5)((()=>[(0,o.Uk)("Store")])),_:1})]),(0,o._)("li",null,[e.USER.auth?((0,o.wg)(),(0,o.j4)(c,{key:1,to:"/Roulette"},{default:(0,o.w5)((()=>[(0,o.Uk)("Roulette")])),_:1})):((0,o.wg)(),(0,o.j4)(c,{key:0,to:"/fakepage"},{default:(0,o.w5)((()=>[(0,o.Uk)("Log in with Steam")])),_:1}))])],2)]),(0,o._)("div",p,[e.USER.auth?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"user",onClick:a[0]||(a[0]=a=>e.IsLoginModalOpen=!e.IsLoginModalOpen)},[(0,o._)("div",h,[(0,o._)("div",w,[(0,o.Uk)((0,i.zw)(e.USER.name)+" ",1),y]),(0,o._)("div",A,"$"+(0,i.zw)(e.USER.balance),1)]),(0,o._)("div",I,[(0,o._)("img",{src:e.USER.img,alt:"UserImg"},null,8,k)])])):((0,o.wg)(),(0,o.iD)("a",g,[(0,o.Uk)("Account "),b])),(0,o._)("button",{class:"md__button",onClick:a[1]||(a[1]=e=>n.OpenModal())},C),(0,o._)("div",{class:(0,i.C_)(["modal__login",{modal__active:!0===e.IsLoginModalOpen}])},[(0,o.Wm)(c,{to:"/Profile",class:"modal__item"},{default:(0,o.w5)((()=>[D,L])),_:1}),(0,o.Wm)(c,{to:"/Profile",class:"modal__item"},{default:(0,o.w5)((()=>[P,R])),_:1}),(0,o._)("button",{onClick:a[2]||(a[2]=e=>n.LogOut()),class:"modal__button"},[(0,o.Uk)(" Logout "),W])],2)])])])}var U=t(3907),V={name:"TheHeader",computed:{...(0,U.Se)(["USER"])},data:()=>({IsLoginModalOpen:!1,IsMenuOpen:!1}),methods:{OpenModal(){this.IsMenuOpen=!this.IsMenuOpen},LogOut(){this.LogOut()},...(0,U.nv)(["LogOut"])}},E=t(3744);const M=(0,E.Z)(V,[["render",_],["__scopeId","data-v-61b8caec"]]);var X=M},4930:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var o=t(6252);const i=(0,o.uE)('<main data-v-37a2026e><div class="container" data-v-37a2026e><div class="privacy" data-v-37a2026e><h1 class="privacy__title" data-v-37a2026e>Privacy Policy</h1><p class="privacy__text" data-v-37a2026e>Panaceadayz.us respects your privacy and we are determined to protect all of your personal information. This Privacy Policy will explain how we collect, use, and disclose and any all information about every individual when they visit and use our website (Panaceadayz.us). <br data-v-37a2026e><br data-v-37a2026e>What type of information we will collect? <br data-v-37a2026e><br data-v-37a2026e>We will collect specific information from and about the users of our website, including but not limited to: Personal Information--This includes your name, email address, or other contact information when you contact us with a question or concern--or when you purchase an item. Log Data: We automatically collect information when you visit the website, including but not limited to, your IP address, browser type and settings, device type and settings, operating system, mobile network information, and application version number. Usage Data: We will collect information about how you use our website, including the pages you visit, the time and date of your visit, and the links you click on. Cookies and Similar Technologies: We may use cookies and similar technologies to collect information about your interactions with Panaceadayz.us to help us personalize your experience. <br data-v-37a2026e><br data-v-37a2026e>How do we use this information? <br data-v-37a2026e><br data-v-37a2026e>With the information we collect we are able to improve our website, respond to your questions and concerns, communicate with you, personalize your experience within the website, prevent technical issues. We may also use information that does not personally identify you, i.e., aggregated or de-identified data, for any purpose. <br data-v-37a2026e><br data-v-37a2026e>How We Might Share Your Information: <br data-v-37a2026e><br data-v-37a2026e>We may share your information with certain third parties for the following circumstances: <br data-v-37a2026e><br data-v-37a2026e>Service Providers--We may share your information with third-party service providers that help us operate Panaceadayz.us and provide our products and services. <br data-v-37a2026e><br data-v-37a2026e>Business Transfers--If we sell, transfer, or otherwise dispose of our business or assets, we may transfer your information to the buyer. <br data-v-37a2026e><br data-v-37a2026e>Legal Requirements--We may disclose your information if required by law, court order, or other legal process. <br data-v-37a2026e><br data-v-37a2026e><br data-v-37a2026e><br data-v-37a2026e>User Choices: <br data-v-37a2026e>You have several choices with respect to your personal information: <br data-v-37a2026e>You can disable cookies in your browser settings. <br data-v-37a2026e>You can contact us to request access to or correction of your personal information. <br data-v-37a2026e><br data-v-37a2026e>Security: <br data-v-37a2026e>We take reasonable measures to protect the information we collect from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. <br data-v-37a2026e>Changes to this Policy: <br data-v-37a2026e><br data-v-37a2026e>We may update this Privacy Policy from time to time. If we make material changes, we will provide notice by posting a notice on Panaceadayz.us or by other means. <br data-v-37a2026e><br data-v-37a2026e>Contact Us: <br data-v-37a2026e>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us on our Discord at discord.gg/panacea. Thank you for choosing Panacea! Have fun!</p></div></div></main>',1);function s(e,a,t,s,r,n){const c=(0,o.up)("TheHeader"),l=(0,o.up)("TheFooter");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c),i,(0,o.Wm)(l)])}var r=t(679),n=t(4619),c={name:"PrivacyPolicy",components:{TheHeader:r.Z,TheFooter:n.Z}},l=t(3744);const u=(0,l.Z)(c,[["render",s],["__scopeId","data-v-37a2026e"]]);var d=u},87:function(e,a,t){e.exports=t.p+"img/arrow.6ffdd4d8.svg"},8388:function(e,a,t){e.exports=t.p+"img/icon_exit.f567a66d.svg"},6750:function(e,a,t){e.exports=t.p+"img/icon_moore.d9614c2b.svg"},5585:function(e,a,t){e.exports=t.p+"img/icon_profile.864e60e1.svg"},9981:function(e,a,t){e.exports=t.p+"img/icon_user.e5432ca8.svg"},5080:function(e){e.exports="data:image/png;base64,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"},237:function(e,a,t){e.exports=t.p+"img/logo3.242dd491.png"}}]);
//# sourceMappingURL=930.ce7d4192.js.map