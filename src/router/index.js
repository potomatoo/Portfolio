import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import WebProject from '../views/WebProject.vue';
import BigData from '../views/BigData.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/webProject',
		name: 'WebProject',
		component: WebProject
	},
	{
		path: '/bigData',
		name: 'BigData',
		component: BigData
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	}
});

export default router;
