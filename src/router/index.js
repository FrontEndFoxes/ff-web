import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home/",
        component: Home,
        meta: { title: "Front-end Foxes" }
    },
    {
        path: "/about/",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: { title: "About" }
    },
    {
        path: "/team/",
        name: "Team",
        component: () =>
            import(/* webpackChunkName: "team" */ "../views/Team.vue"),
        meta: { title: "Team" }
    },
    {
        path: "/gallery/",
        name: "Gallery",
        component: () =>
            import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue"),
        meta: { title: "Gallery" }
    },
    {
        path: "/sponsors/",
        name: "Sponsors",
        component: () =>
            import(/* webpackChunkName: "sponsors" */ "../views/Sponsors.vue"),
        meta: { title: "Sponsors" }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
        meta: { title: "Not Found" }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
