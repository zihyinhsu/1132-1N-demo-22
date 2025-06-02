import express from 'express';
const router = express.Router();
import db from '../../utils/database.js';
router.get('/', async(req, res,) => {
    try{
        const results = await db.query('select * from product_22');
        console.log('results', JSON.stringify(results.rows));
        res.json(results.rows);
    }catch(err){
        console.log(err);
    }
});

export default router;