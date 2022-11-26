const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema(
  {
    setUp: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [10, '{PATH} must be at least {MINLENGTH} characters.'],
    },
    punchline: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
    },
    // Checkboxes look like
    // summer: {
    //   type: Boolean,
    //   default: false,
    // },
    // winter: {
    //   type: Boolean,
    //   default: false,
    // },
    // spring: {
    //   type: Boolean,
    //   default: false,
    // },
    // fall: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  { timestamps: true } // createdAt and updatedAt.
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Joke = mongoose.model('Joke', JokeSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Joke: Joke };