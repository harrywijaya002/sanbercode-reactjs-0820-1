// Soal 1
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Tulis code untuk memanggil function readBooks di sini
function book() {
  readBooks(10000, books[0], function (call) {
    console.log(call);
    readBooks(call, books[1], function (call) {
      console.log(call);
      readBooks(call, books[2], function (call) {
        console.log(call);
        readBooks(call, books[3], function (call) {
          console.log(call);
        });
      });
    });
  });
}

book();
