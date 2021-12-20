<template>
	<ul>
		<li>
			<router-link :to="{ name: 'home' }">
				Home
			</router-link>
		</li>
		<li>
			<router-link :to="{ name: 'test' }">
				Test
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'Navigation',
	}
</script>
