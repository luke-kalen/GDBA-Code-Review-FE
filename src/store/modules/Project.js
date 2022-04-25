import { getError } from "@/utils/helpers";
import ProjectService from "@/services/ProjectService";
// import OrgService from "@/services/OrgService";

export const namespaced = true;

// function setPaginatedUsers(commit, response) {
// 	commit("SET_USERS", response.data.data);
// 	commit("SET_META", response.data.meta);
// 	commit("SET_LINKS", response.data.links);
// 	commit("SET_LOADING", false);
// }

export const state = {
	project: null,
	projects: [],
	meta: null,		
	links: null,
	loading: false,
	error: null,
};

export const mutations = {
	SET_PROJECTS(state, projects) {
		state.projects = projects;
	},
	SET_PROJECT(state, project) {
		state.project = project;
	},
	SET_META(state, meta) {
			state.meta = meta;
	},
	SET_LINKS(state, links) {
			state.links = links;
	},
	SET_LOADING(state, loading) {
			state.loading = loading;
	},
	SET_ERROR(state, error) {
			state.error = error;
	},
};

export const actions = {
	async getProjects({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await ProjectService.getProjects();
			commit("SET_PROJECTS", response.data.data)
			commit("SET_LOADING", false);
			console.log('RESPONSE.DATA.PROJECTS: ', response.data)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_PROJECTS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	// async getOrgUsers({ commit }, orgId) {
	// 	commit("SET_LOADING", true);
	// 	try {
	// 		// const org = await OrgService.getOrg(orgId);
	// 		const response = await UserService.getOrgUsers(orgId)
	// 		commit("SET_USERS", response.data.users)
	// 		commit("SET_LOADING", false);
	// 		console.log('RESPONSE for getOrgUsers: ', response.data.users)		
	// 	} catch (error) {
	// 		commit("SET_LOADING", false);
	// 		commit("SET_USERS", null);
	// 		commit("SET_ERROR", getError(error));
	// 	}
	// },

	// async getDeptUsers({ commit }, deptId) {
	// 	commit("SET_LOADING", true);
	// 	try {
	// 		// const org = await OrgService.getOrg(deptId);
	// 		const response = await UserService.getDeptUsers(deptId)
	// 		commit("SET_USERS", response.data.users)
	// 		commit("SET_LOADING", false);
	// 		console.log('RESPONSE for getDeptUsers: ', response.data.users)		
	// 	} catch (error) {
	// 		commit("SET_LOADING", false);
	// 		commit("SET_USERS", null);
	// 		commit("SET_ERROR", getError(error));
	// 	}
	// },

	async getProject({ commit }, projectId) {
		commit("SET_LOADING", true);
		try {
			const response = await ProjectService.getProject(projectId);
			console.log("Is it getting here??? ", response)
			commit("SET_PROJECT", response.data);
			commit("SET_LOADING", false);
			console.log('Get THIS Project: ', response.data)	
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROJECTS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async getOrgProjects({ commit }, orgId) {
		commit("SET_LOADING", true);
		try {
			const response = await ProjectService.getOrgProjects(orgId);
			console.log("Is it getting here??? ", response)
			commit("SET_PROJECTS", response.data);
			commit("SET_LOADING", false);
			console.log('Get Org Projects: ', response.data)	
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROJECTS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async addProject({ commit }, project) {
		commit("SET_LOADING", true);
		try {
			const response = await ProjectService.addProject(project);
			commit("SET_PROJECTS", response.data.data);
			commit("SET_LOADING", false);
			console.log('POST RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROJECTS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async deleteProject({ commit }, projectId) {
		commit("SET_LOADING", true)
		try {
			const response = await ProjectService.deleteProject(projectId);
			commit("SET_PROJECTS", response.data.projects);
			commit("SET_LOADING", false);
			console.log('DELETE RESPONSE: ', response.data.project)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROJECTS", null);
			commit("SET_ERROR", getError(err));			
		}
	},

	async updateProject({ commit }, projectId, newProject) {
		commit("SET_LOADING", true);
		try {
			console.log('newProject from PROOF store: ', newProject)
			const response = await ProjectService.updateUser(projectId, newProject);
			commit("SET_PROJECT", response.data.project);
			commit("SET_LOADING", false);
			console.log('UPDATE RESPONSE: ', response.data.project)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROJECTS", null);
			commit("SET_ERROR", getError(err));			
		}		
	},

	// paginateUsers({ commit }, link) {
	// 	commit("SET_LOADING", true);
	// 	UserService.paginateUsers(link)
	// 		.then((response) => {
	// 				setPaginatedUsers(commit, response);
	// 		})
	// 		.catch((error) => {
	// 				commit("SET_LOADING", false);
	// 				commit("SET_ERROR", getError(error));
	// 		});
	// },
};

export const getters = {
	project: (state) => {
		return state.project
	},
	projects: (state) => {
			return state.projects;
	},
	meta: (state) => {
		return state.meta;
	},
	links: (state) => {
		return state.links;
	},
	loading: (state) => {
		return state.loading;
	},
	error: (state) => {
		return state.error;
	},
};