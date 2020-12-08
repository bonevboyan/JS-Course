function cars(input) {
    let cars = new Map();
    for (const line of input) {
        let [brand, model, produced] = line.split(' | ');
        if (!cars.has(brand)) {
            cars.set(brand, new Map());
        }
        let models = cars.get(brand);
        if (!models.has(model)) {
            models.set(model, 0);
        }
        models.set(model, models.get(model) + Number(produced));
    }
    for (const brand of cars.keys()) {
        console.log(brand);
        let models = cars.get(brand);
        for (const model of models.keys()) {
            console.log(`###${model} -> ${models.get(model)}`);
        }
    }
}
cars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);