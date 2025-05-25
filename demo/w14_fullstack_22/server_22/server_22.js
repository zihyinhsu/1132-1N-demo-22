import express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

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