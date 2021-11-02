import ContactUs from "./ContactUs";
import Homepage from "./Homepage";

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
];
export default routesPage;
