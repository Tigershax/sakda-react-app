export default function GameCard({ games }: { games: any }) {
  return (
    <div
      key={games.Code}
      className="bg-white shadow-md overflow-hidden p-4"
    >
      <img
        src={games.Cover}
        alt={games.Name}
        className="w-full h-48 object-contain bg-gray-100 rounded-lg"
      />

      <h2 className="text-xl font-bold text-gray-800 mt-3">{games.Name}</h2>
      <p className="text-gray-600 text-sm mt-1">{games.Description}</p>

      <div className="mt-3 text-sm text-gray-700 space-y-1 font-semibold">
        <p >Code: {games.Code}</p>
        <p>Producer: {games.Producer}</p>
        <p>Launch Date: {games.LaunchDate}</p>
        <p>
          Price:{" "}
          {(() => {
            if (games.Pricing === 10) {
              return "Free";
            } else if (games.Pricing === 20) {
              return "Paid";
            } else {
              return `$${games.Pricing}`;
            }
          })()}
        </p>
        <p>Rating: ⭐ {games.Rating}/5</p>
        <p>
          Website:{" "}
          <a
            href={games.Source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            เข้าชมเว็บไซต์ เกม
          </a>
        </p>
      </div>
    </div>
  );
}
