import * as API from "@/services/API";

export default {
	getProof(proofId) {
		return API.apiClient.get(`/proofs/${proofId}`);
	},
	getImage(proofId) {
		return API.apiClient.get(`/proofs/image/${proofId}`);
	},
	addProof(payload) {
		return API.apiClient.post('/proofs', payload.url)
	},
	getProofs() {
		return API.apiClient.get(`/proofs`)
	},
	getProofsFromSet(setId) {
		return API.apiClient.get(`/proof-sets/proofs/${setId}`)
	},
	deleteProof(proofId) {
		return API.apiClient.delete(`/proofs/${proofId}`)
	},
	// deleteUser(userId) {
	// 	return API.apiClient.delete(`/users/${userId}`)
	// },
	updateProof(newProof) {
		console.log('newUser from UserService: ', newProof)
		return API.apiClient.put(`/proofs/${newProof.id}`, newProof)
	},
	paginateUsers(link) {
		return API.apiClient.get(link);
	},
};



// --- [ FOR PAGINATION LATER ] ---
// return API.apiClient.get(`/users/?page=${page}`);