function sort(array, arg){
    array.sort((a,b) => a-b);
    switch (arg) {
        case "asc":
            console.log(array)
            break;
        case "desc":
            console.log(array.reverse())
            break;
    }
}