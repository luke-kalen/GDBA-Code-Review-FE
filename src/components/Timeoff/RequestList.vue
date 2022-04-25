<template>
  <div v-if="authUser">
    <v-toolbar elevation="0">
      <v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text">MY REQUEST HISTORY</v-toolbar-title>
      <v-spacer></v-spacer>
        <router-link to="/requests/add">
        <v-btn color="primary" depressed elevation="24" fab raised small class="mb-7 mr-10">
          <v-icon>mdi-plus</v-icon>   
        </v-btn>
      </router-link>
    </v-toolbar>

    <v-spacer></v-spacer>

      <v-row class="mt-3" justify="space-around" align="center">
        <v-btn elevation="0" depressed small class="primary--text" @click="selectStatus('all')">
          ALL
        </v-btn>
        <v-btn elevation="0" depressed small class="green--text" @click="selectStatus('approved')">
          APPROVED
        </v-btn>
        <v-btn elevation="0" depressed small class="red--text" @click="selectStatus('rejected')">
          REJECTED
        </v-btn>
        <v-btn elevation="0" depressed small class="amber--text" @click="selectStatus('pending')">
          PENDING
        </v-btn>
      </v-row>

      <br>
      <hr>


<!-- PENDING -->


        <v-card v-if="requests && requests.length > 0" class="ma-10 pa-10" align="left" elevation="0" max-width="1200">
          <v-list dense v-for="(request, i) in filterList" :key="i" class="mx-10 px-16">
            <v-list-item v-if="request.status === 'pending'">
              <router-link to="/">
                <v-list-item-icon>
                  <v-icon color="primary">mdi-calendar-check</v-icon>
                </v-list-item-icon>
              </router-link>
                <v-list-item-content >
                  <span>
                  <v-list-item-title class="text-decoration-none">
                    <v-card>
                  <span>
                    <router-link class="text-decoration-none" :to="{ name: 'RequestOverview', params: { id: request.id } }">
                      <v-row class="mx-16 px-16">
                        <v-col align="center">
                          <v-chip elevation="0" color="primary" link label small>
                            {{ request.dates[0].request_date }} &nbsp; / &nbsp; {{ request.dates[request.dates.length - 1].request_date }}
                          </v-chip>
                        </v-col>
                        <v-col align="center">
                          <v-chip v-if="request.dates[0].paid" label elevation="0" color="primary" outlined small>
                            PAID
                          </v-chip>
                          <v-chip v-else outlined label elevation="0" color="grey" small>
                            UNPAID
                          </v-chip>
                        </v-col>
                        <v-col >
                          <v-btn class="pl-16" small icon
                            :color="request.status === 'pending' ? 'amber' : ( request.status === 'approved' ) ? 'green' : ( request.status === 'rejected' ) ? 'red' : null"
                          >{{ request.status }} &nbsp;
                            <v-icon>{{ request.status === 'pending' ? pending : ( request.status === 'approved' ) ? approved : ( request.status === 'rejected' ) ? rejected : null }}</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </router-link>
                  </span>
                </v-card>
              </v-list-item-title>

              <v-divider></v-divider>

            <v-row max-width="400" class="mx-16 px-16">
							<v-col align="center">
								<router-link class="text-decoration-none" :to="{ name: 'profile' }">
									<v-btn depressed x-small class="blue--text">View</v-btn>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'UpdateRequest', params: { id: request.id, request: request } }">
									<v-btn depressed x-small class="light-blue--text">Update</v-btn>
								</router-link>
							<router-link class="text-decoration-none" :to="{ name: 'DeleteReq', params: { id: request.id, request: request } }">
								<v-btn class="red--text" x-small depressed>Delete</v-btn>
							</router-link>
							</v-col>
						</v-row>
          </span>
          <hr>
          </v-list-item-content>
        </v-list-item>


