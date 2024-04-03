
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, /*Route*/ } from "react-router-dom";

import "./index.css";
import Historie from "./Routes/Historie.jsx";

import CreatProduct from "./Routes/CreatProduct.jsx";
import Product from "./Routes/Products.jsx";
import Consupition from "./Routes/Consunpition.jsx";


const router = createBrowserRouter([{
    element: <App/>,
    children:[
        {
            path:"/",
            element:<CreatProduct/>,
        },
        {
            path: "/Products",
            element: <Product/>
        },

       {
            path: "/Historie",
            element: <Historie/>,
        },

        {
            path: "/Consumo",
            element: <Consupition/>,
        }

    ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

