console.log(search(["abc","a abc","ABC"],"abc"))
console.log(search(["abc","a abc","ABC"],"a"))
console.log(search(["abc","a abc","ABC"],"D"))

function search(array,value){
    let count = 0;
    for(i = 0;i < array.length;i++){
        if(array[i].includes(value)){
            count++;
        }
    }
    return count;
}