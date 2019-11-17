

//Weekly 6.5 letter With Most A: 

function letterMostA(array) {
    var z = 0;
    var word = "";
    array.forEach((ar) => {
        var c = 0;
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] == 'a') {
                c++;
            }
        }
        if (c > z) {
            z = c;
            word = ar;
        }
    })

    return word;

}


module.exports = letterMostA;
