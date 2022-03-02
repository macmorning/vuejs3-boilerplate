import { createStore } from 'vuex'

const modules = resolveStore(
	import.meta.globEager('../store/*.js')
)

export const store = createStore({
	modules: modules
})

/**
 * Resolve the middleware
 *
 * @param   {Object}  files
 *
 * @return  {Array}
 */
function resolveStore(files) {
	return Object.keys(files).map(file => [file.replace(/(.+)\/([^\/]+)\/|(^.\/)|(\.js$)/g, ''), files[file]])
		.reduce((modules, [name, module]) => {
			return { ...modules, [name]: module }
		}, {})
}
