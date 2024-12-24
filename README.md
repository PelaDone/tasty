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
  - Supabase (Database & Authentication)
  - Node.js
  - Express

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
   
   Create a `.env` file in the root directory with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**
   
   The database schema is automatically set up through Supabase migrations. Make sure you have:
   - Connected your project to Supabase
   - Run the migrations in the `supabase/migrations` folder

5. **Start the development server**
   ```bash
   npm run dev
   ```

   This will start both the Vite development server and the Express backend.

## Project Structure 📁

```
simply-tasty/
├── api/                    # Backend API
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Express middleware
│   ├── routes/            # API routes
│   └── services/          # Business logic
├── src/
│   ├── components/        # React components
│   ├── contexts/          # React contexts
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── types/            # TypeScript types
└── supabase/
    └── migrations/        # Database migrations
```

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Authentication 🔑

The application uses Supabase Authentication with email/password sign-in. Users need to be authenticated to:
- Create new recipes
- Like recipes
- Save recipes to their collection

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.