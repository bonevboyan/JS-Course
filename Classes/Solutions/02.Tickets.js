function solve(array, string) {
    class Ticket {
        constructor([destination, price, status]) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let result = [];
    createInfo();
    sortInfo();
    return result;
    function createInfo() {
        for (let line of array) {
            result.push(new Ticket(line.split('|')));
        }
    }
    function sortInfo() {
        result.sort((a, b) =>
            string === 'price'
                ? a[string] - b[string]
                : a[string].localeCompare(b[string])
        )
    }
}