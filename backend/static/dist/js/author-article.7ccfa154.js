"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[706],{299:function(t,e,s){s.r(e),s.d(e,{default:function(){return A}});var a=s(252),n=s(577),l=s(963);const i={class:"home mt-4"},r={class:"container"},c={class:"h2 mb-2 text-center"},o=(0,a.Uk)("Articles by "),d={class:"article-author"},u={class:"card shadow p-2 mb-4 bg-body rounded"},h={class:"card-body"},g={class:"h3 pull-left"},p={class:"text-muted date-font-size"},w={class:"text-secondary author-font-size"},_=(0,a.Uk)(" Posted by "),v={class:"article-author"},m={class:"my-4 text-center"};function b(t,e,s,b,x,f){const y=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",r,[(0,a._)("div",c,[o,(0,a._)("span",d,(0,n.zw)(s.author),1)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(x.articles,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.uuid},[(0,a._)("div",u,[(0,a._)("div",h,[(0,a.Wm)(y,{to:{name:"article",params:{slug:t.slug}},class:"article-link"},{default:(0,a.w5)((()=>[(0,a._)("div",g,(0,n.zw)(t.title),1)])),_:2},1032,["to"]),(0,a._)("div",p,(0,n.zw)(t.created_at),1),(0,a._)("div",w,[_,(0,a._)("span",v,(0,n.zw)(s.author),1)])])])])))),128)),(0,a._)("div",m,[(0,a.wy)((0,a._)("p",null,"now loading...",512),[[l.F8,x.loadingArticle]]),(0,a.wy)((0,a._)("button",{onClick:e[0]||(e[0]=(...t)=>f.getArticles&&f.getArticles(...t)),class:"btn btn-sm btn-outline-success"}," Load More ",512),[[l.F8,x.next]])])])])}var x=s(718),f={name:"HomeView",props:{author:{type:String,required:!0}},data(){return{articles:[],next:null,loadingArticle:!1}},methods:{async getArticles(){let t=`/api/v1/articles/author/${this.author}/`;this.next&&(t=this.next),this.loadingArticle=!0;try{const e=await x.o.get(t);this.articles.push(...e.data.results),this.loadingArticle=!1,e.data.next?this.next=e.data.next:this.next=null}catch(e){console.log(e.response),alert(e.response.statusText)}}},created(){document.title="Django Vue Blog",this.getArticles()}},y=s(744);const k=(0,y.Z)(f,[["render",b],["__scopeId","data-v-9a643752"]]);var A=k}}]);
//# sourceMappingURL=author-article.7ccfa154.js.map