<template>
  <div>
    <v-card>
      <v-toolbar>
        <router-link class="text-decoration-none" :to="{ name: 'ReviewList', params: { id: authUser.departmentId } }">
          <v-btn
            class="white mr-5"
            small
            color="primary"
            dark
          >
            <v-icon
              dark
              left
            >
              mdi-arrow-left
            </v-icon>Back
          </v-btn>
        </router-link>
        <v-toolbar-title class="text-h4 primary--text ml-10">REVIEW</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
    <v-card
        class="mx-auto"
      >
      <v-container width="1000">
        <v-row width="1000">
          <v-list class="text-h6 ml-10 pl-10 mt-5" dense two-line>
          <v-list-item color="primary">
            <v-list-item-icon>
              <v-icon color="indigo" class="mt-3 pt-1">
                mdi-account
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content class="primary--text ml-4">{{ name }}</v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>

          <v-list-item >
            <v-list-item-icon>
              <v-icon color="indigo" class="mt-5 pt-3">
                mdi-calendar 
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content v-for="(item, i) in dates" :key="i">
              <v-list>
                <v-list-item>
            <template>
                  <v-list-item-content v-if="item.paid">
                    <span>
                      <v-chip label color="primary">{{ item.date }}</v-chip>
                      <v-chip label outlined color="primary">Paid</v-chip>
                    </span>
                  </v-list-item-content>
                  <v-list-item-content v-else>
                    <span>
                      <v-chip label color="grey">{{ item.date }}</v-chip>
                      <v-chip label outlined color="grey">Unpaid</v-chip>
                    </span>
                  </v-list-item-content>
            </template>
                </v-list-item>
              </v-list>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo" class="mt-3 pt-1">
                mdi-message-reply-text
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content class="ml-4">{{ comments }}</v-list-item-content>

          </v-list-item>
            <v-list-item v-for="item in user" :key="item.id">
              <v-list-item-icon>
                <v-icon color="indigo" class="mt-8">
                  {{ statusIcon }}
                </v-icon>
              </v-list-item-icon>

                <v-list-item-content justify="end" class=" mt-6 ml-4 text-left" :class="`${deptStatus === 'pending' ? 'amber' : ( deptStatus === 'approved' ) ? 'green' : ( deptStatus === 'rejected' ) ? 'red' : null}--text`">
                  <span> 
                    <v-list-item-title class="text-h6 mb-3 black--text">{{ item.name }}: </v-list-item-title>
                     {{ deptStatus.toUpperCase() }}
                    <v-icon class="mb-1" :color="deptStatus === 'pending' ? 'amber' : ( deptStatus === 'approved' ) ? 'green' : ( deptStatus === 'rejected' ) ? 'red' : null">
                      {{ deptStatus === 'pending' ? pending : ( deptStatus === 'approved' ) ? approved : ( deptStatus === 'rejected' ) ? rejected : null }}
                    </v-icon>
                    <v-list-item-title class="text-h6 mt-3 mb-3 black--text">{{ deptDate }}</v-list-item-title>
                    <v-list-item-title class="text-h6 mt-4 black--text">{{ deptTime }}</v-list-item-title>
                    <v-list-item-title class="mt-5 black--text">{{ deptComments }}</v-list-item-title>
                  </span>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo" class="mt-8">
                  {{ statusIcon }}
                </v-icon>
              </v-list-item-icon>
                <v-list-item-content justify="end" class=" mt-6 ml-4 text-left" :class="`${hrStatus === 'pending' ? 'amber' : ( hrStatus === 'approved' ) ? 'green' : ( hrStatus === 'rejected' ) ? 'red' : null}--text`">
                  <span> 
                    <v-list-item-title class="text-h6 mt-3 mb-3 black--text">Sam Anderson: </v-list-item-title> {{ hrStatus.toUpperCase() }}
                    <v-icon class="mb-1" :color="hrStatus === 'pending' ? 'amber' : ( hrStatus === 'approved' ) ? 'green' : ( hrStatus === 'rejected' ) ? 'red' : null">
                      {{ hrStatus === 'pending' ? pending : ( hrStatus === 'approved' ) ? approved : ( hrStatus === 'rejected' ) ? rejected : null }}
                    </v-icon>
                    <v-list-item-title class="text-h6 mt-3 mb-3 black--text">{{ hrDate }}</v-list-item-title>
                    <v-list-item-title class="text-h6 mt-4 black--text">{{ hrTime }}</v-list-item-title>
                    <v-list-item-title class="mt-3 black--text">{{ hrComments }}</v-list-item-title>
                    <v-list-item-title>{{  }}</v-list-item-title>
                  </span>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-col class="ml-10 mt-5">
        <v-card-actions>
          <v-container
            class="px-0"
            fluid
            v-if="authUser.lead"
          >
            <form>
              <v-radio-group v-model="deptStatus">
                <v-radio
                  label="Pending"
                  value="pending"
                ></v-radio>
                <v-radio
                  label="Approved"
                  value="approved"
                ></v-radio>
                <v-radio
                  label="Rejected"
                  value="rejected"
                ></v-radio>
              </v-radio-group>
              
              <v-textarea
                color="primary"
                name="input-7-1"
                filled
                label="COMMENTS"
                v-model="deptComments"
                auto-grow
                value=""
              ></v-textarea>
              <v-btn      
                submit     
                class="white mr-5 mb-5"
                color="primary"
                dark
                elevation="24"
                @click.prevent="deptHandleSubmit"
              >Submit</v-btn>
            </form>
          </v-container>
          <v-container
            class="px-0"
            fluid
            v-if="authUser.department === 'HR'"
          >
            <form>
              <v-radio-group v-model="hrStatus">
                <v-radio
                  label="Pending"
                  value="pending"
                ></v-radio>
                <v-radio
                  label="Approved"
                  value="approved"
                ></v-radio>
                <v-radio
                  label="Rejected"
                  value="rejected"
                ></v-radio>
              </v-radio-group>
              
              <v-textarea
                color="primary"
                name="input-7-1"
                filled
                label="COMMENTS"
                v-model="hrComments"
                auto-grow
                value=""
              ></v-textarea>
              <v-btn      
                submit     
                class="white mr-5 mb-5"
                color="primary"
                dark
                elevation="24"
                @click.prevent="hrHandleSubmit"
              >Submit</v-btn>
            </form>
          </v-container>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
  </v-card>
