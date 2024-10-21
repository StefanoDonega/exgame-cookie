import { User, User as UserModel } from "../../api-types";
import DB from "./db";

// const DB: User[] = [];

const userSchema = new DB.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  created_at: String,
  updated_at: String,
  role: String,
});

const UserModel = DB.model("user", userSchema);

export const index = async () => {
  return UserModel.find({});
};

// export const getUsersByRole = (role: Role) => {
//   return DB.filter((el) => el.role === role);
// };

// export const view = (id: string) => {
//   return DB.find((el) => el._id === id);
// };

export const add = async (user: User) => {
  const UserData = new UserModel(user);
  return UserData.save();
};

// export const edit = (teacher: User) => {
//   const document = DB.find((el) => el._id === teacher._id);

//   if (!document) {
//     throw new Error(`Can't find teacher by id: ${teacher._id}`);
//   }

//   const updateDocument = { ...document, ...teacher };

//   DB.find((el, i) => {
//     if (el._id === updateDocument._id) {
//       DB[i] = updateDocument;
//     }
//   });
// };

// export const remove = (id: string) => {
//   DB.forEach((el, i) => {
//     if (el._id === id) {
//       DB.splice(i, 1);
//     }
//   });
// };