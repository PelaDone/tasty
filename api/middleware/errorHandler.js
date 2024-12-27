export const errorHandler = (err, req, res, next) => {
  console.error('Error:', {
    message: err.message,
    stack: env.server.nodeEnv === 'development' ? err.stack : undefined,
    path: req.path,
    method: req.method,
  });
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.errors,
    });
  }

  if (err.name === 'PostgrestError') {
    return res.status(400).json({
      error: 'Database Error',
      message: err.message,
    });
  }
  
  res.status(500).json({
    error: 'Internal Server Error',
    message: env.server.nodeEnv === 'development' ? err.message : 'An unexpected error occurred',
  });
};