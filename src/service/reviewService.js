const db = require('../configuration/database.js').db;

/**
 * Metodo para obtener todas las reseñas de la base de datos.
 * @returns {Promise <Array>} - Devuelve una promesa que resulve en un array de objetos (reseñas).
 */
const findAllReviews = async () => {
    const reviews = await db('review')
        .select(
           '*'
        );
    return reviews;
};

const createReview = async (reviewData) => {
    const { rating, comment, service_id} = reviewData;

    const service = await db('service').where({ id_service: service_id }).first();

    if (!service) {
        throw new Error(`Service with id ${service_id} not found.`);
    }

    const newReview = await db('review').insert({
        rating,
        comment,
        service_id
    });
};

module.exports = {
    findAllReviews,
    createReview
};