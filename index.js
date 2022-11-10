const express = require ('express');
const app = express();
const port = 3000;
const path = require('path');
const basePath = path.join(__dirname, 'templates');

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json());

app.get('/users/add', (req, res)=>{
  res.sendFile(`${basePath}/userform.html`);
});

app.post('/users/save', (req, res)=>{
  console.log(req.body);
  const name = req.body.name
  const age = req.body.age

  console.log(name);
  console.log(age);

  console.log(`O nome é ${name} e a idade é ${age}`);
})

app.get('/', (req, res)=>{
  res.sendFile(`${basePath}/index.html`);
});

app.get('/users', (req, res)=>{
  res.sendFile(`${basePath}/users.html`);
})

app.listen(port, ()=>{
  console.log('joga no peito do teu pai');
});