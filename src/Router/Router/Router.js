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
                element:<Home></Home>
            }
        ]
    }
])

export default router