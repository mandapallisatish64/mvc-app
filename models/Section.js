const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SectionNumber:
  {
      type: String,
      minlength:2,
      maxlength:5,
      required: true,
      default:'04',
      unique:true
     },
  Days:
  {
      type: String,
      minlength: 6,
      maxlength: 10,
      required: true,
      default:'MWF',
      
  },
  StartTime:
  {
      type: Number,
      minlength: 2,
      maxlength: 10,
      required: true,
      default:1300,
      unique: true
  },
  RoomNumber :
  {
    type: String,
    minlength: 7,
    maxlength: 10,
    required: true,
    default:"CH 1200",  
    unique: true,
  },
  CourseID:
  {
    type: Number,
    required: true,  
  }
})
module.exports = mongoose.model('Developer', DeveloperSchema)
