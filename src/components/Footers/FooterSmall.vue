<template>
  <v-footer
    color="#3066ac"
    padless
    absolute
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary py-2 text-center white--text"
        cols="12"
      >
      <v-btn
        color="white"
        text
        >
        <div>Copyright © {{ date }}
          <a
            href="https://www.kalensolutions.com"
            class="text-white hover:text-blueGray-300 text-sm font-semibold py-1 text-decoration-none white--text"
          >
            Kalen Marketing Solutions
          </a>
        </div>
      </v-btn>
      </v-col>
    </v-row>
  </v-footer>






</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
