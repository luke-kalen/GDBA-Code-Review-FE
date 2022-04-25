<template>
	<div>
		<v-toolbar elevation="0">
			<v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text">{{ organization.name.toUpperCase() }} &nbsp; USERS</v-toolbar-title>
			<v-spacer></v-spacer>
			<router-link :to="{ name: 'userForm', params: { id: $route.params.id, name: $route.params.name } }" >
				<v-btn
					color="primary"
					depressed
					fab
					small
					class="mr-6"
				>
					<v-icon>mdi-plus</v-icon>   
				</v-btn>
			</router-link>
		</v-toolbar>
			<v-list dense v-if="users" class="mx-10">
				<template v-for="(user, i) in users">
					<v-list-item v-if="user.organization.id === $route.params.id" :key="i">
						<router-link class="text-decoration-none" :to="{ name: 'orgUsers', params: { id: user.id, } }">
							<v-list-item-icon>
								<v-icon color="primary">mdi-account</v-icon>
							</v-list-item-icon>
						</router-link>

						<v-list-item-content >
							<span>
								<router-link class="text-decoration-none black--text" :to="{ name: 'orgUsers', params: { id: user.id } }">
									<v-list-item-title class="text-decoration-none">
										<span>
										{{ user.name }} &nbsp; - &nbsp; {{ user.email }}&nbsp;
										</span>
									</v-list-item-title>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'DeleteUser', params: { id: user.id, name: user.name } }">
									<v-btn
										class="red--text"
										x-small
										depressed
									>Delete
									</v-btn>
								</router-link>
								
								<router-link class="text-decoration-none" :to="{ name: 'orgUserUpdate', params: { id: user.id, user: user } }">
									<v-btn
										depressed
										x-small
										class="light-blue--text"
									>Update
									</v-btn>
								</router-link>
							</span>
							<hr>
						</v-list-item-content>
					</v-list-item>
				</template>
 
      </v-list>
			<div v-else>Loading users...</div>
		<br>
		<br>
		<br>
		<!-- <footer-component /> -->
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import bootstrap from "@/assets/img/bootstrap.jpg";
import team1 from "@/assets/img/team-1-800x800.jpg";
export default {
	name: "orgUsers",
	data() {
		return {
			bootstrap,
			team1
		}
	},
	async created() {
		await this.$store.dispatch("org/getOrg", this.$route.params.id)
		await this.$store.dispatch('user/getOrgUsers', this.organization.id )
		console.log('store: ', this.$store)
		console.log('Route Params: ', this.$route.params)
	},
	methods: {
		...mapActions("user", [ "deleteUser", "getUsers", "getUser" ])
	},
	computed: {
		...mapGetters("user", ["users"]),
		...mapGetters("org", ["organization"])
	}
}
</script>

