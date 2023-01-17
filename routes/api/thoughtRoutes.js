const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    newThought,
    deleteThought,
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(newThought);

router.route('/:thoughtId').get(getOneThought).delete(deleteThought);

module.exports = router;