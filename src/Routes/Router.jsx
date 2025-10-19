import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Pages/Home";
import categoryNews from "../Components/Pages/categoryNews";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetail from "../Components/Pages/NewsDetail";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Pages/Loading";



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
            loader : () => fetch("/news.json"),
            hydrateFallbackElement: Loading,
        },
    ]
  },
  {
    path: "/auth",
    Component : AuthLayout ,
    children : [
      {
        path : "/auth/login",
        Component : Login,
      },
      {
        path : "/auth/register",
        Component : Register,
      },
    ]
  },
  {
    path: "/news-detail/:id",
    element : <PrivateRoute>
      <NewsDetail></NewsDetail>
    </PrivateRoute>,
    loader : ()=> fetch ("/news.json"),
    hydrateFallbackElement: Loading,
  },
  {
    path: "/*",
    element: <h1>Erro 404</h1>,
  },
]);

export default router ;