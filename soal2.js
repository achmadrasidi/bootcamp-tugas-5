// Reverse Word

const reverseWord = (str) => {
  if (typeof str !== "string") {
    return "str harus berupa String";
  }

  let hasil = "";
  let kata = "";

  for (let i = 0; i < str.length; i++) {
    // memecah spasi menjadi huruf dan membentuk kata yang dimasukkan kedalam variabel word
    if (str[i] !== " ") {
      kata += str[i];
    } else if (kata[i] === " ") {
      // membalikkan kata per kata dari variabel word secara berulang dan dimasukkan ke dalam variabel answer
      hasil = kata + hasil;
      kata = "";
    } else {
      hasil = kata + " " + hasil;
      kata = "";
    }
  }
  // memisahkan kata pertama dan sisa kata-kata dengan spasi
  hasil = kata + " " + hasil;
  return hasil;
};

console.log(reverseWord("Saya belajar Javascript"));
