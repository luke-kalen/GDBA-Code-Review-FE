import { getError } from "@/utils/helpers";
import UserService from "@/services/UserService";
// import OrgService from "@/services/OrgService";

export const namespaced = true;

function setPaginatedUsers(commit, response) {
	commit("SET_USERS", response.data.data);
	commit("SET_USER", response.data.data);
	commit("SET_USER", response.data.data);
	commit("SET_META", response.data.meta);
	commit("SET_LINKS", response.data.links);
	commit("SET_LOADING", false);
}

export const state = {
	user: null,
	proof: null,
	proofs: [],
	lead: null,
	hr: null,
	users: [],
	meta: null,		
	links: null,
	loading: false,
	error: null,
};

export const mutations = {
	SET_USER(state, user) {
			state.user = user;
	},
	SET_PROOFS(state, proofs) {
		state.proofs = proofs;
	},
	SET_PROOF(state, proof) {
		state.proof = proof;
	},
	SET_LEAD(state, lead) {
		state.lead = lead
	},
	SET_HR(state, hr) {
		state.hr = hr
	},
	SET_USERS(state, users) {
		state.users = users;
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
	async getUsers({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.getUsers();
			commit("SET_USERS", response.data.data)
			commit("SET_LOADING", false);
			console.log('Get Users: ', response.data)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(error));
		}
	},
	async getStaff({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.getStaff();
			commit("SET_USERS", response.data)
			commit("SET_LOADING", false);
			console.log('Get Staff: ', response.data)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(error));
		}
	},
	async getClients({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.getClients();
			commit("SET_USERS", response.data)
			commit("SET_LOADING", false);
			console.log('Get Clients: ', response.data)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	async getOrgUsers({ commit }, orgId) {
		commit("SET_LOADING", true);
		try {
			// const org = await OrgService.getOrg(orgId);
			const response = await UserService.getOrgUsers(orgId)
			commit("SET_USERS", response.data)
			commit("SET_LOADING", false);
			console.log('RESPONSE for getOrgUsers: ', response.data)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	async getDeptUsers({ commit }, deptId) {
		commit("SET_LOADING", true);
		try {
			// const org = await OrgService.getOrg(deptId);
			const response = await UserService.getDeptUsers(deptId)
			commit("SET_USERS", response.data.users)
			commit("SET_LOADING", false);
			console.log('RESPONSE for getDeptUsers: ', response.data.users)		
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	async getUser({ commit }, userId) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.getUser(userId);
			commit("SET_USER", response.data.data);
			commit("SET_LOADING", false);
			console.log("GET USER FROM STORE: ", response.data.data)
			console.log("New State", state.oneuser)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async getLead({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.getLead();
			commit("SET_LEAD", response.data.users)
			commit("SET_LOADING", false)
			console.log("GET LEAD from Service: ", response.data.users)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_LEAD", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async getHR({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.getHR();
			commit("SET_HR", response.data.users)
			commit("SET_LOADING", false)
			console.log("GET HR from Service: ", response.data.users)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_HR", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async addUser({ commit }, user) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.addUser(user);
			commit("SET_USERS", response.data);
			commit("SET_LOADING", false);
			console.log('POST RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async deleteUser({ commit }, userId) {
		commit("SET_LOADING", true)
		try {
			const response = await UserService.deleteUser(userId);
			commit("SET_USERS", response.data.users);
			commit("SET_LOADING", false);
			console.log('DELETE RESPONSE: ', response.data)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(err));			
		}
	},

	async updateUser({ commit }, newUser) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.updateUser(newUser);
			console.log('newUser from User store: ', newUser)
			commit("SET_USER", response);
			commit("SET_LOADING", false);
			console.log('UPDATE RESPONSE: ', response)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_USERS", null);
			commit("SET_ERROR", getError(err));			
		}		
	},

	async getProofs({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await UserService.getProofs();
			console.log('RESPONSE.DATA.PROOFS: ', response.data.proofs)		
			commit("SET_PROOFS", response.data.proofs)
			commit("SET_LOADING", false);
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_PROOFS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	paginateUsers({ commit }, link) {
		commit("SET_LOADING", true);
		UserService.paginateUsers(link)
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
	user: (state) => {
		return state.user
	},
	users: (state) => {
			return state.users;
	},
	hr: (state) => {
		return state.hr
	},
	lead: (state) => {
		return state.lead
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