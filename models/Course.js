
const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SchoolNumber:
  {
      type: String,
      minlength: 02,
      maxlength: 05,
      default: '44',
      required: true,
      unique: true,
  },
  CourseNumber:
  {
      type: String,
      minlength:3,
      maxlength:5,
      default: '563',
      required: true,
      unique: true,
  },
  Name:
  {
      type: String,
      minlength:3,
      maxlength:50,
      default: 'Developing Web Apps and Services',
      required: true,
      unique:true
  },
  inSpring: {
      type:Boolean,

  },
  inSummer: {
    type:Boolean, 
  },
  inFall: {
    type:Boolean,  
  }
})
  module.exports = mongoose.model('Developer', DeveloperSchema)
