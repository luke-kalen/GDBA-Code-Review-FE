import * as API from "@/services/API";

export default {
	getProject(projectId) {
		return API.apiClient.get(`/projects/${projectId}`);
	},
	addProject(project) {
		return API.apiClient.post(`/projects`, project)
	},
	getProjects() {
		return API.apiClient.get(`/projects`)
	},
	getOrgProjects(orgId) {
		return API.apiClient.get(`/organizations/projects/${orgId}`);
	},
	updateProject(newProject) {
		console.log('newProject from ProjectService: ', newProject)
		return API.apiClient.put(`/projects/${newProject.id}`, newProject)
	},
	deleteProject(projectId) {
		return API.apiClient.delete(`/projects/${projectId}`)
	},
	paginateUsers(link) {
		return API.apiClient.get(link);
	},
};



// --- [ FOR PAGINATION LATER ] ---
// return API.apiClient.get(`/users/?page=${page}`);