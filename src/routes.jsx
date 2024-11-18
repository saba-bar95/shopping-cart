import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import Main from "./Components/Main";

const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Main />
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
