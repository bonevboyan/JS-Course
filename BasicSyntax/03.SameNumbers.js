function sameNums(num){
    let f = true;
    let ch = num % 10;
    let sum = ch;
    for(let i = Math.floor(num / 10); i != 0; i = Math.floor(i/10)){
        sum += i % 10;
        if(i % 10 != ch){
            f = false;
        }
    }
    console.log(f)
    console.log(sum)
}
sameNums(4444);