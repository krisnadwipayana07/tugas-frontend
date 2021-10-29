document.getElementById("fill-me").innerHTML = "HALO!";

let paragraph = document.getElementsByTagName("p");
paragraph[0].innerHTML = "HALO JUGA!";
paragraph[1].innerHTML = "HALO JUGA!";
paragraph[2].innerHTML = "HALO JUGA!";
paragraph[3].innerHTML = "HALO JUGA!";

document.getElementsByTagName("h2")[0].innerHTML = "Apa Kabar!";

let main = document.getElementById("main");
let tombol1 = document.createElement("button");
tombol1.innerHTML = "Ini Button";
let tombol2 = document.createElement("button");
tombol2.innerHTML = "Ini Juga Button";
main.append(tombol1);
main.append(tombol2);
