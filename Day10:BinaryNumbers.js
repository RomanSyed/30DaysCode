let rem = [];
let i = 0;
var ones = 0;
function binarynum(n) {
  while (n > 0) {
    rem[i] = n % 2;
    n = parseInt(n / 2);
    i++;
  }
  rem = rem.reverse();
  for (let j = 0; j < rem.length; j += 2) {
    if (rem[j] == 1 && rem[j + 1] == 1) {
      {
        ones += 1;
      }
    }
  }

  return rem;
}

let res = binarynum(1911);
console.log(res);
console.log(ones);
