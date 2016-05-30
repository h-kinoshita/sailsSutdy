/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var HomeController = {

  index: function(req, res) {
    res.view({hello: 'Hello Sails'});
  }
};




module.exports = HomeController;

