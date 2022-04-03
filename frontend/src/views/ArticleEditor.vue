<template>
  <div class="container my-2">
    <h1 class="mb-3">Write a Article</h1>
    <p v-if="error" class="alert alert-danger mt-2">{{ error }}</p>
    <form @submit.prevent="onSubmit">
      <input
        v-model="articleTitle"
        placeholder="Title"
        type="text"
        class="form-control mb-3"
        maxlength="50"
      />
      <textarea
        v-model="articleBody"
        rows="10"
        placeholder="Contents"
        class="form-control"
      ></textarea>
      <button type="submit" class="btn btn-success mt-3">Publish</button>
    </form>
  </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
export default {
  name: "ArticleEditor",
  props: {
    slug: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      articleTitle: null,
      articleBody: null,
      error: null,
    };
  },
  methods: {
    async performNetworkRequest() {
      let endpoint = "/api/v1/articles/";
      let method = "POST";
      if (this.slug !== undefined && this.slug !== "") {
        endpoint += `${this.slug}/`;
        method = "PUT";
      }
      try {
        const response = await axios({
          method: method,
          url: endpoint,
          data: { title: this.articleTitle, body: this.articleBody },
        });
        this.$router.push({
          name: "article",
          params: { slug: response.data.slug },
        });
      } catch (error) {
        this.error = error.response.statusText;
      }
    },
    onSubmit() {
      if (!this.articleTitle) {
        this.error = "You can't send an empty article title!";
      } else if (this.articleTitle.length > 50) {
        this.error = "Ensure article title has no more than 50 characters!";
      } else if (!this.articleBody) {
        this.error = "You can't send an empty article contents!";
      } else {
        this.performNetworkRequest();
      }
    },
    created() {
      document.title = "Editor - Django Vue Blog";
    },
  },
  async beforeRouteEnter(to, from, next) {
    if (to.params.slug !== undefined && to.params.slug !== "") {
      const endpoint = `/api/v1/articles/${to.params.slug}/`;
      try {
        const response = await axios.get(endpoint);
        return next(
          (vm) => (
            (vm.articleTitle = response.data.title),
            (vm.articleBody = response.data.body)
          )
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      return next();
    }
  },
};
</script>