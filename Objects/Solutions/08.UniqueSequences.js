function unique(input) {
    let arrs = [];
    for(let line of input) {
        let arr = JSON.parse(line);
        arrs.push(arr.map(Number).sort((a, b) => b - a));
    }
    for(let i=0; i<arrs.length; i++) {
        for(let j= i+1; j<arrs.length; j++) {
            if(compare(arrs[i], arrs[j])){
                arrs.splice(j, 1);
                j--;
            }
        }
    }
    arrs.sort((a, b) => a.length - b.length);
    arrs.forEach(a => console.log("[" + a.join(", ") + "]"));
    function compare(arr1, arr2) {
        if(arr1.length != arr2.length) {
            return false;
        } else {
            for(let i=0; i<arr1.length; i++) {
                if(arr1[i] != arr2[i]){
                    return false;
                }
            }
            return true;
        }
    }
}