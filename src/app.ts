// import express from "express";
// import { connectDB } from "./utils/features.js";
// import { errorMiddleware } from "./middlewares/error.js";
// import NodeCache from "node-cache";
// import { config } from "dotenv";
// import morgan from "morgan";
// import Stripe from "stripe";
// import cors from "cors";

// // Importing Routes
// import userRoute from "./routes/user.js";
// import productRoute from "./routes/products.js";
// import orderRoute from "./routes/order.js";
// import paymentRoute from "./routes/payment.js";
// import dashboardRoute from "./routes/stats.js";

// config({
//   path: "./.env",
// });

// const port = process.env.PORT || 4000;
// const mongoURI = process.env.MONGO_URI || "";
// const stripeKey = process.env.STRIPE_KEY || "";

// connectDB(mongoURI);

// export const stripe = new Stripe(stripeKey);
// export const myCache = new NodeCache();

// const app = express();

// app.use(express.json());
// app.use(morgan("dev"));
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("API Working with /api/v1");
// });

// // Using Routes
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/product", productRoute);
// app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/payment", paymentRoute);
// app.use("/api/v1/dashboard", dashboardRoute);

// app.use("/uploads", express.static("uploads"));
// app.use(errorMiddleware);

// app.listen(port, () => {
//   console.log(`Express is working on http://localhost:${port}`);
// });


import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";     // Storing frequently accessed data in a temporary storage location that allows for fast lookups...
import { config } from "dotenv"; 
import morgan from 'morgan' ; 
import Stripe from "stripe";
import cors from "cors" ;


// Importing Routess

import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
import orderRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js" ;
import dashboardRoute from "./routes/stats.js" ; 

config({
  path:"./.env"  
});

const port  = process.env.PORT || 4000;

const mongoURI = process.env.MONGO_URI || "" ; 
const stripeKey = process.env.STRIPE_KEY || "" ; 


connectDB(mongoURI);

export const stripe = new Stripe(stripeKey);

export const myCache = new NodeCache();   

const app = express();



app.use(express.json()); //middelweare

app.use(morgan("dev"));

app.use(cors());


app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

//Using Routes
app.use("/api/v1/user", userRoute); // api-> to define api , means this route for Api ...   AND V1 -> version 1 if ahead we use/create a more api then use V2 etc....
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);


app.use("/uploads", express.static("uploads"));



//error handling middleware

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is Working on http://localhost:${port}`);
});
