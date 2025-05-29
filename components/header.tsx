"use client";

export const HeaderComponent = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Superhero Database
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Discover the world of superheroes
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
