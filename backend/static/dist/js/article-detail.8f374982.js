"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[250],{102:function(t,e,s){s.r(e),s.d(e,{default:function(){return nt}});var n=s(252),o=s(577),i=s(963);const r=t=>((0,n.dD)("data-v-318925ae"),t=t(),(0,n.Cn)(),t),m={class:"container mt-3"},a={key:0},l={class:"card mb-3"},c={class:"card-body"},u={class:"card-title mr-1"},d={class:"card-text article-body mt-4"},h={class:"mt-4"},g=r((()=>(0,n._)("span",{class:"posted"},"Posted by",-1))),C={class:"ms-1 article-author"},p={class:"ms-2 text-muted article-created-at"},w={key:1},b=r((()=>(0,n._)("button",{class:"btn btn-success",disabled:""},"Comment the Article",-1))),k=[b],y={key:2},_=r((()=>(0,n._)("p",{class:"fs-4"},"Comment the Article",-1))),v=r((()=>(0,n._)("button",{type:"submit",class:"btn btn-success my-3"}," Submit Your Comment ",-1))),A={key:0,class:"error mt-2"},D={key:3},f={key:1},x=r((()=>(0,n._)("h1",{class:"error text-center"},"404 - Article Not Found",-1))),q=[x],U={key:2},L={class:"mt-2"},B={key:0},F={class:"my-4 text-center"};function z(t,e,s,r,b,x){const z=(0,n.up)("ArticleActions"),S=(0,n.up)("CommentComponent");return(0,n.wg)(),(0,n.iD)("div",m,[b.article?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",l,[(0,n._)("div",c,[(0,n._)("h1",u,(0,o.zw)(b.article.title),1),(0,n._)("div",d,(0,o.zw)(b.article.body),1),(0,n._)("div",h,[g,(0,n._)("span",C,(0,o.zw)(b.article.author),1),(0,n._)("span",p,(0,o.zw)(b.article.created_at),1)])])]),x.isArticleAuthor?((0,n.wg)(),(0,n.j4)(z,{key:0,slug:b.article.slug},null,8,["slug"])):(0,n.kq)("",!0),b.userHasCommented?((0,n.wg)(),(0,n.iD)("div",w,k)):b.showForm?((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("form",{onSubmit:e[1]||(e[1]=(0,i.iM)(((...t)=>x.onSubmit&&x.onSubmit(...t)),["prevent"]))},[_,(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":e[0]||(e[0]=t=>b.newCommentBody=t),rows:"10",class:"form-control",placeholder:"Comment"},null,512),[[i.nr,b.newCommentBody]]),v],32),b.error?((0,n.wg)(),(0,n.iD)("p",A,(0,o.zw)(b.error),1)):(0,n.kq)("",!0)])):((0,n.wg)(),(0,n.iD)("div",D,[(0,n._)("button",{class:"btn btn-success",onClick:e[2]||(e[2]=t=>b.showForm=!0)}," Comment the Article ")]))])):b.article||b.loadingArticle?((0,n.wg)(),(0,n.iD)("div",U,"now loading...")):((0,n.wg)(),(0,n.iD)("div",f,q)),(0,n._)("div",L,[b.article?((0,n.wg)(),(0,n.iD)("div",B,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.comments,(t=>((0,n.wg)(),(0,n.j4)(S,{key:t.uuid,comment:t,requestUser:b.requestUser,onDeleteComment:x.deleteComment},null,8,["comment","requestUser","onDeleteComment"])))),128))])):(0,n.kq)("",!0),(0,n._)("div",F,[(0,n.wy)((0,n._)("p",null,"now loading...",512),[[i.F8,b.loadingComments]]),(0,n.wy)((0,n._)("button",{onClick:e[3]||(e[3]=(...t)=>x.getArticleComments&&x.getArticleComments(...t)),class:"btn btn-sm btn-outline-success"}," Load More ",512),[[i.F8,b.next]])])])])}var S=s(718);const $={class:"mt-3"},T=(0,n.Uk)("Edit "),H=(0,n._)("hr",null,null,-1);function Y(t,e,s,o,r,m){const a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",$,[(0,n.Wm)(a,{class:"btn btn-sm btn-warning me-1",to:{name:"article-editor",params:{slug:s.slug}}},{default:(0,n.w5)((()=>[T])),_:1},8,["to"]),(0,n._)("button",{class:"btn btn-sm btn-danger mx-1",onClick:e[0]||(e[0]=t=>r.showDeleteConfirmationBtn=!0)}," Delete "),(0,n.wy)((0,n._)("button",{class:"btn btn-sm btn-outline-danger",onClick:e[1]||(e[1]=(...t)=>m.deleteArticle&&m.deleteArticle(...t))}," Yes, delete my article! ",512),[[i.F8,r.showDeleteConfirmationBtn]]),H])}var P={name:"ArticleActions",props:{slug:{type:String,required:!0}},data(){return{showDeleteConfirmationBtn:!1}},methods:{async deleteArticle(){const t=`/api/v1/articles/${this.slug}/`;try{await S.o["delete"](t),this.$router.push({name:"home"})}catch(e){console.log(e.response),alert(e.response.statusText)}}}},j=s(744);const I=(0,j.Z)(P,[["render",Y]]);var Z=I;const E={class:"card mb-2 comment-card"},M={class:"card-body"},N={class:"text-muted"},O={class:"comment-body"},R={key:0},V=(0,n.Uk)(" Edit "),W={key:1},K=(0,n.Uk)(" Like  "),G={class:"badge bg-danger"};function J(t,e,s,r,m,a){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("div",M,[(0,n._)("p",null,[(0,n._)("strong",null,[(0,n.Uk)((0,o.zw)(s.comment.author)+" ⋅ ",1),(0,n._)("span",N,(0,o.zw)(s.comment.created_at),1)])]),(0,n._)("p",O,(0,o.zw)(s.comment.content),1),a.isCommentAuthor?((0,n.wg)(),(0,n.iD)("div",R,[(0,n.Wm)(l,{class:"btn btn-sm btn-warning me-1",to:{name:"comment-editor",params:{uuid:s.comment.uuid}}},{default:(0,n.w5)((()=>[V])),_:1},8,["to"]),(0,n._)("button",{class:"btn btn-sm btn-danger mx-1",onClick:e[0]||(e[0]=t=>m.showDeleteConfirmationBtn=!0)}," Delete "),(0,n.wy)((0,n._)("button",{class:"btn btn-sm btn-outline-danger",onClick:e[1]||(e[1]=(...t)=>a.triggerDeleteComment&&a.triggerDeleteComment(...t))}," Yes, delete my comment! ",512),[[i.F8,m.showDeleteConfirmationBtn]])])):((0,n.wg)(),(0,n.iD)("div",W,[(0,n._)("button",{class:(0,o.C_)(["btn",{"btn-warning":m.userLikedComment,"btn-outline-danger":!m.userLikedComment}]),onClick:e[2]||(e[2]=(...t)=>a.toggelLike&&a.toggelLike(...t))},[K,(0,n._)("span",G,(0,o.zw)(m.likesCounter),1)],2)]))])])}var Q={name:"CommentComponent",props:{comment:{type:Object,required:!0},requestUser:{type:String,required:!0}},data(){return{showDeleteConfirmationBtn:!1,userLikedComment:this.comment.user_has_liked_comment,likesCounter:this.comment.likes_count}},computed:{isCommentAuthor(){return this.comment.author===this.requestUser}},methods:{toggelLike(){!1===this.userLikedComment?this.likeComment():this.unLikeComment()},async likeComment(){this.userLikedComment=!0,this.likesCounter+=1;const t=`/api/v1/comments/${this.comment.uuid}/like/`;try{await S.o.post(t)}catch(e){console.log(e.response),alert(e.response.statusText)}},async unLikeComment(){this.userLikedComment=!1,this.likesCounter-=1;const t=`/api/v1/comments/${this.comment.uuid}/like/`;try{await S.o["delete"](t)}catch(e){console.log(e.response),alert(e.response.statusText)}},triggerDeleteComment(){this.$emit("delete-comment",this.comment)}}};const X=(0,j.Z)(Q,[["render",J],["__scopeId","data-v-4f1a0f1f"]]);var tt=X,et={name:"ArticleView",components:{ArticleActions:Z,CommentComponent:tt},props:{slug:{type:String,required:!0}},data(){return{article:null,comments:[],next:null,loadingArticle:!1,loadingComments:!1,userHasCommented:!1,showForm:!1,newCommentBody:null,error:null,requestUser:null}},computed:{isArticleAuthor(){return this.article.author==this.requestUser}},methods:{setRequestUser(){this.requestUser=window.localStorage.getItem("username")},setPageTitle(t){document.title=t},async getArticleData(){const t=`/api/v1/articles/${this.slug}/`;this.loadingArticle=!0;try{const e=await S.o.get(t);this.article=e.data,this.userHasCommented=e.data.user_has_commented,this.setPageTitle(e.data.title),this.loadingArticle=!1}catch(e){console.log(e.response);const t="404 - Not Found";this.setPageTitle(t)}},async getArticleComments(){let t=`/api/v1/articles/${this.slug}/comments/`;this.next&&(t=this.next),this.loadingComments=!0;try{const e=await S.o.get(t);this.comments.push(...e.data.results),this.loadingComments=!1,e.data.next?this.next=e.data.next:this.next=null}catch(e){console.log(e.response),alert(e.response.statusText)}},async onSubmit(){if(!this.newCommentBody)return void(this.error="You can't send an empty comment!");const t=`/api/v1/articles/${this.slug}/comment/`;try{const e=await S.o.post(t,{content:this.newCommentBody});this.comments.unshift(e.data),this.newCommentBody=null,this.showForm=!1,this.userHasCommented=!0,this.error&&(this.error=null)}catch(e){console.log(e)}},async deleteComment(t){const e=`/api/v1/comments/${t.uuid}/`;try{await S.o["delete"](e),this.comments.splice(this.comments.indexOf(t),1),this.userHasCommented=!1}catch(s){console.log(s.response),alert(s.response.statusText)}}},created(){this.getArticleData(),this.getArticleComments(),this.setRequestUser()}};const st=(0,j.Z)(et,[["render",z],["__scopeId","data-v-318925ae"]]);var nt=st}}]);
//# sourceMappingURL=article-detail.8f374982.js.map