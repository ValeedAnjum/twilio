const express = require("express");
const cors = require("cors");
const twilio = require("twilio");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const client = new twilio(process.env.accountSid, process.env.authToken);

//midllewares
app.use(express.json());
app.use(cors());
//routes
app.get("/", (req, res) => {
  res.send("Anjum is working");
});

app.get("/send", (req, res) => {
  client.messages
    .create({
      from: "+17089984142",
      body: "I am khan body",
      to: "+923016405051",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, (req, res) => console.log(`app is running on port ${PORT}`));
