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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/man_tejzmh.png",
    userFirstName: "Jhon",
    userLastName: "Doe",
    isTrending: true,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/hacker_e1vg0u.png",
    userFirstName: "Robert",
    userLastName: "Wang",
    isTrending: false,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/programmer_qht6f1.png",
    userFirstName: "Phunsuk",
    userLastName: "Wangdoo",
    isTrending: true,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/man_1_ezefji.png",
    userFirstName: "Elongated",
    userLastName: "Musket",
    isTrending: true,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/man_tejzmh.png",
    userFirstName: "Jhon",
    userLastName: "Doe",
    isTrending: false,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/woman1Avatar_c8wems.png",
    userFirstName: "jane",
    userLastName: "Doe",
    isTrending: true,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/user_heo4gj.png",
    userFirstName: "Mary",
    userLastName: "Jane",
    isTrending: false,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/man_tejzmh.png",
    userFirstName: "Jhon",
    userLastName: "Doe",
    isTrending: false,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/hacker_e1vg0u.png",
    userFirstName: "Robert",
    userLastName: "Wang",
    isTrending: true,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/programmer_qht6f1.png",
    userFirstName: "Phunsuk",
    userLastName: "Wangdoo",
    isTrending: true,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/man_1_ezefji.png",
    userFirstName: "Elongated",
    userLastName: "Musket",
    isTrending: true,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/man_tejzmh.png",
    userFirstName: "Jhon",
    userLastName: "Doe",
    isTrending: false,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/woman1Avatar_c8wems.png",
    userFirstName: "jane",
    userLastName: "Doe",
    isTrending: false,
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
    displayImage: "https://res.cloudinary.com/sameep1/image/upload/v1654805501/project_socialMedia/user_heo4gj.png",
    userFirstName: "Mary",
    userLastName: "Jane",
    isTrending: true,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
