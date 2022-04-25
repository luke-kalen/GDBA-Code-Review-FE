<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="400"
    >
      <v-toolbar dark color="primary">
        <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
        <v-toolbar-title>ADD NEW DPEARTMENT</v-toolbar-title>
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
        <div >
          <br>
          <div>
            <v-btn 
              class="white mr-5"
              color="primary"
              dark
              elevation="24"
              @click.prevent="handleSubmit"
            >Submit</v-btn>
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
    name: 'AddDept',
    props: [ 'addHeader', 'text' ],
    data() {
      return {
        name: '',
      }
    },
    methods: {
      closeModal() {
        this.$emit('close')
      },
      handleSubmit() {
        const payload = {
					name: this.name
				};
        console.log("Payload: ", payload)
        this.addDept(payload)
      },
      async addDept(dept) {
        try {
          this.$store.dispatch("dept/addDept", dept)
          this.$store.dispatch("dept/showDepts")
          this.$router.push("/departments")
          console.log(dept)
        } catch (err) {
          console.log(err)
        }
      },
    }
  }
</script>

