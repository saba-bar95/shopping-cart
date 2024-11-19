const addItems = (arr, newItem, quantity) => {
  const existingItemIndex = arr.findIndex((item) => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    arr[existingItemIndex].quantity += quantity;
  } else {
    newItem.quantity = quantity;
    arr.push(newItem);
  }
};

export default addItems;
