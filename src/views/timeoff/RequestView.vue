<template>
  <div>
    <v-card>
      <v-toolbar>
        <router-link v-if="authUser.lead || authUser.department === 'HR' || authUser.department === 'Owner' && authUser.name !== name" class="text-decoration-none" :to="{ name: 'ReviewList', params: { id: authUser.departmentId } }">
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
            </v-icon>BACK
          </v-btn>
        </router-link>
        <router-link v-else class="text-decoration-none" to="/requests">
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
            </v-icon>BACK
          </v-btn>
        </router-link>
        <v-toolbar-title class="text-h4 primary--text ml-10">REQUEST OVERVIEW</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link v-if="authUser.lead || authUser.department === 'HR' && authUser.name !== name" class="text-decoration-none" to="/requests">
          <v-btn
            class="white mr-5 pr-0"
            small
            color="primary"
            dark
          >TO HISTORY &nbsp;
            <v-icon
              dark
              left
            >
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </router-link>
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
                      <v-chip label color="primary">{{ item.request_date }}</v-chip>
                      <v-chip label outlined color="primary">Paid</v-chip>
                    </span>
                  </v-list-item-content>
                  <v-list-item-content v-else>
                    <span>
                      <v-chip label color="grey">{{ item.request_date }}</v-chip>
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
            <v-list-item-content class="ml-4">
              {{ comment }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo" class="mt-3 pt-1">
                {{ statusIcon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="ml-4" 
              :class="status === 'pending' ? 'amber--text' : ( 
              status === 'approved' ) ? 'green--text' : ( 
              status === 'rejected' ) ? 'red--text' : null"
            >{{ status.toUpperCase() }}
            </v-list-item-content>
          </v-list-item>

          <!-- REVIEWS -->
          <v-row>
            <v-col>
              <v-list-item >
              <v-list-item-icon>
                <v-icon color="indigo" class="mt-8">
                  {{ statusIcon }}
                </v-icon>
              </v-list-item-icon>

                <v-list-item-content justify="end" class=" mt-6 ml-4 text-left" :class="`${deptStatus === 'pending' ? 'amber' : ( deptStatus === 'approved' ) ? 'green' : ( deptStatus === 'rejected' ) ? 'red' : null}--text`">
                  <span> 
                    <v-list-item-title class="text-h6 mb-3 black--text">Katrina: </v-list-item-title>
                     {{ deptStatus.toUpperCase() }}
                    <v-icon class="mb-1" :color="deptStatus === 'pending' ? 'amber' : ( deptStatus === 'approved' ) ? 'green' : ( deptStatus === 'rejected' ) ? 'red' : null">
                      {{ deptStatus === 'pending' ? pending : ( deptStatus === 'approved' ) ? approved : ( deptStatus === 'rejected' ) ? rejected : null }}
                    </v-icon>
                    <v-list-item-title class="text-h6 mt-3 mb-3 black--text">{{ deptDate }}</v-list-item-title>
                    <v-list-item-title class="text-h6 mt-4 black--text">{{ deptTime }}</v-list-item-title>
                    <v-list-item-title class="mt-3 black--text">{{ deptComments }}</v-list-item-title>
                  </span>
                </v-list-item-content>
            </v-list-item>
            </v-col>
            <v-col>
              <v-list-item > 
              <v-list-item-icon>
                <v-icon color="indigo" class="mt-8">
                  {{ statusIcon }}
                </v-icon>
              </v-list-item-icon>
                <v-list-item-content justify="end" class=" mt-6 ml-4 text-left" :class="`${hrStatus === 'pending' ? 'amber' : ( hrStatus === 'approved' ) ? 'green' : ( hrStatus === 'rejected' ) ? 'red' : null}--text`">
                  <span> 
                    <v-list-item-title class="text-h6 mt-3 mb-3 black--text">Sam: </v-list-item-title> 
                      {{ hrStatus.toUpperCase() }}
                    <v-icon class="mb-1" :color="hrStatus === 'pending' ? 'amber' : ( hrStatus === 'approved' ) ? 'green' : ( hrStatus === 'rejected' ) ? 'red' : null">
                      {{ hrStatus === 'pending' ? pending : ( hrStatus === 'approved' ) ? approved : ( hrStatus === 'rejected' ) ? rejected : null }}
                    </v-icon>
                    <v-list-item-title class="text-h6 mt-3 mb-3 black--text">{{ hrDate }}</v-list-item-title>
                    <v-list-item-title class="text-h6 mt-4 black--text">{{ hrTime }}</v-list-item-title>
                    <v-list-item-title class="mt-3 black--text">{{ hrComments }}</v-list-item-title>
                  </span>
                </v-list-item-content>
            </v-list-item>
            </v-col>
          </v-row>
            

            
        </v-list>
        <v-col class="ml-10 mt-5">
        <v-card-actions>
          <v-container
            class="px-5 mx-5"
            fluid
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
                class="pr-16"
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
            class="px-5 mx-5"
            fluid
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
                class="pr-16"
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
  name: 'RequestOverview',
  data() {
    return {
      dates: '', 
      comment: '',
      status: '',
      email: '',
      name: '',
      deptStatus: '',
      deptComments: '',
      deptTime: '',
      deptDate: '',
      hrStatus: '',
      hrComments: '',
      hrTime: '',
      hrDate: '',
      person: mdiAccount,
      statusIcon: mdiListStatus,
      // statusColor: this.status === 'pending' ? 'amber' : ( this.status === 'approved' ) ? 'green' : ( this.status === 'rejected' ) ? 'red' : null,
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
  created: async function() {
    await this.$store.dispatch("request/getRequest", this.$route.params.id)
    await this.$store.dispatch("user/getLead")
    await this.$store.dispatch("user/getHR")
    console.log('asgihjfvdw', this.$store.state.request)
    this.dates = this.$store.state.request.request.dates
    this.comment = this.$store.state.request.request.comment
    this.status = this.$store.state.request.request.status
    this.name = this.$store.state.request.request.name || this.$store.state.request.request.user.name
    this.deptStatus = this.$store.state.request.request.reviews[0].status
    this.deptComments = this.$store.state.request.request.reviews[0].comment
    this.deptTime = this.$store.state.request.request.reviews[0].timeStamp
    // this.deptDate = this.$store.state.request.request.review[0].timeStamp.date
    this.hrStatus = this.$store.state.request.request.reviews[1].status
    this.hrComments = this.$store.state.request.request.reviews[1].comment
    this.hrStatus = this.$store.state.request.request.reviews[1].status
    this.hrComments = this.$store.state.request.request.reviews.comment
    this.hrTime = this.$store.state.request.request.reviews.timeStamp
    this.hrDate = this.$store.state.request.request.reviews.timeStamp
    console.log('hrStatus: ', this.hrStatus)
  },
  methods: {
    
    async deptHandleSubmit() {
      try {
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
        await this.addReview(payload)
        await this.$router.push({ name: 'ReviewList' })
      } catch (err) {
        console.log(err)
      }
      
    },


    async hrHandleSubmit() {
      try {
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
        await this.addReview(payload)
        await this.$router.push({ name: 'ReviewList' })
        console.log('clicked')
      } catch (err) {
        console.log(err)
      }
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
    ...mapGetters("user", [ "lead", "hr" ]),
    ...mapGetters("auth", [ "authUser" ])
  }
}
</script>

<style>

</style>


:color="status === 'pending' ? 'amber' : ( status === 'approved' ) ? 'green' : ( status === 'rejected' ) ? 'red' : null"