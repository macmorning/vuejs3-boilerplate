import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

const routes = resolveRoutes(
	import.meta.globEager('./routes/*.js')
)

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
 * Resolve the route files
 *
 * @param   {Object}  files
 *
 * @return  {Array}
 */
function resolveRoutes(files) {
	let list = []

	Object.keys(files).map(file =>
		list.push(...files[file].default)
	)

	return list
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
	// TODO: Look for the components (to.matched),
	// and resolve the guards we wanna execute before
	// visiting this page.

	window.App.setLayout(to.meta.layout)

	next()
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
