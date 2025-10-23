import NavBar from './components/NavBar';
import HeroSearch from './components/HeroSearch';
import ResultsGrid from './components/ResultsGrid';
import KnowledgePanel from './components/KnowledgePanel';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavBar />
      <HeroSearch />
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <ResultsGrid />
          </div>
          <div className="lg:col-span-1">
            <KnowledgePanel />
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Divakar Thiyagarajan</p>
          <p>Built with React, Tailwind, and Spline</p>
        </div>
      </footer>
    </div>
  );
}
