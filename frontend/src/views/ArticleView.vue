<template>
  <div class="container mt-3">
    <div v-if="article">
      <div class="card mb-3">
        <div class="card-body">
          <h1 class="card-title mr-1">{{ article.title }}</h1>
          <div class="card-text article-body mt-4">{{ article.body }}</div>
          <div class="mt-4">
            <span class="posted">Posted by</span>
            <span class="ms-1 article-author">{{ article.author }}</span>
            <span class="ms-2 text-muted article-created-at">{{
              article.created_at
            }}</span>
          </div>
        </div>
      </div>

      <ArticleActions v-if="isArticleAuthor" :slug="article.slug" />

      <div v-if="userHasCommented">
        <button class="btn btn-success" disabled>Comment the Article</button>
      </div>
      <div v-else-if="showForm">
        <form @submit.prevent="onSubmit">
          <p class="fs-4">Comment the Article</p>
          <textarea
            v-model="newCommentBody"
            rows="10"
            class="form-control"
            placeholder="Comment"
          ></textarea>
          <button type="submit" class="btn btn-success my-3">
            Submit Your Comment
          </button>
        </form>
        <p v-if="error" class="error mt-2">{{ error }}</p>
      </div>
      <div v-else>
        <button class="btn btn-success" @click="showForm = true">
          Comment the Article
        </button>
      </div>
    </div>
    <div v-else-if="!article && !loadingArticle">
      <h1 class="error text-center">404 - Article Not Found</h1>
    </div>
    <div v-else>now loading...</div>

    <div class="mt-2">
      <div v-if="article">
        <CommentComponent
          v-for="comment in comments"
          :key="comment.uuid"
          :comment="comment"
          :requestUser="requestUser"
          @delete-comment="deleteComment"
        />
      </div>
      <div class="my-4 text-center">
        <p v-show="loadingComments">now loading...</p>
        <button
          v-show="next"
          @click="getArticleComments"
          class="btn btn-sm btn-outline-success"
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
import ArticleActions from "@/components/ArticleActions.vue";
import CommentComponent from "@/components/CommentComponent.vue";

export default {
  name: "ArticleView",
  components: {
    ArticleActions,
    CommentComponent,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: null,
      comments: [],
      next: null,
      loadingArticle: false,
      loadingComments: false,
      userHasCommented: false,
      showForm: false,
      newCommentBody: null,
      error: null,
      requestUser: null,
    };
  },
  computed: {
    isArticleAuthor() {
      return this.article.author == this.requestUser;
    },
  },
  methods: {
    setRequestUser() {
      this.requestUser = window.localStorage.getItem("username");
    },
    setPageTitle(title) {
      document.title = title;
    },
    async getArticleData() {
      const endpoint = `/api/v1/articles/${this.slug}/`;
      this.loadingArticle = true;
      try {
        const response = await axios.get(endpoint);
        this.article = response.data;
        this.userHasCommented = response.data.user_has_commented;
        this.setPageTitle(response.data.title);
        this.loadingArticle = false;
      } catch (error) {
        console.log(error.response);
        const title = "404 - Not Found";
        this.setPageTitle(title);
      }
    },
    async getArticleComments() {
      let endpoint = `/api/v1/articles/${this.slug}/comments/`;
      if (this.next) {
        endpoint = this.next;
      }
      this.loadingComments = true;
      try {
        const response = await axios.get(endpoint);
        this.comments.push(...response.data.results);
        this.loadingComments = false;
        if (response.data.next) {
          this.next = response.data.next;
        } else {
          this.next = null;
        }
      } catch (error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    },
    async onSubmit() {
      if (!this.newCommentBody) {
        this.error = "You can't send an empty comment!";
        return;
      }
      const endpoint = `/api/v1/articles/${this.slug}/comment/`;
      try {
        const response = await axios.post(endpoint, {
          content: this.newCommentBody,
        });
        this.comments.unshift(response.data);
        this.newCommentBody = null;
        this.showForm = false;
        this.userHasCommented = true;
        if (this.error) {
          this.error = null;
        }
      } catch (error) {
        console.log(error);
        // alert(error);
      }
    },
    async deleteComment(comment) {
      const endpoint = `/api/v1/comments/${comment.uuid}/`;
      try {
        await axios.delete(endpoint);
        this.comments.splice(this.comments.indexOf(comment), 1);
        this.userHasCommented = false;
      } catch (error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    },
  },
  created() {
    this.getArticleData();
    this.getArticleComments();
    this.setRequestUser();
  },
};
</script>

<style scoped>
.article-body {
  white-space: pre-line;
  word-wrap: break-word;
}
.posted {
  font-size: small;
}
.article-author {
  font-weight: 700;
  color: #b81762;
}
.article-created-at {
  font-size: small;
}
.error {
  color: #dc3545;
}
</style>