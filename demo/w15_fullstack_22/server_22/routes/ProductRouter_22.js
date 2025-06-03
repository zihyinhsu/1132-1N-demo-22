import express from 'express';
const router = express.Router();
import db from '../utils/database.js';
router.get('/', async(req, res,) => {
    try{
        const results = await db.query('select * from product_22');
        console.log('results', JSON.stringify(results.rows));
        // res.json(results.rows);
        res.render('product_22/index_22', {
            title: 'Get Products From PostgreSQL Server',
            name: 'Zihyin Hsu',
            id: '913410022',
            data: results.rows,
        })
    }catch(err){
        console.log(err);
    }
});

export default router;