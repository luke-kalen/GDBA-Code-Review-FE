<template>
<div>
  <v-card
    class="mx-auto my-12"
    max-width="400"
  >
    <v-toolbar dark color="primary">
      <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
      <v-toolbar-title>ADD CLIENT</v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <v-card-title></v-card-title>

    <v-card-actions>
    <form @submit.prevent="handleSubmit">
      <v-text-field
        class="pl-10 ml-16"
        type="name"
        label="NAME"
        name="name"
        v-model="name"
        autocomplete="name"
        space-around
      ></v-text-field>
      <v-text-field
        class="pl-10 ml-16"
        type="email"
        label="EMAIL"
        name="email"
        v-model="email"
        autocomplete="email"
        placeholder="luke@jedi.com"
        space-around
      ></v-text-field>
       <v-select
        class="pl-10 ml-16"
        label="ORGANIZATION"
        v-model="organization"
        :items="orgs"
        space-around
      ></v-select>
      <v-text-field
        class="pl-10 ml-16"
        label="AVATAR"
        name="avatar"
        v-model="avatar"
        space-around
      ></v-text-field>
      <!-- <v-text-field
        class="pl-10 ml-16"
        type="title"
        label="TITLE"
        name="title"
        v-model="title"
        space-around
      ></v-text-field> -->
      <!-- <v-checkbox
        class="pl-10 ml-16"
        type="isAdmin"
        label="ADMIN"
        name="isAdmin"
        v-model="isAdmin"
        space-around
      ></v-checkbox> -->
      <div >
        <br>
        <div>
          <v-btn 
            class="white mr-5"
            color="primary"
            dark
            elevation="24"
            @click="handleSubmit"
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
    name: 'userForm',
    data() {
      return {
        name: '',
        organization: '',
        orgs: [],
        email: '',
        isAdmin: false,
        avatar: ''
        // password: '',
        // confirm: ''
      }
    },
    async created() {
      // await this.$store.dispatch("org/getOrg", this.$route.params.id);
      console.log('Store State from View: ', this.$store.state.org);
      this.orgs = await this.$store.state.org.organizations.map(comp => {
        console.log('compy ', comp)
        const { id, name } = comp
        return [id, name];
      });
    },
    methods: {
      async handleSubmit() {
        const payload = {
					name: this.name,
          org_id: this.organization[0],
          email: this.email,
          department: this.department,
          isAdmin: this.isAdmin,
          password: 'newPassword',
          password_confirmation: 'newPassword',
          // avatar: 'Picture'
				};
        console.log("Payload: ", payload)
        console.log("Org Id: ", this.organization)
        this.addUser(payload)
      },
      async addUser(org) {
        try {
          this.$store.dispatch("user/addUser", org)
          this.$router.push(`/clients`)
          console.log(org)
        } catch (err) {
          console.log(err)
        }
      },
    }
  }
</script>
