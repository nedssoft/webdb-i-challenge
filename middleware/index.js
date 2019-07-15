const { ErrorHandler } = require("../helpers");

const validateAccount = (req, res, next) => {
  try {
    const { name, budget } = req.body;
    if (!name || !budget) {
      throw new ErrorHandler(400, "Missing required fields");
    } else if(!Number(budget)) {
      throw new ErrorHandler(400, "Invalid value entered for budget");
    }
    next()
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateAccount
}
