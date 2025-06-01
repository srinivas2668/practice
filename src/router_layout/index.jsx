import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import ErrorPage from "../error-page";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage id={1}/>,
  },
  {
    path: "/index",
    element: <App />,
    loader: async () => {
      const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    },
    errorElement: <ErrorPage id={2}/>,
  },
]);
export default router;
