<template>
	<div>
		<v-toolbar elevation="0">
			<v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text">ORGANIZATIONS</v-toolbar-title>
			<v-spacer></v-spacer>
			<router-link to="/organizations/form" >
				<v-btn
					color="primary"
					depressed
					elevation="24"
					fab
					raised
					small
					class="mr-6"
				>
					<v-icon>mdi-plus</v-icon>   
				</v-btn>
			</router-link>
		</v-toolbar>
			<v-list dense v-if="organizations" class="mx-10">
        <v-list-item v-for="organization in organizations" :key="organization.id">
            <router-link class="text-decoration-none" :to="{ name: 'orgUsers', params: { id: organization.id } }">
							<v-list-item-icon>
								<v-icon color="primary">mdi-office-building</v-icon>
							</v-list-item-icon>
            </router-link>

            <v-list-item-content >
							<span>
								<router-link class="text-decoration-none black--text" :to="{ name: 'orgUsers', params: { id: organization.id, name: organization.name } }">
									<v-list-item-title class="text-decoration-none">{{ organization.name }} &nbsp; &nbsp; - &nbsp; &nbsp; Employees: {{ organization.employees.length }} </v-list-item-title>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'DeleteOrg', params: { id: organization.id, name: organization.name } }">
									<v-btn
										class="red--text"
										x-small
										depressed
									>Delete
									</v-btn>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'orgUpdate', params: { id: organization.id, name: organization.name } }">
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
      </v-list>
			<div v-else>Loading Organizations...</div>
		<br>
		<br>
		<br>
		<!-- <footer-component /> -->
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import bootstrap from "@/assets/img/bootstrap.jpg";
export default {
	name: "organizations",
	data() {
		return {
			bootstrap,
		}
	},
	async created() {
		const result = await this.$store.dispatch("org/showOrgs")
		console.log('This is my result: ', result)
		return result;
	},
	methods: {
		...mapActions('org', ['showOrgs'])
	},
	computed: {
		...mapGetters("org", ["organizations"])
	},
}
</script>

