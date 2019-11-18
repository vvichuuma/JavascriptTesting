

function sortByAge(array) {

    var finalAr = array.sort((a, b) => a.age - b.age);
    return finalAr;
}

module.exports = sortByAge; 