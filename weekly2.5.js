

//Weekly 2.5: Longest Word: 

function Longest(string) {

    var array = string.split(" ");
    var z = 0;
    var fWord = "";
    array.forEach((word) => {
        if (word.length > z) {
            z = word.length;
            fWord = word;
        }
    })

    return fWord;

}

module.exports = Longest;