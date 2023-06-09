import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Callback from "./routes/Callback";
import Main from "./routes/main";
import { RecoilRoot } from "recoil";
import Problem, { ProblemID } from "./routes/Problem";
import ParentsPage from "@/routes/ParentsPage/";
import { SEO as SEO_TEXT } from "@/constants/text.json";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import ShareLayout from "./components/ui/template/ShareLayout";
import Soon from "./routes/Soon";
import Score from "./routes/Score";
import ParentSelectPage from "./routes/ParentSelectPage";
import ErrorPages from "./routes/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: ":id/:parents",
        element: <ParentsPage.Home />,
      },
      {
        path: "intro",
        element: <ParentsPage.Intro />,
      },
      {
        path: "report",
        element: <ParentsPage.Report />,
      },
      {
        path: "store",
        element: <ParentsPage.Store />,
      },
      {
        path: "prepare",
        element: <ParentsPage.Prepare />,
      },
    ],
  },
  {
    path: "/soon",
    element: <Soon />,
  },
  {
    path: "/score",
    element: <Score />,
  },
  {
    path: "/selectparents",
    element: <ParentSelectPage />,
  },
  {
    path: "*",
    element: <ErrorPages />,
  },
  {
    path: "/error/*",
    element: <ErrorPages />,
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
