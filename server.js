
projectData = {};




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.use(express.static('website'));



const express = require('express');

const app = express();

const port = 3400; 
let projectData = {};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("website"));

const cors = require('cors');

app.use(cors());


app.post('/add', async (req, res) => {
    const info = await req.body;
    projectData = info;
    res.send(projectData);
});


app.get("/all", async (req, res) => {
    if(projectData){
        res.send(projectData);
    }
});





app.listen(port, _=> console.log(`listening on port ${port}`));
