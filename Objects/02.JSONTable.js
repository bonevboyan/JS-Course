function htmlify(input){
    console.log('<table>')
    input.forEach(element => {
        console.log('\t<tr>')
        let obj = JSON.parse(element)
        let objectValues = Object.values(obj);
        objectValues.forEach(value => {
            console.log(`\t\t<td>${value}</td>`)
        });
        //console.log(obj["name"]);
        console.log('\t</tr>')
    });
    console.log('</table>')
}
htmlify(['{"name":"Pesho","position":"Promenliva","salary":100000}','{"name":"Teo","position":"Lecturer","salary":1000}','{"name":"Georgi","position":"Lecturer","salary":1000}']);