import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { Heart } from "lucide-react";

export default function EventCard({ event }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.some((e) => e.id === event.id);

  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{event.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {event.date} • {event.venue}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <Link
            to={`/event/${event.id}`}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm"
          >
            View Details
          </Link>
          <button
            onClick={() => toggleFavorite(event)}
            aria-label="Toggle favorite"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Heart
              className={`w-5 h-5 ${isFav ? "text-red-500" : "text-gray-400"}`}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
