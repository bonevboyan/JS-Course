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