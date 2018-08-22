let mongoose = require('mongoose')
let Schema = mongoose.Schema
let SchemaName = 'Galaxy'


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