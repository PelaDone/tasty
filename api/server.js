import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { recipeRouter } from './routes/recipes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { env } from './config/env.js';

const app = express();

// CORS configuration
const corsOptions = {
  origin: env.server.nodeEnv === 'production'
    ? env.server.frontendUrl
    : ['https://localhost:5173', 'https://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/recipes', recipeRouter);

// Error handling
app.use(errorHandler);

// Start server
app.listen(env.server.port, () => {
  console.log(`Server running on port ${env.server.port} in ${env.server.nodeEnv} mode`);
});