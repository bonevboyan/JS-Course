function sort(names){
    let namesSorted = Array.from(names).sort((n1, n2) => sortNames(n1, n2));
    for(let name of namesSorted) {
        console.log(name);
    }
    function sortNames(n1, n2) {
        if(n1.length != n2.length) {
            return n1.length - n2.length;
        } else {
            return n1.toLowerCase().localeCompare(n2.toLowerCase());
        }
    }
}
sort(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']);