import * as API from "@/services/API";

export default {
	getDept(deptId) {
		return API.apiClient.get(`/departments/${deptId}`);
	},
	showDepts() {
		return API.apiClient.get(`/departments`);
	},
	addDept(dept) {
		return API.apiClient.post('/departments', dept)
	},
	deleteDept(deptId) {
		return API.apiClient.delete(`/departments/${deptId}`)
	},
	updateDept(newDept) {
		console.log('newOrg from DeptService: ', newDept)
		return API.apiClient.put(`/departments/${newDept.id}`, newDept)
	},
	paginateDepts(link) {
		return API.apiClient.get(link);
	},
};



// --- [ FOR PAGINATION LATER ] ---
// return API.apiClient.get(`/organizations/?page=${page}`);