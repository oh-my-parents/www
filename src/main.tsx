import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Sample from "./routes/Sammple";
import Callback from "./routes/Callback";
import Main from "./routes/main";
import { RecoilRoot } from "recoil";
import Problem, { ProblemID } from "./routes/Problem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path: "/oauth",
    element: <Callback />,
  },
  {
    path: "/problem/*",
    element: <Problem />,
    children: [
      {
        path: ":id",
        element: <ProblemID />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
