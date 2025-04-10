import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";
import WorksPage from "../pages/WorksPage";

export const routeConfig = [
    {
        name: "Homepage",
        path: "/",
        component: <HomePage/>
    },
    {
        name: "Works",
        path: "/works",
        component: <WorksPage />
    },
    {
        name: "Store",
        path: "/store",
        component: <StorePage />
    },
    {
        name: "About",
        path: "/about",
        component: <AboutPage />
    },
    {
        name: "Blog",
        path: "/blog",
        component: <BlogPage />
    }
]