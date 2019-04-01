// Require Mongoose
var mongoose = require('mongoose');
// require the connection
// var db = require("../public/javascripts/connection");
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
      // 'img' is optional and of type String
  img: {
    type: String
    },
  
note: [{
    // Saves array of notes
    type: Schema.Types.ObjectId,
    ref: "note"
  }]
});

// Create the article model with the articleSchema
var Article = mongoose.model("article", articleSchema);
// console.log(article);

// Export the model
module.exports = Article;