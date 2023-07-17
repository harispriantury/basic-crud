import express from "express";
import cors from 'cors'
import UserRoute from './routes/UserRouter.js'
import 'dotenv/config.js'
console.log(process.env.DB_NAME)


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(UserRoute);


app.listen(port, () => {
    console.log(`Server success running on port ${port}`)
})