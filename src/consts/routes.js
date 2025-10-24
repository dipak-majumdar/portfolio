
/**
 * @type {import("../../types/Routes").Routes}
 */
const routes = {
    "/": {
        name: "home",
        element: "Home",
        path: "/",
        translationKey: "header.home"
    },
    "/projects": {
        name: "projects", 
        element: "Projects",
        path: "/projects",
        translationKey: "header.projects"
    },
    "/about-me": {
        name: "about",
        element: "About", 
        path: "/about-me",
        translationKey: "header.about"
    },
    "/404": {
        name: "404",
        element: "PageNotFound",
        path: "/404",
        translationKey: "404"
    }
};

// Helper function to get route by path
export const getRouteByPath = (path) => {
    return routes[path] || routes["/404"];
};

// Helper function to get all navigation routes (excluding 404)
export const getNavigationRoutes = () => {
    return Object.values(routes).filter(route => route.path !== "/404");
};

// Helper function to get route by name
export const getRouteByName = (name) => {
    return Object.values(routes).find(route => route.name === name);
};

export default routes;