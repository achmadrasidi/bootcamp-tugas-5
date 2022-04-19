// Deteksi Palindrom

const cekPalindrom = (word) => {
  if (typeof word !== "string") {
    return "word harus berupa string";
  }
  let cek = "";
  for (let i = word.length - 1; i >= 0; i--) {
    cek += word[i];
  }

  if (word.toLowerCase() !== cek.toLowerCase()) {
    return "Bukan Palindrom";
  }
  return "Palindrom";
};

console.log(cekPalindrom("malam"));
