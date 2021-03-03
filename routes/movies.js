const express = require('express');
const {
    moviesMock
} = require('../utils/mocks/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router);

    router.get("/", async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    });


    router.get("/:movieId", async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movies,
                message: 'Movie retrieve'
            })
        } catch (error) {
            next(error)
        }
    });

    router.post("/:movieId", async function (req, res, next) {
        try {
            const createMovie = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createMovie,
                message: 'Create movie'
            })
        } catch (error) {
            next(error)
        }
    });

    router.put("/:movieId", async function (req, res, next) {
        try {
            const updateMovie = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: updateMovie,
                message: 'Movie updated'
            })
        } catch (error) {
            next(error)
        }
    });


}


module.exports = moviesApi;