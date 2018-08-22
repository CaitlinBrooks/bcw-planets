let express = require('express')
let bp = require('body-parser')
require('./dbconfig/db-config')
let port = 3000
let server = express()
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))


let galaxyRoutes = require('./routes/galaxies')
let starRoutes = require('./routes/stars')

server.use('/api/galaxies', galaxyRoutes)
server.use('/api/stars', starRoutes)






server.listen(port, () => {
  console.log('Listening on port', port)
})
