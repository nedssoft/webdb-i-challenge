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
    next(error)
  }
}

const deleteAccount = async (req, res, next) => {
  const { id } = req.params
  try {
    const account = await findById(id)
    if (account) {
      const deleted = await remove(id);
      if (deleted) {
        return res.status(200).json({
          message: 'Account with the specified ID has been deleted'
        })
      }
    } else {
      throw new ErrorHandler(404, 'Account with the specified ID does not exist')
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = {
  getAllAccounts,
  createAccount,
  deleteAccount
}