// Reverse Words

const reverseWords = (str) => {
  // cek parameter str harus string
  if (typeof str !== "string") {
    return "str harus berupa String";
  }

  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    // split str dengan memisahkan spasi yang membentuk word
    if (str[i] !== " ") {
      word += str[i];
    } else {
      // reverse word dengan mengambil setiap word yang sudah dipisah
      if (result === " ") {
        result = word + result;
      } else {
        result = word + " " + result;
        word = "";
      }
    }
  }
  // join word yang sudah direverse lalu digabung dengan spasi
  result = word + " " + result;

  return result;
};

console.log(reverseWords("Saya belajar Javascript"));
console.log(reverseWords(0));
