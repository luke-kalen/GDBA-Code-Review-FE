<template>
  <div v-if="authUser">
    <v-toolbar>
      <router-link to="/requests">
        <v-btn class="white mr-5 mb-5" color="primary" dark elevation="24">
          <v-icon dark left>
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
      </router-link>
      <v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text">REQUEST REVIEWS</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-spacer></v-spacer>
      <v-row class="mt-3" justify="space-around" align="center">
        <v-chip :input-value="active" filter label filter-icon="mdi-view-list" color="primary" link>
          All
        </v-chip>
        <v-chip :input-value="active" filter label color="green" link @click="showApproved('approved')">
          Approved
        </v-chip>
        <v-chip :input-value="active" filter label filter-icon="mdi-window-close" color="red" link>
          Rejected
        </v-chip>
        <v-chip :input-value="active" filter label filter-icon="mdi-cached" color="amber" link>
          Pending
        </v-chip>
        <v-switch
          v-model="active"
          label="Active"
        ></v-switch>
      </v-row>
    <br>
    <hr>
    <v-container>
      <v-row justify="space-around">
        <v-card width="1300">
          <v-list dense v-if="requests" class="mx-16 pl-5">
            <v-list-item v-for="request in requests" :key="request.id">
              <v-list-item-content v-if="request.user.department.id === $route.params.id || authUser.department === 'HR' || authUser.department === 'Owner'">
                <v-list-item-title class="text-decoration-none">
                  <v-row class="mx-0">
                    <v-col class="px-0 mx-0">
                      <v-btn class="mr-0"
                        color="primary"
                        elevation="9"
                        text
                        small
                        label
                        @click="removeDates(i)"
                      ><v-icon>mdi-delete-forever-outline</v-icon></v-btn>
                        {{ request.user.name }}
                      <router-link :to="{ name: 'RequestOverview', params: { id: request.id } }">
                          <v-chip
                            elevation="24"
                            color="primary"
                            class="ml-4"
                            link
                            label
                            small
                          >
                          {{ request.formDates[0].date }} &nbsp; / &nbsp; {{ request.formDates[request.formDates.length - 1].date }}
                          </v-chip>
                      </router-link>
                      <v-chip 
                        v-if="request.formDates[0].paid"
                        raised
                        label
                        elevation="9"
                        class="ml-4"
                        color="primary"
                        outlined
                        small
                      >
                        PAID
                      </v-chip>
                      <v-chip 
                        v-else
                        raised
                        outlined
                        label
                        elevation="9"
                        class="ml-4"
                        color="grey"
                        small
                      >
                        UNPAID
                      </v-chip>
                        <v-btn
                          class="ml-10 pl-10"
                          small
                          icon
                          :color="request.status === 'pending' ? 'amber' : ( request.status === 'approved' ) ? 'green' : ( request.status === 'rejected' ) ? 'red' : null"
                        >{{ request.status }} &nbsp;
                          <v-icon>{{ request.status === 'pending' ? pending : ( request.status === 'approved' ) ? approved : ( request.status === 'rejected' ) ? rejected : null }}</v-icon>
                        </v-btn>
                      </v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ReviewList",
  components: {
  },
  data() {
    return {
      pending: 'mdi-cached',
      approved: 'mdi-check',
      rejected: 'mdi-window-close',
      active: false,
    }
  },
  created() {
    this.$store.dispatch("request/getDeptRequests", this.$route.params.id)
  },
  methods: {
    async showApproved(status) {
      const result = await this.$store.dispatch("request/getByStatus", status)
      console.log('result from filter:', result)
    }
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
    ...mapGetters("request", ["requests"])
  },
};
</script>


