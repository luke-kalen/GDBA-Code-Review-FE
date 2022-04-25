<template>
  <div>
    <RegisterForm  />
    <footer-small absolute />
  </div>
</template>

<script>
import RegisterForm from "@/components/Auth/RegisterForm";
import FooterSmall from "@/components/Footers/FooterSmall.vue";
export default {
  name: "RegisterView",
  components: {
    RegisterForm,
    FooterSmall
  },
};
</script>