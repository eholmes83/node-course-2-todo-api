// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDB server');
    }
    console.log('Connected to MongoDB server!');
    const db = client.db('TodoApp')

// Query to get all todos
    
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

// Query to get completed todos

    // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

// Query to get todos by id

    // db.collection('Todos').find()
    //         .count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

// Query to get count of users with name of Ed

    // db.collection('Users').find({user: 'Ed'}).count().then((count) => {
    //     console.log(`Users count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to find users with ', err)
    // })

// Query to print users with name of Ed

    db.collection('Users').find({user: 'Ed'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    })

 
 
   
    // client.close();
});