
//Weekly 6.2: 

//slice - It is used for string. 
//splice - It is used in for array.
// ar = [1,2,3,4,5]; 
//ar.splice('index','how many ele to del', 'things to insert'); 
//ar.slice(start, end);

function capitalize(array) {
    var newAr = [];
    array.forEach((ar) => {
        if (ar.split(" ").length > 1) {
            var a = ar.slice(0, 1).toUpperCase() + ar.slice(1);
            newAr.push(a);
        } else {
            newAr.push(ar);
        }
    })

    return newAr;

}

module.exports = capitalize; 