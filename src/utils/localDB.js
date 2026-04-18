const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readlist");
  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addReadListToLocalDB = (book) => {
  const allBooks = getAllReadListFromLocalDB();
  const bookExists = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!bookExists) {
    allBooks.push(book);
    localStorage.setItem("readlist", JSON.stringify(allBooks));
  }
};

const getAllWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishlist");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};

const addWishListToLocalDB = (book) => {
  const allBooks = getAllWishListFromLocalDB();
  const bookExists = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!bookExists) {
    allBooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(allBooks));
  }
};

export {
  getAllReadListFromLocalDB,
  addReadListToLocalDB,
  getAllWishListFromLocalDB,
  addWishListToLocalDB,
};
