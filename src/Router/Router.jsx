import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Abouts from "../pages/Abouts";
import Profile from "../pages/Profile";
import Singin from "../pages/Singin";
import SingUp from "../pages/SingUp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:'/',
            element:<Home/> ,
        },
        {
            path:'/about',
            element:<Abouts/>,
        },
        {
            path:'/profile',
            element:<Profile/> ,
        },
        {
            path:'/singin',
            element:<Singin/> ,
        },
        {
            path:'/singup',
            element:<SingUp/>,
        },

    ]
  },
]);
