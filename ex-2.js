// Exercise #2: Promotion Conditions
// เงื่อนไขที่ 1 : ยอดเดือนที่แล้วมากกว่า 4000 && Mon - Fri && no it && ไม่เคยเข้าร่วมกิจกรรมโปรโมชัน
// เงื่อนไขที่ 2 : member platinium
// just only condition 1 or 2 (true) = get promotions
// Start coding here
let lastMonthPaidMoreThan4000 = true; //true ถ้าเดือนก่อนซื้อมากกว่า 4k
let isWeekday = true;// true ถ้าซื้อในวันจันทร์ - ศุกร์
let hasBoughtProductFromITCategory = false;//true ถ้าซื้อสินค้าในหมวด it
let hasAttendedDiscountEvent = true;//true ถ้าเคยเข้าร่วมโปรโมชัน
let isPlatinum = false;// true ถ้าเป็นสมาชิก plat

let hasPromotion = lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent;// true ถ้าได้รับส่วนลด


//break conditions 1 = lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent = pass conditions 1

/*john conditions
lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent && !isPlatinum*/
console.log(hasPromotion);
