const User = require('../models/User');

exports.home = (req, res) => {
  res.render('index');
};

exports.search = (req, res) => {
  res.send('Implementar SEARCH');
};

/*


const User = require('../models/User');
// controllers/index.js
exports.home = (req, res) => {
  User.find().sort('id').exec((err, users) => {
    for (let user of users) {
      user.age = Math.trunc((new Date() - user.birthday) / 31536000000);
    }
    res.render('index', { users: users });
  });
};

exports.search = (req, res) => {
  res.send('Implementar SEARCH');
};


*/