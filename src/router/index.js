import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home/',
		component: Home,
	},
	{
		path: '/about/',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/team/',
		name: 'Team',
		component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
	},
	{
		path: '/gallery/',
		name: 'Gallery',
		component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue'),
	},
	{
		path: '/sponsors/',
		name: 'Sponsors',
		component: () => import(/* webpackChunkName: "sponsors" */ '../views/Sponsors.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
