const express = require('express')
const axios = require('axios')
const cors = require('cors')

const {randomBytes} = require ('crypto')
const router = require('../posts/router/index')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(router)

app.listen(4000, ()=>{
    console.log('listening 4000')
})