import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {createRoot} from "react-dom/client";



const container = document.getElementById("root");
const root = createRoot(container!);
const router = createBrowserRouter([{
    path: "/",
    element: <div>Hello</div>
}])

root.render(<RouterProvider router={router}></RouterProvider>)