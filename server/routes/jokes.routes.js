const express = require('express')

const {
    handleCreat,
    handleGetAll,
    handleGetOneById,
    handleDeleteOneById,
    handleUpdateOneById,
    handleCreateMany,
} = require('../controllers/jokes.controller');

const router = express.Router();

router.post('/', handleCreat);
router.post('/many', handleCreateMany);
router.get('/all',handleGetAll);
router.get('/:id',handleGetOneById);
router.delete('/:id',handleDeleteOneById);
router.put('/:id',handleUpdateOneById);


module.exports = {jokeRouter:router}