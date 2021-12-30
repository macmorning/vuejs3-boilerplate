<template>
	<div class="wrapper">
		<navigation />

		<router-view />
	</div>
</template>

<script>
	import Navigation from '../components/Navigation.vue'

	export default {
		name: 'DefaultLayout',

		components: {
			Navigation
		}
	}
</script>
