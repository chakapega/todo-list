import express from 'express';

const errorCatcher = (fn: (req: express.Request, res: express.Response) => Promise<void>) => async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    await fn(req, res);
  } catch (error) {
    next(error);
  }
};

export default errorCatcher;
