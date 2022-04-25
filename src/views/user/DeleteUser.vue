<template>
  <div>
    <v-card
      class="mx-auto my-12 pa-7"
      max-width="400"
      elevation="5"
    ><div class="ma-5" align="center">
    Are you sure you want to delete <strong>{{ $route.params.name.toUpperCase() }}</strong>? This will delete all proofs associated with this user.
    </div>
      <v-toolbar align="center" elevation="0">
        <v-row>
          <v-col>
            <v-btn align="center" color="primary" class="mx-2" @click.prevent="confirm( $route.params.id )">Yes</v-btn>
            <router-link to="/organizations">
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
    name: 'DeleteUser',
    data() {
      return {
        name: '',
        address: '',
        phone: '',
      }
    },
    created: async function() {
      await this.$store.dispatch("user/getUser", this.$route.params.id);
      console.log('Store State: ', this.$store.state)
      // this.name = this.$store.state.org.oneOrg.name;
      // this.address = this.$store.state.org.oneOrg.address;
      // this.phone = this.$store.state.org.oneOrg.phone;
    },
    methods: {

      ...mapActions("org", [ "deleteUser" ]),

      async handleSubmit() {
        const payload = {
          id: this.$route.params.id,
          name: this.name,
          address: this.address,
          phone: this.phone
        };
        console.log(payload)
        try {
          this.updateUser(payload)
          this.$router.push("/staff")
          console.log('Store State: ', this.$store.state)
        } catch (err) {
          console.log(err)
        }
      },

      async confirm(id) {
        try {
          this.$store.dispatch("user/deleteUser", id);
          this.$router.push('/staff')
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