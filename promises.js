//Promises:

function promize() {
  return new Promise((resolve, reject) => {
    var x = 2;
    if (x > 5) {
      resolve(x + " It is greater");
    } else {
      reject(x + " IT is not greater, it's smaller");
    }
  });
}

promize()
  .then(m => {
    console.log(m);
  })
  .catch(m => {
    console.log(m);
  });
