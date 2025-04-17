const users = [
  {
    id: 1,
    name: "Argiro",
    email: "elto.82@gmail.com",
  },
  {
    id: 2,
    name: "Javier",
    email: "Javier.82@gmail.com",
  },
  {
    id: 3,
    name: "Andres",
    email: "Andres.82@gmail.com",
  },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => {
    return user.id === id;
  });
  if (!user) {
    return callback(`User not found whith id ${id}`);
  }

  return callback(null, user);
};

module.exports = { getUserById };
