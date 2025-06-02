import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import App from "../App";
import Root, { loader as loaderRoot } from "../routes/root";
import Contact, { loader as contactLoader } from "../routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loaderRoot,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader, // ✅ This must be present
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
