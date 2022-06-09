import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "React is love.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jhondoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Redux is so awesome and it sucks!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mrrobotwang",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Knowledge k peecho bhaago!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "wangdoer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Next i am going to buy coca-cola and put cocaine back in.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tothemoon",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Ambigious !",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jhondoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Netflix and Chill !!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "janedoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Spider-man is awesome",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "watson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },





  {
    _id: uuid(),
    content: "Come Outside.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jhondoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "I am not a hacker.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mrrobotwang",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Jhakk maar k soo jaao!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "wangdoer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Full Support",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tothemoon",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Nobody knows me.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jhondoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Pizza is love.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "janedoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "i love New-York.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "watson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
