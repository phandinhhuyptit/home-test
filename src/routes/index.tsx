import type { RouteObject } from "react-router-dom";
import { Layout } from "@layout/index";
import { NoMatch } from "@components/index";
import { Detail } from "@pages/index";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:id",
        element: <Detail />,
      },
      { path: "*", element: <NoMatch /> },
    ],
    
  },
];
export default routes;
