const { ErrorHandler } = require("../helpers");
const {
  all,
  createNewAccount,
  update,
  remove,
  findById
} = require("../data/accounts");

const getAllAccounts = async (req, res, next) => {
  const accounts = await all();
  return res.status(200).json({ status: "OK", accounts });
};

const createAccount = async (req, res, next) => {
  try {
    const id = await createNewAccount(req.body);
    if (id) {
      const account = await findById(id);
      return res.status(201).json({
        status: "OK",
        account
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteAccount = async (req, res, next) => {
  const { id } = req.params;
  try {
    const account = await findById(id);
    if (account) {
      const deleted = await remove(id);
      if (deleted) {
        return res.status(200).json({
          message: "Account with the specified ID has been deleted"
        });
      }
    } else {
      throw new ErrorHandler(
        404,
        "Account with the specified ID does not exist"
      );
    }
  } catch (error) {
    next(error);
  }
};

const updateAccount = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updated = await update(id, req.body);
    if (updated) {
      return res.status(200).json({
        message: "account with the specified ID has been updated"
      });
    } else {
      throw new ErrorHandler(
        500,
        "Could not update the account with the specified ID"
      );
    }
  } catch (error) {
    next(error);
  }
};

const getAccountById = async (req, res, next) => {
  try {
    const account = await findById(req.params.id);
    if (account) {
      return res.status(200).json({
        message: 'OK',
        account
      })
    } else {
      throw new ErrorHandler(400, 'Account with the specified ID does not exist')
    }
  } catch (error) {
    next(error)
  }
}
module.exports = {
  getAllAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
  getAccountById
};
