// นำเข้าคอมโพเนนต์ GameCard สำหรับแสดงรายละเอียดเกม
export default function GameCard({ games }: { games: any }) {
  return (
    // container หลักของการ์ดเกม
    // bg-white = พื้นหลังสีขาว, shadow-md = เงา, overflow-hidden = ซ่อนส่วนที่ล้น, p-4 = padding 1rem
    <div
      key={games.Code} // ใช้ Code ของเกมเป็น key เวลา render list
      className="bg-white shadow-md overflow-hidden p-4"
    >
      {/* รูปปกของเกม */}
      <img
        src={games.Cover} // URL ของรูปปก
        alt={games.Name} // ข้อความสำรอง ถ้ารูปโหลดไม่ได้
        className="w-full h-48 object-contain bg-gray-100 rounded-lg" // กว้างเต็ม, สูง 12rem, ไม่ตัดรูป, พื้นหลังเทา, มุมโค้ง
      />

      {/* ชื่อเกม */}
      <h2 className="text-xl font-bold text-gray-800 mt-3">{games.Name}</h2>

      {/* คำอธิบายเกม */}
      <p className="text-gray-600 text-sm mt-1">{games.Description}</p>

      {/* รายละเอียดเพิ่มเติม */}
      <div className="mt-3 text-sm text-gray-700 space-y-1 font-semibold">
        {/* รหัสเกม */}
        <p>Code: {games.Code}</p>

        {/* ผู้ผลิตเกม */}
        <p>Producer: {games.Producer}</p>

        {/* วันที่เปิดตัว */}
        <p>Launch Date: {games.LaunchDate}</p>

        {/* ราคาของเกม */}
        <p>
          Price:{" "}
          {(() => { // ตรวจสอบราคาของเกม
            if (games.Pricing === 10) {
              return "Free"; // ถ้า Pricing = 10 แสดงว่าเกมฟรี
            } else if (games.Pricing === 20) {
              return "Paid"; // ถ้า Pricing = 20 แสดงว่าเกมต้องจ่ายเงิน
            } else {
              return `$${games.Pricing}`; // ถ้าไม่ใช่ 10 หรือ 20 แสดงราคาจริง $
            }
          })()}
        </p>

        {/* คะแนนรีวิวของเกม */}
        <p>Rating: ⭐ {games.Rating}/5</p>

        {/* ลิงก์ไปยังเว็บไซต์เกม */}
        <p>
          Website:{" "}
          <a
            href={games.Source} // URL เว็บไซต์เกม
            target="_blank" // เปิดในแท็บใหม่
            rel="noopener noreferrer" // ป้องกันปัญหา security
            className="text-blue-600 hover:underline" // สีลิงก์น้ำเงินและ underline เมื่อ hover
          >
            เข้าชมเว็บไซต์ เกม
          </a>
        </p>
      </div>
    </div>
  );
}

