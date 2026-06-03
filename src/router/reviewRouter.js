const express = require('express');
const router = express.Router();

const { getAllReviews, addReview } = require("../controller/reviewController");

//Rutas
router.get('/', getAllReviews);
router.post('/', addReview);

module.exports = router;