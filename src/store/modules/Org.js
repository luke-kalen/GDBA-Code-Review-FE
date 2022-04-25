// import router from "@/router";
import { getError } from "@/utils/helpers";
import OrgService from "@/services/OrgService";


export const namespaced = true;
export const state = {
	organization: null,
	organizations: [],
	loading: false,
	error: null
};

export const mutations = {
	SET_ORG(state, organization) {
		state.organization = organization;
	},
	SET_ORGS(state, organizations) {
			state.organizations = organizations;
	},
	SET_LOADING(state, loading) {
			state.loading = loading;
	},
	SET_ERROR(state, error) {
			state.error = error;
	},
};

export const actions = {

	async showOrgs({ commit }) {
		commit("SET_LOADING", true);
		try {
				const response = await OrgService.showOrgs();
				commit("SET_ORGS", response.data.data);
				commit("SET_LOADING", false);
				console.log('GET ALL RESPONSE: ', response.data.data)
				console.log('Org State: ', this.state)
				return response.data.data;
		} catch (err) {
				commit("SET_LOADING", false);
				commit("SET_ORGS", null);
				commit("SET_ERROR", getError(err));
		}
	},

	async getOrg({ commit }, orgId) {
		commit("SET_LOADING", true);
		try {
			const response = await OrgService.getOrg(orgId);
			commit("SET_ORG", response.data);
			commit("SET_LOADING", false);
			console.log("Get THIS Org: ", response.data)
			console.log("New State", state.organization)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_ORG", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async addOrg({ commit }, org) {
		commit("SET_LOADING", true);
		try {
			const response = await OrgService.addOrg(org);
			commit("SET_ORGS", response.data.organizations);
			commit("SET_LOADING", false);
			console.log('POST RESPONSE: ', response)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_ORGS", null);
			commit("SET_ERROR", getError(err));
		}
	},

	async deleteOrg({ commit }, orgId) {
		commit("SET_LOADING", true)
		try {
			const response = await OrgService.deleteOrg(orgId);
			commit("SET_ORGS", response.data.organizations);
			commit("SET_LOADING", false);
			console.log('DELETE RESPONSE: ', response)
			await OrgService.showOrgs()
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_ORGS", null);
			commit("SET_ERROR", getError(err));			
		}
	},

	async updateOrg({ commit }, orgId, newOrg) {
		commit("SET_LOADING", true);
		try {
			console.log('nbewOrg from Org store: ', newOrg)
			const response = await OrgService.updateOrg(orgId, newOrg);
			commit("SET_ORG", response.data.organization);
			commit("SET_LOADING", false);
			console.log('UPDATE RESPONSE: ', response.data.organization)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_ORGS", null);
			commit("SET_ERROR", getError(err));			
		}		
	}
}


export const getters = {
	organization: (state) => {
		return state.organization
	},
	organizations: (state) => {
		return state.organizations
	},
	loading: (state) => {
		return state.loading;
	},
	error: (state) => {
		return state.error;
	},
	oneOrg: (state) => {
		return state.oneOrg;
	}
}