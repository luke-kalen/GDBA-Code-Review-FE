<template>
  <div class="pt-16" :class="theme === 'light' ? 'white' : ( theme === 'grey' ) ? 'grey darken-3' : ( theme === 'dark' ) ? 'black' : null">
    <v-toolbar elevation="0" color="transparent" class="mb-5">
      <v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text transparent">{{ $route.params.title }}</v-toolbar-title>
			<v-spacer></v-spacer>
      <v-slider
        ref="colorTheme"
        class="d-inline-flex pa-2"
        :class="theme === 'light' ? 'black--text' : ( theme === 'grey' ) ? 'white--text' : ( theme === 'dark' ) ? 'white--text' : null"
        v-model="themes"
        :tick-labels="ticksLabels"
        :max="2"
        step="1"
        ticks="always"
        tick-size="6"
        @change="toggleTheme"
      ></v-slider>
      <!-- <button @click="testToggle">Toggle</button> -->
    </v-toolbar>
    <v-divider></v-divider>
    <v-container>
      <v-card elevation="0" color="transparent">
        <v-row class="ml-5" justify="start">
          <!-- <v-col> -->

          <h1 class="pt-6" :class="theme === 'light' ? 'black--text' : ( theme === 'grey' ) ? 'white--text' : ( theme === 'dark' ) ? 'white--text' : null">{{ $route.params.name }}</h1>
          <!-- </v-col> -->
          <!-- <v-col justify="start"> -->

          <v-btn class="mt-7 mx-2" color="primary">APPROVE</v-btn>
          <!-- </v-col> -->
          <v-btn class="mt-7" color="primary">REQUEST CHANGES</v-btn>
        </v-row>
        <br>
        <br>
        <v-container>
          <v-row>
            <v-col>
              <v-card elevation="0" max-width="728" max-height="90" align="center" color="transparent">
                <p :class="theme === 'light' ? 'black--text' : ( theme === 'grey' ) ? 'white--text' : ( theme === 'dark' ) ? 'white--text' : null">728x90</p>
                <iframe src="https://proofs.adbaywebsites.com/ads/CCCVB_SPIRITS_728x90/" style="border-style:none;box-shadow:0px 0px 2px 2px rgba(0,0,0,0.2);width:728px;height:90px;overflow:hidden;margin:0;padding:0;border:none;scrolling:no;border-width:0;" title="ad"></iframe>
              </v-card>
              <br>
              <br>
              <br>
              <v-divider></v-divider>
              <v-card elevation="0" max-width="320" max-height="50" align="center" color="transparent">
                <p :class="theme === 'light' ? 'black--text' : ( theme === 'grey' ) ? 'white--text' : ( theme === 'dark' ) ? 'white--text' : null">320x50</p>
                <iframe src="https://proofs.adbaywebsites.com/ads/CCCVB_SPIRITS_320x50/" style="border-style:none;box-shadow:0px 0px 2px 2px rgba(0,0,0,0.2);width:320px;height:50px;overflow:hidden;margin:0;padding:0;border:none;scrolling:no;border-width:0;" title="ad"></iframe>
              </v-card>
              <br>
              <br>
              <br>
              <v-divider></v-divider>
              <v-card elevation="0" max-width="300" max-height="600" align="center" color="transparent">
                <p :class="theme === 'light' ? 'black--text' : ( theme === 'grey' ) ? 'white--text' : ( theme === 'dark' ) ? 'white--text' : null">300x600</p>
                <iframe  src="https://proofs.adbaywebsites.com/ads/CCCVB_SPIRITS_300x600/" style="background-color:transparent;border-style:none;box-shadow:0px 0px 2px 2px rgba(0,0,0,0.2);width:300px;height:600px;overflow:hidden;margin:0;padding:0;border:none;scrolling:no;border-width:0;" title="ad"></iframe>
              </v-card>
              <br>
              <br>
              <br>
              <v-divider></v-divider>
              <v-card elevation="0" max-width="300" max-height="250" align="center" color="transparent" class="pb-16 mb-16">
                <p :class="theme === 'light' ? 'black--text' : ( theme === 'grey' ) ? 'white--text' : ( theme === 'dark' ) ? 'white--text' : null">300x250</p>
                <iframe  src="https://proofs.adbaywebsites.com/ads/CCCVB_SPIRITS_300x250/" style="border-style:none;box-shadow:0px 0px 2px 2px rgba(0,0,0,0.2);width:300px;height:250px;overflow:hidden;margin:0;padding:0;border:none;scrolling:no;border-width:0;" title="ad"></iframe>
              </v-card>
            </v-col>
            <v-col>
              <v-textarea background-color="white" label="Comments" outlined></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex';
  export default {
    // async created() {
    //   await this.$store.dispatch('project/getProject', this.$route.params.id)
    // },
    data () {
      return {
        theme: '',
        darkMode: false,
        value: 0,
        themes: 0,
        ticksLabels: [
          'Light',
          'Grey',
          'Dark',
        ],
      }
    },

    methods: {
      toggleTheme() {
        console.log(this.themes)
        this.themes === 0 ? this.theme = 'light' : 
        ( this.themes === 1 ) ? this.theme = 'grey' : 
        ( this.themes === 2 ) ? this.theme = 'dark' : 
        null
        console.log(this.themes)
        console.log(this.theme)
      }
    },

    // computed: {
    //   ...mapGetters( 'project', ["getProject"] )
    // }
  }
</script>