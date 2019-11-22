//This is the code for testing promises
// and responses:

const axios = require("axios");

const Promisez = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users/2");
};

//This function is gonna give out
// a response from an axios request.

module.exports = Promisez;
