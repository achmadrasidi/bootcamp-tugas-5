// Deteksi Palindrom

const cekPalindrom = (word) => {
  // cek tipe data word
  if (typeof word !== "string") {
    return "word harus berupa string";
  }
  let cek = "";
  // pembuatan variabel cek membalik kata
  for (let i = word.length - 1; i >= 0; i--) {
    cek += word[i];
  }
  // cek word dengan variabel cek
  if (word.toLowerCase() !== cek.toLowerCase()) {
    return "Bukan Palindrom";
  }
  return "Palindrom";
};

console.log(cekPalindrom("malam"));
console.log(cekPalindrom("makan"));
console.log(cekPalindrom(10));
