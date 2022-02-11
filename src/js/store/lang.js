// state
export const state = {
	lang: 0
}

// getters
export const getters = {
	lang: state => state.lang
}

// mutations
export const mutations = {
	["SET_LANGUAGE"] (state, { lang }) {
		state.lang = lang
	},
}

// actions
export const actions = {
	setLanguage ({ commit, dispatch }, payload) {
		commit("SET_LANGUAGE", payload)
	},
}

export const namespaced = true