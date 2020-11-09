import express from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const errorHandler = (
  err: express.ErrorRequestHandler,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  if (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }

  next();
};

export default errorHandler;
