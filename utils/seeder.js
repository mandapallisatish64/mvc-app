const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const studentData = require('../data/students.json') 
const courseData = require('../data/courses.json')
// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  console.log('START student data seeder.')
  console.log('START course data seeder.')
  const db = {} // empty object to hold all collections

  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method
  db.students = new Datastore() 
  db.students.loadDatabase()
  db.courses = new Datastore() 
  db.courses.loadDatabase() 

  // insert the sample data into our datastore
  db.developers.insert(developerData)
  db.students.insert(studentData)
  db.courses.insert(courseData)
  // initialize app.locals (these objects are available to the controllers)
  app.locals.developers = db.developers.find(developerData)
  app.locals.students = db.students.find(studentData)
  app.locals.courses = db.courses.find(courseData)
  console.log(`${app.locals.developers.query.length} developers seeded`)
  console.log(`${app.locals.students.query.length} students seeded`)
  console.log(`${app.locals.courses.query.length} courses seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}
