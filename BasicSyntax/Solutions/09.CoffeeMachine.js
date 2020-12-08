function coffee(arr){
    let totalIncome = parseFloat(0);
    for (let i = 0; i < arr.length; i++) {
        let drink = arr[i].split(', ')
        let price = 0.0;
        let coins = parseFloat(drink[0])
        switch(drink[1]){
            case 'coffee':
                if(drink[2] == 'decaf'){
                    price = 0.9;
                }else{
                    price = 0.8;
                }
                break;
            case 'tea':
                price = 0.8;
                break;
        }

        if(drink.includes('milk')){
            let priceAdd = parseFloat(price * 0.1);
            price += parseFloat((Math.round(priceAdd * 10)).toFixed(1))/10;
        }
        if(parseFloat(parseInt(drink[drink.length - 1])) > 0){
            price +=  0.1; 
        }
        if(price > coins){
            let difference  = price - coins;
            console.log(`Not enough money for ${drink[1]}. Need $${difference.toFixed(2)} more.`);
        }else{
            let change  = coins - price;
            console.log(`You ordered ${drink[1]}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
            totalIncome += price;
        }
    }
    console.log(`Income Report: $${totalIncome.toFixed(2)}`)
}