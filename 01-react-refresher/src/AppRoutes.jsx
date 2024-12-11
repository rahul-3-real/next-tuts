import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import CreatePost, { action as CreatePostAction } from "./pages/CreatePost";

const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/create-post",
          element: <CreatePost />,
          action: CreatePostAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRoutes;
