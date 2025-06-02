import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {

  const data = useLoaderData();
  const {contacts}=data;
  console.log(contacts,'datadata')

  return (
    <>
      <div className="flex h-screen">
      {/* Sidebar */}
      <div id="sidebar" className="w-72 bg-white border-r p-6 shadow-sm space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">React Router Contacts</h1>

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
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to={`contacts/1`}
                className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
              >
                Your Name
              </Link>
            </li>
            <li>
              <Link
                to={`contacts/2`}
                className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
              >
                Your Friend
              </Link>
            </li>
            <li>
                <Link
                to="/index"
                className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
              >
                App page
              </Link>
            </li>
          </ul>
        </nav>
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
