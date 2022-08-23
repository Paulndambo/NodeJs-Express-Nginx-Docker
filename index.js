const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const cors = require("cors");
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

const PORT = process.env.PORT //|| 5000;
const { MONGO_USER, MONGO_PASSWORD,MONGO_PORT, MONGO_IP } = require("./config/config");


const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () => {
    mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAnyModify: false,
    }).then(() => console.log("Database connection established"))
    .catch((e) => {
        console.log(e);4
        setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();


app.use(morgan('tiny'))
app.use(express.json());
app.enable("trust proxy");
app.use(cors({}));

app.get("/api/v1", (req, res) => {
    res.send("Hello World!");
    console.log("Containers Running")
});

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);    
    console.log("Press Ctrl+C to quit.");
});
