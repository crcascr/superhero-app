import React from "react";
import Image from "next/image";
import { Superhero } from "@/interfaces";
import { HiXCircle } from "react-icons/hi2";
import { StatBar } from "@/components";

interface Props {
  superhero: Superhero;
  isOpen: boolean;
  onClose: () => void;
}

export const SuperheroModal = ({ superhero, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {superhero.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <HiXCircle className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image and Basic Info */}
            <div>
              <div className="relative h-80 w-full mb-4">
                <Image
                  src={superhero.images?.lg || "/placeholder-hero.jpg"}
                  alt={superhero.name}
                  fill
                  className="object-cover rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/placeholder-hero.jpg";
                  }}
                />
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Biography
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Full Name:</span>{" "}
                      {superhero.biography?.fullName || "Unknown"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Publisher:</span>{" "}
                      {superhero.biography?.publisher || "Unknown"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">First Appearance:</span>{" "}
                      {superhero.biography?.firstAppearance || "Unknown"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Place of Birth:</span>{" "}
                      {superhero.biography?.placeOfBirth || "Unknown"}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Appearance
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Gender:</span>{" "}
                      {superhero.appearance?.gender || "Unknown"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Race:</span>{" "}
                      {superhero.appearance?.race || "Unknown"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Height:</span>{" "}
                      {superhero.appearance?.height?.[1] || "Unknown"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Weight:</span>{" "}
                      {superhero.appearance?.weight?.[1] || "Unknown"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and Additional Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Power Stats
                </h3>
                <div className="space-y-3">
                  <StatBar
                    label="Intelligence"
                    value={superhero.powerstats?.intelligence || 0}
                    color="bg-purple-500"
                  />
                  <StatBar
                    label="Strength"
                    value={superhero.powerstats?.strength || 0}
                    color="bg-red-500"
                  />
                  <StatBar
                    label="Speed"
                    value={superhero.powerstats?.speed || 0}
                    color="bg-green-500"
                  />
                  <StatBar
                    label="Durability"
                    value={superhero.powerstats?.durability || 0}
                    color="bg-blue-500"
                  />
                  <StatBar
                    label="Power"
                    value={superhero.powerstats?.power || 0}
                    color="bg-yellow-500"
                  />
                  <StatBar
                    label="Combat"
                    value={superhero.powerstats?.combat || 0}
                    color="bg-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Work
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Occupation:</span>{" "}
                    {superhero.work?.occupation || "Unknown"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Base:</span>{" "}
                    {superhero.work?.base || "Unknown"}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Connections
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Group Affiliation:</span>{" "}
                    {superhero.connections?.groupAffiliation || "None"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Relatives:</span>{" "}
                    {superhero.connections?.relatives || "Unknown"}
                  </p>
                </div>

                {superhero.biography?.aliases &&
                  superhero.biography.aliases.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Aliases
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {superhero.biography.aliases.map((alias, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded"
                          >
                            {alias}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
