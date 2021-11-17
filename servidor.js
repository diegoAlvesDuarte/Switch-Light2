const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const api = axios.create({
    baseURL: 'https://localhost:3000/',
  });

app.get("/", function(req, res) {
    res.json({ "true": true })
});

app.post("/lights", function(req, res) {
    const {  action } = req.body;

    if(action){
      console.log("Liga Luz");
      // api.post('/on');

    } else{
      console.log("Desliga Luz");
      // api.post('/off');
    }
    
    res.json({ "true": true })
   
  });

  app.post("/colors", function(req, res) {
    const {  red, green, blue } = req.body;
    // api.post('/colors', {
    //     red,
    //     green,
    //     blue,
    //   });

    console.log("Alterar cor:");
    console.log({  red, green, blue });
    res.json({ "true": true })
  });

app.listen(3333, () => console.log("Servidor rodando...."))

