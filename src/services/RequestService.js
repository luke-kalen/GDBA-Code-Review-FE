import * as API from "@/services/API";

export default {
	getRequest(requestId) {
		return API.apiClient.get(`/requests/${requestId}`);
	},
	getByStatus(status) {
		return API.apiClient.get(`/requests/?status=${status}`);
	},
	getRequests() {
		console.log("Request made it to the Service")
		return API.apiClient.get(`/requests`);
	},
	getOrgRequests(orgId) {
		return API.apiClient.get(`/organizations/requests/${orgId}`)
	},
	getDeptRequests(deptId) {
		return API.apiClient.get(`/departments/requests/${deptId}`)
	},
	createRequest(request) {
		return API.apiClient.post('/requests', request)
	},
	createDates(request) {
		return API.apiClient.post('/requests/dates', request)
	},
	createReviews(request) {
		return API.apiClient.post('/reviews', request)
	},
	deleteRequest(requestId) {
		return API.apiClient.delete(`/requests/${requestId}`)
	},
	updateRequest(newRequest) {
		console.log('newRequest from RequestService: ', newRequest)
		return API.apiClient.put(`/requests/${newRequest.id}`, newRequest)
	},
	addReview(review) {
		console.log('addReview from RequestService: ', review)
		return API.apiClient.put(`/requests/${review.id}`, review)
	}
};