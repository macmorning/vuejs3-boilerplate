<template>
	<div class="wrapper">
		<transition name="page" mode="out-in">
			<component :is="layout" v-if="layout" />
		</transition>
	</div>
</template>

<script>
	// Load layout components dynamically.
	const requireContext = import.meta.globEager('../layouts/*.vue')

	const layouts = Object.getOwnPropertyNames(requireContext)
		.map(file =>
			[file.replace(/(^..\/layouts\/)|(\.vue$)/g, ''), requireContext[file]]
		)
		.reduce((components, [name, component]) => {
			components[name] = component.default || component
			return components
		}, {})
	console.log(layouts)

	export default {
		el: '.wrapper',

		data: () => ({
			layout: null,
			defaultLayout: 'Default'
		}),

		metaInfo () {
			return {
				title: title,
				titleTemplate: `%s · Title`
			}
		},

		// TODO: Move this function to  the beforeEach in
		// the router.
		created() {
			this.setLayout()
		},

		methods: {
			/**
			 * Set the application layout.
			 *
			 * @param {String} layout
			 */
			setLayout (layout) {
				if (!layout || !layouts[layout]) {
					layout = this.defaultLayout
				}

				this.layout = layouts[layout]
			}
		}
	}
</script>
