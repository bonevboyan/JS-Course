function solve(input) {
    let gladiators = {};
    [...input].forEach(e => {
        if(e.includes('vs')) {
            let [gladiator1, gladiator2] = e.split(' vs ');
            if(gladiators[gladiator1] && gladiators[gladiator2]) {
                if(Object.keys(gladiators[gladiator1]).find(e => Object.keys(gladiators[gladiator2]).includes(e))) {
                    let total1 = Object.keys(gladiators[gladiator1]).reduce((acc, curr) => acc += gladiators[gladiator1][curr], 0);
                    let total2 = Object.keys(gladiators[gladiator2]).reduce((acc, curr) => acc += gladiators[gladiator2][curr], 0);
                    if(total1 < total2) delete gladiators[gladiator1];
                    else if(total2 < total1) delete gladiators[gladiator2];
                }
            }
        } 
        else {
            let [name, technique, skill] = e.split(' -> ');
            skill = Number(skill);
            if(!gladiators[name]) {
                gladiators[name] = {};
                gladiators[name][technique] = skill;
            } 
            else {
                if(!gladiators[name][technique]) {
                    gladiators[name][technique] = skill;
                } 
                else {
                    if(gladiators[name][technique] < skill)
                        gladiators[name][technique] = skill;
                }
            }
        }
    });

    console.log(Object.keys(gladiators).sort((a,b) => {
        let total1 = Object.keys(gladiators[a]).reduce((acc, curr) => acc += gladiators[a][curr], 0);
        let total2 = Object.keys(gladiators[b]).reduce((acc, curr) => acc += gladiators[b][curr], 0);
        if(total1 == total2) return a.localeCompare(b);
        else return total2 - total1;
    }).map(e => {
        let totalSkill = Object.keys(gladiators[e]).reduce((acc, curr) => acc += gladiators[e][curr], 0);
        let str = `${e}: ${totalSkill} skill`;
        Object.keys(gladiators[e]).sort((a,b) => gladiators[e][b] - gladiators[e][a]).forEach(e1 => {
            str += `\n- ${e1} <!> ${gladiators[e][e1]}`;
        })
        return str;
    }).join('\n'));
}