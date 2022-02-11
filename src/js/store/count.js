// state
export const state = {
	count: 0
}

// getters
export const getters = {
	count: state => state.count
}

// mutations
export const mutations = {
	["COUNT_UP"] (state) {
		state.count += 1
	},
	["COUNT_SET"] (state, { count }) {
		state.count = count
	},
}

// actions
export const actions = {
	countUp ({ commit }) {
		commit("COUNT_UP")
		console.log("countUp", state.count)
	},
	customCount ({ commit, dispatch }, payload) {
		commit("COUNT_SET", payload)
		console.log("customCount", state.count)
	},
}

export const namespaced = true
