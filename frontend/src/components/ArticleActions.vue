<template>
  <div class="mt-3">
    <router-link
      class="btn btn-sm btn-warning me-1"
      :to="{ name: `article-editor`, params: { slug: slug } }"
      >Edit
    </router-link>
    <button
      class="btn btn-sm btn-danger mx-1"
      @click="showDeleteConfirmationBtn = true"
    >
      Delete
    </button>
    <button
      class="btn btn-sm btn-outline-danger"
      v-show="showDeleteConfirmationBtn"
      @click="deleteArticle"
    >
      Yes, delete my article!
    </button>
    <hr />
  </div>
</template>


<script>
import { axios } from "@/common/api.service.js";
export default {
  name: "ArticleActions",
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showDeleteConfirmationBtn: false,
    };
  },
  methods: {
    async deleteArticle() {
      const endpoint = `/api/v1/articles/${this.slug}/`;
      try {
        await axios.delete(endpoint);
        this.$router.push({
          name: "home",
        });
      } catch (error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    },
  },
};
</script>