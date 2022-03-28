<template>
  <nav class="navbar navbar-expand-sm my-navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        Django Vue Blog
      </router-link>
      <ul class="navbar-nav ms-auto flex-row">
        <li class="nav-item me-2">
          <router-link class="btn btn-sm btn-danger" :to="{ name: 'article-editor' }">
            Write a Article
          </router-link>
        </li>
        <li class="nav-item">
          <a class="btn btn-sm btn-lg btn-outline-warning" href="/accounts/logout/"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      requestUser: null,
    };
  },
  methods: {
    setRequestUser() {
      this.requestUser = window.localStorage.getItem("username");
    },
  },
  created() {
    this.setRequestUser();
  },
};
</script>

<style>
.my-navbar {
  border-bottom: 1px solid #dddddd;
  padding-right: 10px;
}
.navbar-brand {
  font-weight: bold;
  font-size: 150%;
}
.navbar-brand:hover {
  color: #e0ddaa !important;
}
.flex-row {
  flex-direction: row;
}
</style>