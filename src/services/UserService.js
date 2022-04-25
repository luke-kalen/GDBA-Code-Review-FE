import * as API from "@/services/API";

export default {
	getUser(userId) {
		return API.apiClient.get(`/users/${userId}`);
	},
	getStaff() {
		return API.apiClient.get(`/staff`);
	},
	getClients() {
		return API.apiClient.get(`/client`);
	},
	getUsers() {
		return API.apiClient.get(`/users`);
	},
	getLead() {
		return API.apiClient.get('/users/lead')
	},
	getHR() {
		return API.apiClient.get('/users/hr')
	},
	getOrgUsers(orgId) {
		return API.apiClient.get(`/organizations/users/${orgId}`)
	},
	getDeptUsers(deptId) {
		return API.apiClient.get(`/departments/users/${deptId}`)
	},
	addUser(user) {
		return API.apiClient.post('/users', user)
	},
	deleteUser(userId) {
		return API.apiClient.delete(`/users/${userId}`)
	},
	updateUser(newUser) {
		console.log('newUser from UserService: ', newUser)
		return API.apiClient.put(`/users/${newUser.id}`, newUser)
	},
	addProof(proof) {
		return API.apiClient.post(`/proofs`, proof)
	},
	getProofs() {
		return API.apiClient.get(`/proofs`)
	},
	paginateUsers(link) {
		return API.apiClient.get(link);
	},
};



// --- [ FOR PAGINATION LATER ] ---
// return API.apiClient.get(`/users/?page=${page}`);