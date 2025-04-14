console.log(salary("13",100))
console.log(salary("10%",100,200))
console.log(salary("10%",[100,200]))
console.log(salary("10%",[100,200],100,200))
console.log(salary(100))
console.log(salary("13%"))

function salary(tax, ...payments){
    if (tax === undefined || payments.length === 0) {
        return "ERROR";
    }
    let taxPercent ;
    if(tax.includes("%")){
          taxPercent = tax.slice(0,-1);
        }
    else{
        return "ERROR"
    }
    let result = [];
    for (const payment of payments) {
        if (Array.isArray(payment)) {
            for (const amount of payment) {
                if (typeof amount !== 'number') {
                    return "ERROR";
                }
                result.push(amount * (100 - taxPercent) / 100);
            }
        } else if (typeof payment === 'number') {
            result.push(payment * (100 - taxPercent) / 100);
        } else {
            return "ERROR";
        }
    }
    return result;
}
