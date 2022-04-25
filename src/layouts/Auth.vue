<template>
  <div>
    <Login />
    <footer-small absolute />
  </div>
</template>
<script>
import FooterSmall from "@/components/Footers/FooterSmall.vue";
import Login from '@/views/auth/Login';
import registerBg2 from "@/assets/img/register_bg_2.png";

export default {
  data() {
    return {
      registerBg2,
    };
  },
  components: {
    FooterSmall,
    Login
  },
};
</script>
