"use strict";(self["webpackChunktm_stories"]=self["webpackChunktm_stories"]||[]).push([[412],{9155:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("div",[e.loading?t("loader",{attrs:{height:e.computedHeight}}):e._e(),t("div",{ref:"home",staticClass:"home"},[!e.loading&&e.mainImage?t("div",{staticClass:"background-image"},[t("img",{attrs:{alt:"tmstories main image, showing some of Timişoara's famous landmarks",src:`data:image/png;base64, ${e.mainImage}`}})]):e._e(),e.loading?e._e():t("div",{staticClass:"title-container animate__animated animate__slideInLeft"},[t("h1",{staticClass:"hero-title"},[e._v(e._s(e.$t("homePage.greeting")))])]),e.mainImage?t("div",{staticClass:"cover"}):e._e()]),t("div",{staticClass:"opacity-screen"})],1)},n=[],s=a(2760),o=a(9669),r=a.n(o),m={name:"Home",components:{loader:s.Z},data(){return{loading:!1,mainImage:null}},computed:{computedHeight(){return.9*window.innerHeight}},beforeMount(){window.setTimeout((()=>this.getMainPhoto()),500)},methods:{async getMainPhoto(){let e;this.loading=!0;const t=r().get(`${window.location.origin}/public-images/modern-min.png`,{responseType:"arraybuffer"});try{e=await t,this.mainImage=Buffer.from(e.data,"binary").toString("base64"),this.loading=!1}catch(a){return console.error("There was an error",a),void(this.loading=!1)}this.loading=!1}}},d=m,l=a(1001),g=(0,l.Z)(d,i,n,!1,null,"1d1f0386",null),c=g.exports}}]);