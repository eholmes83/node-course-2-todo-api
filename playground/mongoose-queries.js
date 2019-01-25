const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5c4a29088a01a84974ae50b611';
var user_id = '5c4745afe101352aec50f1ee';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo ', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found')
//     }
//     console.log('Todo by ID ', todo);
// }).catch((e) => console.log(e))

// query users collection
// load in user
// user.findById handle user found/not found/error message


User.findById(user_id).then((user) => {
    if(!user) {
        return console.log('User not found')
    }
    console.log('User by ID ', JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log(e)
})