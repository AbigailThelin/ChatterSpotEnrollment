var express = require('express')
    bodyParser = require('body-parser')
    app = express()
    massive= require("massive")
    config = require('./config.js')
    port= config.port
    cors = require('cors')
    passport = require('passport')
    Auth0Strategy = require('passport-auth0')
    session = require('express-session')
    stripe = require('stripe')(config.secret_key),
    path = require('path')

    