<template>
	<hello-world />
</template>

<script>
	import HelloWorld from '../components/HelloWorld.vue'

	export default {
		name: 'Home',
		layout: 'stylesheet',

		components: {
			HelloWorld
		},

		created () {
			this.$store.dispatch('count/countUp')
		}
	}
</script>
