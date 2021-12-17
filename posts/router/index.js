const router = require('express').Router()
const controller = require('../controller/index')

router.get('/test',controller.getData)
router.post('/test',controller.postData)
router.get('/test/:id',controller.getDetail)

module.exports = router