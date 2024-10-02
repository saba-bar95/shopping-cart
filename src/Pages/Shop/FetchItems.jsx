const FetchItems = () => {
  return fetch("https://api.escuelajs.co/api/v1/categories/1/products").then(
    (res) => res.json()
  );
};

export default FetchItems;
