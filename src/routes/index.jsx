import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NewsPage from "../pages/news/NewsPage";
import DetailNewsPage from "../pages/news/DetailNewsPage";
import PageNotFound from "../exceptions/PageNotFound";
import CreateNewsPage from "../pages/news/CreateNewsPage";
import NewsPageUser from "../pages/news/NewsPageUser";
import UpdateNewsPage from "../pages/news/UpdateNewsPage";
import ApartmentPage from "../pages/apartments/ApartmentsPage";
import DetailApartment from "../pages/apartments/DetailApartment";
import CreateApartment from "../pages/apartments/CreateApartment";
import UpdateApartment from "../pages/apartments/UpdateApartment";
import BlogPage from "../pages/blogs/BlogPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "news",
        children: [
          { index: true, element: <NewsPageUser /> },
          { path: "admin", element: <NewsPage /> },
          { path: ":id", element: <DetailNewsPage /> },
          {
            path: "admin/:id/edit",
            element: <UpdateNewsPage />,
          },
          {
            path: "create",
            element: <CreateNewsPage />,
          },
        ],
      },
      {
        path: "apartments",
        children: [
          { index: true, element: <ApartmentPage /> },
          { path: ":id", element: <DetailApartment /> },
          { path: ":id/edit", element: <UpdateApartment /> },
          { path: "create", element: <CreateApartment /> },
        ],
      },
      {
        path: "blogs",
        children: [{ index: true, element: <BlogPage /> }],
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
