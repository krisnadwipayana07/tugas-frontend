import AboutApp from "./pages/about/app/AboutApp";
import AbouteAuthor from "./pages/about/author/AbouteAuthor";
import ContactUs from "./pages/contact-us/ContactUs";
import Form from "./pages/form/Form";
import Homepage from "./pages/homepage/Homepage";
import Tables from "./pages/table/Table";
import ToDo from "./pages/todo/ToDo";
import ToDoUseState from "./pages/todo/ToDoUseState";

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
  {
    name: "Form",
    address: "/form",
    component: Form,
  },
];
export default routesPage;
