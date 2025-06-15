import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NewsPage from "../pages/news/NewsPage";
import DetailNewsPage from "../pages/news/DetailNewsPage";
import PageNotFound from "../exceptions/PageNotFound";
import CreateNewsPage from "../pages/news/CreateNewsPage";
import NewsPageUser from "../pages/news/NewsPageUser";
import UpdateNewsPage from "../pages/news/UpdateNewsPage";

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
          {path: ":id", element: <DetailNewsPage />},
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
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
