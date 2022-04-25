import * as API from "@/services/API";

export default {
	async getOrg(orgId) {
		return await API.apiClient.get(`/organizations/${orgId}`);
	},
	showOrgs() {
		return API.apiClient.get(`/organizations`);
	},
	addOrg(org) {
		return API.apiClient.post('/organizations', org)
	},
	deleteOrg(orgId) {
		return API.apiClient.delete(`/organizations/${orgId}`)
	},
	updateOrg(newOrg) {
		console.log('newOrg from OrgService: ', newOrg)
		return API.apiClient.put(`/organizations/${newOrg.id}`, newOrg)
	},
	paginateOrgs(link) {
		return API.apiClient.get(link);
	},
};



// --- [ FOR PAGINATION LATER ] ---
// return API.apiClient.get(`/organizations/?page=${page}`);