// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDB server');
    }
    console.log('Connected to MongoDB server!');
    const db = client.db('TodoApp')

// findOneAndUpdate

// db.collection('Todos').findOneAndUpdate({
//     _id: ObjectID("5c45cd856ac40e09c4c1e139")
// }, {
//     $set: {
//         completed: true
//     }
// }, {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result)
// })

// find one and update

db.collection('Users').findOneAndUpdate({
    _id: ObjectID('5c45d3f5dfede140907eb726')
}, {
    $set: {
        user: 'Edward'
    },
    $inc: {
        age: -200
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result)
})

// increment by one

// db.collection('Users').findOneAndUpdate({
//     _id: ObjectID('5c45d3f5dfede140907eb726')
// }, {
//     $inc: {
//         age: 99
//     }
// }, {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result)
// })

    // client.close();
});