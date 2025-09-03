import { games } from "./Data/Games";
import GameCard from "./components/GameContent";

export default function GamesPage() {
  return (
    <div className="min-h-screen py-10 px-6 bg-gradient-to-br from-green-50 via-white to-green-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        🎮 รายชื่อเกมทั้งหมด
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game) => (
          <GameCard key={game.Code} games={game} />
        ))}
      </div>
    </div>
  );
}
