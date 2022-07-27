const express = require('express')
const morgan = require('morgan')
const debug = require('debug')('elice')
const app = express()
const PORT = process.env.PORT || 3002

// disable etag generation
app.set("etag", false)
