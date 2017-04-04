/**
 * @author Luis Odar Iván Zambrano Paredes
 */
var mongoose = require('mongoose');
var BDAgenda = mongoose.connect('mongodb://localhost/BDAgenda');
module.exports = BDAgenda;