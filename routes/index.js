const { Router } = require('express')
const { getAllAccounts, createAccount} = require('../controllers/account')
const { validateAccount } = require('../middleware')
const router = Router()

router.get('/accounts', getAllAccounts)
router.post('/accounts', validateAccount, createAccount)
module.exports = router

