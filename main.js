const express = require('express')
const app = express()
const port = 3000
app.use('/views', express.static(__dirname + '/views'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))