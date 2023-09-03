function countAandB(input) {
  let num = 0;
  input.forEach((element) => {
    if (element === "a" || element === "b") num++;
  });
  return num;
}

function toNumber(input) {
  return input.map((element) => element.charCodeAt(0) - 96);
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1));
console.log(toNumber(input1));
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2));
console.log(toNumber(input2));
