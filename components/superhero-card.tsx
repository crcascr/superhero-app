import Image from "next/image";
import { Superhero } from "@/interfaces";
import { getAlignmentColor } from "@/utils";

interface Props {
  superhero: Superhero;
  onClick: () => void;
}

export const SuperheroCard = ({ superhero, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fade-in"
    >
      <div className="relative h-64 w-full">
        <Image
          src={superhero.images?.md || "/placeholder-hero.jpg"}
          alt={superhero.name}
          fill
          className="object-cover rounded-t-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder-hero.jpg";
          }}
        />
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py.1 rounded-full text-xs font-medium ${getAlignmentColor(
              { alignment: superhero.biography?.alignment }
            )}`}
          >
            {superhero.biography?.alignment || "Unknown"}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {superhero.name}
        </h3>

        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Real Name:</span>{" "}
            {superhero.biography?.fullName || "Unknown"}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Publisher:</span>{" "}
            {superhero.biography?.publisher || "Unknown"}
          </p>

          <div className="flex flex-wrap gap-1 mt-2">
            {superhero.powerstats && (
              <>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  STR: {superhero.powerstats.strength}
                </span>
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs px-2 py-1 rounded">
                  INT: {superhero.powerstats.intelligence}
                </span>
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded">
                  SPD: {superhero.powerstats.speed}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
