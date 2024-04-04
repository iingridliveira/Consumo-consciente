
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, /*Route*/ } from "react-router-dom";

import "./index.css";






import CreatProduct from "./routes/CreatProduct";
import Product from "./routes/Products.jsx";
import Consumption from "./routes/Consunpition";
import Historie1 from "./routes/Historie.jsx";



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
            element: <Historie1/>,
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

