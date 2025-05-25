import db from './database.js';

const testDB = async () => {
    try{
        const results = await db.query('select * from product_22');
        console.log('results', JSON.stringify(results.rows));
    }catch(err){
        console.log(err);
    }
};

testDB();

export default testDB;