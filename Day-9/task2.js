const duaA = "DDUUDDUDUUUD";
const duaB = "UDDDUDUU";
const duaC =
  "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD";

function hillMountain(arr) {
  let netural = 0;
  let hasil = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "D") {
      netural = netural - 1;
    }
    if (arr[i] == "U") {
      netural = netural + 1;
      if (netural == 0) {
        hasil = hasil + 1;
      }
    }
  }
  return hasil;
}

console.log(hillMountain(duaA));
console.log(hillMountain(duaB));
console.log(hillMountain(duaC));
