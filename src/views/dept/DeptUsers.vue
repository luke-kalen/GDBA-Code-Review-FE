<template>
	<div>
		<v-toolbar>
			<v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text">{{ $route.params.name.toUpperCase() }} &nbsp; USERS</v-toolbar-title>
			<v-spacer></v-spacer>
			<router-link :to="{ name: 'userForm', params: { id: $route.params.id } }" >
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
				<template v-for="user in users">
					<v-list-item v-if="user.department.id === $route.params.id" :key="user.id">
						<router-link class="text-decoration-none" :to="{ name: 'user', params: { id: user.id } }">
							<v-list-item-icon>
								<v-icon color="primary">mdi-account</v-icon>
							</v-list-item-icon>
						</router-link>

						<v-list-item-content >
							<span>
								<router-link class="text-decoration-none black--text" :to="{ name: 'user', params: { id: user.id } }">
									<v-list-item-title class="text-decoration-none">
										<span>
										{{ user.name }} &nbsp; - &nbsp; {{ user.department.name }} &nbsp;
										</span>
									</v-list-item-title>
								</router-link>
								<v-btn
									class="red--text"
									x-small
									depressed
									@click="deleteOrg(user.id)"
								>Delete
								</v-btn>
								
								<router-link class="text-decoration-none" :to="{ name: 'orgUserUpdate', params: { id: user.id } }">
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
	name: "deptUsers",
	data() {
		return {
			bootstrap,
			team1,
		}
	},
	created() {
		this.$store.dispatch('user/getDeptUsers', this.$route.params.id )
	},
	methods: {
		...mapActions("user", [ "deleteUser", "getUsers", "getUser" ]),
	},

	computed: {
		...mapGetters("user", ["users"]),
		...mapGetters("dept", ["oneDept"])
	}
}
</script>

