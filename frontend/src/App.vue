<template>
  <NavbarComponent />
  <router-view />
</template>

<script>
import { axios } from "@/common/api.service.js";
import NavbarComponent from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },
  methods: {
    async setUserInfo() {
      try {
        const response = await axios.get("/auth/users/me/");
        const requestUser = response.data["username"];
        window.localStorage.setItem("username", requestUser);
      } catch (error) {
        alert(error.response.statusText);
      }
    },
  },
  created() {
    this.setUserInfo();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #141e27;
}

nav {
  padding: 30px;
  background: #203239;
}

nav a {
  font-weight: bold;
  color: #eeedde;
}

nav a.router-link-exact-active {
  color: #eeedde;
}
</style>
