<template>
  <div class="card mb-2 comment-card">
    <div class="card-body">
      <p>
        <strong>{{ comment.author }} &#8901; <span class="text-muted">{{ comment.created_at }}</span></strong>
      </p>
      <p class="comment-body">{{ comment.content }}</p>
      <div v-if="isCommentAuthor">
        <router-link
          class="btn btn-sm btn-warning me-1"
          :to="{ name: 'comment-editor', params: { uuid: comment.uuid } }"
        >
          Edit
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
          @click="triggerDeleteComment"
        >
          Yes, delete my comment!
        </button>
      </div>
      <div v-else>
        <button
          class="btn"
          :class="{
            'btn-warning': userLikedComment,
            'btn-outline-danger': !userLikedComment,
          }"
          @click="toggelLike"
        >
          Like&nbsp;
          <span class="badge bg-danger">{{ likesCounter }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/api.service.js";
export default {
  name: "CommentComponent",
  props: {
    comment: {
      type: Object,
      required: true,
    },
    requestUser: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showDeleteConfirmationBtn: false,
      userLikedComment: this.comment.user_has_liked_comment,
      likesCounter: this.comment.likes_count,
    };
  },
  computed: {
    isCommentAuthor() {
      return this.comment.author === this.requestUser;
    },
  },
  methods: {
    toggelLike() {
      this.userLikedComment === false
        ? this.likeComment()
        : this.unLikeComment();
    },
    async likeComment() {
      this.userLikedComment = true;
      this.likesCounter += 1;
      const endpoint = `/api/v1/comments/${this.comment.uuid}/like/`;
      try {
        await axios.post(endpoint);
      } catch (error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    },
    async unLikeComment() {
      this.userLikedComment = false;
      this.likesCounter -= 1;
      const endpoint = `/api/v1/comments/${this.comment.uuid}/like/`;
      try {
        await axios.delete(endpoint);
      } catch (error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    },
    triggerDeleteComment() {
      this.$emit("delete-comment", this.comment);
    },
  },
};
</script>

<style scoped>
.comment-card{
  background-color: #d4d3bd;
}
.comment-body {
  white-space: nowrap;
  white-space: pre-line;
  word-wrap: break-word;
}
</style>