const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const devs = await Dev.find()
        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body
        
        let dev = await Dev.findOne({ github_username })

        if (!dev ) {
            const api_response = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login, avatar_url, bio } = api_response.data
            const teachs_array = parseStringAsArray(techs)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: teachs_array,
                location
            })
        }

        return response.json(dev)
    },

    async update(request, response) {

    },

    async destroy(request, response) {

    }
}