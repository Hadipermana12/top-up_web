import React from 'react';
import GameCard from '../home/GameCard';

const RelatedProducts = ({ games, currentGameId }) => {
  // Mock logic: just get 4 random games excluding current one
  const related = games.filter(g => g.id !== currentGameId).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-white/8">
      <h2 className="text-xl font-bold text-white mb-6">Produk Terkait</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
