<template>
<div>
  <v-card
    class="mx-auto my-12"
    max-width="400"
  >
    <v-toolbar dark color="primary">
      <!-- <v-toolbar-nav-icon @click="drawer = !drawer"></v-toolbar-nav-icon> -->
      <v-toolbar-title>UDPATE {{ user.name.toUpperCase() }}</v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <v-card-title></v-card-title>

    <v-card-actions>
    <form @submit.prevent="handleSubmit">
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
      <v-select
        class="px-6 mx-6"
        label="ORGANIZATION"
        name="organization"
        v-model="organization"
        space-around
        :items="orgs"
      ></v-select>
      <v-select v-if="organization[0] === 1"
        class="px-6 mx-6"
        type="department"
        label="DEPARTMENT"
        name="department"
        v-model="department"
        space-around
        :items="depts"
      ></v-select>
      <!-- <v-text-field
        class="px-6 mx-6"
        type="title"
        label="TITLE"
        name="title"
        v-model="title"
        space-around
      ></v-text-field>
      <v-text-field
        class="px-6 mx-6"
        type="role"
        label="ROLE"
        name="role"
        v-model="role"
        space-around
      ></v-text-field> -->
      <v-checkbox v-if="organization[0] === 1"
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
            @click.prevent="handleSubmit"
          >Submit</v-btn>
        </div>
      </div>
      <!-- <FlashMessage :error="error" /> -->
    </form>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'orgUserUpdate',
    data() {
      return {
        name: this.$route.params.user.name,
        email: this.$route.params.user.email,
        isAdmin: this.$route.params.user.isAdmin,
        organization: [this.$store.state.user.user.organization.id, this.$store.state.user.user.organization.name],
        department: [this.$store.state.user.user.department.id, this.$store.state.user.user.department.name],
        orgs: [],
        depts: [],
        role: '',
        title: '',
      }
    },
    async created() {
      await this.$store.dispatch("user/getUser", this.$route.params.id);
      console.log('Store State: ', this.$store.state)
      this.role = this.$store.state.user.user.role;
      this.title = this.$store.state.user.user.title;
      this.orgs = await this.$store.state.org.organizations.map(comp => {
        const { id, name } = comp
        return [id, name];
      });
      this.depts = await this.$store.state.dept.departments.map(dept => {
        const { id, name } = dept
        return [id, name];
      });
    },
    methods: {

      async handleSubmit() {
        const payload = {
          id: this.$route.params.id,
          name: this.name,
          org_id: this.organization[0],
          email: this.email,
          dept_id: this.department[0],
          isAdmin: this.isAdmin
          // role: this.role,
          // title: this.title,
        };
        console.log(payload)
        try {
          this.updateUser(payload)
          this.$router.push({ name: 'orgUsers', params: { id: payload.org_id } })
        } catch (err) {
          console.log(err)
        }
      },

      async updateUser(newUser) {
        try {
          this.$store.dispatch("user/updateUser", newUser)
        } catch (err) {
          console.log("Something went wrong: ", err)
        }
      }
    },
    computed: {
      ...mapGetters( "user", [ "user" ] )
    }
  }
</script>
