// function deepCount(a) {
//   return a(...rest);
// }

// console.log(deepCount([1, [1, 2, , [2, 3, 3, 3], 3]]));

// function getRectangleString(w, h) {
//   return (
//     `┌${'─'.repeat(w - 2)}┐\n` +
//     `|${' '.repeat(w - 2)}|\n`.repeat(h) +
//     `└${'─'.repeat(w - 2)}┘\n`
//   );
// }
// console.log(getRectangleString(4,6));
// function getAverage(n1, n2) {
//   if (!n1) return n2;
//   if (!n2) return n1;
//   return (n1 + n2) / 2
// }
// console.log(getAverage(10, 0));
    const Circle = function Circle(radius) {
      this.radius = radius;
    };

    Circle.prototype.getCircumference = function getCircumference() {
      return 2 * Math.PI * this.radius;
    };

    const MockType = function MockType(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    };

function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  return Object.setPrototypeOf(obj, proto);
}

console.log(fromJSON(Circle.prototype, '{ "radius":10 }'));