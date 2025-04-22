interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
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

export function getUserById(
  id: number,
  callback: (err?: string, user?: User) => void
) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`User not found whith id ${id}`);
  }

  return callback(undefined, user);
}
