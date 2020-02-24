//  Name: Tommy Cao
//  Date: 4/20/18
//  Description: Sample of Jest JavaScript Testing Framework.

const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Tommy' };
    user['lastName'] = 'Cao';
    return user;
  },
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};

module.exports = functions;
