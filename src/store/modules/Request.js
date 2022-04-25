import { getError } from "@/utils/helpers";
import RequestService from "@/services/RequestService";
// import OrgService from "@/services/OrgService";

export const namespaced = true;

function setPaginatedUsers(commit, response) {
	commit("SET_REQUESTS", response.data.data);
	commit("SET_META", response.data.meta);
	commit("SET_LINKS", response.data.links);
	commit("SET_LOADING", false);
}

export const state = {
	request: null,
	requests: [],
	meta: null,		
	links: null,
	loading: false,
	error: null,
};

export const mutations = {
	SET_REQUEST(state, request) {
			state.request = request;
	},
	SET_REQUESTS(state, requests) {
		state.requests = requests;
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
	async getRequests({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await RequestService.getRequests();
			commit("SET_REQUESTS", response.data.data)
			commit("SET_LOADING", false);
			console.log('RESPONSE.DATA.REQUESTS: ', response.data)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_REQUESTS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	async getDeptRequests({ commit }, deptId) {
		commit("SET_LOADING", true);
		try {
			// const org = await OrgService.getOrg(deptId);
			const response = await RequestService.getDeptRequests(deptId)
			commit("SET_REQUESTS", response.data.requests)
			commit("SET_LOADING", false);
			console.log('RESPONSE for getDeptRequests: ', response.data.requests)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_REQUESTS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	async getRequest({ commit }, requestId) {
		commit("SET_LOADING", true);
		try {
			const response = await RequestService.getRequest(requestId);
			commit("SET_REQUEST", response.data.data);
			commit("SET_LOADING", false);
			console.log("GET ONE RESPONSE: ", response.data)
			console.log("New State", state)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_REQUEST", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async getByStatus({ commit }, status) {
		commit("SET_LOADING", true);
		try {
			const response = await RequestService.getByStatus(status);
			commit("SET_REQUEST", response.data.request);
			commit("SET_LOADING", false);
			console.log("GET ONE RESPONSE: ", response.data)
			console.log("New State", state.request)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_REQUEST", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async createRequest({ commit }, request) {
		commit("SET_LOADING", true);
		try {
			const response = await RequestService.createRequest(request);
			commit("SET_REQUEST", response.data.request);
			commit("SET_LOADING", false);
			console.log('POST RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_REQUESTS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async addReview({ commit }, requestId, review) {
		commit("SET_LOADING", true);
		try {
			const response = await RequestService.addReview(requestId, review);
			commit("SET_REQUEST", response.data.request);
			commit("SET_LOADING", false);
			console.log("REVIEW: ", response.data.request)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_REQUEST", null);
			commit("SET_ERROR", getError(err));			
		}	
	},

	async deleteRequest({ commit }, requestId) {
		commit("SET_LOADING", true)
		try {
			const response = await RequestService.deleteRequest(requestId);
			commit("SET_REQUESTS", response.data);
			commit("SET_LOADING", false);
			console.log('DELETE RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_REQUESTS", null);
			commit("SET_ERROR", getError(err));			
		}
	},

	async updateRequest({ commit }, requestId, newRequest) {
		commit("SET_LOADING", true);
		try {
			console.log('newRequest from Request store: ', newRequest)
			const response = await RequestService.updateRequest(requestId, newRequest);
			commit("SET_REQUEST", response.data);
			commit("SET_LOADING", false);
			console.log('UPDATE RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_REQUESTS", null);
			commit("SET_ERROR", getError(err));			
		}		
	},

	paginateUsers({ commit }, link) {
		commit("SET_LOADING", true);
		RequestService.paginateUsers(link)
			.then((response) => {
					setPaginatedUsers(commit, response);
			})
			.catch((error) => {
					commit("SET_LOADING", false);
					commit("SET_ERROR", getError(error));
			});
	},
};

export const getters = {
	requests: (state) => {
			return state.requests;
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