function GCP(num1, num2){
    for(let i = Math.min(num1, num2); i >= 1; i--){
        if(num1%i == 0 && num2%i == 0){
            console.log(i)
            return
        }
    }
}
GCP(2154, 458);