<!-- APPROVED -->


            <v-list-item v-if="request.status === 'approved'">
              <router-link to="/">
                <v-list-item-icon>
                  <v-icon color="primary">mdi-calendar-check</v-icon>
                </v-list-item-icon>
              </router-link>
                <v-list-item-content >
                  <span>
                  <v-list-item-title class="text-decoration-none">
                    <v-card>
                  <span>
                    <router-link class="text-decoration-none" :to="{ name: 'RequestOverview', params: { id: request.id } }">
                      <v-row class="mx-16 px-16">
                        <v-col align-self="center">
                          <v-chip elevation="0" color="primary" link label small>
                            {{ request.dates[0].request_date }} &nbsp; / &nbsp; {{ request.dates[request.dates.length - 1].request_date }}
                          </v-chip>
                        </v-col>
                        <v-col align="center">
                          <v-chip v-if="request.dates[0].paid" raised label elevation="0" color="primary" outlined small>
                            PAID
                          </v-chip>
                          <v-chip v-else raised outlined label elevation="0" color="grey" small>
                            UNPAID
                          </v-chip>
                        </v-col>
                        <v-col>
                          <v-btn class="pl-16" small icon
                            :color="request.status === 'pending' ? 'amber' : ( request.status === 'approved' ) ? 'green' : ( request.status === 'rejected' ) ? 'red' : null"
                          >{{ request.status }} &nbsp;
                            <v-icon>{{ request.status === 'pending' ? pending : ( request.status === 'approved' ) ? approved : ( request.status === 'rejected' ) ? rejected : null }}</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </router-link>
                  </span>
                </v-card>
              </v-list-item-title>

              <v-divider></v-divider>

            <v-row max-width="400" class="mx-16 px-16">
							<v-col align="center">
								<router-link class="text-decoration-none" :to="{ name: 'profile' }">
									<v-btn depressed x-small class="blue--text">View</v-btn>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'UpdateRequest', params: { id: request.id, request: request } }">
									<v-btn depressed x-small class="light-blue--text">Update</v-btn>
								</router-link>
							<router-link class="text-decoration-none" :to="{ name: 'DeleteReq', params: { id: request.id, request: request } }">
								<v-btn class="red--text" x-small depressed>Delete</v-btn>
							</router-link>
							</v-col>
						</v-row>
          </span>
          <hr>
          </v-list-item-content>


<!-- REJECTED -->


        </v-list-item>
            <v-list-item v-if="request.status === 'rejected'">
              <router-link to="/">
                <v-list-item-icon>
                  <v-icon color="primary">mdi-calendar-check</v-icon>
                </v-list-item-icon>
              </router-link>
                <v-list-item-content >
                  <span>
                  <v-list-item-title class="text-decoration-none">
                    <v-card>
                  <span>
                    <router-link class="text-decoration-none" :to="{ name: 'RequestOverview', params: { id: request.id } }">
                      <v-row class="mx-16 px-16">
                        <v-col align="center">
                          <v-chip elevation="0" color="primary" link label small>
                            {{ request.dates[0].request_date }} &nbsp; / &nbsp; {{ request.dates[request.dates.length - 1].request_date }}
                          </v-chip>
                        </v-col>
                        <v-col align="center">
                          <v-chip v-if="request.dates[0].paid" raised label elevation="0" color="primary" outlined small>
                            PAID
                          </v-chip>
                          <v-chip v-else raised outlined label elevation="0" color="grey" small>
                            UNPAID
                          </v-chip>
                        </v-col>
                        <v-col>
                          <v-btn class="pl-16" small icon
                            :color="request.status === 'pending' ? 'amber' : ( request.status === 'approved' ) ? 'green' : ( request.status === 'rejected' ) ? 'red' : null"
                          >{{ request.status }} &nbsp;
                            <v-icon>{{ request.status === 'pending' ? pending : ( request.status === 'approved' ) ? approved : ( request.status === 'rejected' ) ? rejected : null }}</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </router-link>
                  </span>
                </v-card>
              </v-list-item-title>

              <v-divider></v-divider>

            <v-row max-width="400" class="mx-16 px-16">
							<v-col align="center">
								<router-link class="text-decoration-none" :to="{ name: 'profile' }">
									<v-btn depressed x-small class="blue--text">View</v-btn>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'UpdateRequest', params: { id: request.id, request: request } }">
									<v-btn depressed x-small class="light-blue--text">Update</v-btn>
								</router-link>
							<router-link class="text-decoration-none" :to="{ name: 'DeleteReq', params: { id: request.id, request: request } }">
								<v-btn class="red--text" x-small depressed>Delete</v-btn>
							</router-link>
							</v-col>
						</v-row>
          </span>
          <hr>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card v-if="requests.length === 0 || requests === []"
      max-width="400" class="ma-auto"
      align="center" justify="space-around">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>No Requests</v-toolbar-title>
      </v-toolbar>
      <div class="pa-5">No Requests, Start one using <br> the <strong><h1>+</h1></strong> sign above</div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "request-list",
  components: {
  },
  data() {
    return {
      selected: 'all',
      pending: 'mdi-cached',
      approved: 'mdi-check',
      rejected: 'mdi-window-close',
      active: false,
    }
  },
  created() {
    this.$store.dispatch("request/getRequests")
  },
  methods: {
    selectStatus(item) {
      this.selected = item;
    },
  },

  computed: {
    ...mapGetters("auth", ["authUser"]),
    ...mapGetters("request", ["requests"]),
    filterList() {
      var category = this.selected;
      if ( category === 'all' ) {
        return this.requests;
      } else {
        return this.requests.filter(request => {
          return request.status === category;
        })
      }
    },
  },
};
</script>


