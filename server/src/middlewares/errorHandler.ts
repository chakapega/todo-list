import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const errorHandler = (err, req, res, next): void => {
  if (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }

  next();
};

export default errorHandler;
