const router = require('express').Router();
const { getAllThought, getThoughtById, addThought, addReaction, updateThought, removeReaction, removeThought } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought);
    
router
    .route('/:thoughtId')
    .get(getThoughtById);

router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction);

router 
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;