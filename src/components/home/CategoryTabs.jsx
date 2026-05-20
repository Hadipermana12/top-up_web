import React from 'react';

const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-row overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 md:gap-4 mb-8 pb-2 px-1">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
            activeCategory === category
              ? 'bg-primary text-white'
              : 'bg-surface text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
