<template>
	<div>
		<v-toolbar elevation="0">
			<v-toolbar-title class="text-h4 mx-10 px-10 mb-7 primary--text">DEPARTMENTS</v-toolbar-title>
			<v-spacer></v-spacer>
			<router-link to="/departments/form" >
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
			<v-list dense v-if="departments" class="mx-10">
        <v-list-item v-for="department in departments" :key="department.id">
            <router-link class="text-decoration-none" :to="{ name: 'deptUsers', params: { id: department.id, name: department.name } }">
							<v-list-item-icon>
								<v-icon color="primary">mdi-sitemap</v-icon>
							</v-list-item-icon>
            </router-link>

            <v-list-item-content >
							<span>
								<router-link class="text-decoration-none black--text" :to="{ name: 'deptUsers', params: { id: department.id, name: department.name } }">
									<v-list-item-title class="text-decoration-none">{{ department.name }} &nbsp; &nbsp; - &nbsp; &nbsp; Employees: {{ department.employees.length }}</v-list-item-title>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'DeleteDept', params: { id: department.id, name: department.name } }">
									<v-btn
										class="red--text"
										x-small
										depressed
									>Delete
									</v-btn>
								</router-link>
								<router-link class="text-decoration-none" :to="{ name: 'deptUpdate', params: { id: department.id, name: department.name } }">
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
			<div v-else>Loading departments...</div>
		<br>
		<br>
		<br>
		<!-- <footer-component /> -->
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import bootstrap from "@/assets/img/bootstrap.jpg";
export default {
	name: "departments",
	data() {
		return {
			bootstrap,
		}
	},
	
	created() {
		this.$store.dispatch("dept/showDepts")
	},
	methods: {
		...mapActions('dept', ['showDepts', 'setDept', 'deleteDept']),
	},
	computed: {
		...mapGetters("dept", [ "departments" ])
	}
}
</script>

