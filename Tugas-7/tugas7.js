// Soal 1

class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }

  get nama() {
    return this.name;
  }
}

// Inherit Frog
class Frog extends Animal {
  constructor(name) {
    super(name);
  }

  jump() {
    console.log("hop hop");
  }
}

var kodok = new Frog("buduk");

kodok.jump();

// Inherit Ape

class Ape extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }
  set kaki(legs) {
    this.legs = legs;
  }

  yell() {
    console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti", 2);
sungokong.yell();

console.log(sungokong.legs);
sungokong.legs = 4;

// Soal 2

class Clock {
  timer;
  constructor({ template }) {
    this.template = template;
  }

  render = () => {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let template = this.template;

    var output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  stop() {
    clearInterval(timer);
  }

  start() {
    this.render;
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
