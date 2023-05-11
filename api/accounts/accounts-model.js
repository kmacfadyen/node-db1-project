const db = require('../../data/db-config')

const getAll = () => {
  // Select * from accounts; but in query builder
  return db('accounts');
}

const getById = id => {
  // Select * from accounts where id = 1
  return db('accounts').where('id', id).first()
}

const create = account => {
}

const updateById = (id, account) => {
}

const deleteById = id => {
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
