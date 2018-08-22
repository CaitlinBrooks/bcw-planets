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
server.use('/api/galaxies', galaxyRoutes)





server.listen(port, () => {
  console.log('Listening on port', port)
})
