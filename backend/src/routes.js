const { Router } = require('express')
const DevController = require('./controllers/DevController')

const routes = Router()

routes.get('/devs', DevController.index)

routes.get('/devs/:id', (request, response) => {
    // request.params.id
    return response.json({user: []})
})
 
routes.post('/devs', DevController.store)

routes.put('/devs/:id', (request, response) => {
    // request.params.id
    return response.json({msg:'', user:[]})
})

routes.delete('/devs/:id', (request, response) => {
    // request.params.id
    return response.json({msg: '', error: ''})
})


module.exports = routes