</div>
</template>

<script>
import { mdiAccount } from '@mdi/js';
import { mdiListStatus } from '@mdi/js';
import { mapGetters } from 'vuex'
import { getError } from "@/utils/helpers";
import moment from 'moment';
export default {
  data() {
    return {
      dates: '', 
      comments: '',
      status: '',
      email: '',
      name: '',
      deptStatus: '',
      deptComments: '',
      hrComments: '',
      hrStatus: '',
      deptTime: '',
      deptDate: '',
      hrTime: '',
      hrDate: '',
      person: mdiAccount,
      statusIcon: mdiListStatus,
      statusColor: status === 'pending' ? 'amber' : ( status === 'approved' ) ? 'green' : ( status === 'rejected' ) ? 'red' : null,
      pending: 'mdi-cached',
      approved: 'mdi-check',
      rejected: 'mdi-window-close',
      radioGroup: 1,
      options: [
        'Pending',
        'Approved',
        'Rejected'
      ]
    }
  },
  async created() {
    this.$store.dispatch("request/getRequest", this.$route.params.id)
    this.$store.dispatch("user/getLead")
    this.dates = this.$store.state.request.request.formDates
    this.comments = this.$store.state.request.request.comments
    this.status = this.$store.state.request.request.status
    this.name = this.$store.state.request.request.name || this.$store.state.request.request.user.name
    this.deptStatus = this.$store.state.request.request.deptReview.status
    this.deptComments = this.$store.state.request.request.deptReview.comments
    this.deptTime = this.$store.state.request.request.deptReview.timeStamp.time
    this.deptDate = this.$store.state.request.request.deptReview.timeStamp.date
    this.hrStatus = this.$store.state.request.request.hrReview.status
    this.hrComments = this.$store.state.request.request.hrReview.comments
    this.hrStatus = this.$store.state.request.request.hrReview.status
    this.hrComments = this.$store.state.request.request.hrReview.comments
    this.hrTime = this.$store.state.request.request.hrReview.timeStamp.time
    this.hrDate = this.$store.state.request.request.hrReview.timeStamp.date
  },
  methods: {
    
    async deptHandleSubmit() {
      const now = new Date()
      const date = moment(now).format(`MM/DD/YYYY`)
      const time = moment(now).format(`HH:MM:SS`)
      const payload = {
        id: this.$route.params.id,
        status: this.status,
        deptReview: {
          status: this.deptStatus,
          timeStamp: {
            date: date,
            time: time
          },
          comments: this.deptComments,
        },
      };
      if (this.hrStatus === 'approved' && payload.deptReview.status === 'approved') {
        payload.status = 'approved'
      } 
      if (this.hrStatus === 'rejected' || payload.deptReview.status === 'rejected') {
        payload.status = 'rejected'
      }
      this.addReview(payload)
      console.log('clicked')
      // this.$route.push('/requests')z
      console.log('Why doesnt this work?')
    },


    async hrHandleSubmit() {
      const now = new Date()
      const date = moment(now).format(`MM/DD/YYYY`)
      const time = moment(now).format(`HH:MM:SS`)
      const payload = {
        id: this.$route.params.id,
        status: this.status,
        hrReview: {
          status: this.hrStatus,
          timeStamp: {
            date: date,
            time: time
          },
          comments: this.hrComments,
        }
      };
      if (payload.hrReview.status === 'approved' && this.deptStatus === 'approved') {
        payload.status = 'approved'
      } 
      if (payload.hrReview.status === 'rejected' || this.deptStatus === 'rejected') {
        payload.status = 'rejected'
      }
      this.addReview(payload)
      // this.$route.push('/requests')
      console.log('clicked')
    },

    
    async addReview(review) {
      try {
        this.$store.dispatch("request/addReview", review)
        this.message = "Review Submitted."
      } catch(error) {
        this.error = getError(error)
        this.message = "Failed to submit review: Please try again"
      }
    },
  },
  computed: {
    ...mapGetters("user", [ "user" ]),
    ...mapGetters("auth", [ "authUser" ])
  }
}
</script>

<style>

</style>


:color="status === 'pending' ? 'amber' : ( status === 'approved' ) ? 'green' : ( status === 'rejected' ) ? 'red' : null"