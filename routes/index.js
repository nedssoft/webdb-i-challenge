const { Router } = require('express')
const { getAllAccounts} = require('../controllers/account')

const router = Router()

router.get('/accounts', getAllAccounts)

module.exports = router

