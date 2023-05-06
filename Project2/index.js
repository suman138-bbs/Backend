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
},
{
        id: "44",
        name:"NEXT"
 }   

]

app.get("/", (req, res) => {
    res.send("Hello from Server");
});

app.get("/courses/mycourse/:courseId", (req, res) => {
const mycourse = courses.find((course) => {return course.id == req.params.courseId })

res.send(mycourse)
});


app.post("/addcourse", (req, res) => {
    console.log('')
    
})




app.listen(4000,()=>console.log(`server is running PORT 4000...`))
