import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import App from "../App";
import Root from "../routes/root/root";
import Edit from "../routes/edit/Edit";
import Contact from "../routes/contact/contact";
import {loader as rootLoader} from "../routes/root/root.loading";
import {loader as dataLoader } from "../routes/contact/contact.loading";
import { loader as editLoader } from "../routes/edit/Edit.loader";
import { action as rootAction } from "../routes/root/root.action";
import Dummy from "../utils/Dummy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader:rootLoader,
    action:rootAction,
    children: [
      {
        index:true,
        element:<Dummy/>
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader:dataLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <Edit />,
        loader:editLoader,
      },
    ],
  },
  {
    path: "/index",
    element: <App />,
    loader: async () => {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    },
    children: [
      {
        path: "contacts/:contactId", // ✅ no leading slash
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage id={2} />,
  },
]);

export default router;
