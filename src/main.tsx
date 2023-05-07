import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Sample from "./routes/Sammple";
import Callback from "./routes/Callback";
import Main from "./routes/main";
import { RecoilRoot } from "recoil";
import Problem, { ProblemID } from "./routes/Problem";
import ParentsPage from "@/routes/ParentsPage/";
import { SEO as SEO_TEXT } from "@/constants/text.json";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import ShareLayout from "./components/ui/template/ShareLayout";

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
  {
    path: "/share",
    element: <ShareLayout />,
  },
  {
    path: "/parents",
    element: <ParentsPage.Layout />,
    children: [
      {
        path: "",
        element: <ParentsPage.Home />,
      },
      {
        path: "intro",
        element: <ParentsPage.Intro />,
      },
      {
        path: "store",
        element: <ParentsPage.Store />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetProvider context={{}}>
        <SEO title={SEO_TEXT.MAIN.TITLE} />
        <RouterProvider router={router} />
      </HelmetProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
