//This is to test async functions:
var axios = require("axios");

const fetchUser = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.data)
    .catch(err => "error");
};

const fetchUser2 = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/2")
    .then(res => res.data)
    .catch(err => "error");
};

module.exports.fetchUser = fetchUser;
module.exports.fetchUser2 = fetchUser2;
