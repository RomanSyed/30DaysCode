process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

// Reads complete line from STDIN
function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  // Declare second integer, double, and String variables.
  let secondInteger, secondDouble, secondString;
  // Read and save an integer, double, and String to your variables.
  secondInteger = parseInt(readLine());
  secondDouble = parseFloat(readLine());
  secondString = readLine();
  // Print the sum of both integer variables on a new line.
  secondInteger += i;
  console.log(secondInteger);
  // Print the sum of the double variables on a new line.
  secondDouble += d;
  console.log(secondDouble.toFixed(1));
  // Concatenate and print the String variables on a new line
  secondString = s + secondString;
  console.log(secondString);
  // The 's' variable above should be printed first.
}
