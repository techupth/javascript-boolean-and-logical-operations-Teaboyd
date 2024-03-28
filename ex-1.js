let isOver18 = 18; //ต่ำกว่า 18ปี
let hasCriminalBlacklist = false; // true activate if ประวัติอาชญากรรม

let isAllow = isOver18 > 18 && !hasCriminalBlacklist; //verified ให้เข้าร่วมงานได้

// Start coding here
// ผู้เข้าร่วมงาน age >*มากกว่า 18
// ไม่มีประวัติอาชญากรรม
// 2 เงื่อนไขผ่าน --> isAllow /
// James:age 18 , criminalHis: pass//

console.log(isAllow);
