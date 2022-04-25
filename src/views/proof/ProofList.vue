<template>
  <v-card elevation="0">
    <v-toolbar elevation="0">
      <v-toolbar-title class="text-h4 primary--text transparent">{{ proofSet.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link v-if="authUser.organization.name === 'Kalen Marketing Solutions'" :to="{ name: 'ProofCreate', params: { id: $route.params.id, name: $route.params.name } }">
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

<!-- SELECTORS -->
    
    <br>
    <v-divider></v-divider>
    <br>

<!-- LIST -->
      <!-- SOCIAL -->
    <v-card v-if="proofs" elevation="0" class="mx-10 px-10">
      <v-list dense v-for="(proof, i) in proofs" :key="i" class="mx-10 px-16">
        <v-list-item v-if="proof.proof_set.type === 'social'">
          <router-link class="text-decoration-none" :to="{ name: 'Social', params: { id: proof.id, name: proof.name } }">
            <v-list-item-icon>
              <v-icon color="primary">mdi-cards-variant</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <router-link v-if="proof.proof_set.type === 'social'" class="text-decoration-none black--text" :to="{ name: 'Social', params: { id: proof.id, name: proof.name } }">
                <v-list-item-title class="text-decoration-none">
                <v-card elevation="0">
                  <span>
                    <v-row class="mx-16 px-16">
                      <v-col align="center">
                        {{ proof.name }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.created_at }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.description }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.url }} 
                      </v-col>
                    </v-row>
                  </span>
                </v-card>
                </v-list-item-title>
              </router-link>
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center">
                  <router-link class="text-decoration-none" :to="{ name: 'Social', params: { id: proof.id, name: proof.name } }">
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                    >View
                    </v-btn>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteProof(proof.id)"
                    >Delete
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>
              <hr>
            </span>
          </v-list-item-content>
        </v-list-item>





        <v-list-item v-if="proof.proof_set.type === 'digital'">
          <router-link class="text-decoration-none" :to="{ name: 'Digital', params: { id: proof.id, name: proof.name } }">
            <v-list-item-icon>
              <v-icon color="primary">mdi-cards-variant</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <router-link v-if="proof.proof_set.type === 'digital'" class="text-decoration-none black--text" :to="{ name: 'Digital', params: { id: proof.id, name: proof.name } }">
                <v-list-item-title class="text-decoration-none">
                <v-card elevation="0">
                  <span>
                    <v-row class="mx-16 px-16">
                      <v-col align="center">
                        {{ proof.name }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.created_at }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.description }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.url }} 
                      </v-col>
                    </v-row>
                  </span>
                </v-card>
                </v-list-item-title>
              </router-link>
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center">
                  <router-link class="text-decoration-none" :to="{ name: 'Digital', params: { id: proof.id, name: proof.name } }">
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                    >View
                    </v-btn>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteProof(proof.id)"
                    >Delete
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>
              <hr>
            </span>
          </v-list-item-content>
        </v-list-item>





        <v-list-item v-if="proof.proof_set.type === 'video'">
          <router-link class="text-decoration-none" :to="{ name: 'Video', params: { id: proof.id, name: proof.name } }">
            <v-list-item-icon>
              <v-icon color="primary">mdi-cards-variant</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <router-link v-if="proof.proof_set.type === 'video'" class="text-decoration-none black--text" :to="{ name: 'Video', params: { id: proof.id, name: proof.name } }">
                <v-list-item-title class="text-decoration-none">
                <v-card elevation="0">
                  <span>
                    <v-row class="mx-16 px-16">
                      <v-col align="center">
                        {{ proof.name }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.created_at }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.description }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.url }} 
                      </v-col>
                    </v-row>
                  </span>
                </v-card>
                </v-list-item-title>
              </router-link>
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center">
                  <router-link class="text-decoration-none" :to="{ name: 'Social', params: { id: proof.id, name: proof.name } }">
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                    >View
                    </v-btn>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteProof(proof.id)"
                    >Delete
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>
              <hr>
            </span>
          </v-list-item-content>
        </v-list-item>





        <v-list-item v-if="proof.proof_set.type === 'print'">
          <router-link class="text-decoration-none" :to="{ name: 'Social', params: { id: proof.id, name: proof.name } }">
            <v-list-item-icon>
              <v-icon color="primary">mdi-cards-variant</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <span>
              <router-link v-if="proof.proof_set.type === 'social'" class="text-decoration-none black--text" :to="{ name: 'Social', params: { id: proof.id, name: proof.name } }">
                <v-list-item-title class="text-decoration-none">
                <v-card elevation="0">
                  <span>
                    <v-row class="mx-16 px-16">
                      <v-col align="center">
                        {{ proof.name }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.created_at }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.description }}
                      </v-col>
                      <v-col align="center">
                        {{ proof.url }} 
                      </v-col>
                    </v-row>
                  </span>
                </v-card>
                </v-list-item-title>
              </router-link>
              <v-divider></v-divider>
              <v-row class="mx-16 px-16">
                <v-col align="center">
                  <router-link class="text-decoration-none" :to="{ name: 'Social', params: { id: proof.id, name: proof.name } }">
                    <v-btn 
                      depressed 
                      x-small 
                      class="blue--text"
                    >View
                    </v-btn>
                    <v-btn 
                      depressed 
                      x-small 
                      class="red--text"
                      @click="deleteProof(proof.id)"
                    >Delete
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>
              <hr>
            </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card v-else>No Proofs</v-card>
    <div v-if="showModalP">
      <Print @close="showModalP = !showModalP" />
    </div>
    <div v-if="showModalS">
      <Social @shut="showModalS = !showModalS" />
    </div>
    <div v-if="showModalV">
      <Video @close="showModalV = !showModalV" />
    </div>

    
  </v-card>
</template>

<script>
import Print from '@/views/proof/Paper';
import Social from '@/views/proof/Social';
import Video from '@/views/proof/Video';

import { mapGetters } from 'vuex';
export default {
  name: 'ProofList',
  components: {
    Print,
    Social,
    Video,
  },
  data() {
    return {
      selected: 'all',
      showModalP: false,
      showModalS: false,
      showModalV: false,
      pending: 'mdi-cached',
      approved: 'mdi-check',
      rejected: 'mdi-window-close',
      date: ''
    }
  },
  async created() {
    console.log('Where are my ads?', this.$store.state )
    await this.$store.dispatch('proofSet/getProofSet', this.$route.params.id)
    await this.$store.dispatch('proof/getProofsFromSet', this.proofSet.id);
  },

  methods: {
    selectType(item) {
      this.selected = item;
    },

    
    
  },

  computed: {
    ...mapGetters('auth', [ 'authUser' ]),
    ...mapGetters('proofSet', [ 'proofSet' ]),
    ...mapGetters('proof', [ "proofs" ]),
  }
}
</script>

<style>

</style>