import Navbar from "../../Components/Navbar/Navbar";
import FetchItems from "./FetchItems";
import { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await FetchItems();
      setItems(result);
    };

    fetch();
  }, []);

  console.log(items);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Shop;
