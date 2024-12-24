import { body } from 'express-validator';

export const validateRecipe = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('imageUrl').trim().isURL().withMessage('Valid image URL is required'),
  body('cookingTime').isInt({ min: 1 }).withMessage('Valid cooking time is required'),
  body('difficulty').isIn(['Easy', 'Medium', 'Hard']).withMessage('Valid difficulty level is required'),
  body('ingredients').isArray().withMessage('Ingredients must be an array'),
  body('instructions').isArray().withMessage('Instructions must be an array'),
  body('author').isObject().withMessage('Author information is required'),
  body('author.name').trim().notEmpty().withMessage('Author name is required'),
  body('author.avatar').trim().isURL().withMessage('Valid author avatar URL is required'),
];