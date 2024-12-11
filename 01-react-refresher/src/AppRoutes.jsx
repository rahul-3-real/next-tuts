import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";
import Home, { loader as PostsLoader } from "./pages/Home";
import CreatePost, { action as CreatePostAction } from "./pages/CreatePost";
import DetailPost, { loader as DetailPostLoader } from "./pages/DetailPost";

const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home />, loader: PostsLoader },
        {
          path: "/create-post",
          element: <CreatePost />,
          action: CreatePostAction,
        },
        { path: "/:id", element: <DetailPost />, loader: DetailPostLoader },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRoutes;
