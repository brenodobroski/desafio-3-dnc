import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./views/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Delete from "./views/Delete/Delete";
import EditName from "./views/EditName/EditName";
import New from "./views/New/New";
import EditStatus from "./views/EditStatus/EditStatus";
import { TASKS_MOCK } from "./mocks/tasks.mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={TASKS_MOCK} />,
  },
  {
    path: "/delete",
    element: <Delete data={TASKS_MOCK} />,
  },
  {
    path: "/editname",
    element: <EditName data={TASKS_MOCK} />,
  },
  {
    path: "/new",
    element: <New data={TASKS_MOCK} />,
  },
  {
    path: "/editstatus",
    element: <EditStatus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
