const contacts = [
  {
    id: "1",
    first: "John",
    last: "Doe",
    twitter: "johndoe",
    notes: "Likes cats and coffee.",
    avatar: "https://robohash.org/john.png?size=200x200",
    favorite: true,
  },
  {
    id: "2",
    first: "Jane",
    last: "Smith",
    twitter: "janesmith",
    notes: "Enjoys long walks and React.",
    avatar: "https://robohash.org/jane.png?size=200x200",
    favorite: false,
  },
];

// ✅ get all contacts
export const getContacts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      contacts ? resolve(contacts) : reject("file not found!");
    }, 1000);
  });
};

// ✅ get single contact by id
export const getContact = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const contact = contacts.find((c) => c.id === id);
      contact ? resolve(contact) : reject("Not found");
    }, 500);
  });
};
