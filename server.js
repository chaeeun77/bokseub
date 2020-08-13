const express = require('express');
const app = express();


app.use((req, res) => {
    res.json({
        message: 'It works!'
    })
})


const PORT = 4000;

app.listen(PORT, console.log('server start'))
