function juicer(input){
    let juices = [];
    input.forEach(element => {
        let elements = element.split(' => ');
        let name = elements[0];
        let quantity = Number( elements[1] );
        if(name in juices){
            juices[name] += quantity;
        }else{
            //let juice = {name, quantity}
            juices[name] = quantity
        }
    });
    for (var key in juices) {
        if (juices.hasOwnProperty(key)) {
            if(juices[key] >= 1000)
            console.log(key + " => " + Math.floor(juices[key]/1000));
        }
    }
}
juicer(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);