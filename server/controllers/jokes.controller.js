const {
    create,
    getAll,
    getOneById,
    deleteOneById,
    updateOneById,
    createMany,
} = require('../services/jokes.service');

const handleCreat = async (req, res) =>{
    console.log('controller:',req.body)

    try {
        const joke = await create(req.body);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAll = async (req, res) => {
    try {
        const jokes = await getAll();
        return res.json(jokes);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetOneById = async (req, res) => {
    try {
        const joke = await getOneById(req.params.id);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleDeleteOneById = async (req, res) => {
    try {
        const joke = await deleteOneById(req.params.id);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleUpdateOneById = async (req, res) => {
    try {
        const joke = await updateOneById(req.params.id, req.body);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleCreateMany = async (req, res) => {
    try {
        if (Array.isArray(req.body) === false) {
        throw new Error('The request body must be an array.');
        }

        const settledOutcomes = await createMany(req.body);
        return res.json(settledOutcomes);
    } catch (error) {
        return res.status(400).json(error);
    }
};


module.exports = {
    handleCreat : handleCreat,
    handleGetAll,
    handleGetOneById,
    handleDeleteOneById,
    handleUpdateOneById,
    handleCreateMany,
};