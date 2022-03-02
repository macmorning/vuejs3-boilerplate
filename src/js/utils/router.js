import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { getGuards, callGuards } from './guards'

// the routes
const routes = resolveRoutes(
	import.meta.globEager('../routes/*.js')
)

// the router instance
export const router = createRouterInstance()

/**
 * Create a new router instance
 *
 * @param   {Object}  config
 *
 * @return  {Router}
 */
function createRouterInstance() {
	let instance

	instance = createRouter({
		history: createWebHistory(),
		routes
	})

	instance.beforeEach(beforeEach)
	instance.afterEach(afterEach)

	return instance
}

/**
 * The beforeEach function for each route
 *
 * @param   {Object}  to
 * @param   {Object}  from
 * @param   {void}  next
 *
 * @return  {void}
 */
 async function beforeEach (to, from, next) {
	let components = []

	try {
		// Get the matched components and resolve them.
		components = await resolveComponents(
			to.matched
		)
	} catch (error) {
		if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
			window.location.reload(true)
			return
		}
	}

	if (components.length === 0) {
		return next()
	}

	const routeGuards = getGuards(components)

	callGuards(routeGuards, to, from, (...args) => {
		// Set the application layout only if "next()" was called with no args.
		if (args.length === 0) {
			window.App.setLayout(to.matched[0].components.default['layout'] || '')
		}

		next(...args)
	})
}

/**
 * The afterEach function for each route
 *
 * @param   {Object}  to
 * @param   {Object}  from
 *
 * @return  {void}
 */
async function afterEach (to, from) {
	await nextTick()
}

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
 function resolveComponents (components) {
	return Promise.all(components.map(component => {
		return typeof component === 'function' ? component() : component
	}))
}

/**
 * Resolve the route files
 *
 * @param   {Object}  files
 *
 * @return  {Array}
 */
function resolveRoutes(files) {
	let list = []

	Object.keys(files).map(file => [file.replace(/(^.\/)|(\.js$)/g, ''), files[file].default])
		.reduce((routes, [name, router]) => {
			list.push(...router)
		}, {})

	return list
}
