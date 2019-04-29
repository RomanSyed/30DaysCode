"use strict";

var _input = "";
var _index = 0;
process.stdin.on("data", data => {
  _input += data;
});
process.stdin.on("end", () => {
  _input = _input.split(new RegExp("[ \n]+"));
  main();
});
function read() {
  return _input[_index++];
}

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, secondName, id, scores) {
    super(firstName, secondName, id);
    this.scores = scores;
  }
  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum = sum + this.scores[i];
    }
    let grades = sum / this.scores.length;
    if (grades >= 90 && grades <= 100) {
      return "O";
    } else if (grades >= 80 && grades <= 90) {
      return "E";
    } else if (grades >= 70 && grades <= 80) {
      return "A";
    } else if (grades >= 55 && grades <= 70) {
      return "P";
    } else if (grades >= 40 && grades <= 55) {
      return "D";
    } else {
      return "T";
    }
  }
}

function main() {
  let firstName = read();
  let lastName = read();
  let id = +read();
  let numScores = +read();
  let testScores = new Array(numScores);

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read();
  }

  let s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log("Grade: " + s.calculate());
}
