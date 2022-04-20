// Diberikan sebuah variabel yang berisikan bilangan integer
//  dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya.
//  Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri.
//  Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer.
//   Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas.

const divideAndSort = (num) => {
  if (typeof num !== "number") {
    return "num harus berupa Number";
  }
  // split number jadi array dengan misahkan 0
  const divider = num.toString().split("0");
  // pisahkan array menjadi per angka dan sort berdasarkan urutan kelompok
  const result = divider.map((val) => val.split("").sort((a, b) => a - b));
  // gabungkan hasil dari array sort dengan menjadikannya number
  return Number(result.map((val) => val.join("")).join(""));
};

console.log("--Hasil--");
console.log(divideAndSort(5956560159466056));
console.log("--Error--");
console.log(divideAndSort("5956560159466056"));
