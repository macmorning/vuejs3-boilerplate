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
	/**
	 * Count +1
	 *
	 * @param   {object}  commit
	 *
	 * @return  {null}
	 */
	countUp ({ commit }) {
		commit("COUNT_UP")
		console.log("countUp", state.count)
	},
	/**
	 * Set the count to a specific count
	 *
	 * @param   {object}  commit
	 * @param   {object}  dispatch
	 * @param   {object}  payload
	 *
	 * @return  {null}
	 */
	customCount ({ commit, dispatch }, payload) {
		commit("COUNT_SET", payload)
		console.log("customCount", state.count)
	},
}

export const namespaced = true
