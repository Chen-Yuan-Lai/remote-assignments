class AppError extends Error {
  constructor(message, status) {
    super(message);

    this.statusCode = status;
    this.status = "fail";

    // for some customize errors
    this.isUserDefine = true;

    // preserve the error add into err.stack
    Error.captureStackTrace(this, this.constructor);
  }
}

export { AppError };
