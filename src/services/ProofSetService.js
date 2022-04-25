import * as API from "@/services/API";

export default {
	getProofSet(proofSetId) {
		return API.apiClient.get(`/proof-sets/${proofSetId}`);
	},
	addProofSet(proofSet) {
		return API.apiClient.post(`/proof-sets`, proofSet)
	},
	getProofSets() {
		return API.apiClient.get(`/proof-sets`)
	},
	getProjectProofSets(projectId) {
		return API.apiClient.get(`/projects/proof-sets/${projectId}`)
	},
	deleteProofSet(proofSetId) {
		return API.apiClient.delete(`/proof-sets/${proofSetId}`)
	},
	// deleteUser(userId) {
	// 	return API.apiClient.delete(`/users/${userId}`)
	// },
	// updateUser(newUser) {
	// 	console.log('newUser from UserService: ', newUser)
	// 	return API.apiClient.put(`/users/${newUser.id}`, newUser)
	// },
	paginateUsers(link) {
		return API.apiClient.get(link);
	},
};



// --- [ FOR PAGINATION LATER ] ---
// return API.apiClient.get(`/users/?page=${page}`);