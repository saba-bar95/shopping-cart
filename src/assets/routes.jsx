import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ScrollToTop from "./ScrollToTop";

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
    path: "/cart",
    element: (
      <>
        <ScrollToTop />
        <Cart />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
];

export default routes;
