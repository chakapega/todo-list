const errorCatcher = (fn) => async (req, res, next) => {
  try {
    return await fn(req, res, next);
  } catch (error) {
    return next(error);
  }
};

export default errorCatcher;
