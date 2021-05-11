/* 5.3 kata: Human Readable Time
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
•	HH = hours, padded to 2 digits, range: 00 - 99
•	MM = minutes, padded to 2 digits, range: 00 - 59
•	SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
You can find some examples in the test fixtures.

*/


function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600).toString().padStart(2, "0");
  let mm = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  let ss = ((seconds % 3600) % 60).toString().padStart(2, "0");
  return (seconds > 359999) ? "99:59:59" : hh + ":" + mm + ":" + ss;
}

//Other solutions:
function humanReadable(seconds) {
  var pad = function (x) { return (x < 10) ? "0" + x : x; }
  return pad(parseInt(seconds / (60 * 60))) + ":" +
    pad(parseInt(seconds / 60 % 60)) + ":" +
    pad(seconds % 60)
}

function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function (val) {
    return val < 10 ? "0" + val : val;
  }

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}