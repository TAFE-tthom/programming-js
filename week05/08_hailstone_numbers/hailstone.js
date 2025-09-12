


function hailstone(n) {

  if(n > 0) {
    let seq = [n];
    if(n == 1) {
      return [n];
    } if(n % 2 == 0) {
      seq = seq.concat(hailstone(n / 2));
    } else {
      seq = seq.concat(hailstone((n*3) + 1));
    }
    return seq;
  } else {
    return [];
  }
}

console.log(hailstone(2));
console.log(hailstone(3));
console.log(hailstone(5));
console.log(hailstone(11));
console.log(hailstone(19));


module.exports = hailstone;
