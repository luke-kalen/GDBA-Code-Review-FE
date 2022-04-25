<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="400"
    >
      <v-toolbar dark color="primary">
        <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
        <v-toolbar-title>UPDATE {{ $route.params.name.toUpperCase() }} </v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-title></v-card-title>

      <v-card-actions>
      <form elevation="0">
        <v-text-field
          class="pl-10 ml-16"
          type="text"
          label="NAME"
          name="name"
          v-model="name"
          autocomplete="name"
          space-around
        ></v-text-field>
        <!-- <v-text-field
          class="pl-10 ml-16"
          type="text"
          label="ADDRESS"
          name="address"
          v-model="address"
          space-around
        ></v-text-field>
        <v-text-field
          class="pl-10 ml-16"
          type="text"
          label="PHONE"
          name="phone"
          v-model="phone"
          space-around
        ></v-text-field> -->
        <div >
          <br>
          <div>
            <v-btn 
              class="white ma-3"
              color="primary"
              dark
              elevation="0"
              @click.prevent="handleSubmit"
            >Update</v-btn>
          </div>
        </div>
      </form>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'orgUpdate',
    data() {
      return {
        name: '',
        // address: '',
        // phone: '',
      }
    },
    created: async function() {
      const result = await this.$store.dispatch("org/getOrg", this.$route.params.id);
      console.log('Store State: ', result)
      this.name = this.$store.state.org.oneOrg.name;
      this.address = this.$store.state.org.oneOrg.address;
      this.phone = this.$store.state.org.oneOrg.phone;
    },
    methods: {

      async handleSubmit() {
        const payload = {
          id: this.$route.params.id,
          name: this.name,
          employees: []
        };
        console.log(payload)
        try {
          this.updateOrg(payload)
          this.$router.push("/organizations")
          console.log('Store State: ', this.$store.state)
        } catch (err) {
          console.log(err)
        }
      },

      async updateOrg(newOrg) {
        try {
          this.$store.dispatch("org/updateOrg", newOrg)
        } catch (err) {
          console.log("Something went wrong: ", err)
        }
      }
    },
    computed: {
      ...mapGetters( "org", [ "oneOrg" ] )
    }
  }
</script>
