const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}) (multiple records (all))

// Todo.deleteMany({}).then((results) => {
//     console.log(results)
// })

// Todo.findOneAndRemove
// Todo.findOneAndRemove({_id: '5c50a9a3b795bb40481c28c8'}).then((todo) => {
//     console.log(todo)
// })


// Todo.findByIDAndDelete

Todo.findByIdAndDelete('5c51db2cb795bb40481c28d4').then((todo) => {
    console.log(JSON.stringify(todo))
})

