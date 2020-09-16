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
  const { recipient, textmessage } = req.query;
  client.messages
    .create({
      from: "+17089984142",
      body: textmessage,
      to: `+${recipient}`,
    })
    .then((msg) => {
      console.log(msg);
      res.json(msg);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

app.listen(PORT, (req, res) => console.log(`app is running on port ${PORT}`));
