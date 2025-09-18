export default function GameCard({ games }: { games: any }) {
  return (
    <div
      key={games.Code}
      className="bg-white shadow-md overflow-hidden p-4"
    >
      {/* Game cover image */}
      <img
        src={games.Cover}
        alt={games.Name}
        className="w-full h-48 object-contain bg-gray-100 rounded-lg"
      />

      {/* Game title */}
      <h2 className="text-xl font-bold text-gray-800 mt-3">{games.Name}</h2>

      {/* Game description */}
      <p className="text-gray-600 text-sm mt-1">{games.Description}</p>

      {/* Additional game details */}
      <div className="mt-3 text-sm text-gray-700 space-y-1 font-semibold">
        {/* Game code */}
        <p>Code: {games.Code}</p>

        {/* Game producer */}
        <p>Producer: {games.Producer}</p>

        {/* Launch date */}
        <p>Launch Date: {games.LaunchDate}</p>

        {/* Game pricing */}
        <p>
          Price:{" "}
          {(() => {
            if (games.Pricing === 10) {
              return "Free"; // ถ้า games.Pricing = 10 แสดงว่าเกมฟรี
            } else if (games.Pricing === 20) {
              return "Paid"; // ถ้า games.Pricing = 20 แสดงว่าเกมต้องจ่ายเงิน
            } else {
              return `$${games.Pricing}`; // ถ้าไม่ใช่ 10 หรือ 20 แสดงราคาจริงเป็นตัวเลข $
            }
          })()}
        </p>

        {/* Game rating */}
        <p>Rating: ⭐ {games.Rating}/5</p>

        {/* Link to official website */}
        <p>
          Website:{" "}
          <a
            href={games.Source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Game Website
          </a>
        </p>
      </div>
    </div>
  );
}