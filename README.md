# Simply Tasty 🍳

A modern recipe sharing platform built with React, TypeScript, and Supabase. Share your favorite recipes with the community and discover new culinary inspirations.

## Features ✨

- 🔐 User authentication
- 📝 Create and share recipes
- 🖼️ Image upload support
- 🎨 Beautiful, responsive UI
- ⚡ Real-time updates
- 🌟 Like and save recipes

## Tech Stack 🛠️

- **Frontend:**
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS
  - Framer Motion
  - Lucide Icons

- **Backend:**
  - Node.js
  - Express
  - Supabase (Database & Authentication)

## Prerequisites 📋

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v8 or higher)

## Getting Started 🚀

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd simply-tasty
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory using `.env.example` as a template:
   ```bash
   cp .env.example .env
   ```
   
   Update the following variables in `.env`:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Database Setup**
   
   The database schema is automatically set up through Supabase migrations. Make sure you have:
   - Connected your project to Supabase
   - Run the migrations in the `supabase/migrations` folder

5. **Start the Development Servers**

   The project uses two development servers:
   - Vite for the frontend (default port: 5173)
   - Express for the backend API (default port: 3000)

   Start both servers with:
   ```bash
   npm run dev
   ```

   This command uses `concurrently` to run both servers simultaneously.

## Project Structure 📁

```
simply-tasty/
├── api/                    # Backend API
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── utils/            # Utility functions
├── src/                   # Frontend
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── services/        # API services
│   └── types/           # TypeScript types
└── supabase/             # Database
    └── migrations/       # Database migrations
```

## Available Scripts 📜

- `npm run dev` - Start both frontend and backend development servers
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Endpoints 🛣️

The backend API runs on `http://localhost:3000/api` and provides the following endpoints:

### Recipes
- `GET /recipes` - Get all recipes
- `GET /recipes/:id` - Get a specific recipe
- `POST /recipes` - Create a new recipe
- `PUT /recipes/:id` - Update a recipe
- `DELETE /recipes/:id` - Delete a recipe

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.