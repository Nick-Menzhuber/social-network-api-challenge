const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    newThought,
    deleteThought,
    updateThought,
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(newThought);

router.route('/:thoughtId').get(getOneThought).delete(deleteThought).put(updateThought);

module.exports = router;