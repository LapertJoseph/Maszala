// app Routes
import NotFound from "../components/notfound";
import FormRegister from "../components/register";
import Login from "../components/login";
import MiniDrawer from "../components/ui/overview";
import About from "../components/about";
import Home from "../components/home";
import Logout from "../component/logout";

// routes

const routes = [
  {
    path: "*",
    component: NotFound,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/register",
    component: FormRegister,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/home",
    component: MiniDrawer,
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
