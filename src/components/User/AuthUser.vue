<template>
  <div v-if="authUser">
    <transition name="fade">
      <img
        v-if="authUser.avatar"
        :src="authUser.avatar"
        alt=""
      />
    </transition>
          <v-text-field label="EMAIL" name="email" :value="authUser.email">
            Email: {{ authUser.email }}
          </v-text-field>
          <v-list-item-title v-if="authUser.emailVerified">
            Emailed Verified
          </v-list-item-title>
    <VerifyEmail v-if="!authUser.emailVerified" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VerifyEmail from "@/components/VerifyEmail";
export default {
  name: "AuthUser",
  components: {
    VerifyEmail,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>