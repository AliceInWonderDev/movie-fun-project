// consuming OMDb API
const fetch = require('node-fetch');
require('dotenv').config()
// fisrt I am going to set the base URL of the service
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`;

async function getMovieById(id) {
    const url = `${API_URL}i=${id}`
    console.log(url)
    const response = await fetch(url)
    return response.json()
}

async function getMoviesByName(name) {
    const url = `${API_URL}s=${name}`
    const response = await fetch(url)
    return response.json()
}


module.exports = {
    getMovieById,
    getMoviesByName,
}