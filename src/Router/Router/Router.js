import DashboardLayout from "../../layout/DashboardLayout";
import ProdcutCollection from "../../Pages/Collection/ProdcutCollection";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Home/Home/Home");
const { default: Main } = require("../../layout/Main/Main");

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/category')
            },
            {
                path:'/collection/:id',
                element:<PrivateRoute><ProdcutCollection></ProdcutCollection></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/collection/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    }
])

export default router