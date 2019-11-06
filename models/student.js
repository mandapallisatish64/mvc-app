/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Denise Case <denisecase@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
 
  Given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  Family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  Email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  GPA: {
    type: Number,
    minlength: 1,
    maxlength: 100,
    required: true,
    default: 0.0
  },
  GitHub: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    default: 'https://github.com/'
  },
  Website: {
    type: String,
    minlength: 5,
    maxlength: 12,
    required: true,
    default: 'https://www.google.com/'
  },
  SectionID : {
    type: Number,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 01
  },
  

})
module.exports = mongoose.model('Developer', DeveloperSchema)
