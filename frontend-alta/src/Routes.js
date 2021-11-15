import AboutApp from "./pages/about/app/AboutApp";
import AbouteAuthor from "./pages/about/author/AbouteAuthor";
import ContactUs from "./pages/contact-us/ContactUs";
import Form from "./pages/form/Form";
import Homepage from "./pages/homepage/Homepage";
import News from "./pages/news/News";
import Tables from "./pages/table/Table";
import ToDo from "./pages/todo/ToDo";
import ToDoUseState from "./pages/todo/ToDoUseState";

const routesPage = [
  // {
  //   name: "Home",
  //   address: "/",
  //   component: ToDoUseState,
  // },
  // {
  //   name: "Todo Class",
  //   address: "/todoClass",
  //   component: ToDo,
  // },
  {
    name: "homepage",
    address: "/",
    component: Homepage,
  },
  {
    name: "contact us",
    address: "/contactus",
    component: ContactUs,
  },
  {
    name: "news",
    address: "/news",
    component: News,
  },
  // {
  //   name: "table",
  //   address: "/table",
  //   component: Tables,
  // },
  // {
  //   name: "About The App",
  //   address: "/about/about-app",
  //   component: AboutApp,
  // },
  // {
  //   name: "About The Authors",
  //   address: "/about/about-author",
  //   component: AbouteAuthor,
  // },
  // {
  //   name: "Form",
  //   address: "/form",
  //   component: Form,
  // },
];
export default routesPage;
