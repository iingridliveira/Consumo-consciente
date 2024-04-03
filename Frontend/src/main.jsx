
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, /*Route*/ } from "react-router-dom";

import "./index.css";





import Historie from "./routes/Historie.jsx";
import CreatProduct from "./routes/CreatProduct.jsx";
import Product from "./routes/Products.jsx";
import Consumption from "./routes/Consunpition.jsx";


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
            element: <Consumption/>,
        }

    ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

