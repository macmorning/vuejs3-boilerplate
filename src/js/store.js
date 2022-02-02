import { createStore } from 'vuex'

const modules = resolveStore(
	require.context('./store/', false, /.*\.js$/)
)

export const store = createStore({
	modules: modules
})

function resolveStore(requireContext) {
	return requireContext.keys().map(file =>
		[file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
	)
	.reduce((list, [name, guard]) => (
		{ ...list, [name]: guard }
	), {})
}
