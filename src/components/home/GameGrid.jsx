import React from 'react';
import { motion } from 'framer-motion';
import GameCard from './GameCard';

const GameGrid = ({ games }) => {
  const getItemVariants = (index) => ({
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: (index % 6) * 0.05
      }
    }
  });

  return (
    <div className="flex flex-wrap md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-6 justify-center">
      {games.map((game, index) => (
        <motion.div 
          key={game.id} 
          variants={getItemVariants(index)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          whileHover={{ scale: 1.03 }} 
          whileTap={{ scale: 0.97 }}
          className="w-[calc(33.333%-6px)] sm:w-[calc(25%-6px)] md:w-auto"
        >
          <GameCard game={game} />
        </motion.div>
      ))}
    </div>
  );

  
};

export default GameGrid;
