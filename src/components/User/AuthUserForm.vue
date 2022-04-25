<template>
  <form @submit.prevent="updateUser">
    <BaseInput
      type="text"
      label="Name"
      name="name"
      v-model="name"
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    />
    <BaseInput
      type="email"
      label="Email"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="luke@jedi.com"
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    />
    <BaseBtn type="submit" text="Update" class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"/>
    <FlashMessage :message="message" :error="error" />
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/Base/BaseBtn";
import BaseInput from "@/components/Base/BaseInput";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage";
export default {
  name: "AuthUserForm",
  components: {
    BaseBtn,
    BaseInput,
    FlashMessage,
  },
  data() {
    return {
      name: null,
      email: null,
      error: null,
      message: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    updateUser() {
      this.error = null;
      this.message = null;
      const payload = {
        name: this.name,
        email: this.email,
      };
      AuthService.updateUser(payload)
        .then(() => this.$store.dispatch("auth/getAuthUser"))
        .then(() => (this.message = "User updated."))
        .catch((error) => (this.error = getError(error)));
    },
  },
  mounted() {
    this.name = this.authUser.name;
    this.email = this.authUser.email;
  },
};
</script>