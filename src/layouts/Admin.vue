<template>
  <div >
    <v-app-bar app></v-app-bar>
    <v-main>
    <!-- <UserDropdown /> -->
    <Sidebar />
      <router-view></router-view>
    </v-main>
  </div>
</template>
<script>
// import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
// import UserDropdown from '@/components/Dropdowns/UserDropdown'
// import HeaderStats from "@/components/Headers/HeaderStats.vue";
// import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    // AdminNavbar,
    // UserDropdown,
    Sidebar,
    // HeaderStats,
    // FooterAdmin,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
    }
  },

  async created() {
    await this.$store.dispatch('user/getUsers');
    await this.$store.dispatch('org/showOrgs');
    await this.$store.dispatch('dept/showDepts');
  }
};
</script>
