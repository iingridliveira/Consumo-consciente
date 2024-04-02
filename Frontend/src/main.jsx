
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./index.css";
/*import Historie from "./Routes/Historie.jsx";*/

import Sobre from "./Routes/Sobre.jsx";
import Product from "./Routes/Products.jsx";


const router = createBrowserRouter([{
    element: <App/>,
    children:[
        {
            path:"/",
            element:<Sobre/>,
        },
        {
            path: "/Products",
            element: <Product/>
        },

       /* {
            path: "/Historie",
            element: <Historie/>,
        },*/

    ],
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

