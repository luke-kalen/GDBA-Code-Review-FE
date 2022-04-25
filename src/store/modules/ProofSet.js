import { getError } from "@/utils/helpers";
import ProofSetService from "@/services/ProofSetService";
// import OrgService from "@/services/OrgService";

export const namespaced = true;

// function setPaginatedUsers(commit, response) {
// 	commit("SET_USERS", response.data.data);
// 	commit("SET_META", response.data.meta);
// 	commit("SET_LINKS", response.data.links);
// 	commit("SET_LOADING", false);
// }

export const state = {
	proofSet: null,
	proofSets: [],
	meta: null,		
	links: null,
	loading: false,
	error: null,
};

export const mutations = {
	SET_PROOFSETS(state, proofSets) {
		state.proofSets = proofSets;
	},
	SET_PROOFSET(state, proofSet) {
		state.proofSet = proofSet;
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
	async getProofSets({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofSetService.getProofSets();
			commit("SET_PROOFSETS", response.data.data)
			commit("SET_LOADING", false);
			console.log('RESPONSE.DATA.PROOFSETS: ', response.data.data)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_PROOFSETS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	async deleteProofSet({ commit }, proofSetId) {
		commit("SET_LOADING", true)
		try {
			const response = await ProofSetService.deleteProofSet(proofSetId);
			commit("SET_PROOFSETS", response.data.proofSets);
			commit("SET_LOADING", false);
			console.log('DELETE RESPONSE: ', response.data.proofSets)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFSETS", null);
			commit("SET_ERROR", getError(err));			
		}
	},

	// async getPROOFSETUsers({ commit }, orgId) {
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

	async getProofSet({ commit }, proofSetId) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofSetService.getProofSet(proofSetId);
			console.log("Is it getting here??? ", response)
			commit("SET_PROOFSET", response.data);
			commit("SET_LOADING", false);
			console.log("Get THIS PROOFSETs", response)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFSETS", null);
			commit("SET_ERROR", getError(err));
		}
	},
	async getProjectProofSets({ commit }, projectId) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofSetService.getProjectProofSets(projectId);
			console.log("Is it getting here??? ", response)
			commit("SET_PROOFSETS", response.data);
			commit("SET_LOADING", false);
			console.log('Get Project ProofSets: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFSETS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async addProofSet({ commit }, proofSet) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofSetService.addProofSet(proofSet);
			commit("SET_PROOFSETS", response.data);
			commit("SET_LOADING", false);
			console.log('POST RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFSETS", null);
			commit("SET_ERROR", getError(err));
		}
	},
	
	async updateProofSet({ commit }, proofSetId, newProofSet) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofSetService.addProofSet(proofSetId, newProofSet);
			commit("SET_PROOFSETS", response.data.proofSet);
			commit("SET_LOADING", false);
			console.log('POST RESPONSE: ', response.data.proofSet)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFSETS", null);
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
	proofSet: (state) => {
		return state.proofSet
	},
	proofSets: (state) => {
			return state.proofSets;
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