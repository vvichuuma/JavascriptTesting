
//Weekly_1.1: 

function sum(array) {

    var s = 0;
    for (let i = 0; i < array.length; i++) {
        s += array[i];
    }

    return s;

}

module.exports = sum;