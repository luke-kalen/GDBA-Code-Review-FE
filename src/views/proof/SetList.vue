<template>
  <v-card elevation="0">
		<v-toolbar v-if="authUser.organization.name === 'Kalen Marketing Solutions'" elevation="0">
			<v-toolbar-title class="text-h4 mx-6 px-6 mb-7 primary--text">{{ project.title }} Sets</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>
    <v-card elevation="0">
      <v-row>
        <v-col align="center">
          <v-card elevation="0" align="center">
            <v-row align="center">
              <v-col align="center" >
                <v-btn elevation="0" @click.prevent="selectType('all')" class=" primary--text">ALL</v-btn>
              </v-col> 
              <v-col align="center" >
                <v-btn elevation="0" @click.prevent="selectType('social')" class=" primary--text">SOCIAL</v-btn>
              </v-col> 
              <v-col align="center" >
                <v-btn elevation="0" @click="selectType('digital')" class=" primary--text">DIGITAL</v-btn>
              </v-col> 
              <v-col align="center" >
                <v-btn elevation="0" @click="selectType('video')" class=" primary--text">VIDEO</v-btn>
              </v-col>
              <v-col align="center" >
                <v-btn elevation="0" @click="selectType('print')" class=" primary--text">PRINT</v-btn>
              </v-col>
              <v-col align="end">
                <router-link v-if="authUser.organization.name === 'Kalen Marketing Solutions'" :to="{ name: 'ProofSetAdder', params: { id: $route.params.id } }">
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
        </v-col>
      </v-row>
    </v-card>
    <v-card elevation="0" align="center" >
      <v-row>
        <v-col align="end">
          <!-- <router-link v-if="authUser.organization.name === 'Kalen Marketing Solutions'" :to="{ name: 'proofSetCreate', params: { id: $route.params.id } }">
            <v-btn
              color="primary"
              depressed
              fab
              x-small
              class="mr-16 mb-2 text-decoration-none"
            >
              <v-icon>mdi-plus</v-icon>   
            </v-btn>            
          </router-link> -->
        </v-col>
      </v-row>
    </v-card>
    <br>
    <v-divider></v-divider>
    <br>

	<v-card elevation="0" class="mx-10 px-10">
      <v-list dense v-for="(proofSet, i) in filterList" :key="i" class="mx-10 px-16">
        <v-list-item v-if="proofSet.type === 'digital'">
          <router-link class="text-decoration-none" :to="{ name: 'Digital', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name, proofSet: proofSet } }">
            <v-list-item-icon>
              <v-icon color="primary">mdi-cards-variant</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <router-link class="text-decoration-none black--text" :to="{ name: 'Digital', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name, proofSet: proofSet } }">
                <v-list-item-title class="text-decoration-none">
                <v-card elevation="0">
                  <span>
                    <v-row class="mx-16 px-16">
                      <v-col align="center">
                        {{ proofSet.name }}
                      </v-col>
                      <v-col align="center">
                        {{ proofSet.notes }}
                      </v-col>
                      <v-col align="center">
                        Proofs: {{ proofSet.proofs.length }}
                      </v-col>
                      <v-col 
                        :class="proofSet.status === 'pending' ? 'amber--text' : ( 
                        proofSet.status === 'approved' ) ? 'green--text' : ( 
                        proofSet.status === 'rejected' ) ? 'red--text' : null" 
                        align="center">
                          {{ proofSet.status.toUpperCase() }} &nbsp; 
                        <v-icon
                          :color="proofSet.status === 'pending' ? 'amber' : ( 
                          proofSet.status === 'approved' ) ? 'green' : ( 
                          proofSet.status === 'rejected' ) ? 'red' : null"
                        >
                          {{ proofSet.status === 'pending' ? pending : ( 
                          proofSet.status === 'approved' ) ? approved : ( 
                          proofSet.status === 'rejected' ) ? rejected : null }}
                        </v-icon>
                      </v-col>
                    </v-row>
                  </span>
                </v-card>
                </v-list-item-title>
              </router-link>
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center" v-if="proofSet.type === 'digital'">
                  <router-link class="text-decoration-none" :to="{ name: 'Digital', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name, proofSet: proofSet } }">
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                    >View
                    </v-btn>
                  </router-link>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteproofSet(proofSet.id)"
                    >Delete
                    </v-btn>
                </v-col>
              </v-row>
              <hr>
            </span>
          </v-list-item-content>
        </v-list-item>

        <!-- SOCIAL -->

        <v-list-item v-if="proofSet.type === 'social'">
          <router-link class="text-decoration-none" :to="{ name: 'ProofList', params: { id: proofSet.id, name: proofSet.name } }">
            <v-list-item-icon>
              <v-icon color="primary">mdi-cards-variant</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <router-link class="text-decoration-none black--text" :to="{ name: 'ProofList', params: { id: proofSet.id, name: proofSet.name } }">
                <v-list-item-title class="text-decoration-none">
                <v-card elevation="0">
                  <span>
                    <v-row class="mx-16 px-16">
                      <v-col align="center">
                        {{ proofSet.name }}
                      </v-col>
                      <v-col align="center">
                        {{ proofSet.notes }}
                      </v-col>
                      <v-col align="center">
                        Proofs: {{ proofSet.proofs.length }}
                      </v-col>
                      <v-col
                        :class="proofSet.status === 'pending' ? 'amber--text' : ( 
                        proofSet.status === 'approved' ) ? 'green--text' : ( 
                        proofSet.status === 'rejected' ) ? 'red--text' : null"
                        align="center">
                        {{ proofSet.status.toUpperCase() }} &nbsp; 
                        <v-icon
                          :color="proofSet.status === 'pending' ? 'amber' : ( 
                        proofSet.status === 'approved' ) ? 'green' : ( 
                        proofSet.status === 'rejected' ) ? 'red' : null"
                        >
                          {{ proofSet.status === 'pending' ? pending : ( 
                          proofSet.status === 'approved' ) ? approved : ( 
                          proofSet.status === 'rejected' ) ? rejected : null }}
                        </v-icon>
                      </v-col>
                    </v-row>
                  </span>
                </v-card>
                </v-list-item-title>
              </router-link>
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center" v-if="proofSet.type === 'social'">
                  <!-- <router-link class="text-decoration-none" :to="{ name: 'Social', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name } }"> -->
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                      @click.prevent="showModalS = !showModalS"
                    >View
                    </v-btn>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteproofSet(proofSet.id)"
                    >Delete
                    </v-btn>
                  <!-- </router-link> -->
                </v-col>
              </v-row>
              <hr>
            </span>
          </v-list-item-content>
        </v-list-item>

        <!-- VIDEO -->

        <v-list-item v-if="proofSet.type === 'video'">
          <router-link class="text-decoration-none" :to="{ name: 'ProofList', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name } }">
            <v-list-item-icon>
              <v-icon color="primary">mdi-cards-variant</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <router-link class="text-decoration-none black--text" :to="{ name: 'ProofList', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name } }">
                <v-list-item-title class="text-decoration-none">
                <v-card elevation="0">
                  <span>
                    <v-row class="mx-16 px-16">
                      <v-col align="center">
                        {{ proofSet.name }}
                      </v-col>
                      <v-col align="center">
                        {{ proofSet.notes }}
                      </v-col>
                      <v-col align="center">
                        {{ proofSet.proofs.length }}
                      </v-col>
                      <v-col 
                        :class="proofSet.status === 'pending' ? 'amber--text' : ( 
                        proofSet.status === 'approved' ) ? 'green--text' : ( 
                        proofSet.status === 'rejected' ) ? 'red--text' : null" align="center">
                          {{ proofSet.status.toUpperCase() }} &nbsp; 
                        <v-icon
                          :color="proofSet.status === 'pending' ? 'amber' : ( 
                        proofSet.status === 'approved' ) ? 'green' : ( 
                        proofSet.status === 'rejected' ) ? 'red' : null"
                        >
                          {{ proofSet.status === 'pending' ? pending : ( 
                          proofSet.status === 'approved' ) ? approved : ( 
                          proofSet.status === 'rejected' ) ? rejected : null }}
                        </v-icon>
                      </v-col>
                    </v-row>
                  </span>
                </v-card>
                </v-list-item-title>
              </router-link>
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center" v-if="proofSet.type === 'video'">
                  <!-- <router-link class="text-decoration-none" :to="{ name: 'Video', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name } }"> -->
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                      @click.prevent="showModalV = !showModalV"
                    >View
                    </v-btn>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteProofSet(proofSet.id)"
                    >Delete
                    </v-btn>
                  <!-- </router-link> -->
                </v-col>
              </v-row>
              <hr>
            </span>
          </v-list-item-content>
        </v-list-item>

        <!-- PRINT -->

        <v-list-item v-if="proofSet.type === 'print'">
          <router-link class="text-decoration-none" :to="{ name: 'Print', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name } }">
            <v-list-item-icon>
              <v-icon color="primary">mdi-cards-variant</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <!-- <router-link class="text-decoration-none black--text" :to="{ name: 'Print', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name } }"> -->
                <v-list-item-title class="text-decoration-none">
                <v-card elevation="0">
                  <span>
                    <v-row class="mx-16 px-16">
                      <v-col align="center">
                        {{ proofSet.name }}
                      </v-col>
                      <v-col align="center">
                        {{ proofSet.notes }}
                      </v-col>
                      <v-col align="center">
                        {{ proofSet.proofs.length }}
                      </v-col>
                      <v-col :class="proofSet.status === 'pending' ? 'amber--text' : ( 
              proofSet.status === 'approved' ) ? 'green--text' : ( 
              proofSet.status === 'rejected' ) ? 'red--text' : null" align="center">
                        {{ proofSet.status.toUpperCase() }} &nbsp; 
                        <v-icon
                          :color="proofSet.status === 'pending' ? 'amber' : ( 
                          proofSet.status === 'approved' ) ? 'green' : ( 
                          proofSet.status === 'rejected' ) ? 'red' : null"
                        >
                          {{ proofSet.status === 'pending' ? pending : ( 
                          proofSet.status === 'approved' ) ? approved : ( 
                          proofSet.status === 'rejected' ) ? rejected : null }}
                        </v-icon>
                      </v-col>
                    </v-row>
                  </span>
                </v-card>
                </v-list-item-title>
              <!-- </router-link> -->
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center" v-if="proofSet.type === 'print'">
                  <!-- <router-link class="text-decoration-none" :to="{ name: 'Print', params: { id: proofSet.id, title: $route.params.title, name: proofSet.name } }"> -->
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                      @click.prevent="showModalP = !showModalP"
                    >View
                    </v-btn>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteProofSet(proofSet.id)"
                    >Delete
                    </v-btn>
                  <!-- </router-link> -->
                </v-col>
              </v-row>
              <hr>
            </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <!-- <v-card v-for="(proofSet, i) in proofSets" :key="i">
      {{ proofSet.name }}
    </v-card> -->

    <!-- <v-card v-else
          max-width="400"
          class="ma-auto"
          align="center"
          justify="space-around"
        >
          <v-toolbar color="primary" dark>
            <v-toolbar-title>No proofSets</v-toolbar-title>
          </v-toolbar>
          <div class="pa-5">
            There are currently no proofSets containing an proofSet project.
            Start a new project using the blue <strong>+</strong> sign above.
          </div>

    </v-card> -->
</v-card> 
</template>



<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'ProofSetList',
  data() {
    return {
      selected: 'all',
      pending: 'mdi-cached',
      approved: 'mdi-check',
      rejected: 'mdi-window-close',
    }
  },

  async created() {
    await this.$store.dispatch('project/getProject', this.$route.params.id);
    await this.$store.dispatch('proofSet/getProjectProofSets', this.project.id);
    console.log(this.proofSets);
  },

  methods: {
    ...mapActions("proofSet", [ "deleteProofSets" ]),
    selectType(item) {
      this.selected = item;
    }
  },

  computed: {
    ...mapGetters("auth", [ "authUser" ]),
    ...mapGetters("project", [ "project" ]),
    ...mapGetters('proofSet', [ "proofSets" ]),
    // ...mapGetters("project", [ "projects" ]),
    filterList() {
      var category = this.selected;
      if ( category === 'all' ) {
        return this.proofSets;
      } else {
        return this.proofSets.filter(proofSet => {
          return proofSet.type === category;
        })
      }
    },
  },
}
</script>