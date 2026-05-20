import React from 'react';
import { motion } from 'framer-motion';
import PopularCard from './PopularCard';
import { FaFire } from 'react-icons/fa';

const PopularSection = ({ games }) => {
  const popularGames = games.filter(g => g.isPopular).slice(0, 3);

  if (popularGames.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FaFire className="text-orange-500" /> POPULER SEKARANG!
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Berikut adalah beberapa produk yang paling populer saat ini.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {popularGames.map((game, index) => (
          <motion.div key={game.id} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <PopularCard game={game} rank={index + 1} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PopularSection;
