import { useLoaderData, Form } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
  const contact = await getContact(params.contactId); // must use params
  return { contact };
}

export default function Contact() {
  const { contact } = useLoaderData(); // ✅ must use this to get data from loader

  return (
    <div
      id="contact"
      className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md flex gap-6 items-start"
    >
      <div>
        <img
          key={contact.avatar}
          src={
            contact.avatar ||
            `https://robohash.org/${contact.id}.png?size=200x200`
          }
          alt="Avatar"
          className="w-40 h-40 object-cover rounded-full border-4 border-gray-200"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i className="text-gray-500">No Name</i>
          )}
          <Favorite favorite={contact.favorite} />
        </h1>

        {contact.twitter && (
          <p className="mt-2 text-blue-500">
            <a
              target="_blank"
              href={`https://x.com/${contact.twitter}`}
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @{contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p className="mt-4 text-gray-700">{contact.notes}</p>}

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
