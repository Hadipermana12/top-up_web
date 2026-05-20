import React, { useState, useMemo } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import HeroBanner from '../components/home/HeroBanner';
import PopularSection from '../components/home/PopularSection';
import CategoryTabs from '../components/home/CategoryTabs';
import GameGrid from '../components/home/GameGrid';
import Testimonials from '../components/home/Testimonials';
import ArticlesSection from '../components/home/ArticlesSection';
import FAQ from '../components/home/FAQ';
import { banners, categories, games, testimonials, faqs, articles } from '../mocks/data';


const Home = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [visibleCount, setVisibleCount] = useState(() => window.innerWidth < 768 ? 8 : 12);

  // Filter and Sort Logic
  const filteredGames = useMemo(() => {
    let result = games;
    
    // Category Filter
    if (activeCategory === 'Top Up Games') {
       result = result.filter(g => !g.category || g.category === 'Top Up Games');
    } else if (activeCategory === 'Joki MLBB') {
       result = result.filter(g => g.category === 'Joki MLBB');
    }

    // Search Filter
    if (searchTerm) {
      result = result.filter(g => g.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'az') return a.title.localeCompare(b.title);
      if (sortBy === 'za') return b.title.localeCompare(a.title);
      // 'popular' default: hot games first
      if (a.isHot && !b.isHot) return -1;
      if (!a.isHot && b.isHot) return 1;
      return 0;
    });

    return result;
  }, [activeCategory, searchTerm, sortBy]);

  const displayedGames = filteredGames.slice(0, visibleCount);

  return (
    <div>
      <HeroBanner banners={banners} />
      
      <PopularSection games={games} />
      
      <CategoryTabs 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Toolbar: Search and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
        <div className="relative w-full sm:max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-9 pr-3 py-2 border border-white/10 rounded-lg leading-5 bg-surface text-gray-300 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm"
            placeholder="Cari nama game..."
          />
        </div>

        <div className="relative flex items-center gap-2 text-sm text-gray-400">
          <span>Urutkan:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-surface border border-white/10 text-white rounded-lg px-3 py-2 outline-none focus:border-primary cursor-pointer appearance-none pr-8"
          >
            <option value="popular">Terpopuler</option>
            <option value="az">Nama A-Z</option>
            <option value="za">Nama Z-A</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-2 pointer-events-none" />
        </div>
      </div>

      {/* Game Grid */}
      <GameGrid key={activeCategory} games={displayedGames} />

      

      {/* Pagination / Load More */}
      {visibleCount < filteredGames.length && (
        <div className="flex justify-center mt-12 mb-6">
          <button 
            onClick={() => setVisibleCount(prev => prev + (window.innerWidth < 768 ? 8 : 6))}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-emerald-500 text-background font-extrabold text-sm tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 w-1/4 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-[500%] transition-transform duration-[1000ms] ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              Tampilkan Lainnya
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            </span>
          </button>
        </div>
      )}

       {/* Scopes additions */}
      <Testimonials testimonials={testimonials} />
      <ArticlesSection articles={articles} />
      <FAQ faqs={faqs} />
      
    </div>
  );
};

export default Home;
