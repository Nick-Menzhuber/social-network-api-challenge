const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    newThought,
    deleteThought,
    updateThought,
    newReaction,
    removeReaction
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(newThought);

router.route('/:thoughtId').get(getOneThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reactions').post(newReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;