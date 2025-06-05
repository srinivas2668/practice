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
  {
    id: "3",
    first: "Alice",
    last: "Johnson",
    twitter: "alice_j",
    notes: "Loves painting and jazz music.",
    avatar: "https://robohash.org/alice.png?size=200x200",
    favorite: true,
  },
  {
    id: "4",
    first: "Bob",
    last: "Williams",
    twitter: "bobbyw",
    notes: "Fan of sci-fi movies and robotics.",
    avatar: "https://robohash.org/bob.png?size=200x200",
    favorite: false,
  },
];

export const sendAllData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      contacts ? resolve(contacts) : reject("Data not Found");
    }, 2000);
  });
};

export const sendDataWRTId = (id) => {
  return new Promise((resolve, reject) => {
    let obj = null;
    setTimeout(() => {
      obj = contacts.find((ele) => {
        return ele.id == id && ele;
      });
      obj ? resolve(obj) : reject("Data Not Found");
    }, 2000);
  });
};
