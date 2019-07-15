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

module.exports = {
  getAllAccounts
}