export class AppError extends Error {
    constructor(
      public statusCode: number,
      message: string
    ) {
      super(message);
      this.name = 'AppError';
    }
  }
  
  export const catchAsync = (fn: Function) => {
    return (req: any, res: any, next: any) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };