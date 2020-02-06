import Posts from "../components/Posts";
import Albums from "../components/Albums";
import Todos from "../components/Todos";
import Users from "../components/Users";
import Photos from "../components/Photos";

const routes = [
    {
        path: "/",
        component: Users,
        exact: true
    },
    {
        path: "/posts",
        component: Posts
    },
    {
        path: "/albums",
        component: Albums
    },
    {
        path: "/todos",
        component: Todos
    },
    {
        path: "/photos",
        component: Photos
    }
];

export default routes;