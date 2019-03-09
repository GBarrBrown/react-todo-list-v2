const connection = require('./connection')

module.exports = {
    getTodos: getTodos,
}
// write functions below

function getTodos(testDb) {
    const db = testDb || connection

    return db('todos').select()
}