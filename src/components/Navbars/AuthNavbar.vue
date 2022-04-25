<template>
  <nav
  >
    <div
    >
      <div
      >
        <router-link
          to="/"
        >
          ODIN
        </router-link>
        <button
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
// import PagesDropdown from "@/components/Dropdowns/PagesDropdown.vue";
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    // PagesDropdown,
  },
};
</script>