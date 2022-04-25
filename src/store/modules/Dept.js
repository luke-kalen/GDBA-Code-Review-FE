// import router from "@/router";
import { getError } from "@/utils/helpers";
import DeptService from "@/services/DeptService";


export const namespaced = true;
export const state = {
	oneDept: null,
	departments: null,
	loading: false,
	error: null
};

export const mutations = {
	SET_DEPT(state, oneDept) {
		state.oneDept = oneDept;
	},
	ADD_DEPT(state, department) {
		state.departments.push(department)
	},
	SET_DEPTS(state, departments) {
			state.departments = departments;
	},
	SET_LOADING(state, loading) {
			state.loading = loading;
	},
	SET_ERROR(state, error) {
			state.error = error;
	},
};

export const actions = {
	async showDepts({ commit }) {
		commit("SET_LOADING", true);
		try {
			const response = await DeptService.showDepts();
			commit("SET_DEPTS", response.data.data);
			commit("SET_LOADING", false);
			console.log('RESPONSE.DATA.DEPT: ', response.data)
			return response.data.data;
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_DEPTS", null);
			commit("SET_ERROR", getError(error));
		}
	},

	async getDept({ commit }, deptId) {
		commit("SET_LOADING", true);
		try {
			const response = await DeptService.getDept(deptId);
			commit("SET_DEPT", response.data.department);
			commit("SET_LOADING", false);
			console.log("RESPONSE>DATA: -- ", response.data.department)
			console.log("New State", state.oneDept)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_DEPT", null);
			commit("SET_ERROR", getError(err));
		}
	},
	async addDept({ commit }, dept) {
		commit("SET_LOADING", true);
		try {
			const response = await DeptService.addDept(dept);
			commit("SET_LOADING", false);
			console.log('RESPONSE.DATA.DEPT: ', response.data.departments)
		} catch (error) {
			commit("SET_LOADING", false);
			commit("SET_ERROR", getError(error));
		}
	},

	async deleteDept({ commit }, deptId) {
		commit("SET_LOADING", true)
		try {
			const response = await DeptService.deleteDept(deptId);
			commit("SET_DEPTS", response.data.departments);
			commit("SET_LOADING", false);
			console.log('DELETE RESPONSE: ', response.data.departments)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_DEPTS", null);
			commit("SET_ERROR", getError(err));			
		}
	},

	async updateDept({ commit }, deptId, newDept) {
		commit("SET_LOADING", true);
		try {
			const response = await DeptService.updateDept(deptId, newDept);
			commit("SET_DEPT", response.data.department);
			commit("SET_LOADING", false);
			console.log('UPDATE RESPONSE: ', response.data.department)
		} catch (err) {
			commit("SET_LOADING", false);
			commit("SET_DEPTS", null);
			commit("SET_ERROR", getError(err));			
		}		
	}
}


export const getters = {
	departments: (state) => {
		return state.departments
	},
	loading: (state) => {
		return state.loading;
	},
	error: (state) => {
		return state.error;
	},
	oneDept: (state) => {
		return state.oneDept;
	}
}