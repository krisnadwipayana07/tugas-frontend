import AboutApp from "./pages/AboutApp";
import AbouteAuthor from "./pages/AbouteAuthor";
import ContactUs from "./pages/contact-us/ContactUs";
import Homepage from "./pages/homepage/Homepage";
import Tables from "./pages/Table";
import ToDo from "./pages/ToDo";
import ToDoUseState from "./pages/ToDoUseState";

const routesPage = [
  {
    name: "Home",
    address: "/",
    component: ToDo,
  },
  {
    name: "Todo Function",
    address: "/todofunction",
    component: ToDoUseState,
  },
  {
    name: "homepage",
    address: "/homepage",
    component: Homepage,
  },
  {
    name: "contact us",
    address: "/contactus",
    component: ContactUs,
  },
  {
    name: "table",
    address: "/table",
    component: Tables,
  },
  {
    name: "About The App",
    address: "/about/about-app",
    component: AboutApp,
  },
  {
    name: "About The Authors",
    address: "/about/about-author",
    component: AbouteAuthor,
  },
];
export default routesPage;
