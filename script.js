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
  attack(humanShip_attack) {
    if (Math.random() < p1.accuracy) {
      console.log(`WE GOT A HIT!`);
      e1.hull -= this.firepower;
      console.log(`${e1.name} hull is ${e1.hull}`);
      if (e1.hull <= 0) {
        console.log(
          `CONGRATULATIONS ${p1.name}! ${e1.name} has been destroyed. Go get a drink.`
        );
      }
    }
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
  attacking(enemy_attack) {
    if (Math.random() < Enemy[j].accuracy) {
      Math.floor((p1.hull -= this.firepower));
      console.log(`NALA IS GOING DOWN!`);
      console.log(`${p1.name}'s hull is ${p1.hull}`);
    } else {
      console.log("oh man we missed...");
    }

    if (p1.hull <= 0) {
      console.log(`GAME OVER! You tried your best`);
      // break
    }
  }
}
const e1 = new Enemy();

// // add enemy armada to respawn
// const alienArmada = [];
// function aetAlienArmada() {
//   for (let i = 0; i < 6; i++) {
//     const alien = new Enemy();
//     alienArmada.push(alien);
//   }
// }
// // add a start game object loop
// const gameObject = {
//   updateGame() {
//     if (p1.hull <= 0) {
//       console.log("GAME OVER! do better next time...");
//       const p2 = new Player(20, 5, 0.7);
//     }
//     if (alienArmada === 0) {
//       console.log(
//         "CONGRATULATIONS YOU DEFEATED All THE ENEMIES! You deserve a drink!"
//       );
//       const p2 = new Player(20, 5, 0.7);
//     }
//   },
// };
// ! got an error after i added this portion -- revisit when you can

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
      setTimeout(location.reload.bind(location), 3000);
    }
  });

  const attackBtn = document.querySelector("#attack-btn");
  attackBtn.addEventListener("click", function (event) {
    // introduce player
    p1.attack(e1);
    gameObject.updateGame();
    console.log(p1);
    e1.attack(p1);
    gameObject.updateGame();
    console.log(e1);

    document.addEventListener("keydown", function () {
      if (event.key === "k") {
        console.log();
      }
    });

    const retreat = document.querySelector("#retreat");
    retreat.addEventListener("click", function () {
      console.log("maybe next time...");
      // refresh page with delay
      setTimeout(location.reload.bind(location), 3500);
    });
  });
});

// *============ DONE ============*
