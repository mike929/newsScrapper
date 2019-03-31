// Require mongoose
var mongoose = require("mongoose");
// require the connection
var db = require("../public/javascripts/connection");


// Create a schema class
var Schema = mongoose.Schema;
// Create the note schema
var noteSchema = new Schema({
  // Just a string
  body: {
    type: String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Article model

// Create the Note model with the NoteSchema
var note = mongoose.model("note", noteSchema);

// Export the Note model
module.exports = note;