console.log(calc(10,5,"x"))
console.log(calc(10,5))
console.log(calc(10,0,"/"))
console.log(calc(10,0,"%"))
console.log()
console.log(calc(10,5,"-"))
console.log(calc(10,5,"/"))

function calc(a,b,operator = "+"){
    switch(operator){
        case "x":
            return a * b;
        case "/":
            if(b === 0) return "ERROR";
            return a / b;
        case "+":
            return a + b;
        case "-":
            return a - b;
        default: return "ERROR"
    }

  
}
