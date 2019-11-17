

//Weekly 2.4. reverse a string: 

function reversed(string) {

    var l = string.length;
    var oldAr = string.split("");
    var nAr = [];
    for (let j = 0; j < l; j++) {
        nAr.push(oldAr.pop());
    }

    var rString = nAr.join("");
    return rString;

}

module.exports = reversed;