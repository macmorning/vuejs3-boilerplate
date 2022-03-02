import { store } from '../utils/store'

export default async (to, from, next) => {
	if (!store.getters['auth/check']) {
		next({ name: 'login' })
	} else {
		next()
	}
}
