import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

export class Router
{
	/**
	 * The constructor
	 */
	constructor(app, config)
	{
		this.app = app
		
		this.resolveRoutes(
			import.meta.globEager('./routes/*.js')
		)
		this.createRouterInstance(config)

		return this.router
	}

	/**
	 * Create a new router instance
	 *
	 * @param   {Object}  config
	 *
	 * @return  {Router}
	 */
	createRouterInstance(config)
	{
		let routes = this.routes

		this.router = createRouter({
			history: createWebHistory(),
			routes
		})

		this.router.beforeEach((to, from, next) => this.beforeEach(to, from, next))
		this.router.afterEach((to, from) => this.afterEach(to, from))

		return this.router
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
	async beforeEach (to, from, next) {
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
	async afterEach (to, from) {
		await nextTick()
	}

	/**
	 * Resolve the route files
	 *
	 * @param   {Object}  files
	 *
	 * @return  {Array}
	 */
	resolveRoutes(files)
	{
		this.routes = this.routes ?? []
		
		for (var key in files) {
			if (files.hasOwnProperty(key)) {
				this.routes.push(...files[key].default)
			}
		}

		return this.routes	
	}

	/**
	 * Return the router instance
	 *
	 * @return  {Router}
	 */
	getRouterInstance()
	{
		return this.router
	}
}
