import express from "express";
import fs from "fs";
const app = express();
const port = 1337;

import bodyParser from "body-parser";
import cors from "cors";

import BlockChain from "./chain.js";

// Vi skapar vår blockkedja
const MyChain = new BlockChain();

// Vi matar in tre block till kedjan, Kolla här med en if om det redan finns en kedja, skit då i detta.
// MyChain.addBlock({user: "Janne", course: "JS1"});
// MyChain.addBlock({user: "Pelle", course: "JS1"});
// MyChain.addBlock({user: "Janne", course: "React"});

// Logga ut kedjan
console.log("init chain", JSON.stringify(MyChain, null, 6));

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // Denna route printar kedjan inte databasen, för test
    res.send('<h1>Block och kedjor!</h1><div>'+JSON.stringify(MyChain, null, 6)+'</div>')
});

app.get('/add', (req, res) => {
    MyChain.addBlock({user: "Pelle", course: "Hoolahoop kursen"});
    // Denna route printar kedjan inte databasen, för test
    res.send('<h1>Block och kedjor!</h1><div>'+JSON.stringify(MyChain, null, 6)+'</div>')
});

app.listen(port, () => {
    console.log(`Server live on localhost:${port}`)
});