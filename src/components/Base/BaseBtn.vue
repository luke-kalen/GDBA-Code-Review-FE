<template>
  <v-btn
    :type="type"
    color="primary"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {
    type: {
      type: String,
      default: "submit",
    },
    text: {
      type: String,
      default: "Submit",
    },
  },
};
</script>