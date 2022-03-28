<template>
  <div class="home mt-4">
    <div class="container">
      <div class="h2 mb-2 text-center">Latest Articles</div>
      <div v-for="article in articles" :key="article.uuid">
        <div class="card shadow p-2 mb-4 bg-body rounded">
          <div class="card-body">
            <router-link
              :to="{ name: 'article', params: { slug: article.slug } }"
              class="article-link"
            >
              <div class="h3 pull-left">
                {{ article.title }}
              </div>
            </router-link>
            <div class="text-muted date-font-size">
              {{ article.created_at }}
            </div>
            <div class="text-secondary author-font-size">
              Posted by
              <router-link
                :to="{ name: 'author-article', params: { author: article.author }}"
                class="article-author"
                >{{ article.author }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="my-4 text-center">
        <p v-show="loadingArticle">now loading...</p>
        <button
          v-show="next"
          @click="getArticles"
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

export default {
  name: "HomeView",
  data() {
    return {
      articles: [],
      next: null,
      loadingArticle: false,
    };
  },
  components: {},
  methods: {
    async getArticles() {
      let endpoint = "/api/v1/articles/";
      if (this.next) {
        endpoint = this.next;
      }
      this.loadingArticle = true;
      try {
        const response = await axios.get(endpoint);
        this.articles.push(...response.data.results);
        this.loadingArticle = false;
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
  },
  created() {
    document.title = "Django Vue Blog";
    this.getArticles();
  },
};
</script>

<style scoped>
.card-size {
  height: 100px;
}
.date-font-size {
  font-size: 0.8em;
}
.author-font-size {
  font-size: 0.8em;
}
.article-link {
  font-weight: 400;
  color: black;
  text-decoration: none;
}
.article-link:hover {
  color: #343a40;
}
.article-author {
  font-weight: 700;
  color: #b81762;
}
</style>