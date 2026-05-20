import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <motion.div 
      className="py-12 mt-12 border-t border-white/8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Apa Kata Mereka?</h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {testimonials.map((testi) => (
          <motion.div 
            key={testi.id} 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-surface p-6 rounded-2xl border border-white/8 hover:border-primary/50 transition-colors shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="font-bold text-white">{testi.name}</div>
              <div className="flex text-primary">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-400 italic">"{testi.review}"</p>
            <div className="mt-4 text-xs font-semibold text-primary/80 bg-primary/10 inline-block px-2 py-1 rounded">
              {testi.game}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
