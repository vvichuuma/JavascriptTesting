
//Weekly 6.4: Isprime; 

function isPrime(num) {

    var n = 1;
    var count = 0;
    while (n <= num) {
        if (num % n == 0) {
            count++;
        }
        n++;
    }

    if (count == 2) {
        return true;
    } else {
        return false;
    }

}

module.exports = isPrime;