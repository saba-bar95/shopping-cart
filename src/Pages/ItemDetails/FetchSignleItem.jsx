const FetchSingleItem = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
};

export default FetchSingleItem;
