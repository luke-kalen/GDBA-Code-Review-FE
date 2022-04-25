<template>
<div>
  <v-card
    class="mx-auto my-12"
    max-width="400"
  >
    <v-toolbar dark color="primary">
      <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
      <v-toolbar-title>ADD USER</v-toolbar-title>
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
      <!-- <v-text-field
        class="pl-10 ml-16"
        label="ORGANIZATION"
        name="organization"
        v-model="organization.name"
        space-around
      ></v-text-field> -->
      <v-select v-if="$route.params.id === 1"
        class="pl-10 ml-16"
        label="DEPARTMENT"
        v-model="department"
        :items="depts"
        space-around
      ></v-select>
      <!-- <v-text-field
        class="pl-10 ml-16"
        type="title"
        label="TITLE"
        name="title"
        v-model="title"
        space-around
      ></v-text-field> -->
      <v-checkbox v-if="$route.params.id === 1"
        class="pl-10 ml-16"
        type="isAdmin"
        label="ADMIN"
        name="isAdmin"
        v-model="isAdmin"
        space-around
      ></v-checkbox>
      <div >
        <br>
        <div>
          <v-btn 
            class="white mr-5"
            color="primary"
            dark
            elevation="24"
            @click="handleSubmit"
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
  import { mapGetters } from 'vuex';
  export default {
    name: 'userForm',
    data() {
      return {
        name: '',
        organization: this.$route.params.id,
        depts: [],
        email: '',
        department: '',
        isAdmin: false,
        // password: '',
        // confirm: ''
      }
    },
    async created() {
      await this.$store.dispatch("org/getOrg", this.$route.params.id);
      console.log('Params: ', this.$route.params);
      this.depts = await this.$store.state.dept.departments.map(dept => {
        const { id, name } = dept
        return [id, name];
      });
    },
    methods: {
      handleSubmit() {
        const payload = {
					name: this.name,
          org_id: this.organization,
          email: this.email,
          dept_id: this.department[0],
          isAdmin: this.isAdmin,
          password: '1qaz!QAZ',
          password_confirmation: '1qaz!QAZ',
          // avatar: ''
				};
        console.log("Payload: ", payload)
        console.log('Params: ', this.organization)
        this.addUser(payload)
      },
      async addUser(org) {
        try {
          this.$store.dispatch("user/addUser", org)
          console.log(this.$route.params.name)
          this.$router.push({ name: 'orgUsers', params: { id: this.$route.params.id, name: this.$route.params.name } })
          console.log(org)
        } catch (err) {
          console.log(err)
        }
      },
    },

    computed: {
      ...mapGetters("dept", [ "departments" ])
    }
  }
</script>
