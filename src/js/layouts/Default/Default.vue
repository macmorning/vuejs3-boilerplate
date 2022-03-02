<template>
	<navigation />
	<router-view />
</template>

<script>
	import Navigation from '../../components/Navigation/Navigation.vue'

	export default {
		name: 'DefaultLayout',

		components: {
			Navigation
		}
	}
</script>
