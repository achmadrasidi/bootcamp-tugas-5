// Deteksi Palindrom

const cekPalindrom = (word) => {
  // cek tipe data word
  if (typeof word !== "string") {
    return "word harus berupa string";
  }
  let palindrom = "";
  // pemasukkan kata palindrom ke variabel palindrom
  for (let i = word.length - 1; i >= 0; i--) {
    palindrom += word[i];
  }
  // palindrom word dengan variabel palindrom
  if (word.toLowerCase() !== palindrom.toLowerCase()) {
    return "Bukan Palindrom";
  }
  return "Palindrom";
};

console.log("--Hasil Palindrom--");
console.log(cekPalindrom("malam"));
console.log("--Hasil Bukan Palindrom--");
console.log(cekPalindrom("makan"));
console.log("--Error--");
console.log(cekPalindrom(10));
