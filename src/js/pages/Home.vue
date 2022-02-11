<template>
	<hello-world />
</template>

<script>
	import HelloWorld from '../components/HelloWorld.vue'

	export default {
		name: 'Home',
		layout: 'stylesheet',
		guards: ['test'],

		components: {
			HelloWorld
		},

		created () {
			this.$store.dispatch('count/countUp')
		}
	}
</script>
