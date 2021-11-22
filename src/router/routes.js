import Home from '/src/pages/Home.vue'
import Test from '/src/pages/Test.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
	{
        path: '/test',
        name: 'test',
        component: Test,
    },
]

export default routes;