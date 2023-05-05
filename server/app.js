const express = require('express');
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ msg: ['1', '2', '3'] })

})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ msg: "reached home" })
})


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();