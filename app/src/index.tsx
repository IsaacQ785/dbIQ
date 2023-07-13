import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {createRoot} from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
const router = createBrowserRouter([{
    path: "/",
    element: <App/>
}])

root.render(<RouterProvider router={router}></RouterProvider>)