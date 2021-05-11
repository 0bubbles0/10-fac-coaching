/* 5.4 kata:  RGB To Hex Conversion
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), '000000')
    Test.assertEquals(rgb(0, 0, -20), '000000')
    Test.assertEquals(rgb(300,255,255), 'FFFFFF')
    Test.assertEquals(rgb(173,255,47), 'ADFF2F')
  });
});
*/


function rgb(r, g, b) {
  console.log(r + ", " + g + ", " + b);
  let hexX = "0123456789ABCDEF";
  const maxTest = (y) => {
    return (y > 255) ? 255 : (y < 0) ? 0 : y;
  };
  const mkHx = (x) => {
    let pZ = Math.floor(maxTest(x) / 16);
    let pE = maxTest(x) % 16;
    return hexX[pZ] + hexX[pE];
  };
  return mkHx(r) + mkHx(g) + mkHx(b);
}

console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));


//Other Solutions
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) { return "00"; }
  if (d > 255) { return "FF"; }
  return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
}


function rgb(r, g, b) {
  return [r, g, b].map(function (x) {
    return ('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}

function rgb(r, g, b) {
  function toHex(a) {
    if (a <= 0) return '00';
    else if (a >= 255) return 'FF';
    else return a.toString(16).toUpperCase();
  }
  return toHex(r) + toHex(g) + toHex(b);
}

