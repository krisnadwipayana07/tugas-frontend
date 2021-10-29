const { matches } = require("lodash");
var lodash = require("lodash");

const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena", "omen"];

//a
let tidak_mengumpulkan = lodash.difference(anggota_kelas, mengumpulkan_tugas);
console.log(tidak_mengumpulkan);

//b split anggota kelas menjadi 2 min anggota kelompok
let kelompok_kelas = lodash.chunk(anggota_kelas, 2);
console.log(kelompok_kelas);

//c
let kelas = lodash.toString(anggota_kelas);
kelas = kelas.replaceAll(",", "-");
console.log(kelas);

//d
let pulled = lodash.pull(anggota_kelas, 0);
console.log(pulled);
