import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AuthLayout from "./layout/AuthLayout";
import Regiester from "./pages/Register/Regiester";
import Login from "./pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[{
        path: "/home",
        element: <Home/>,
    },{
        path: "/cart",
        element: <Cart/>,

    }

]
  },
  {
    path: "/auth",
    element: <AuthLayout/>,
    children:[{
        path: "register",
        element: <Regiester/>,
    },
    {
        path: "login",
        element: <Login/>,

    }

]
  },
]);

export default router;