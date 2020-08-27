// Soal 1

var i = 2;
console.log("Looping Pertama");
while (i <= 20) {
  console.log(i + " " + " - " + "I love Coding");
  i += 2;
}
var n = 20;
console.log("Looping Kedua");

while (n >= 2) {
  console.log(n + " " + " - " + "I will become a frontend developer");
  n = n - 2;
}

// Soal 2

for (var a = 1; a <= 20; a++) {
  if (a % 3 != 0 && a % 2 != 0) {
    console.log(a + " " + "Santai");
  } else if (a % 2 == 0) {
    console.log(a + " " + "Berkualitas");
  } else if (a % 3 == 0 && a % 2 != 0) {
    console.log(a + " " + "I Love Coding");
  }
}

// Soal 3

var tinggi = 7;
var alas = 7;
var string = "";

for (i = 0; i < tinggi; i++) {
  for (a = 0; a < alas; a++) {
    if (a <= i) {
      string += "#";
    }
  }
  string += "\n";
}
console.log(string);

// Soal 4

var kalimat = "saya sangat senang belajar javascript";
var kalimatArray = [];

console.log(kalimat.split(" "));

// Soal 5

var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
daftarBuah.sort();

for (var h = 0; h < daftarBuah.length; h++) {
  console.log(daftarBuah[h]);
}
