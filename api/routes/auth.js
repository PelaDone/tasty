import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const authRouter = express.Router();

// In-memory user storage
const users = new Map();

authRouter.post('/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (users.has(email)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = crypto.randomUUID();
    users.set(email, {
      id: userId,
      email,
      password: hashedPassword
    });

    const token = jwt.sign({ userId, email }, 'your-secret-key', { expiresIn: '1h' });
    res.status(201).json({
      user: { id: userId, email },
      token
    });
  } catch (error) {
    next(error);
  }
});

authRouter.post('/signin', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = users.get(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id, email }, 'your-secret-key', { expiresIn: '1h' });
    res.json({
      user: { id: user.id, email: user.email },
      token
    });
  } catch (error) {
    next(error);
  }
});