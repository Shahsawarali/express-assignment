import express from "express"
const app = express()
const port = 3000
app.use (express.json())

app.get('/', (req, res) => {
  res.json({Message :'Hello World!'})
})

app.get("/about", (req, res) => {
    res.json({Message : 'about page'})
})

app.listen(port, () => {
  console.log(`server is runing on port ${port}`)
})