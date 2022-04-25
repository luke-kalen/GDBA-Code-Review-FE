<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="400"
      elevation="5"
    >
    <v-toolbar elevation="0" color="primary" dark>DELETE {{$route.params.name.toUpperCase()}}?</v-toolbar>
    <div class="ma-5" align="center">
    Are you sure you want to delete <strong>{{ $route.params.name.toUpperCase() }}</strong>? This will delete all users associated with this department.
    </div>
      <v-toolbar align="center" elevation="0">
        <v-row>
          <v-col>
            <v-btn align="center" color="primary" class="mx-2" @click.prevent="confirm( $route.params.id )">Yes</v-btn>
            <router-link to="/departments">
              <v-btn align="center" color="primary" class="mx-2">No</v-btn>
            </router-link>            
          </v-col>
        </v-row>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'DeleteDept',
    data() {
      return {
        name: '',
        address: '',
        phone: '',
      }
    },
    created: async function() {
      await this.$store.dispatch("dept/getDept", this.$route.params.id);
      console.log('Store State: ', this.$store.state)
      // this.name = this.$store.state.dept.onedept.name;
      // this.address = this.$store.state.dept.onedept.address;
      // this.phone = this.$store.state.dept.onedept.phone;
    },
    methods: {

      ...mapActions("dept", [ "deleteDept" ]),

      async handleSubmit() {
        const payload = {
          id: this.$route.params.id,
          name: this.name,
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

      async confirm(id) {
        try {
          this.$store.dispatch("dept/deleteDept", id);
          this.$router.push('/departments')
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