// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDB server');
    }
    console.log('Connected to MongoDB server!');
    const db = client.db('TodoApp')

// deleteMany
// db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result, err) => {
//     console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
//     console.log(result)
// })


// fineOneAndDelete
//  db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
//      console.log(result)
//  })


// deleteMany to remove duplicates
// db.collection('Users').deleteMany({ user: 'Ed' }).then((result) => {
//     console.log(result)
// })

// delete by ID
// must use ObjectID when deleting using the ID

db.collection('Users').findOneAndDelete({ _id: ObjectID("5c45d3e86562912c5400842e")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
})




    // client.close();
});