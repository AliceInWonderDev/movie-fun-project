const { response } = require('express');
const express = require('express');
const { getMovieById, getMoviesByName } = require('./repositories/omdb')
const app = express();
app.use(express.json());

app.get('/getbyid/:id', async(req, res) => {
    const { id } = req.params
    //response to front
    const response = await getMovieById(id)
    res.json({
        data: response,
    })
})

app.get('/getbyname/:name', async(req, res) => {
    const { name } = req.params
    const response = await getMoviesByName(name)
    res.json({
        data: response,
    })
})

app.listen(1234, () => {
    console.log('is ruuuuuning')
})