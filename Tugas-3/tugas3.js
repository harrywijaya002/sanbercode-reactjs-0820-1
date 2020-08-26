// Soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKeduaUpperCase = kataKedua.replace("senang", "Senang");
var kataKetiga = "belajar";
var kataKeempat = "javascript".toUpperCase();

var gabungan =
  kataPertama + " " + kataKeduaUpperCase + " " + kataKetiga + " " + kataKeempat;

console.log(gabungan);

// Soal 2

var nomor1 = "1";
var nomor2 = "2";
var nomor3 = "4";
var nomor4 = "5";

var gabunganAngka =
  parseInt(nomor1) + parseInt(nomor2) + parseInt(nomor3) + parseInt(nomor4);

console.log(gabunganAngka);

// Soal 3

var kalimat = "wah javascript itu keren sekali";

var kalimat1 = kalimat.substring(0, 3);
var kalimat2 = kalimat.substring(4, 15);
var kalimat3 = kalimat.substring(15, 19);
var kalimat4 = kalimat.substring(19, 25);
var kalimat5 = kalimat.substring(25, 32);

console.log("Kata Pertama: " + kalimat1);
console.log("Kata Kedua: " + kalimat2);
console.log("Kata Ketiga: " + kalimat3);
console.log("Kata Keempat: " + kalimat4);
console.log("Kata Kelima: " + kalimat5);

// Soal 4

var nilai = 65;

if (nilai >= 80) {
  console.log("Nilai kamu adalah A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Nilai kamu adalah B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Nilai kamu adalah C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("Nilai kamu adalah D");
} else {
  console.log("Nilai kamu adalah E");
}

// Soal 5

var tanggal = 26;
var bulan = 6;
var tahun = 1998;

switch (bulan) {
  case 1: {
    console.log(tanggal + " " + "Januari" + " " + tahun);
    break;
  }
  case 2: {
    console.log(tanggal + " " + "Februari" + " " + tahun);
    break;
  }
  case 3: {
    console.log(tanggal + " " + "Maret" + " " + tahun);
    break;
  }
  case 4: {
    console.log(tanggal + " " + "April" + " " + tahun);
    break;
  }
  case 5: {
    console.log(tanggal + " " + "Mei" + " " + tahun);
    break;
  }

  case 6: {
    console.log(tanggal + " " + "Juni" + " " + tahun);
    break;
  }

  case 7: {
    console.log(tanggal + " " + "Juli" + " " + tahun);
    break;
  }
  case 8: {
    console.log(tanggal + " " + "Agustus" + " " + tahun);
    break;
  }
  case 9: {
    console.log(tanggal + " " + "September" + " " + tahun);
    break;
  }

  case 10: {
    console.log(tanggal + " " + "Oktober" + " " + tahun);
    break;
  }

  case 11: {
    console.log(tanggal + " " + "November" + " " + tahun);
    break;
  }

  case 12: {
    console.log(tanggal + " " + "Desember" + " " + tahun);
    break;
  }
}
