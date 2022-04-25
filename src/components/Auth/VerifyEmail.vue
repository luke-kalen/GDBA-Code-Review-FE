<template>
  <div>
    <form @submit.prevent="sendVerification">
      <BaseBtn type="submit" text="Verify" class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"/>
    </form>
    <FlashMessage :message="message" :error="error" />
  </div>
</template>

<script>

// --------- IS THIS COMPONENT NECESSARY? -------

import { mapGetters } from "vuex";
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/Base/BaseBtn";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "UpdatePassword",
  components: {
    BaseBtn,
    FlashMessage,
  },
  data() {
    return {
      error: null,
      message: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    sendVerification() {
      this.error = null;
      this.message = null;
      const payload = {
        user: this.authUser.id,
      };
      AuthService.sendVerification(payload)
        .then(() => (this.message = "Verification email sent."))
        .catch((error) => (this.error = getError(error)));
    },
  },
};

// --------- IS THIS COMPONENT NECESSARY? -------
</script>


