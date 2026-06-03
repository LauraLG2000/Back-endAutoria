const { findAllReviews, createReview } = require('../service/reviewService.js');

const getAllReviews = async (req, res, next) => {
    try {
        const reviews = await findAllReviews();
        res.status(200).json({
            code: 200,
            title: 'success',
            message: 'Reviews retrieved successfully',
            data: reviews
        });
    } catch (error) {
        next(error);
    }
};

const addReview = async (req, res, next) => {
    try {

        const { rating } = req.body;
        if (rating < 1 || rating > 5) {
            return res.status(400).json({
                code: 400,
                title: 'Bad Request',
                message: 'Rating must be between 1 and 5'
            });
        }
        
        const reviewData = req.body;
        await createReview(reviewData);
        res.status(201).json({
            code: 201,
            title: 'success',
            message: 'Review created successfully'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllReviews,
    addReview
};