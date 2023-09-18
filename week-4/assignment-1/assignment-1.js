/*=========================================================================
| A. Complete the function below to show a delayed result in the console  |
===========================================================================*/

function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    const result = n1 + n2;
    callback(result);
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

/*=========================================================================
| B. To implement delayedResult again using promise this time             |
===========================================================================*/

function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(n1 + n2), delayTime);
  });
}
delayedResultPromise(4, 5, 1000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

/*=========================================================================
| C. To implement it using async/await this time.                         |
===========================================================================*/
async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  const result = await delayedResultPromise(4, 5, 2000);
  console.log(result);
}
main(); // result will be shown in the console after <delayTime> seconds
