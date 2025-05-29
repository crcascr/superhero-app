"use client";

import { useGetSuperheroes } from "@/hooks";
import { Superhero } from "@/interfaces";
import { useState } from "react";
import {
  LoadingSpinner,
  Pagination,
  SuperheroCard,
  SuperheroModal,
} from "@/components";

export const MainComponent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedHeroId, setSelectedHeroId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const pageSize = 12;
  const {
    data: superheroes,
    error: error,
    loading: loading,
    refetch: superheroesRefetch,
  } = useGetSuperheroes({
    page: currentPage,
    size: pageSize,
  });

  const handleHeroClick = (hero: Superhero) => {
    setIsModalOpen(true);
    setSelectedHeroId(hero.id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error.message}
          <button
            onClick={superheroesRefetch}
            className="ml-4 underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {superheroes?.items.map((hero) => (
              <SuperheroCard
                key={hero.id}
                superhero={hero}
                onClick={() => handleHeroClick(hero)}
              />
            ))}
          </div>

          {superheroes && superheroes.lastPage > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={superheroes.lastPage}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

      {selectedHeroId && (
        <SuperheroModal
          superheroId={selectedHeroId}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedHeroId(null);
          }}
        />
      )}
    </main>
  );
};
