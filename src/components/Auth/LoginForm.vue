<template>
  <div>
  <v-app-bar
      color="#3066ac"
      dark
      small
    ><h1>ODIN</h1></v-app-bar>
          
    <section class="section-container">
      <v-row class="signin">
        <v-col cols="8" class="left">
          <v-row>
            <v-col cols="8" class="left" align="center" justify="space-around">
              <v-btn align="center" justify="space-around" text x-large disabled class="pb" color="#3066ac">Powered By:</v-btn>
            </v-col>
            <v-col align="center">  
              <div class="kms">
                <v-img
                  color="primary"
                  height="190"
                  width="350"
                  align="center"
                  justify="center"
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0UacXv3BDlw/company-logo_200_200/0/1628876343731?e=2159024400&v=beta&t=tsUZoi3_w_wH0nSfeNTqMfarshaizY4i-0iPlBO2UkY"
                >
                </v-img>
              </div>        
            </v-col>
          </v-row>

        </v-col>
        <v-col cols="4" class="right">
          <h2>LOGIN</h2>
          <validation-observer ref="observer">
            <v-form @submit.prevent="login">
              <validation-provider v-slot="{ errors }" name="Name" rules="required|email">
                <v-text-field
                  class="#3066ac"
                  color="white"
                  v-model="email"
                  :error-messages="errors"
                  label="Email"
                  placeholder="luke@jedi.com"
                  required
                  autocomplete="email"
                  dark
                  filled
                  dense
                ></v-text-field>
              </validation-provider>
              <validation-provider v-slot="{ errors }" name="email" rules="required">
                <v-text-field
                  v-model="password"
                  :error-messages="errors"
                  label="Password"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPass = !showPass"
                  required
                  outlined
                  dense
                  dark
                  filled
                  :type="showPass ? 'text' : 'password'"
                ></v-text-field>
              </validation-provider>
              <div class="text-center">
                <v-btn class="signin-btn" type="submit" rounded color="white" dark>
                  Sign In
                </v-btn>
                <v-checkbox
                  label="Remember Me"
                  color="white"
                  value="primary"
                  hide-details
                  class="rememberMe"
                ></v-checkbox>
              </div>
            </v-form>
          </validation-observer>
          <br>
          <v-spacer></v-spacer>
          <v-container >
            <router-link 
              to="/forgot-password" 
              class="text-decoration-none white--text"
              color="white"
            >
              Forgot your password?
            </router-link>  
            <v-spacer></v-spacer> 
            <router-link
              cols="8" 
              to="/register"
              class="text-decoration-none white--text"
              color="white"
            >
              Register for an account
            </router-link>
          </v-container>
        </v-col>
      </v-row>
      <FlashMessage :error="error" />
    </section>
  </div>
</template>

<script>
import { getError } from "@/utils/helpers";
import '@/assets/styles.scss';
import { required, email } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, setInteractionMode, ValidationObserver } from 'vee-validate'
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/Messages/FlashMessage";
setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

export default {
  name: "LoginView",
  components: {
    ValidationProvider,
    ValidationObserver,
    FlashMessage,
  },
  data() {
    return {
      email: null,
      password: null,
      error: null,
      showPass: false
    };
  },
  methods: {
    async login() {
      const valid = await this.$refs.observer.validate()
      if ( valid ) {
        const payload = {
          email: this.email,
          password: this.password,
        };
        this.error = null;
        try {
          await AuthService.login(payload);
          const authUser = await this.$store.dispatch("auth/getAuthUser");
          if (authUser && authUser.organization === 'Kalen Marketing Solutions') {
            this.$store.dispatch("auth/setGuest", { value: "isNotGuest" });
            this.$router.push("/dashboard");
            console.log('Successful login')
          } else if (authUser && authUser.organization !== 'Kalen Marketing Solutions') {
            this.$store.dispatch("auth/setGuest", { value: "isNotGuest" });
            this.$router.push("/profile");
            console.log('Successful login')
          } else {
            const error = Error(
              "Unable to fetch user after login, check your API settings."
            );
            console.log(error)
            error.name = "Fetch User";
            throw error;
          }
        } catch (error) {
          this.error = getError(error);
        }
      }
    },
  },
};
</script> 







      