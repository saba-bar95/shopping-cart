import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
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
    path: "/shop",
    element: (
      <>
        <ScrollToTop />
        <Shop />
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
