

//This is Weekly 4.4: 

function mutation(a, b) {
    var ar = b.split("");
    var l = b.length;
    var count = 0;
    for (let i = 0; i < l; i++) {
        if (a.includes(ar[i])) {
            count++;
        }
    }

    if (count == l) {
        return true;
    } else {
        return false;
    }
}

module.exports = mutation;