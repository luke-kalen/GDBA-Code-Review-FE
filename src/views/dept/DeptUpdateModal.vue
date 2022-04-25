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
      <form >
        <v-text-field
          class="pl-10 ml-16"
          type="text"
          label="DEPARTMENT"
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
            >Update</v-btn>
          </div>
        </div>
        <v-divider></v-divider>
      </form>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'deptUpdate',
    data() {
      return {
        name: this.$route.params.name,
      }
    },
    created: async function() {
      await this.$store.dispatch("dept/getDept", this.$route.params.id);
      console.log('Store State: ', this.$store.state)
      this.name = this.$store.state.dept.oneDept.name;
      this.address = this.$store.state.dept.oneDept.address;
      this.phone = this.$store.state.dept.oneDept.phone;
    },
    methods: {

      async handleSubmit() {
        const payload = {
          id: this.$route.params.id,
          name: this.name
        };
        console.log(payload)
        try {
          this.updateDept(payload)
          this.$router.push("/departments")
          console.log('Store State: ', this.$store.state)
        } catch (err) {
          console.log(err)
        }
      },

      async updateDept(newDept) {
        try {
          this.$store.dispatch("dept/updateDept", newDept)
        } catch (err) {
          console.log("Something went wrong: ", err)
        }
      }
    },
    computed: {
      ...mapGetters( "dept", [ "oneDept" ] )
    }
  }
</script>

