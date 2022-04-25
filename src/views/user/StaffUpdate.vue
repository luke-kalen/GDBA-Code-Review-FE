<template>
<div>
  <v-card
    class="mx-auto my-12"
    max-width="400"
  >
    <v-toolbar dark color="primary">
      <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
      <v-toolbar-title>UPDATE {{ $route.params.user.name.toUpperCase() }}</v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <v-card-title></v-card-title>

    <v-card-actions>
    <form @submit.prevent="handleSubmit" class="mx-auto" align="start" >
      <v-text-field
        class="px-6 mx-6"
        type="name"
        label="NAME"
        name="name"
        v-model="name"
        autocomplete="name"
        space-around
      ></v-text-field>
      <v-text-field
        class="px-6 mx-6"
        type="email"
        label="EMAIL"
        name="email"
        v-model="email"
        autocomplete="email"
        placeholder="luke@jedi.com"
        space-around
      ></v-text-field>
      <v-autocomplete
        class="px-6 mx-6"
        label="ORGANIZATION"
        v-model="organization"
        persistent-hint
        :items="orgs"
        space-around
      ></v-autocomplete>
      <v-select
        class="px-6 mx-6"
        label="DEPARTMENT"
        v-model="department"
        :items="depts"
        space-around
      ></v-select>
      <!-- <v-text-field
        class="px-6 mx-6"
        type="title"
        label="TITLE"
        name="title"
        v-model="title"
        space-around
      ></v-text-field> -->
      <v-checkbox 
        class="px-6 mx-6"
        label="ADMIN"
        v-model="isAdmin"
        space-around
      ></v-checkbox>
      <div >
        <br>
        <div>
          <v-btn 
            class="white ma-3"
            color="primary"
            dark
            elevation="0"
            @click="handleSubmit"
          >UPDATE</v-btn>
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
    name: 'UpdateStaff',
    data() {
      return {
        name: this.$route.params.user.name,
        email: this.$route.params.user.email,
        isAdmin: this.$route.params.user.isAdmin || false,
        organization: [this.$route.params.user.organization.id, this.$route.params.user.organization.name] || '',
        department: [this.$route.params.user.department.id, this.$route.params.user.department.name] || '',
        orgs: [],
        depts: [],
        // password: '',
        // confirm: ''
      }
    },
    async created() {
      console.log('Params', this.$route.params)
      await this.$store.dispatch("auth/getAuthUser")
      await this.$store.dispatch("user/getUser", this.$route.params.id);
      console.log('User: ', this.user)
      this.orgs = await this.$store.state.org.organizations.map(comp => {
        const { id, name } = comp
        return [id, name];
      });
      this.depts = await this.$store.state.dept.departments.map(dept => {
        const { id, name } = dept
        return [id, name];
      });
      console.log('Sup', this.orgs)
      console.log('Sup', this.orgs)
      console.log("Hello", this.organization);
      console.log("Hello", this.department);
    },
    methods: {
      handleSubmit() {
        const payload = {
          id: this.$route.params.user.id,
					name: this.name,
          org_id: this.organization[0],
          email: this.email,
          dept_id: this.department[0],
          isAdmin: this.isAdmin,
          // password: this.password,
          // confirm: this.confirm,
          // avatar: ''
				};
        console.log("Payload: ", payload)
        this.updateUser(payload)
      },
      async updateUser(org) {
        try {
          this.$store.dispatch("user/updateUser", org)
          this.$router.push(`/staff`)
          console.log(org)
        } catch (err) {
          console.log(err)
        }
      },
    },
    computed: {
      ...mapGetters("user", ["user"]),
      ...mapGetters("auth", ["authUser"]),
      ...mapGetters("org", [ "organizations" ]),
      ...mapGetters("dept", [ "departments" ])
    }
  }
</script>
