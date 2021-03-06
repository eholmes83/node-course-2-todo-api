


require('./config/config')
const express = require('express');
const _= require('lodash');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');


var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();
var port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }, (e) => {
        res.status(400).send(e)
    });
});


app.get('/todos/:id', (req, res) => {
    var id = req.params.id

    if(!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
           return res.status(404).send()
        }
        res.send({ todo })
    }).catch((e) => {
        res.status(400).send();
    })
}) 

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id

    if(!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    Todo.findByIdAndDelete(id).then((todo) => {
        if(!todo) {
            return res.status(404).send() 
        }
        res.send({ todo })
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id
    var body = _.pick(req.body, ['text', 'completed'])

    if(!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findOneAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        if(_.isBoolean(body.completed) && body.completed) {
            body.completedAt = new Date().getTime();
        } else {
            body.completed = false;
            body.completedAt = null;
        }
        res.send({ todo })
    }).catch((e) => {
        res.status(400).send();
    })
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = { app };