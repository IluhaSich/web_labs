const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
rl.on("line", (input) => {
  let arr = input.split(",")
  console.log(arr)
  for(let i = 0;i < arr.length; i++){
    if(arr[i] >= 0){
        console.log(arr[i])
    }
  }
  }
);