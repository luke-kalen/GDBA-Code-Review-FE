<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="400"
    >
      <v-toolbar dark color="primary">
        <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
        <v-toolbar-title>ADD NEW ORGANIZATION </v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-title></v-card-title>

      <v-card-actions>
      <form >
        <v-text-field
          class="pl-10 ml-16"
          type="text"
          label="NAME"
          name="name"
          v-model="name"
          autocomplete="name"
          space-around
        ></v-text-field>
        <v-text-field
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
        ></v-text-field>
        <div >
          <br>
          <div>
            <v-btn 
              class="white mr-5"
              color="primary"
              dark
              elevation="24"
              @click.prevent="handleSubmit"
            >Login</v-btn>
          </div>
        </div>
        <v-divider></v-divider>
      </form>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "orgForm",
    data() {
      return {
        name: '',
        address: '',
        phone: '',
      }
    },
    methods: {
      handleSubmit() {
        const payload = {
					name: this.name,
          address: this.address,
          phone: this.phone,
				};
        console.log("Payload: ", payload)
        this.addOrg(payload)
      },
      async addOrg(org) {
        try {
          this.$store.dispatch("org/addOrg", org)
          this.$router.push("/organizations")
          console.log(org)
        } catch (err) {
          console.log(err)
        }
      },
    }
  }
</script>
