<template>
  <div>
    <v-toolbar elevation="0">
      <v-toolbar-title class="mx-10 px-10 mb-7 primary--text"
        >ORGANIZATIONS</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <!-- <router-link to="/organizations/form" >
				<v-btn
					color="primary"
					depressed
					elevation="24"
					fab
					raised
					small
					class="mr-6"
				>
					<v-icon>mdi-plus</v-icon>   
				</v-btn>
			</router-link> -->
    </v-toolbar>
    <v-card elevation="0" class="mx-10 px-10">
      <v-list
        v-for="(organization, i) in organizations"
        :key="i"
        dense
        class="mx-10 px-16"
      >
        <v-list-item
          v-if="
            organization.projects !== undefined &&
            organization.projects.length > 0
          "
        >
          <router-link
            class="text-decoration-none"
            :to="{ name: 'orgUsers', params: { id: organization.id } }"
          >
            <v-list-item-icon>
              <v-icon color="primary">mdi-office-building</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <router-link
                class="text-decoration-none black--text"
                :to="{
                  name: 'ProjectList',
                  params: {
                    id: organization.id,
                    name: organization.name,
                    projects: organization.projects,
                  },
                }"
              >
                <v-list-item-title class="d-flex text-decoration-none">
                  <v-row class="mx-16 px-16">
                    <v-col align="center">
                      {{ organization.name }}
                    </v-col>
                    <v-col align="center">
                      Projects: &nbsp; {{ organization.projects.length }}
                    </v-col>
                    <v-col v-if="organization.employees.length > 0" align="center">
                      Main Contact: &nbsp; {{ organization.employees[0].name }} 
                    </v-col>
                    <v-col v-if="organization.employees.length > 0" align="center">
                      {{ organization.employees[0].email }} 
                    </v-col>
                    <!-- <v-col>
										
									</v-col> -->
                  </v-row>
                </v-list-item-title>
              </router-link>
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center">
                  <v-btn
                    class="red--text"
                    x-small
                    depressed
                    @click="deleteOrg(organization.id)"
                    >Delete
                  </v-btn>
                  <router-link
                    class="text-decoration-none"
                    :to="{
                      name: 'orgUpdate',
                      params: { id: organization.projects[0].id },
                    }"
                  >
                    <v-btn depressed x-small class="light-blue--text"
                      >Update
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>
            </span>
            <hr />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
		<!-- <v-card
			v-if="ProjectCheck.map(item => item === null)"
			max-width="400"
			class="ma-auto"
			align="center"
			justify="space-around"
		>
			<v-toolbar color="primary" dark>
				<v-toolbar-title>No Projects</v-toolbar-title>
			</v-toolbar>
			<div class="pa-5">
				There are currently no organizations containing an ad Project.
				Start a new Project using the blue <strong>+</strong> sign above.
				If the organization is new, you will need to create it first via the
				<strong>ORGANIZATION</strong> tab in the admin panel on the left.
			</div>
		</v-card> -->
    <br />
    <br />
    <br />
    <!-- <footer-component /> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import bootstrap from "@/assets/img/bootstrap.jpg";
export default {
  name: "OrgProjects",
  data() {
    return {
      bootstrap,
			projectCheck: ''
    };
  },
  created() {
    this.$store.dispatch("org/showOrgs");
    this.$store.dispatch("project/getProjects");
		this.projectCheck = this.organizations.map(org => {
			const {project} = org
			return project;
		})
  },
  methods: {
    ...mapActions("org", ["showOrgs", "deleteOrg"]),
    ...mapActions("project", ["getProjects"]),
  },
  computed: {
    ...mapGetters("org", ["organizations", "oneOrg"]),
    ...mapGetters("project", [ "projects" ]),
  },
};
</script>

