const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
rl.on("line", (input) => {
  if (input < 0 || input > 100) {
    console.log("Error, invalid number");
  } else if (input == 100) {
    console.log("100% Completed");
  } else {
    let result = "";
    let num = Math.round(input / 10);
    for (let i = 0; i < num; i++) {
      result = result + "#";
    }
    for (let i = 0; i < 10 - num; i++) {
      result = result + "-";
    }
    console.log("[" + result + "] " + input + "%");
  }
});
