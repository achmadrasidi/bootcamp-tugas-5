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
      continue;
    }
    // reverse word dan join word
    result = " " + word + result;
    word = "";
  }
  // gabungkan word
  result = word + result;

  return result;
};
console.log("--Hasil--");
console.log(reverseWords("Saya belajar Javascript"));
console.log("--Error--");
console.log(reverseWords(0));
