import { getError } from "@/utils/helpers";
import ProofService from "@/services/ProofService";
// import OrgService from "@/services/OrgService";

export const namespaced = true;

// function setPaginatedUsers(commit, response) {
// 	commit("SET_USERS", response.data.data);
// 	commit("SET_META", response.data.meta);
// 	commit("SET_LINKS", response.data.links);
// 	commit("SET_LOADING", false);
// }

export const state = {
	proof: null,
	proofs: [],
	meta: null,		
	links: null,
	loading: false,
	error: null,
};

export const mutations = {
	SET_PROOFS(state, proofs) {
		state.proofs = proofs;
	},
	SET_PROOF(state, proof) {
		state.proof = proof;
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
	async getProofs({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofService.getProofs();
			commit("SET_PROOFS", response.data.data)
			commit("SET_LOADING", false);
			console.log('RESPONSE.DATA.PROOFS: ', response.data.data)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_PROOFS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	async deleteProof({ commit }, proofId) {
		commit("SET_LOADING", true)
		try {
			const response = await ProofService.deleteProof(proofId);
			commit("SET_PROOFS", response.data);
			commit("SET_LOADING", false);
			console.log('DELETE RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFS", null);
			commit("SET_ERROR", getError(err));			
		}
	},

	// async getPROOFSetUsers({ commit }, orgId) {
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

	async getProof({ commit }, proofId) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofService.getProof(proofId);
			console.log("Is it getting here??? ", response)
			commit("SET_PROOF", response.data);
			commit("SET_LOADING", false);
			console.log("Get THIS PROOF", response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async getImage({ commit }, proofId) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofService.getImage(proofId);
			console.log('Image', response)
		} catch(err) {
			commit("SET_LOADING", false);
			commit("SET_ERROR", getError(err));
		}
	},

	async getProofsFromSet({ commit }, proofId) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofService.getProofsFromSet(proofId);
			commit("SET_PROOFS", response.data);
			commit("SET_LOADING", false);
			console.log('Get Set Proofs: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async addProof({ commit }, proof) {
		commit("SET_LOADING", true);
		try {
			const response = await ProofService.addProof(proof);
			commit("SET_PROOFS", response.data);
			commit("SET_LOADING", false);
			console.log('POST RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_PROOFS", null);
			commit("SET_ERROR", getError(err));
		}
	},
	
	// async updateSet({ commit }, proofId, newProof) {
	// 	commit("SET_LOADING", true);
	// 	try {
	// 		const response = await ProofService.updateSet(proofId, newProof);
	// 		commit("SET_PROOFS", response.data.PROOFSet);
	// 		commit("SET_LOADING", false);
	// 		console.log('POST RESPONSE: ', response.data.PROOFSet)
	// 	} catch (err) {
	// 		commit("SET_LOADING", false);
	// 		commit("SET_PROOFS", null);
	// 		commit("SET_ERROR", getError(err));
	// 	}
	// },

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
	set: (state) => {
		return state.set
	},
	proofs: (state) => {
			return state.proofs;
	},
	proof: (state) => {
			return state.proof;
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