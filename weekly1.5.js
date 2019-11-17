
//Weekly 1.5:

function average(array) {

    var l = array.length;
    var s = 0;

    for (let j = 0; j < array.length; j++) {
        s += array[j];
    }

    var avg = (s / l);

    return avg;

}

module.exports = average; 