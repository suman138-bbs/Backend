const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml') 

const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const courses = [{
    id: "11",
    name: "Django"
},
    {
        id: "22",
        name:"JavaScript"
    },
    {
        id: "33",
        name:"React"
    }
]

app.get("/", (req, res) => {
    res.send("Hello from Server");
});

app.get("/courses/:courseId", (req, res) => {
    
});

app.listen(4000,()=>console.log(`server is running PORT 4000...`))
