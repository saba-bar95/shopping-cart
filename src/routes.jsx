import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ScrollToTop from "./ScrollToTop";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";

const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <ScrollToTop />
        <Shop />
      </>
    ),
  },
  {
    path: "/shop/item/:id",
    element: (
      <>
        <ScrollToTop />
        <ItemDetails />
      </>
    ),
  },
];

export default routes;
