import express from "express"
const app = express()
const port = 3000
app.use (express.json())


// multiple routes
app.get('/', (req, res) => {
  res.json({Message :'Hello World!'})
})

app.get("/about", (req, res) => {
    res.json({Message : 'about page'})
})

app.get("/contact us", (req, res) => {
    res.json({Message : 'contact us page'})
})


// 4 HTTP methods
// get request
app.get('/get', (req, res) => {
    const newItem = req.body
    res.json({Message : 'GET request - Fetching all items',data : newItem})
})

// post request
app.post('/', (req, res) => {
    const newItem = req.body
    res.json({Message : 'item added',data : newItem})
})

// put request 
app.put('/:Id', (req, res) => {
    const newItem = req.body
    const itemId = req.params.Id
    res.json({Message : `updated item ${itemId}`,data : newItem})
})

// delete request
app.delete('/:Id', (req, res) => {
    const itemId = req.params.Id
    res.json({Message : `delete item ${itemId}`})
})


app.listen(port, () => {
  console.log(`server is runing on port ${port}`)
})