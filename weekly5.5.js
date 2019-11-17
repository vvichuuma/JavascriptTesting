

//Week 5.5 Missing Alphabet: 

function alpha(string) {

    var l = string.length;
    var a = [], i = string[0].charCodeAt(0), j = string[l - 1].charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }

    var mArray = [];
    for (let z = 0; z < a.length; z++) {
        if (!string.includes(a[z])) {
            mArray.push(a[z]);
        }
    }

    return mArray;
}

module.exports = alpha; 