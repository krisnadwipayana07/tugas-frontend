import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import Tables from "./pages/Table";
import ToDo from "./pages/ToDo";

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
];
export default routesPage;
