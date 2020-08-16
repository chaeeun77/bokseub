const express = require('express');
const app = express();


// app.use((req, res) => {
//     res.json({
//         message: 'It works!'
//     })
// })

const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/orders');

app.use('/product', productRoutes);
app.use('./orders', orderRoutes);

const PORT = 5000;

app.listen(PORT, console.log('server start'));
