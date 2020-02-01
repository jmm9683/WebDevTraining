var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken');


app.use(bodyParser.json());
app.use(cors());

var messages = [{text: 'some test', owner: 'Tim'}, 
                {text: 'some test', owner: 'Bryan'},
                {text: 'slayer', owner: 'Dragon'},];
var users = [{firstName: 'a', email: 'a', password: 'a', id: 0}];

var api = express.Router();

var auth = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
})

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);

    res.json(result);
})

api.post('/message', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
})

auth.post('/login', (req,res) =>{
    var user = users.find(user => user.email == req.body.email);

    if(!user)
        sendAuthError(res);

    if (user.password == req.body.password)
        sendToken(user,res);
    else
        sendAuthError(res);

})

auth.post('/register', (req,res) =>{
    var index = users.push(req.body) - 1;

    var user = users[index];
    user.id = index;

    sendToken(user,res);
})

function sendToken(user, res){
    var token = jwt.sign(user.id, '123');
    res.json({firstName: user.firstName, token});
    
}

function sendAuthError(res){
    return res.jons({ success: false, message: 'email or password incorrect'});
}

app.use('/api', api);
app.use('/auth', auth);

app.listen(63145, () => console.log('Server running on Port 63145'));
