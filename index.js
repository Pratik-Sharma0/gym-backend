const express=require('express');
const app = express();
const bodyParser=require('body-parser');
const cors=require('cors')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db=require('./models')
// Routers
const CustomerRouter=require('./routes/Customer');
app.use('/customer',CustomerRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001,function(){
        console.log('server is running on port');
    });
});
