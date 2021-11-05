import ContactUs from "./pages/contact-us/ContactUs";
import Homepage from "./pages/homepage/Homepage";
import Tables from "./pages/Table";
import ToDo from "./pages/ToDo";
import ToDoUseState from "./pages/ToDoUseState";

const routesPage = [
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
    name: "table",
    address: "/table",
    component: Tables,
  },
  {
    name: "todo",
    address: "/todo",
    component: ToDo,
  },
  {
    name: "todo",
    address: "/todofunction",
    component: ToDoUseState,
  },
];
export default routesPage;
