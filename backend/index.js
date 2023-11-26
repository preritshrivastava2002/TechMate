const dotenv = require("dotenv");
dotenv.config({
    path: "../.env",
  });
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
connectToMongo();
const app = express()
const port = process.env.PORT||5000


app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/question", require("./routes/questions"));
app.use("/api/answer", require("./routes/answers"));
app.use("/api/comment", require("./routes/comment"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/tag", require("./routes/tags"));

if(process.env.NODE_ENV === "production"){
    app.use(express.static("../build"));
    
}
else{
    app.get('/', (req, res) => {
        res.send('Hello TechMate')
    })
}


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
