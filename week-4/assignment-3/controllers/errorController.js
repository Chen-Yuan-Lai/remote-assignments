import { AppError } from "../util/appError.js";

function handleDuplicateFieldsDB(err) {
  const message = "Duplicate email! Please sign-up again";
  return new AppError(message, 400);
}

export function globalErrorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";

  let error = Object.assign(err);

  if (err.errno === 1062) error = handleDuplicateFieldsDB(err);

  res.status(error.statusCode).json({
    status: error.status,
    data: error.message,
  });
}
