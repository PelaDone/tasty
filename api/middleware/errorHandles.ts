import { AppError } from '../utils/errorHandler';

export const errorHandler = (err: any, req: any, res: any, next: any) => {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // Handle Supabase errors
  if (err.code && err.details && err.hint) {
    return res.status(400).json({
      status: 'error',
      message: err.message,
      details: err.details,
    });
  }

  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};