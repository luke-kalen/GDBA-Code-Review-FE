<template>
  <v-button
    depressed
    plain
    color="primary"
    @click="logout"
  >
    <span class="sm:inline">Logout</span>
  </v-button>
</template>

<script>
export default {
  name: "Logout",
  mounted() {
    this.$store.dispatch("auth/logout");
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>