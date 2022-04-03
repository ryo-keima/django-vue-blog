import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: () => import(/* webpackChunkName: "article-detail" */ '../views/ArticleView.vue'),
    props: true,
  },
  {
    path: '/article/author/:author',
    name: 'author-article',
    component: () => import(/* webpackChunkName: "author-article" */ '../views/AuthorArticleView.vue'),
    props: true,
  },
  {
    path: '/edit/:slug?',
    name: 'article-editor',
    component: () => import(/* webpackChunkName: "article-editor" */ '../views/ArticleEditor.vue'),
    props: true,
  },
  {
    path: '/comment/:uuid',
    name: 'comment-editor',
    component: () => import(/* webpackChunkName: "comment-editor" */ '../views/CommentEditor.vue'),
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'page-not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
