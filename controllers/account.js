const { ErrorHandler } = require('../helpers')
const {
  all,
  createNewAccount,
  update,
  remove,
  findById
} = require('../data/accounts')

const getAllAccounts = async (req, res, next) => {
  const accounts = await all();
  return res.status(200).json({ status: 'OK', accounts})
}

const createAccount = async (req, res, next) => {
  try {
    const id  = await createNewAccount(req.body)
  if(id) {
   const account = await findById(id)
    return res.status(201).json({
      status: 'OK',
      account
    })
  }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = {
  getAllAccounts,
  createAccount
}