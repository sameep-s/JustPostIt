import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Sameep",
    lastName: "Sharma",
    username: "sameep@gmail.com",
    password: "p123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
