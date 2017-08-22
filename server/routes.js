// app/routes.js

import express    from 'express'
import logic      from './logic'

export default (app) => {

    // server routes ===========================================================
    app.get('/',                 logic.getMem)
    app.get('/api/hash/',        logic.getMem)
    app.get('/api/hash/:string', logic.hashOne)

    app.post('/api/hash',        logic.hashMany)

}
