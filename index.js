const express = require('express')
const path = require('path')
const apiMocker = require('mocker-api')


const app = express()
apiMocker(app, path.resolve('./mocker/mocker.js'))
app.get('/', (request, response) => {
    response.status(200)
    response.send('hello express')
    response.send()
})

app.get('/rest', (req,res) => {
    res.json({
        result: 1,
        msg:"hello express"
    })
})

app.listen(5000)