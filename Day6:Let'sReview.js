function processData(input) {
  //Enter your code here

  splited = input.split("\n");
  let even = "";
  let odd = "";

  let array = [];
  for (let i = 1; i < splited.length; i++) {
    array = splited[i];
    for (let j = 0; j < array.length; j++) {
      if (j % 2 == 0) {
        even += array[j];
      } else odd += array[j];
    }
    console.log(even + " " + odd);
    even = "";
    odd = "";
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
