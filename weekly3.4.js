

//Weekly 3.4 - Palindrome: 

function palindrome(string) {

    var ar = string.split("");
    var l = ar.length;
    var nAr = [];
    for (let i = 0; i < l; i++) {
        nAr.push(ar.pop());
    }

    var rString = nAr.join("");
    if (rString == string) {
        return true;
    } else {
        return false;
    }

}

module.exports = palindrome;