<template>
  <div id="app">
    <a href="#" v-cloak @click.prevent="login" v-if="!activeUser">Log in</a>
    <a href="#" v-cloak @click.prevent="logout" v-else>Log out</a>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      activeUser: null
    };
  },

  async created() {
    await this.refreshActiveUser();
  },

  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },

  methods: {
    login() {
      this.$auth.loginRedirect();
    },

    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser();
    },

    async logout() {
      await this.$auth.logout();
      await this.refreshActiveUser();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    height: 67vh;
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }
  [v-cloak] {
    display: none;
  }
</style>
