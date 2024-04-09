
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, /*Route*/ } from "react-router-dom";

import "./index.css";
import CreatProduct1 from "./Routes/CreatProduct.jsx";
import Product from "./Routes/Products.jsx";
import Historie1 from "./Routes/Historie.jsx";
import Consumption from "./Routes/Consunpition.jsx";











const router = createBrowserRouter([{
    element: <App/>,
    children:[
        {
            path:"/creatProduct",
            element:<CreatProduct1/>,
        },
        {
            path: "/",
            element: <Product/>
        },

       {
            path: "/Historie/:id",
            element: <Historie1/>,
        },

        {
            path: "/Consumo/:id",
            element: <Consumption/>,
        }

    ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

