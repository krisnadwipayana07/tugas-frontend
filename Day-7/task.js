var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(
    "perkenalan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      " berasal dari " +
      asal
  );
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

// console.log("asal diaskes = " + asal);

//jawaban 1
console.log("array = " + lengkap_arr[2]);
// b. mengubah terdaftar dari bernilai false menjadi true
console.log("a adalah = " + a);
console.log("b adalah = " + b);
console.log(perkenalan());

// jawaban no 2
// a. karena terdaftar masih bernilai false, belum terdapat perubahan dalam code yang membuat nilai terdaftar true
// b. pada line 26 terdapat error dikarenakan nama merupakan nilai yang constant, jadi nilainya tetap, akan tetapi jika ingin membuat line 26 running kita harus mengubah type of variable dari nama menjadi let atau var
// c. tidak, hal tersebut disebabkan karena pada line 28 terdapat variable yang di assign pada function perkenalan, jadi variable tersebut hanya bisa digunakan disana, dan hal tersebut membuat code line no 29 menjadi tidak tereksekusi

let c;
const foo = ["Budi", "Sita", "Ayu"];
[a, b, c] = foo;
console.log(a, b, c);

let bdays = [`10-17`, `05-19`, `20-19`];
let hasil = bdays.map((item) => item.replace(`-`, `/`));
console.log(hasil);

let value = [1, 2, 3, 4, 5, 6];
let hasil1 = value.map((item) => item * 2);
console.log(hasil1);

let arr = [1.5, 2.56, 5.1, 12.33];
let hasil2 = arr.map((item) => Math.ceil(item));
console.log(hasil2);
