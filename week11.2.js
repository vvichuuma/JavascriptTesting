

//Week 11 - THis is problem_2: 

//First repeating Element: 

function firstRepeatElement(array) {

    var h = {};
    for (let i = 0; i < array.length; i++) {
        if (h[array[i]]) {
            return array[i];
        } else {
            h[array[i]] = 1;
        }
    }

}

module.exports = firstRepeatElement; 