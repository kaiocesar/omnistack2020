const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body
        const api_response = await axios.get(`https://api.github.com/users/${github_username}`)
        const { name = login, avatar_url, bio } = api_response.data
        const teachs_array = techs.split(',').map(tech => tech.trim())
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: teachs_array,
            location
        })
    
        return response.json(dev)
    }    
}