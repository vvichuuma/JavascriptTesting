
//SPlit array - Weekly 3.5: 

function splitArray(array, b) {

    var newAr = [];
    while (array.length != 0) {
        var a = array.splice(b);
        newAr.push(array);
        array = a;
    }

    return newAr;
}

module.exports = splitArray;