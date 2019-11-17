

//Weekly 4.5 Sum of Range:

function SumOfRange(a, b) {

    var sum = 0;

    if (a < b) {

        while (a <= b) {
            sum += a;
            a++;
        }

    } else if (a > b) {

        while (a >= b) {
            sum += a;
            a--;
        }

    }

    return sum;

}

module.exports = SumOfRange;