import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Sample from './routes/sample'
import Root from './routes/root'

const router = createBrowserRouter([
  {
    path: "/root",
    element: <Root />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider 
    router={router}/>
  </React.StrictMode>
);