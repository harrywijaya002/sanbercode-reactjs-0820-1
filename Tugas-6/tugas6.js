// Soal 1
const pi = 3.14;

const luasLingkaran = (r) => {
  return pi * r * r;
};

console.log("Luas lingkaran : " + luasLingkaran(3));

let kelilingLingkaran = (d) => {
  return pi * d;
};

console.log("Keliling lingkaran : " + kelilingLingkaran(6));

// Soal 2

let kalimat = "";

const tambahKata = () => {
  const kata1 = "saya";
  const kata2 = "adalah";
  const kata3 = "seorang";
  const kata4 = "frontend";
  const kata5 = "developer";
  kalimat = `
  ${kata1}
  ${kata2}
  ${kata3}
  ${kata4}
  ${kata5}`;
};
tambahKata();
console.log(kalimat);

// Soal 3

const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(firstName + " " + lastName);
    },
  };
};

newFunction("William", "Imoh").fullName();

// Soal 4

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const abc = ({
  firstName,
  lastName,
  destination,
  occupation,
  spell,
} = newObject);

console.log(abc);

// Soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const gabungan = [...west, ...east];

console.log(gabungan);
