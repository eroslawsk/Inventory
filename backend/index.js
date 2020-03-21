import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/inventoryRoutes';
import cors from 'cors';

const app = express();
const PORT = 4000;

//mongo connection
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/inventoryDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) => 
    res.send(`Your Inventory application is running on port ${PORT}`)
    );

app.listen(PORT, () => 
     console.log(`Your Inventory server is running on port ${PORT}`)
);


