function kcalObj(arr){
    let outp = [arr.length/2];
    for(let i = 0; i < arr.length; i+=2){
        outp[i/2] = `${arr[i]}: ${arr[i+1]}`
    }
    console.log(`{ ${outp.join(', ')} }`)
}
kcalObj(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42])