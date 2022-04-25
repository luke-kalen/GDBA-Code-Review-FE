<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="light-blue accent-4"
      dark
      app
      outlined
      
    >
      <template v-slot:prepend>
        <v-list-item two-line>

          <v-list-item-content height="200">
            <v-list-item-title>ODIN</v-list-item-title>
            <v-list-item-subtitle>Navigation</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense class="text-decoration-none"> 
        <v-list-item class="text-decoration-none">
            <router-link class="text-decoration-none" to="/dashboard">
          <v-list-item-icon>
              <v-icon class="text-decoration-none">mdi-view-dashboard</v-icon>
          </v-list-item-icon>
            </router-link>
          <router-link class="text-decoration-none" to="/dashboard">
            <v-list-item-content class="text-decoration-none">
              <v-list-item-title class="text-decoration-none white--text">Dashboard</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        
        <v-list-item class="text-decoration-none">
          <router-link class="text-decoration-none" to="/organizations">
            <v-list-item-icon class="text-decoration-none">
              <v-icon class="text-decoration-none">mdi-office-building</v-icon>
            </v-list-item-icon>
          </router-link>
          <router-link class="text-decoration-none" to="/organizations">
            <v-list-item-content class="text-decoration-none">
              <v-list-item-title class="text-decoration-none white--text">Organizations</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item>
          <router-link class="text-decoration-none" to="/departments">
            <v-list-item-icon>
              <v-icon>mdi-sitemap</v-icon>
            </v-list-item-icon>
          </router-link>
          <router-link class="text-decoration-none" to="/departments">
            <v-list-item-content>
              <v-list-item-title class="text-decoration-none white--text">Departments</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item>
          <router-link class="text-decoration-none" to="/staff">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
          </router-link>
          <router-link class="text-decoration-none" to="/staff">
            <v-list-item-content>
              <v-list-item-title class="text-decoration-none white--text">Kalen Staff</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item>
          <router-link class="text-decoration-none" to="/staff">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
          </router-link>
          <router-link class="text-decoration-none" to="/clients">
            <v-list-item-content>
              <v-list-item-title class="text-decoration-none white--text">Clients</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="drawer2"
      app
      temporary
      right
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/img/kalen-photo.gif">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ authUser.name }}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>
            <router-link class="text-decoration-none" to="/profile">
          <v-list-item-icon>
              <v-icon color="primary">mdi-account</v-icon>
          </v-list-item-icon>
            </router-link>

          <router-link class="text-decoration-none" to="/profile">
            <v-list-item-content>
              <v-list-item-title class="text-decoration-none">My Profile</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        
        <v-list-item>
          <router-link class="text-decoration-none" to="/settings">
            <v-list-item-icon>
              <v-icon color="primary">mdi-account-cog</v-icon>
            </v-list-item-icon>
          </router-link>

          <router-link class="text-decoration-none" to="/settings">
            <v-list-item-content>
              <v-list-item-title class="text-decoration-none">Account Settings</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item v-if="authUser.organization.name === 'Kalen Marketing Solutions'">
          <router-link class="text-decoration-none" to="/requests">
            <v-list-item-icon>
              <v-icon color="primary">mdi-calendar</v-icon>
            </v-list-item-icon>
          </router-link>

          <router-link  class="text-decoration-none" to="/requests">
            <v-list-item-content>
              <v-list-item-title class="text-decoration-none">Timeoff</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item v-if="authUser.lead || authUser.department === 'HR' || authUser.department === 'Owner'">
          <router-link class="text-decoration-none" to="/requests">
            <v-list-item-icon>
              <v-icon color="primary">{{ statusIcon }}</v-icon>
            </v-list-item-icon>
          </router-link>

          <router-link class="text-decoration-none" :to="{ name: 'ReviewList', params: { id: authUser.departmentId } }">
            <v-list-item-content>
              <v-list-item-title class="text-decoration-none">Reviews</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item>
          <router-link class="text-decoration-none" to="/logout">
            <v-list-item-icon>
              <v-icon color="primary">mdi-account-cancel</v-icon>
            </v-list-item-icon>
          </router-link>

          <router-link class="text-decoration-none" to="/logout">
            <v-list-item-content>
              <v-list-item-title class="text-decoration-none">Logout</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>    
    <v-app-bar app dark color="primary" height="90">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title @click="drawer = !drawer" class="text-h3 pl-16">ODIN</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-card class="primary" elevation="0">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="mx-1 px-1"
        ></v-text-field>
      </v-card>

      <v-list-item-avatar class="ml-16 mr-5">

      <img src="@/assets/img/kalen-photo.gif" @click="drawer2 = !drawer2" class="float-right mx-16">
      </v-list-item-avatar>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mdiListStatus } from '@mdi/js';
  export default {
    computed: {
      ...mapGetters("auth", [ "authUser" ])
    },
    data() {
      return { 
        search: false,
        drawer: null,
        drawer2: null,
        statusIcon: mdiListStatus,
        items: [
          { title: 'My Profile', icon: 'mdi-account-cog' },
          { title: 'Account Settings', icon: 'mdi-account-cog' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      }
    },
  }
</script>