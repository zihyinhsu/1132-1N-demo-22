import express from 'express';
import apiProductRouter from './routes/api/apiProductRouter_22.js';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/product_22/static', (req, res, next) => {
    res.render('product_22/static_22', {
        title: 'Get Products - Static',
        name: 'Zihyin Hsu',
        id: '913410022',
    });
})

app.use('/api/product_22', apiProductRouter);

app.use('/', (req, res, next) => {
    res.render('index', {
        title: 'Express',
        name: 'Zihyin Hsu',
        id: '913410022',
    });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Connecting on port :${port}`);
});