const { Router } = require("express");
const {
  getAllAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
  getAccountById
} = require("../controllers/account");
const { validateAccount } = require("../middleware");
const router = Router();

router.get("/accounts", getAllAccounts);
router.post("/accounts", validateAccount, createAccount);
router.delete("/accounts/:id", deleteAccount);
router.put("/accounts/:id", validateAccount, updateAccount);
router.get("/accounts/:id", getAccountById);

module.exports = router;
