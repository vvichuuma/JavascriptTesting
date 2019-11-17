

//Weekly 1.2: 

function double(array) {

    var s = [];

    for (let j = 0; j < array.length; j++) {
        s.push(array[j] * 2);
    }

    return s;

}

module.exports = double;