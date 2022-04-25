<template>
  <div class="backdrop" @click.self="closeModalV">
    <v-card align="center" justify="center" color="rgba(0,0,0,0.9)" class="modal"> 
      <video-embed class="video" :src="proof.url"></video-embed>
      <p class="white--text">Description: {{ proof.description }}</p>
    </v-card>
  </div>
</template>

<script>
  import Embed from 'v-video-embed';
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  Vue.use(Embed);
  export default {
    name: 'Video',
    props: [ 'files' ],

    async created() {
      await this.$store.dispatch('proof/getProof', this.$route.params.id);
    },

    methods: {
      closeModalV() {
        this.$emit('close')
      }
    },

    computed: {
    ...mapGetters('proof', ['proof'])
    }
  }
</script>

<style>
  .modal {
    vertical-align: middle;
    /* width: 50px; */
    padding: 20px;
    margin: 200px auto;
    background: rgba(0,0,0,0.9);
    border-radius: 10px;
        justify-content: center;
    align-items: center;
    align-content: center;
  }

  .video {
    justify-content: center;
    align-items: center;
    align-content: center;
    /* padding: 20px;
    margin: 100px; */
  }

  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.9);
    height: 100%;
    width: 100%;
  }
</style>