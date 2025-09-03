// ประกาศตัวแปร games เป็น array ของ object แต่ละ object คือข้อมูลเกม
export const games = [
  {
    Code: "G001", // รหัสเกม
    Name: "Mobile Legends", // ชื่อเกม
    Cover: "https://cdn.wallpapersafari.com/85/75/GLXYUC.png", // URL รูปปกเกม
    Description: "MOBA เกมมือถือยอดนิยม", // คำอธิบายเกม
    Category: 1, // หมวดหมู่เกม (1 = MOBA, 2 = RPG/สร้างสรรค์, 3 = Puzzle/อื่นๆ)
    Producer: "Moonton", // ผู้พัฒนาเกม
    Source: "https://www.mobilelegends.com", // ลิงก์เว็บไซต์เกม
    LaunchDate: "2016-07-11", // วันที่เปิดตัว
    Pricing: 10, // ราคาหรือสถานะเกม (10 = ฟรี, 20 = ต้องจ่าย, อื่นๆ = ระบุราคา $)
    Rating: 5 // คะแนนรีวิว (1-5)
  },
  {
    Code: "G002",
    Name: "PUBG Mobile",
    Cover: "https://image.fonwall.ru/o/rd/wallpaper-pubg-mobile-characters-playerunknown-games.jpeg?auto=compress&fit=crop&w=1920&h=1080&domain=img3.fonwall.ru",
    Description: "Battle Royale เกม",
    Category: 1,
    Producer: "Tencent",
    Source: "https://www.pubgmobile.com",
    LaunchDate: "2018-03-19",
    Pricing: 20,
    Rating: 5
  },
  {
    Code: "G003",
    Name: "Genshin Impact",
    Cover: "https://wallpapers.com/images/featured/genshin-impact-wlq3ykrxbaoadjow.jpg",
    Description: "Open World RPG",
    Category: 2,
    Producer: "miHoYo",
    Source: "https://genshin.mihoyo.com",
    LaunchDate: "2020-09-28",
    Pricing: 10,
    Rating: 5
  },
  {
    Code: "G004",
    Name: "Among Us",
    Cover: "https://cdn2.unrealengine.com/egs-amongusallinonepack-innersloth-editions-g1a-00-1920x1080-e896d5a6f18c.jpg",
    Description: "เกมสืบสวนออนไลน์",
    Category: 3,
    Producer: "InnerSloth",
    Source: "https://www.innersloth.com/gameAmongUs.php",
    LaunchDate: "2018-06-15",
    Pricing: 10,
    Rating: 4
  },
  {
    Code: "G005",
    Name: "Clash of Clans",
    Cover: "https://images.alphacoders.com/782/thumb-1920-782654.jpg",
    Description: "Strategy Game",
    Category: 1,
    Producer: "Supercell",
    Source: "https://supercell.com/en/games/clashofclans/",
    LaunchDate: "2012-08-02",
    Pricing: 10,
    Rating: 4
  },
  {
    Code: "G006",
    Name: "Call of Duty: Mobile",
    Cover: "https://wallpapers.com/images/hd/4k-call-of-duty-mobile-soldiers-4itlo1m4y9ndmpko.jpg",
    Description: "FPS เกมยิง",
    Category: 1,
    Producer: "Activision",
    Source: "https://www.callofduty.com/mobile",
    LaunchDate: "2019-10-01",
    Pricing: 10,
    Rating: 5
  },
  {
    Code: "G007",
    Name: "Roblox",
    Cover: "https://images5.alphacoders.com/121/1217521.jpg",
    Description: "เกมสร้างสรรค์และเล่นออนไลน์",
    Category: 2,
    Producer: "Roblox Corporation",
    Source: "https://www.roblox.com",
    LaunchDate: "2006-09-01",
    Pricing: 10,
    Rating: 4
  },
  {
    Code: "G008",
    Name: "Minecraft",
    Cover: "https://www.psu.com/wp/wp-content/uploads/2020/09/Minecraft-PS4-Wallpapers-16.jpg",
    Description: "Sandbox สร้างโลก",
    Category: 2,
    Producer: "Mojang",
    Source: "https://www.minecraft.net",
    LaunchDate: "2011-11-18",
    Pricing: 20,
    Rating: 5
  },
  {
    Code: "G009",
    Name: "Fortnite",
    Cover: "https://wallpapers.com/images/hd/fortnite-1920x1080-hd-cvavgntkwzkn72rg.jpg",
    Description: "Battle Royale ออนไลน์",
    Category: 1,
    Producer: "Epic Games",
    Source: "https://www.epicgames.com/fortnite",
    LaunchDate: "2017-07-21",
    Pricing: 10,
    Rating: 5
  },
  {
    Code: "G010",
    Name: "Candy Crush Saga",
    Cover: "https://images5.alphacoders.com/855/thumb-1920-855983.jpg",
    Description: "Puzzle เกมมือถือสุดฮิต",
    Category: 3,
    Producer: "King",
    Source: "https://king.com/game/candycrush",
    LaunchDate: "2012-04-12",
    Pricing: 10,
    Rating: 4
  }
]; // ปิด array games
