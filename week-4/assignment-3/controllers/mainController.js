import dotenv from "dotenv";
import { AppError } from "../util/appError.js";
import userMoodel from "../models/userModel.js";

dotenv.config();

//
// function catchAsync(callback) {
//   return (req, res, next) => {
//     callback(req, res, next).catch(next);
//   };
// }

async function signIn(req, res, next) {
  try {
    const data = req.body;

    const row = await userMoodel.getOneUser(data);
    console.log(row);

    if (!row.length) {
      return next(
        new AppError("email or password is wrong, please enter again!", 404)
      );
    }

    res.status(201).json({
      status: "success",
      data: row,
    });
  } catch (error) {
    next(error);
  }
}

async function signUp(req, res, next) {
  try {
    const data = req.body;

    await userMoodel.createUser(data);

    res.status(201).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    if (error.errno === 1062) {
      return next(new AppError("Duplicate email! Please sign-up again", 400));
    }
    next(error);
  }
}

export default { signIn, signUp };
