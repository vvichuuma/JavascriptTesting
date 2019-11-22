//async await:

function code1(location) {
  console.log("THis is code 1 ");
  return new Promise((resolve, reject) => {
    if (location == "Google") {
      resolve("Since it is google, it searches");
    } else {
      reject("It is not google");
    }
  });
}

async function doWork() {
  try {
    const res = await code1("Facebook");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

doWork();
