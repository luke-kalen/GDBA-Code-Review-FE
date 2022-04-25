<template>
  <div class="backdrop" @click.self="closeModalS">
    <v-card elevation="0" align="center" justify="center" color="transparent" class="modal"> 
      <v-card color="transparent" elevation="0" class="d-flex flex-row mb-6" align-content="center">
        <v-btn class="ma-6 white--text" color="transparent" elevation="0" @click="prevPhoto">&lt;</v-btn>
        <img :src="images[picture]" alt="">
        <v-btn class="ma-6 white--text" color="transparent" elevation="0" align="center" @click="nextPhoto">&gt;</v-btn>
      </v-card>
      <br>
      <v-divider></v-divider>
      <br>
      <v-card elevation="0" color="transparent" class="d-flex flex-row mb-6">
        <v-card elevation="0" color="transparent" class="pa-2" v-for="(pic, i) in images" :key="i">
          <img :src="pic" width="50px" height="50px" alt="sample">
        </v-card>
      </v-card>
    </v-card>
  </div>
</template>

<script>
// import VueHorizontalList from "vue-horizontal-list";
import { mdiGreaterThan } from '@mdi/js';
import { mdiLessThan } from '@mdi/js';
import image1 from '@/assets/img/fakead1.jpeg';
import image2 from '@/assets/img/fakead2.png';
import image3 from '@/assets/img/fakead3.jpeg';
import image4 from '@/assets/img/fakead4.jpeg';
import image5 from '@/assets/img/fakead5.jpeg';
export default {
  name: 'Print',
  props: [ 'files' ],
  data() {
    return {
      back: mdiLessThan,
      next: mdiGreaterThan,
      images: [
        image1,
        image2,
        image3,
        image4,
        image5,
      ],
      picture: 0,
    }
  },
  methods: {
    closeModalS() {
      this.$emit('close')
    },

    nextPhoto() {
      this.picture++;
      if ( this.picture > this.images.length - 1 ) {
        this.picture = 0;
      }
    },

    prevPhoto() {
      this.picture--;
      if ( this.picture < 0 ) {
        this.picture = this.images.length - 1
      }
    }
  }
}
</script>

<style>
  .modal {
    vertical-align: middle;
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: rgba(0,0,0,0.9);
    border-radius: 10px;
  }

  .print {
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