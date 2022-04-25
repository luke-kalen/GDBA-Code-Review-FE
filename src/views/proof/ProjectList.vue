<template>
  <v-card elevation="0">
		<v-toolbar elevation="0">
			<v-toolbar-title class="text-h4 mx-6 px-6 mb-7 primary--text">{{ organization.name }} Projects</v-toolbar-title>
			<v-spacer></v-spacer>
            <router-link v-if="authUser.organization.name === 'Kalen Marketing Solutions'" :to="{ name: 'ProjectAdder', params: { id: $route.params.id, name: $route.params.name } }">
              <v-btn
                color="primary"
                depressed
                fab
                x-small
                class="mr-16 mb-2 text-decoration-none"
              >
                <v-icon>mdi-plus</v-icon>   
              </v-btn>            
            </router-link>
		</v-toolbar>
      <v-card elevation="0" align="center" >
        <v-row>
          <v-col align="end">
          </v-col>
        </v-row>
      </v-card>
    <br>
    <v-divider></v-divider>
    <br>

	<v-card elevation="0" class="mx-10 px-10" >
			<v-list dense v-if="projects" class="mx-10 px-16">
        <v-list-item v-for="(project, i) in projects" :key="i" class="mx-16 px-16">
            <router-link class="text-decoration-none" :to="{ name: 'SetList', params: { id: project.id, title: project.title, ads: project.ads } }">
							<v-list-item-icon>
								<v-icon color="primary">mdi-cards-variant</v-icon>
							</v-list-item-icon>
            </router-link>

            <v-list-item-content>
							<span>
								<router-link class="text-decoration-none black--text" :to="{ name: 'SetList', params: { id: project.id, title: project.title, adsets: project.adsets } }">
									<v-list-item-title class="text-decoration-none">
										<v-card elevation="0">
											<span>
												<v-row class="mx-16 px-16">
													<v-col align="center">
														{{ project.organization.name }}
													</v-col>
													<v-col align="center">
														{{ project.title }}
													</v-col>
                          <v-col align="center">
                            Sets: {{ project.proof_sets.length }}
                          </v-col>
												</v-row>
											</span>
										</v-card>

									</v-list-item-title>
								</router-link>
									<v-divider></v-divider>
								<v-row class="mx-16 px-16">
									<v-col align="center">
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                      @click="showModalS = !showModalS"
                    >View
                    </v-btn>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteProject(project.id)"
                    >Delete
                    </v-btn>
                  </v-col>
								</v-row>
							</span>
				<hr>
            </v-list-item-content>
        </v-list-item>
      </v-list>
			<div v-else>Loading projects...</div>
	</v-card>
</v-card> 
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "ProjectList",
  data() {
    return {
      selected: 'all'
    }
  },
  async created() {
    try {
      await this.$store.dispatch("org/getOrg", this.$route.params.id)
      await this.$store.dispatch("project/getOrgProjects", this.organization.id)
      console.log("Project List Store: ", this.$store.state.org.organization)
    } catch(error) {
      console.log(error)
    }
  },
  methods: {
    ...mapActions('project', [ "deleteProject" ]),
    selectType(item) {
      this.selected = item;
    },
  },
  computed: {
    ...mapGetters("org", [ "organization" ]),
    ...mapGetters("auth", [ "authUser" ]),
    ...mapGetters("project", [ "projects" ]),
    filterList() {
      var category = this.selected;
      if ( category === 'all' ) {
        return this.projects;
      } else {
        return this.projects.filter(project => {
          return project.type === category;
        })
      }
    },
  },
};
</script>
