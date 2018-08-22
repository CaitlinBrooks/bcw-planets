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
let planetRoutes = require('./routes/planets')
let moonRoutes = require('./routes/moons')

server.use('/api/galaxies', galaxyRoutes)
server.use('/api/stars', starRoutes)
server.use('/api/planets', planetRoutes)
server.use('/api/moons', moonRoutes)


server.listen(port, () => {
  console.log('Listening on port', port)
})
