<template>
<div>
<v-card>
    <v-toolbar depressed>
      <router-link to="/requests">
        <v-btn
          class="white mr-5 mb-5"
          color="primary"
          dark
          elevation="24"
        >
          <v-icon
            dark
            left
          >
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
      </router-link>
      <v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text">TIMEOFF REQUEST FORM</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
  <br>
  <v-container>
    <v-row justify="space-around">
      <v-card outlined width="1000">
        <form @submit.prevent="handleSubmit">
          <v-container>
            <v-row >
                <v-col>
                  <v-date-picker
                    v-model="dates"
                    multiple
                    v-on:input="pickDates"
                  ></v-date-picker>
                </v-col>
                <v-col
                >
                <v-list dense>
                  <v-list-item v-for="(item, i) in formDates" :key="i">
                    <v-list-item-content>
                      <v-row>
                        <v-col>
                          <v-btn
                            color="primary"
                            depressed
                            text
                            small
                            @click="removeDates(item.id)"
                          >X</v-btn>

                          <v-chip 
                            raised
                            elevation="9"
                            color="primary"
                            class="ml-4"
                            label
                          >
                            {{ item.request_date }}
                          </v-chip>
                        </v-col>
                        <v-col>
                          <v-switch
                            class="mt-0"
                            v-model="item.paid"
                            inset
                            :label="item.paid ? `PAID` : `UNPAID`"
                          ></v-switch>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                </v-col>
              </v-row>
          </v-container>
          <v-container fluid>
          <v-textarea
            color="primary"
            name="input-7-1"
            filled
            label="COMMENTS"
            v-model="comment"
            auto-grow
            value=""
          ></v-textarea>
        </v-container>
          <v-btn           
            class="white mr-5 mb-5 ml-5"
            color="primary"
            dark
            elevation="24"
            @click.prevent="handleSubmit"
          >Submit</v-btn>
          <FlashMessage :message="message" :error="error" />
        </form>
      </v-card>
    </v-row>
  </v-container>

</div>
</template>

<script>
import { mapGetters } from "vuex";
import { getError } from "@/utils/helpers";
// import BaseBtn from "@/components/BaseBtn";
// import BaseInput from "@/components/BaseInput";
// import RequestService from "@/services/RequestService";
import FlashMessage from "@/components/Messages/FlashMessage";
// import Calendar from '@/components/Calendar'
export default {
  name: "UserRequestForm",
  components: {
    // BaseBtn,
    // BaseInput,
    // Calendar,
    FlashMessage,
  },
  data() {
    return {
      reviewerId: null,
      reviewerName: null,
      error: null,
      message: null,
      comment: '',
      review_comment: '',
      status: null,
      dates: [],
      formDates: [],
      menu: false,
      switch1: true,
    };
  },
  created() {
    // this.pickDates()
    this.name = this.authUser.name;
    this.email = this.authUser.email;
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
  methods: {
    async pickDates() {
      let filler = this.formDates.slice()
      this.formDates = []
      for ( let i = 0; i < this.dates.length; i++ ) {
        this.formDates.push({ request_date: this.dates[i], paid: true })
      }
      
      for ( let i = 0; i < this.formDates.length; i++ ) {
        for ( let j = 0; j < filler.length; j++ ) {
          if ( this.formDates[i].request_date === filler[j].request_date )
          this.formDates[i] = filler[j]
        }
      }
      console.log('formdates: ', this.formDates)
      console.log('dates: ', this.dates[this.dates.length - 1])
    },
    
    removeDates(index) {
      this.formDates.splice(index, 1);
      this.dates.splice(index, 1)
    },
    
    async handleSubmit() {
      const payload = {
        user_id: this.authUser.id,
        email: this.authUser.email,
        request_date: this.formDates,
        list: this.list,
        status: 'pending',
        comment: this.comment,
        reviewer_id: '',
        review_comment: this.review_comment,
      };
      await this.createRequest(payload);
      this.formDates = []
      this.dates = []
      this.$router.push('/requests')
    },

    async createRequest(request) {
      try {
        await this.$store.dispatch("request/createRequest", request);
        this.message = "Timeoff Request Submitted.";
      } catch(error) {
        this.error = getError(error);
        this.message = "Failed to submit request: Please try again";
      }
    },
  },
};
</script>