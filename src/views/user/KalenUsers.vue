<template>
<div>
	<!-- HEADER -->
	<v-toolbar elevation="0">
		<v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text">STAFF</v-toolbar-title>
		<v-spacer></v-spacer>
		<router-link :to="{ name: 'NewStaff', params: { id: organizations[0].id, name: organizations[0].name  } }" >
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
	<!-- LIST CONTAINER -->
		<!-- ICONS -->
	<v-card class="mx-10 px-10" align="end" elevation="0">
		<v-list dense v-if="users" class="mx-10 px-16">
			<v-list-item v-for="(user, i) in users" :key="i" class="mx-16 px-16">
				<router-link class="text-decoration-none" :to="{ name: 'user', params: { id: user.id } }">
					<v-list-item-icon>
						<v-icon color="primary">mdi-account</v-icon>
					</v-list-item-icon>
				</router-link>
		<!-- LIST ITEMS -->
				<v-list-item-content>
					<span>
						<router-link class="text-decoration-none black--text" :to="{ name: 'user', params: { id: user.id } }">
							<v-list-item-title class="text-decoration-none">
								<v-card elevation="0">
									<span>
										<v-row class="mx-16 px-16">
											<v-col align="center">
												{{ user.name }}
											</v-col>
											<v-col align="center">
												{{ user.organization.name }}
											</v-col>
											<v-col align="center">
												{{ user.email }}
											</v-col>
										</v-row>
									</span>	
								</v-card>
							</v-list-item-title>
							<v-divider></v-divider>
						</router-link>
						<!-- BUTTONS -->
						<v-row class="mx-16 px-16">
							<v-col align="center">
								<router-link class="text-decoration-none" :to="{ name: 'profile', params: { id: user.id } }">
									<v-btn 
										depressed 
										x-small 
										class="blue--text"
									>View
									</v-btn>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'UpdateStaff', params: { id: user.id, user: user } }">
									<v-btn
										depressed
										x-small
										class="light-blue--text"
									>Update
									</v-btn>
								</router-link>
							<router-link class="text-decoration-none" :to="{ name: 'DeleteUser', params: { id: user.id, name: user.name } }">
								<v-btn
									class="red--text"
									x-small
									depressed
								>Delete
								</v-btn>
							</router-link>
							</v-col>
						</v-row>
					</span>
					<hr>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<div v-else>Loading users...</div>
	</v-card>
</div>
</template>

<script>
// import UserModal from '@/views/UserModal'
// import UserUpdateModal from '@/views/UserUpdateModal'
import bootstrap from "@/assets/img/bootstrap.jpg";
import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";
import { mapGetters, mapActions } from 'vuex'
// import axios from 'axios'
export default {
	name: "users",
	components: {
    //  UserModal, 
    //  UserUpdateModal 
  },
	data() {
		return {
			addHeader: "Add New User",
			updateHeader: 'Update User',
			bootstrap,
			team1,
			team2,
			team3,
			team4,
			showUserModal: false,
			showUserUpdateModal: false,
			currentUser: null,
			// users: null,
			user: {
				id: '',
				name: '',
        org: '',
				email: '',
        avatar: null,
        title: '',
        dept: ''
			}
		}
	},
	async created() {
		await this.$store.dispatch("user/getStaff")
		await this.$store.dispatch('org/showOrgs');
	},
	computed: {
		...mapGetters("user", [ "users" ]),
		...mapGetters("org", [ "organizations" ])
	},
	methods: {
		...mapActions("user", [ "deleteUser" ])
	}
}
</script>

