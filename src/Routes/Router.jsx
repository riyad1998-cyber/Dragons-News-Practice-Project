import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Pages/Home";
import categoryNews from "../Components/Pages/categoryNews";


const router = createBrowserRouter([
  {
    path: "/",
    Component : HomeLayout,
    children : [
        {
            path : "",
            Component : Home,
        },
        {
            path : "/category/:id",
            Component : categoryNews,
            loader : () => fetch("/news.json")
        },
    ]
  },
  {
    path: "/auth",
    element: <h1>Authentication Layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/*",
    element: <h1>Erro 404</h1>,
  },
]);

export default router ;