import express from "express";
import cors from 'cors'
import UserRoute from './routes/UserRouter.js'


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);


app.listen(port, () => {
    console.log('Server Running Succcesfully')
})