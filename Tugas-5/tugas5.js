// Soal 1

function halo() {
  console.log("Halo Sanbers!");
}

console.log(halo());

// Soal 2

function kalikan() {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan();
console.log(hasilKali);

// Soal 3

function introduce() {
  return console.log(
    "Nama saya " + name,
    ", umur saya " + age,
    ", Alamat saya di " + address,
    ", Dan saya punya hobby yaitu " + hobby + "!"
  );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce();
console.log(perkenalan);

// Soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var daftarPesertaObject = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3],
};

console.log("Nama : " + daftarPesertaObject.nama);
console.log("Jenis Kelamin : " + daftarPesertaObject.jenisKelamin);
console.log("Hobi : " + daftarPesertaObject.hobi);
console.log("Tahun lahir : " + daftarPesertaObject.tahunLahir);

// Soal 5

var buah = [
  {
    nama: "strawberry",
    warna: "merah",
    ["ada bijinya"]: "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    ["ada bijinya"]: "ada",
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    ["ada bijinya"]: "ada",
    harga: 10000,
  },

  {
    nama: "Pisang",
    warna: "Kuning",
    ["ada bijinya"]: "tidak",
    harga: 5000,
  },
];

console.log(
  "Nama : " + buah[0].nama,
  ", Warna : " + buah[0].warna,
  ", Ada bijinya : " + buah[0]["ada bijinya"],
  ", Harga : " + buah[0].harga
);

// Soal 6

var dataFilm = [];

function tambahFilm() {
  var film = {
    namaFilm: "Narnia",
    durasiFilm: 90,
    genreFilm: "Comedy",
    tahunFilm: 1992,
  };

  dataFilm.push(film);
}

tambahFilm();

console.log(
  "Nama film : " + dataFilm[0].namaFilm,
  ", Durasi film : " + dataFilm[0].durasiFilm,
  ", Genre film : " + dataFilm[0].genreFilm,
  ", Tahun film : " + dataFilm[0].tahunFilm
);
