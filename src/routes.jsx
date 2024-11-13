import ScrollToTop from "./ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";

const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/page/:pageNumber",
        element: <Shop />,
      },
      { path: "/shop/item/:id", element: <ItemDetails /> },
    ],
  },
];

export default routes;
