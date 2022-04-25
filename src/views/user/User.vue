<template>
<div>
  <v-toolbar elevation="0">
    <v-btn class="white mr-5" color="primary" dark small @click="go">
      <v-icon dark left>mdi-arrow-left</v-icon>BACK
    </v-btn>
    <v-toolbar-title class="text-h4 primary--text ml-10">ACCOUNT SETTINGS</v-toolbar-title>
  </v-toolbar>
  <v-card>
    <CardSettings :updateUser="updateUser"/>
  </v-card>
</div>

</template>

<script>

import CardSettings from "@/components/Cards/CardSettings.vue";
export default {
  name: "UserView",
  components: {
    CardSettings,
    // CardProfile,
  },
  methods: {
    updateUser() {
      this.$store.dispatch("auth/getAuthUser");
    },
    go() {
      this.$router.back(-1)
    }
  },
};
</script>