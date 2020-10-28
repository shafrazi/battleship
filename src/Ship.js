class Position {
  constructor() {
    this.isHit = false;
  }
}

class Ship {
  constructor(length) {
    this.length = length;
    this.isSunk = false;
    this.positions = this.populatePositions();
  }

  populatePositions() {
    const array = [];
    for (let i = 0; i < this.length; i++) {
      const position = new Position();
      array.push(position);
    }
    return array;
  }

  hit(position) {
    for (let i = 0; i < this.positions.length; i++) {
      if (i === position) {
        this.positions[i].isHit = true;
      }
    }
  }

  checkIsSunk() {
    let isSunk = true;
    for (let i = 0; i < this.positions.length; i++) {
      if (!this.positions[i].isHit) {
        isSunk = false;
      }
    }
    this.isSunk = isSunk;
  }
}

export default Ship;
