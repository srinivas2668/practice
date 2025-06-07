import { Link, NavLink, useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Root() {
  const data = useLoaderData();
  const { contacts } = data;
  console.log(contacts, "contactssfd");

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          id="sidebar"
          className="w-72 h-full bg-white border-r p-6 shadow-sm space-y-6 flex flex-col" /* Add flex flex-col here */
        >
          <h1 className="text-2xl font-bold text-gray-800">
            React Router Contacts
          </h1>

          {/* Search + New Contact */}
          <div className="space-y-4">
            <form id="search-form" role="search" className="flex">
              <input
                id="q"
                name="q"
                type="search"
                placeholder="Search contacts"
                aria-label="Search contacts"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700"
              >
                Go
              </button>
            </form>

            <form method="post">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-1.5 rounded-md hover:bg-green-700"
              >
                New
              </button>
            </form>
          </div>

          {/* Navigation List */}
          {/* Make this div flex-grow to push the last item to the bottom */}
          <nav className="flex-1 overflow-auto"> {/* Use nav for semantic correctness and flex-1 for growth */}
            <ul className="space-y-2"> {/* Remove justify-between and h-full from ul */}
              {contacts?.map((ele) => (
                <li key={ele?.id}> {/* Add a key for React lists */}
                  <NavLink
                    to={`contacts/${ele?.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active bg-green-200 block px-3 py-2 rounded text-gray-700"
                        : "block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                    }
                  >
                    {ele?.first} {ele?.last}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* The "App page" link will now naturally go to the bottom because the nav above it takes up all available space */}
          <div> {/* This div will contain the bottom link */}
            <ul>
              <li>
                <Link
                  to="/index"
                  className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                >
                  App page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Detail Panel */}
        <div id="detail" className="flex-1 p-6 bg-gray-50">
          {/* Detail content will be rendered here */}

          <Outlet />
        </div>
      </div>
    </>
  );
}