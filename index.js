import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';

dotenv.config()



// Middleware
const allowedOrigins = [
    'https://stripe-form-frontend.vercel.app',
    'http://localhost:5173',
];


// CORS Policy defined
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Accept",
        "Origin",
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin",
    ],
    exposedHeaders: [
        "Authorization",
    ],
    credentials: false,
    preflightContinue: false,
    optionsSuccessStatus: 204,
};


const app = express();
app.use(cors(corsOptions));
app.use(express.json());





// app.use(cors((req, callback) => {
//     const origin = req.header('Origin');
//     if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true); // Allow the origin
//     } else {
//         callback(new Error('Not allowed by CORS')); // Reject the origin
//     }
// }));


const port = process.env.PORT || 3000
const mongoURI = "mongodb+srv://vehware-invoice:zeNbCeVdKr0LbIJK@cluster0.49qda.mongodb.net/vehware"; //?retryWrites=true&w=majority&appName=Cluster0

mongoose
    .connect(mongoURI)
    .then(() =>
        console.log("---- Connected to MongoDB ----")
    )
    .catch((err) =>
        console.log("---- Error Connected MongoDB ----", err)
    );

app.use("/api", routes);
app.get("/", (req, res) => res.status(200).json({ success: true, message: "API IS RUNNING ON THIS PORT " + port }))
app.get("*", (req, res) => res.status(400).json({ success: false, message: "THIS ROUTE IS INVALID PLEASE RETRY WITH CORRRECT ROUTE" }))


// Start the server
app.listen(port, () => console.log('Server running on port ' + port));
