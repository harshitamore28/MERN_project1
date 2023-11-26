import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes.js';

const app = express();
app.use(express.json());
dotenv.config();

app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port http://localhost:${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(error);
})

/********************************************************************/
//TEST WITHOUT MONGOOSE
// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//     res.send('<h1>Connected</h1>');
// });

// const port = 5000;
// app.listen(port, () => {
//     console.log("Server listening the port http://localhost:" + port);
// });
/********************************************************************/

/********************************************************************/
//TEST WITH MONGOOSE WITHOUT MVC
// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// const app = express();
// dotenv.config();

// app.get('/', (req, res) => {
//     res.send('<h1>Connected to server</h1>');
// })

// mongoose.connect(process.env.MONGO_URI).then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(process.env.PORT, () => {
//         console.log(`Listening on port http://localhost:${process.env.PORT}`);
//     })
// })
/********************************************************************/
