const db = require("./dbConfig");

async function all() {
  const accounts = await db("accounts");
  return accounts;
}
async function findById(id) {
  const accounts = await db("accounts")
    .where({ id })
    .first();
  return accounts;
}

async function createNewAccount(account) {
  const ids = await db("accounts").insert(account);
  return ids[0];
}

async function update(id, account) {
  const updated = await db("accounts")
    .where({ id })
    .update(account);
}

async function remove(id) {
  const deleted = await db("accounts")
    .where({ id })
    .del();
  return deleted;
}

module.exports = {
  all,
  createNewAccount,
  update,
  remove,
  findById
};
