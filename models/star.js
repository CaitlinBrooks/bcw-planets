let mongoose = require('mongoose')
let Schema = mongoose.Schema
let SchemaName = 'Star'


let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No description included'
  }
})

module.exports = mongoose.model(SchemaName, schema)