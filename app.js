const express = require('express');
const users = require('./db/users')
const app = express();

app.use(express.static (__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res) => {
    res.render('index');
});
app.get('/game-suit', (req,res) => {
    res.render('index-2');
});
app.get('/login', (req,res) => {
    res.render('login', {users} );

});
app.post('/login', (req,res) => {
    const { username,password } = req.body;
    const user = { id: users.length + 1, username,password };
    users.push(user);
    res.json(user); 
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on PORT ${port}`)
});


