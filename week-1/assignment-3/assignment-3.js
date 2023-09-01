function countAandB(input) {
  const num = [0, 0];
  input.forEach((element) => {
    if (element === "a") {
      num[0]++;
    } else if (element === "b") {
      num[1]++;
    }
  });
  return `${num[0]} 'a' letter${num[0] > 1 ? "" : "s"} and ${
    num[1]
  } 'b' letter${num[1] > 1 ? "" : "s"}`;
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
