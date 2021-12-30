<template>
	Example
</template>

<script>
	export default {
		name: 'Example',

		created () {
			// Force change a layout
			// TODO: Make router.beforeEach get and set the layout
			this.$root.setLayout('Example')
		},
	}
</script>
