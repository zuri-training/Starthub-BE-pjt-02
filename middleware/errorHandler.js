class ErrorPayload extends Error {
  /**
   * Create custom error...
   * @param {*} message Error message for request response
   * @param {number} statusCode HTTP status code. Default is 400
   */
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode || 400;
  }
}

const notFound = (req, res, next) => {
  const message = `Resourse not found -> can not ${req.method} request to ${req.originalUrl}`;
  const error = new ErrorPayload(message, 404);
  next(error);
};

// some possible errors that will occur
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  if (err.name === 'CastError') {
    error = new ErrorPayload('Resourse not - found', 400);
  }

  if (err.code === 11000) {
    const field = err.message.split(':')[3].replace(' { ', ''); // convert errors to an array
    const message = `Duplicate field: ${field.toUpperCase()} value entered`;
    error = new ErrorPayload(message, 400);
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors)
      .map((error) => error.message)
      .join(', ');
    error = new ErrorPayload(message, 400);
  }

  if (err.name === 'TokenExpiredError') {
    error = new ErrorPayload('Unauthorized access: Token  expired', 401);
  }

  console.log(err);

  res.status(error.statusCode || 500);
  res.json({
    message:
      error.message || err.message || 'Something went wrong with the server',
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};

module.exports = { notFound, errorHandler };
