<template>
  <div class="container mt-2">
    <h1 class="mb-3">Edit Your Comment</h1>
    <form @submit.prevent="onSubmit">
      <textarea v-model="commentBody" class="form-control" rows="10"></textarea>
      <button class="btn btn-success mt-3">Publish</button>
    </form>
    <p v-if="error" class="muted mt-2 error">{{ error }}</p>
  </div>
</template>

<script>
import { axios } from "@/common/api.service.js";

export default {
  name: "CommentEditor",
  props: {
    uuid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      commentBody: null,
      articleSlug: null,
      error: null,
    };
  },
  methods: {
    async onSubmit() {
      if (!this.commentBody) {
        this.error = "You can't submit an empty comment!";
        return;
      } else if (this.commentBody.length > 250) {
        this.error = "Ensure comment has no more than 250 characters!";
        return;
      }
      const endpoint = `/api/v1/comments/${this.uuid}/`;
      try {
        await axios.put(endpoint, { content: this.commentBody });
        this.$router.push({
          name: "article",
          params: { slug: this.articleSlug },
        });
      } catch (error) {
        console.log(error)
        console.log(error.response);
        alert(error.response.statusText);
      }
    },
  },
  async beforeRouteEnter(to, from, next) {
    const endpoint = `/api/v1/comments/${to.params.uuid}/`;
    try {
      const response = await axios.get(endpoint);
      return next(
        (vm) => (
          (vm.commentBody = response.data.content),
          (vm.articleSlug = response.data.article_slug)
        )
      );
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.error {
  color: #b81762;
}
</style>