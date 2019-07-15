const { Router } = require('express')
const { getAllAccounts, createAccount, deleteAccount} = require('../controllers/account')
const { validateAccount } = require('../middleware')
const router = Router()

router.get('/accounts', getAllAccounts)
router.post('/accounts', validateAccount, createAccount)
router.delete('/accounts/:id', deleteAccount)
module.exports = router

