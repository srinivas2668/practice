import { Form, useLoaderData } from "react-router-dom";

const Edit = () => {
  const data = useLoaderData();
  const { contact } = data;
  console.log(contact, "contact");
  return (
    <Form
      method="post"
      id="contact-form"
      className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg space-y-6"
    >
      {/* Name Section - CORRECTED */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <span className="font-semibold text-gray-700">Name</span>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            defaultValue={contact?.first}
            className="flex-1 w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <input
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            defaultValue={contact?.last}
            className="flex-1 w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
      </div>

      {/* Twitter Label */}
      <label className="block">
        <span className="font-semibold text-gray-700 block mb-1">Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </label>

      {/* Avatar URL Label */}
      <label className="block">
        <span className="font-semibold text-gray-700 block mb-1">
          Avatar URL
        </span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </label>

      {/* Notes Label */}
      <label className="block">
        <span className="font-semibold text-gray-700 block mb-1">Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-y"
        />
      </label>

      <button
        name="favorite" // The name attribute will be sent as part of the form data
        value={contact?.favorite ? "false" : "true"} // Toggle the value
        aria-label={contact?.favorite ? "Remove from favorites" : "Add to favorites"}
        className={`
          px-4 py-2 rounded-md font-medium
          focus:outline-none focus:ring-2 focus:ring-offset-2
          transition duration-200 ease-in-out
          ${
            contact?.favorite
              ? "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400"
          }
        `}
      >
        {contact?.favorite ? "★ Favorite" : "☆ Favorite"}
      </button>
      <div className="flex gap-3">
        <div className=" flex gap-2 items-center">
            <div className="w-4 h-4 border border-yellow-600 bg-yellow-500 rounded-full"></div><span>Favorite</span>
        </div>
        <div className=" flex gap-2 items-center">
            <div className="w-4 h-4 border border-gray-300 bg-gray-200 rounded-full"></div><span>UnFavorite</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Save
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
};
export default Edit;
