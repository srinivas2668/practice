import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage({id}) {
  const error = useRouteError();
  console.log(error, "errormessage");
  
  {
    /* 
    error => {
      data:"Error: No route matches URL \"/contacts/1\""
      error:Error: No route matches URL "/contacts/1" at getInternalRouterError (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=a12fdb2a:4868:5) at handleNavigational404 (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=a12fdb2a:2833:17) at startNavigation (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=a12fdb2a:1734:47) at Object.navigate (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=a12fdb2a:1672:11) at http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=a12fdb2a:5762:23 at http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=a12fdb2a:9485:9 at handleClick (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=a12fdb2a:9258:9) at executeDispatch (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=a12fdb2a:11734:11) at runWithFiberInDEV (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=a12fdb2a:1483:72) at processDispatchQueue (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=a12fdb2a:11770:37)
      internal:true
      status:404
      statusText:"Not Found"
      }
    */
  }

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4"
    >
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops! {id}</h1>
      <p className="text-lg text-gray-700 mb-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-gray-500 italic">
        {`status => ${error?.statusText} message => ${error?.message}`}
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
