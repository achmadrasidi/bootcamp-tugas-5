// 3. Demy membeli makanan menggunakan aplikasi ArkFood. Dimana terdapat 2 buah kode promo:
// Promo ‘ARKAFOOD5’ dengan ketentuan pemesanan minimal 50rb akan mendapat diskon 50%, dengan maksimal potongan sebesar 50rb.
// Promo ‘DITRAKTIRDEMY’ dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60%, dengan maksimal potongan sebesar 30rb.
// Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap satu kilometer selanjutnya dikenakan penambahan 3rb.
// Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang dipesan (true), jika tidak dikenakan pajak (false).

const arkFood = (price, promoCode, distance, tax) => {
  if (typeof price !== "number") {
    return "price harus berupa number harga";
  }
  if (typeof promoCode !== "string") {
    return "promoCode harus berupa string kode voucher";
  }
  if (typeof distance !== "number") {
    return "distance harus berupa number jarak kirim";
  }
  if (typeof tax !== "boolean") {
    return "tax harus berupa boolean ada pajak atau tidak";
  }
  if (price < 0 || distance < 0) {
    return "harga dan jarak harus lebih dari 0";
  }
  if (promoCode !== "ARKFOOD5" && promoCode !== "DITRAKTIRDEMY") {
    return "Voucher tidak tersedia";
  }

  let discPrice;

  let taxCost = 0;
  let deliveryCost = 5000;

  let voucher = [
    { name: "ARKFOOD5", minPrice: 50000, maxDiscPrice: 50000, discPercent: 0.5 },
    { name: "DITRAKTIRDEMY", minPrice: 25000, maxDiscPrice: 30000, discPercent: 0.6 },
  ];

  for (let i = 3; i <= distance; i++) {
    deliveryCost += 3000;
  }

  if (tax === true) {
    taxCost = price * 0.05;
  }

  // langsung dimasukkan ke dalam method
  voucher.forEach((val) => {
    if (val.name === promoCode) {
      if (price < val.minPrice) {
        discPrice = 0;
      } else if (price * val.discPercent > val.maxDiscPrice) {
        discPrice = val.maxDiscPrice;
      } else {
        discPrice = price * val.discPercent;
      }
    }
  });

  const subtotal = price - discPrice + deliveryCost + taxCost;

  return `Harga	: ${price}
Potongan: ${discPrice}
Ongkir  : ${deliveryCost}
Pajak	: ${taxCost}
SubTotal: ${subtotal}`;
};

console.log("--Diskon Normal--");
console.log(arkFood(75000, "ARKFOOD5", 5, true));
console.log("--Diskon dibawah harga minimum--");
console.log(arkFood(40000, "ARKFOOD5", 5, false));
console.log("--Diskon diatas maksimal potongan--");
console.log(arkFood(200000, "ARKFOOD5", 10, true));
console.log("--Diskon Normal--");
console.log(arkFood(40000, "DITRAKTIRDEMY", 5, false));
console.log("--Diskon dibawah harga minimum--");
console.log(arkFood(20000, "DITRAKTIRDEMY", 5, true));
console.log("--Diskon diatas maksimal potongan--");
console.log(arkFood(75000, "DITRAKTIRDEMY", 10, true));
console.log("--Test Error--");
console.log(arkFood("75000", "DITRAKTIRDEMY", 5, true));
console.log(arkFood(75000, 0, 5, true));
console.log(arkFood(75000, "DITRAKTIRDEMY", "5", true));
console.log(arkFood(75000, "DITRAKTIRDEMY", 5, "true"));
console.log(arkFood(75000, "DITRAKTIRDEMYa", 5, true));
