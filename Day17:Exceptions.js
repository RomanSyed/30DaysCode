process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

//Write your code here
class Calculator {

    power(n, p) {
        let result = 1;
        try {
            if (n < 0 || p < 0) throw 'n and p should be non-negative'
                for (let i = 1; i <= p; i++) {
                   result = result * n;
            } return result; 
        } catch (e) {
            return e;
                }
    
    }
}

function main(){
