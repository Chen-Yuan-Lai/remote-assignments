function count(input) {
  let num = {};
  let uni = new Set();
  let length = uni.size;
  input.forEach((el) => {
    uni.add(el);
    if (uni.size > length) {
      num[el] = 1;
      length++;
    } else {
      num[el]++;
    }
  });
  return num;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
  let num = {};
  let uni = new Set();
  let length = uni.size;

  input.forEach((el) => {
    uni.add(el.key);
    console.log(uni.size, length);
    if (uni.size > length) {
      num[el.key] = el.value;
      length++;
    } else {
      num[el.key] += el.value;
    }
  });
  return num;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
