//Highest Prime Number: 

function highestPrime(num) {

    var primeAr = [];
    var n = 1;
    while (n <= num) {
        let number = 1;
        let count = 0;
        while (number <= n) {
            if (n % number == 0) {
                count++;
            }
            number++;
        }

        if (count == 2) {
            primeAr.push(n);
        }
        n++;
    }

    return primeAr;

}

module.exports = highestPrime; 