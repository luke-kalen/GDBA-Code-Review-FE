<template>
  <v-card elevation="0">
		<v-toolbar elevation="0">
			<v-toolbar-title class="text-h4 mx-6 px-6 mb-7 primary--text">PROFILE</v-toolbar-title>
			<v-spacer></v-spacer>
			<!-- <router-link to="" >
				<v-btn
					color="primary"
					depressed
					fab
					small
					class="mr-6 mb-4 text-decoration-none"
          @click.prevent="onClick"
				>
					<v-icon>mdi-plus</v-icon>   
				</v-btn>
			</router-link> -->
		</v-toolbar>
    <!-- <v-container color="primary" >  -->
      <v-card elevation="0" align="center" >
        <v-row align="center">
          <v-col align="start" v-if="authUser.organization.name === 'Kalen Marketing Solutions'">
            <v-card-text class="primary--text ma-0 pa-0 mx-16">{{ authUser.name.toUpperCase() }}</v-card-text> 
            <v-card-text class="primary--text ma-0 pa-0 mx-16">{{ authUser.email.toUpperCase() }}</v-card-text> 
            <v-card-text class="primary--text ma-0 pa-0 mx-16">{{  }}</v-card-text>
          </v-col>
          <!-- <v-col>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-col> -->
          <v-col align="end">
            <router-link v-if="authUser.organization.name === 'Kalen Marketing Solutions'" :to="{ name: 'ProjectAdder', params: { id: authUser.id } }">

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
          </v-col>
        </v-row>
      </v-card>
    <!-- </v-container> -->
    <br>
    <v-divider></v-divider>
    <br>
    <!-- <v-card class="mx-10 px-10" align="left" elevation="0"> -->
      <div v-if="authUser.organization.name === 'Kalen Marketing Solutions'">
        <OrgProjects />
      </div>
      <div v-else>
        <ProjectList />
      </div>
			<!-- <div v-if="projects" class="mx-10 px-16">
        <div v-for="(project, i) in projects" :key="i" class="mx-16 px-16">
            <div>
							<span>
								<router-link class="text-decoration-none black--text" :to="{ name: 'Adset', params: { id: project.id } }">
									<div class="text-decoration-none">
										<div>
											<span>
												<v-row class="mx-16 px-16">
                          <v-col>
                            <v-row v-if="authUser.organization === 'Kalen Marketing Solutions'">
                              <v-col align="center" >
                                {{ project.organization.name }}
                              </v-col>
                              <router-link :to="{ name: 'AdsetList', params: { id: project.id, title: project.title, ads: project.ads } }">
                                <v-col align="center">
                                  {{ project.title }}
                                </v-col>
                              </router-link>
                              <v-col align="center">{{ project.title }}
                              </v-col>
                              <v-col align="center">
                                {{ project.description }}
                              </v-col>
                              <v-col align="center" v-if="project.type === 'digital'">
                                <router-link class="text-decoration-none" :to="{ name: 'Digital', params: { id: project.title, title: project.title, adName: project.adName } }">
                                  <v-btn 
                                    depressed 
                                    x-small 
                                    class="blue--text"
                                  >View
                                  </v-btn>
                                </router-link>
                              </v-col>
                              <v-col align="center" v-if="project.type === 'social'">
                                <router-link class="text-decoration-none" :to="{ name: 'Social', params: { id: project.title, title: project.title, adName: project.adName } }">
                                  <v-btn 
                                    depressed 
                                    x-small 
                                    class="blue--text"
                                  >View
                                  </v-btn>
                                </router-link>
                              </v-col>
                              <v-col align="center" v-if="project.type === 'print'">
                                <router-link class="text-decoration-none" :to="{ name: 'Print', params: { id: project.title, title: project.title, adName: project.adName } }">
                                  <v-btn 
                                    depressed 
                                    x-small 
                                    class="blue--text"
                                  >View
                                  </v-btn>
                                </router-link>
                              </v-col>
                              <v-col align="center" v-if="project.type === 'video'">
                                <router-link class="text-decoration-none" :to="{ name: 'Video', params: { id: project.title, title: project.title, adName: project.adName } }">
                                  <v-btn 
                                    depressed 
                                    x-small 
                                    class="blue--text"
                                  >View
                                  </v-btn>
                                </router-link>
                              </v-col>
                            </v-row>
                            <v-row v-else>
                              <router-link :to="{ name: 'AdsetList', params: { id: project.id, title: project.title, ads: project.ads } }">
                                <v-col align="center">
                                  {{ project.title }}
                                </v-col>
                              </router-link>
                            </v-row>
                          </v-col>
												</v-row>
											</span>
										</div>
									</div>
									<v-divider></v-divider>
								</router-link>
							</span>
				<hr>
            </div>
        </div>
      </div> -->
			<!-- <div v-else>Loading projects...</div> -->
	</v-card>
        <!-- <v-col >
          <v-card
            class="mx-auto"
            max-width="344"
            elevation="24"
            @click.prevent="onClick"
          >
            <v-card-text>
              <p class="text-h4 text--primary">
                PROOF ADDER
              </p>
              <div align="center" class="text-h1 text--primary">+</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-card>  -->
</template>
<script>
import OrgProjects from '@/views/proof/OrgProjects';
import ProjectList from '@/views/proof/ProjectList'
import { mapGetters, mapActions } from 'vuex';
import Proofs from '@/components/Proofs/Proofs';
// import ProofAdder from '@/components/ProofAdder';
import Vue from 'vue';

export default {
  name: "AuthUser",
  components: { 
    // Proofs,
    OrgProjects,
    ProjectList
  },
  data() {
    return {
      selected: 'all'
    }
  },
  created() {
    this.$store.dispatch("project/getProjects")
  },
  methods: {
    ...mapActions('project', [ "getProjects" ]),
    selectType(item) {
      this.selected = item;
    },
    onClick() {
      var ComponentClass = Vue.extend(Proofs)
      var instance = new ComponentClass({
          propsData: { type: 'primary' }
      })
      instance.$slots.default = ['Click Me']
      instance.$mount() // pass nothing
//         console.log(this.$refs)
      this.$refs.container.appendChild(instance.$el)
    },
  },
  computed: {
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

  mounted() {
    console.log(this.$store.state.user)
  }
};
</script>
