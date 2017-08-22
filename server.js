// server.js

// modules =================================================
import express        from 'express'
import morgan         from 'morgan'
import routes         from './server/routes'
import bodyParser     from 'body-parser'
import methodOverride from 'method-override'

// configuration ===========================================
var app   = express()
var port  = process.env.PORT || 3333

//  middleware =============================================
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(morgan('dev'))

// routes ==================================================
routes(app)

// start app ===============================================
app.listen(port)

console.log('\r\nMagic happens on port ' + port)
console.log(new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
}))

// expose app ==============================================
export default app;


// npm start
// webpack --progress --colors --watch
