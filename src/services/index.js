'use strict';
const user = require('./user');

const address = require('./address');
var authentication = require('feathers-authentication');

const Sequelize = require('sequelize');
let FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function() {
  const app = this;
  
  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: false
  });
  app.set('sequelize', sequelize);
  //app.configure(authentication);
  app.configure(authentication({
    facebook: {
      strategy: FacebookStrategy,
      'clientID': '1445281295502297',
      'clientSecret': 'd1cc8b602e74b4fc0666edcc0fe0dbb2',
      'permissions': {
        authType: 'rerequest',
        'scope': ['public_profile', 'email']
      }
    }
  }));
  app.configure(user);
  app.configure(address);
  app.get('/auth/success', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'success.html'));
  });



};


