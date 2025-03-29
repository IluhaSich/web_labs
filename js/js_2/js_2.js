// const readline = require("node:readline");
// const { stdin: input, stdout: output } = require("node:process");

// const rl = readline.createInterface({ input, output });
// rl.on("line", (input) => {
//   let arr = input.split(",")
//   for(let i = 0;i < arr.length; i++){
//     if(arr[i] > 0){
//         arr[i] = arr[i] - i;
//     } else if(arr[i] == 0){arr[i] = parseInt(arr[i])}
//     else arr[i] = parseInt(arr[i]) + i;

//   }
//   console.log(arr)
//   }
// );
// 1,2,3,-4,-5,-6,0,0

function task2(arr) {
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = arr[i] - i;
    } else if (arr[i] === 0) {
      arr[i] = parseInt(arr[i]);
    } else arr[i] = parseInt(arr[i]) + i;
  }
  return arr
}
console.log(task2([3,3,3]))
console.log(task2([-3,-3,-3]))
console.log(task2([-5,11,3,0,-2]))
