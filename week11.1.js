

//This is Week 11 problem 1: 

function repeatElement(array) {

    var h = {};
    for (let i = 0; i < array.length; i++) {
        if (h[array[i]]) {
            h[array[i]]++;
        } else {
            h[array[i]] = 1;
        }
    }

    for (let j = 0; j < array.length; j++) {
        if (h[array[j]] == 1) {
            return array[j];
        };
    }

}

module.exports = repeatElement;