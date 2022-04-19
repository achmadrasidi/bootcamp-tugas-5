// Reverse Words

const reverseWords = (str) => {
  if (typeof str !== "string") {
    return "str harus berupa String";
  }

  let hasil = "";
  let kata = "";

  for (let i = 0; i < str.length; i++) {
    // split str dengan memisahkan spasi yang membentuk kata
    if (str[i] !== " ") {
      kata += str[i];
    } else {
      // reverse kata dengan mengambil setiap kata yang sudah dipisah
      hasil = kata + " " + hasil;
      kata = "";
    }
  }
  // join kata yang sudah direverse lalu digabung dengan spasi
  hasil = kata + " " + hasil;

  return hasil;
};

console.log(reverseWords("Saya belajar Javascript"));
