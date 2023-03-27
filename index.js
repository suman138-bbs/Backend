const express = require('express')
const app = express()
const PORT = 4000
app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello Wold</h1>")
})

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        "name": "Suman Bhandari",
        "following": 10,
        "follower": 20,
        "Date":Date.now()
        
        
    }
    
    res.status(200).json({ instaSocial })
})
app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        "name": "Suman Bhandari",
        "following": 23,
        "follower": 20,
        "Date":Date.now()
        
        
    }
    
    res.status(200).json({ instaSocial })
})

app.get('/api/v1/:id', (req, res) => {   
    res.status(200).json({ parm: req.params.id})
})

app.listen(PORT, () => {
    console.log(`App is running ${PORT}`)
})