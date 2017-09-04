const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

class Game {
  constructor() {
    this.towers = [[5, 4, 3, 2, 1], [], []];
  }

  run() {
    this.promptMove()
  }

  get totalDiscs() {
    return this.towers.reduce((total, tower) => {
      return total + tower.length;
    }, 0);
  }

  playRound() {
    if (this.won) {
      return;
    }

    this.promptAndHandleMove();
  }

  won() {
    return this.towers.slice(1).some(
      tower => tower.length === this.totalDiscs
    );
  }

  promptMove(reader, callback) {
    this.printGameState();

    reader.question('Move from: ', (from) => {
      reader.question(`\nMove from ${from} to: `, (to) => {

        [from, to] = [from, to].map(
          towerNo => this.translateMove(towerNo)
        );

        callback(from, to);
      });
    });
  }

  translateMove(towerNo) {
    return towerNo - 1;
  }

  handleMove(from, to) {
    if (this.validMove(from, to)) {
      this.move(from, to);
    } else {
      this.logError('Invalid move');
      promptAndHandleMove();
    }
  }

  validMove(from, to) {

    const fromTower = this.towers[from];
    const toTower = this.towers[to];

    const discToMove = fromTower[fromTower.length - 1];
    const discToMoveOnto = toTower[toTower.length - 1];

    const discFits =
      discToMoveOnto === undefined ||
      discToMove < discToMoveOnto;

    return Boolean (discToMove && discFits);
  };

  move(from, to) {
    const discToMove = this.towers[from].pop();
    this.towers[to].push(discToMove);

    this.playRound();
  }

  logError(error) {
    console.log(`Uh-oh! ${error}`);
  }

  printGameState() {
    this.printTowers();
    this.printBases();
  }

  printTowers() {
    const topLevel = this.tallestTower().length - 1;
    const levels = [];
    debugger;
    for (let level = topLevel; level >= 0; level--) {
      const levelString = this.towers.map((tower) => {
        const toPrint = this.convertDiscToPrint(tower[level]);
        return ` ${toPrint} `;
      }).join(' ');

      levels.push(levelString);
    }

    console.log(levels.join('\n'));
  }

  convertDiscToPrint(disc) {
    return disc === undefined ? ' ' : String(disc);
  }

  printBases() {
    const baseStrings = this.towers.map((tower, index) => {
      const towerNumber = index + 1;
      return `[${towerNumber}]`;
    });

    console.log(baseStrings.join(' '));
  }

  tallestTower() {
    return this.towers.reduce((tallest, tower) => {
      return tower.length > tallest.length ? tower : tallest;
    });
  }
}

game = new Game;
game.promptMove(reader, console.log);
