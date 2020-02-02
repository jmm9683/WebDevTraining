import express from 'express';
import crmRoutes from './src/routes/crmRoutes';
import sysColRoutes from './src/routes/sysColRoutes';
import sysRoutes from './src/routes/sysRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 63145;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

crmRoutes(app);
sysColRoutes(app);
sysRoutes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);