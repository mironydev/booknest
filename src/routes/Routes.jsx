import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorpage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import PagesToRead from "../pages/pagestoread/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/pages-to-read",
        Component: PagesToRead,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
