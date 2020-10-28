import Ship from "./Ship";

const ship = new Ship(2);

it("should return the length of the ship", () => {
  expect(ship.length).toBe(2);
});

it("a hit should mark ship's position as hit", () => {
  ship.hit(0);
  expect(ship.positions[0].isHit).toBe(true);
});

it("should return true if all positions are hit", () => {
  const ship1 = new Ship(3);
  ship1.hit(1);
  ship1.hit(0);
  ship1.hit(2);
  ship1.checkIsSunk();
  expect(ship1.isSunk).toBe(true);
});

it("should return false if all positions are not hit", () => {
  const ship2 = new Ship(3);
  ship2.hit(1);

  ship2.hit(2);
  ship2.checkIsSunk();
  expect(ship2.isSunk).toBe(false);
});
