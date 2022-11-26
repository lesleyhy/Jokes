const { Joke } = require('../models/jokes.model');

const create = async (data) => {
  console.log('service: create a Joke');

  const joke = await Joke.create(data);
  return joke;
};

const getAll = async () => {
  const jokes = await Joke.find();
  return jokes;
};

const getOneById = async (id) => {
  const joke = await Joke.findById(id);
  return joke;
};

const deleteOneById = async (id) => {
  const joke = await Joke.findByIdAndDelete(id);
  return joke;
};

const updateOneById = async (id, data) => {
  const joke = await Joke.findByIdAndUpdate(id, data, {
    // validations
    runValidators: true,
    new: true,
  });
  return joke;
};

// const deleteOneById2 = async (id) => {
//   // findByIdAndDelete performs both tasks together for us, without it, it
//   // would look like this.

//   // Or reuse our findDestinationById function.
//   const foundDestination = await Destination.findById(id);

//   if (foundDestination === null) {
//     return null;
//   }

//   const deletedDestination = await foundDestination.remove();
//   return deletedDestination;
// };

// Not needed on exam, used to load lot's of data so we can travel.
const createMany = async (documents) => {
  // Don't await inside a loop, it will delay iteration.
  const createPromises = documents.map((document) =>
    create(document)
  );
  // The one resulting promise will be awaited by the caller of this function.
  return Promise.allSettled(createPromises);
};

// Export all the service functions in an object.
module.exports = {
  // long-form - key: value
  create: create,
  //shorthand
  getAll,
  getOneById,
  deleteOneById,
  updateOneById,
  createMany,
};