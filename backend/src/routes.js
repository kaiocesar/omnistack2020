const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const routes = Router()

routes.get('/devs', (request, response) =>{
    return response.json({devs: []})
})

routes.get('/devs/:id', (request, response) => {
    // request.params.id
    return response.json({user: []})
})

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body

    const api_response = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name = login, avatar_url, bio } = api_response.data

    const teachs_array = techs.split(',').map(tech => tech.trim())

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: teachs_array
    })

    return response.json(dev)
})

routes.put('/devs/:id', (request, response) => {
    // request.params.id
    return response.json({msg:'', user:[]})
})

routes.delete('/devs/:id', (request, response) => {
    // request.params.id
    return response.json({msg: '', error: ''})
})


module.exports = routes