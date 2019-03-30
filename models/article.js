// Require Mongoose
var mongoose = require('mongoose');
// require the connection
var db = require("../javascript/connection");
// Create a Schema Class
var Schema = mongoose.Schema;

// Create article model with articaleSchema
var articleSchema = new Schema({
  // title string
  title: 
  {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  // link string
  link: 
  {
    type: String,
    required: true,
    unique: true
  },
  
note: [{
    // Saves array of notes
    type: Schema.Types.ObjectId,
    ref: "note"
  }]
});

// Create the article model with the articleSchema
var article = mongoose.model("article", articleSchema);

// Export the model
module.exports = article;