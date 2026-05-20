import React from 'react';
import { BookOpen, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ArticlesSection = ({ articles }) => {
  return (
    <section className="mt-20">
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 animate-pulse" /> Gaming News & Guide
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Artikel <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Eksklusif</span> Terbaru
          </h2>
        </div>
        <button className="group flex items-center gap-1.5 text-xs md:text-sm font-bold text-primary hover:text-white bg-primary/10 hover:bg-primary px-4 py-2 rounded-full border border-primary/20 hover:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          Lihat Semua
          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {articles.map((article, index) => (
          <motion.article 
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
            className="group relative flex flex-col bg-[#0D0E15]/65 border border-white/5 hover:border-primary/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500"
          >
            {/* Image Thumbnail with Overlay */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E15] via-transparent to-transparent" />
              
              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-lg">
                {article.category}
              </span>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-4 text-gray-500 text-[11px] mb-3">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary/70" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-600" />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-extrabold text-white leading-snug group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm line-clamp-3 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="flex items-center gap-1 text-[11px] text-gray-500">
                  <Clock className="w-3.5 h-3.5 text-gray-600" />
                  Waktu baca: {article.readTime}
                </span>
                
                <span className="text-xs font-black text-primary group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1 cursor-pointer">
                  Baca Selengkapnya 
                  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
