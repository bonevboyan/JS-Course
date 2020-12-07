function isOverLimit(arr){
    let speed = arr[0]
    let area = arr[1]
    let limit = 0
    switch(area){
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    if(speed > limit){
        if(speed - limit <= 20){
            console.log('speeding')
        }else if(speed - limit <= 40){
            console.log('excessive speeding')
        }else{
            console.log('reckless driving')
        }
    }
}
isOverLimit([120, 'interstate'])