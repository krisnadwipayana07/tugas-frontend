//soal 1
let nilai1 = [1, 2, 3, 4, 5];
let nilai2 = nilai1.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
});
console.log(nilai2);

//soal 2
var filterValue = [-4, 3, 2, -21, 1];
let cleanValue = filterValue.filter((value) => value > 0);
console.log(cleanValue);

//soal 3
var data = [
  { name: "daniel", age: 45 },
  { name: "john", age: 30 },
  { name: "robert", age: null },
  { name: "jenn", age: undefined },
  { name: null, age: undefined },
];
let cleanData = data.filter((value) => value.name != "" && value.age != null);
console.log(cleanData);
//null dan undefine sama - sama nilai kosong, perbedaannya undefine sebuah tipe dan null sebuah object

//soal 4
let konfersiMenit = (detik) => {
  let hasil;
  menit = Math.floor(detik / 60);
  detik = detik % 60;
  if (detik < 10) {
    detik = "0" + detik;
  }
  if (menit > 0) {
    hasil = menit + ":" + detik;
  } else {
    hasil = "0:" + detik;
  }
  return hasil;
};
console.log(konfersiMenit(88));
console.log(konfersiMenit(53));
console.log(konfersiMenit(120));
console.log(konfersiMenit(124));

//soal 5
function harusGenap(angka) {
  if (angka % 2 == 0) {
    return "expected result in console: Valid";
  }
  return "expected result in console: Invalid";
}

try {
  console.log(harusGenap(7));
} catch (e) {
  console.log(e);
}

try {
  console.log(harusGenap(4));
} catch (e) {
  console.log(e);
}

//soal 6
function perkalianUnik(arr) {
  let hasil = [];
  for (i = 0; i < arr.length; i++) {
    let nilai = 1;
    arr.map((value, index) => {
      if (index != i) {
        nilai = nilai * value;
      }
    });
    hasil.push(nilai);
  }
  return hasil;
}
console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));
