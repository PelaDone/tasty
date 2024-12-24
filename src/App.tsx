import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { CreateRecipe } from './pages/CreateRecipe';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          
          <Routes>
            <Route path="/" element={
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                  Popular Recipes
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Recipe cards will be populated from Supabase */}
                </div>
              </main>
            } />
            <Route path="/create" element={<CreateRecipe />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;