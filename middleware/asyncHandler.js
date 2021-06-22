/**
 * middleware for handling exceptions inside of an async function
 * @param {function} function e.g-> asyncHandler(async(req, res, next) => {
 * --------
 * })
 */
const asyncHandler = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next).catch(next));

module.exports = asyncHandler;
