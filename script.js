// =============== Blueprint class ===============
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  // both ships (sub classes) are will use an attack class
}

// =============== 1. Subclass for main player ship :) ===============
class Player extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
  retreat() {
    if (this.hull <= 5 || this.hull > 1)
      console.log(`OUR ENGINES ARE FAILING! Should we retreat or attack?!`);
  }
}

const p1 = new Player("Nala");
// console.log(p1);

// =============== 1. Subclass for enemy ship :( ===============
class Enemy extends Ship {
  constructor(name = "Alien Ship", hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    this.hull = parseInt(Math.floor(Math.random() * 4) + 3);
    this.firepower = parseInt(Math.floor(Math.random() * 3) + 2);
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
}
const e1 = new Enemy();

// add a start game object loop

// =============== Buttons ===============

const newGame = document.querySelector("#new-game");
// new game button when clicked on screen a prompt appears
newGame.addEventListener("click", function () {
  // the user is asked to input y or n on their keyboards and depending on their response there will be different outcomes
  console.log("ARE YOU READY? (y/n)");
  // using the keydown function allow users to pick y or no
  document.addEventListener("keydown", function keydownListener(event) {
    if (event.key === "y") {
      // Code for 'y' key pressed
      console.log(`Get ready ${p1.name}!`);
      console.log(p1);
      console.log(e1);
      // removes event listener so the game can proceed
      document.removeEventListener("keydown", keydownListener);
    } else if (event.key === "n") {
      // Code for 'n' key pressed
      console.log("Nvm.");
      document.removeEventListener("keydown", keydownListener);
      // refreshes the page after a delay using set time out
      setTimeout(location.reload.bind(location), 3500);
    }
  });

  const attackBtn = document.querySelector("#attack-btn");
  attackBtn.addEventListener("click", function (event) {
    document.addEventListener("keydown", function () {
      if (event.key === "k") {
        console.log();
      }
      // introduce player
      // player attack
      // game object check if it hit
      // alien attack
      // game object check if it hit
    });

    const retreat = document.querySelector("#retreat");
    retreat.addEventListener("click", function () {
      console.log("maybe next time...");
      // refresh page with delay
      setTimeout(location.reload.bind(location), 3500);
    });
  });
});
