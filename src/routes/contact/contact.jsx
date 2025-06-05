import { Form, useLoaderData } from "react-router-dom";


export default function objData() {
  const data=useLoaderData();
  const {objData}=data;
  return (
    <div
      id="objData"
      className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md flex gap-6 items-start"
    >
      <div>
        <img
          key={objData.avatar}
          src={
            objData.avatar ||
            `https://robohash.org/${objData.id}.png?size=200x200`
          }
          alt="Avatar"
          className="w-40 h-40 object-cover rounded-full border-4 border-gray-200"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          {objData.first || objData.last ? (
            <>
              {objData.first} {objData.last}
            </>
          ) : (
            <i className="text-gray-500">No Name</i>
          )}
          <Favorite favorite={objData.favorite} />
        </h1>

        {objData.twitter && (
          <p className="mt-2 text-blue-500">
            <a
              target="_blank"
              href={`https://x.com/${objData.twitter}`}
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @{objData.twitter}
            </a>
          </p>
        )}

        {objData.notes && <p className="mt-4 text-gray-700">{objData.notes}</p>}

        <div className="mt-6 flex gap-4">
          <Form action="edit">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Edit
            </button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Delete
            </button>
          </Form>
        </div>
      </div>
      <div>
          {/* other code */}
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
    </div>
  );
}

function Favorite({ favorite }) {
  return (
    <button
      name="favorite"
      value={favorite ? "false" : "true"}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      className="text-2xl focus:outline-none"
    >
      {favorite ? "★" : "☆"}
    </button>
  );
}
