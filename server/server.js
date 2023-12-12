const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
// Registration - Login
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

let personalInfo = 'resulavsar2:Aa123456@cluster2.qvjitnt';
const uri = `mongodb+srv://${personalInfo}.mongodb.net/test?retryWrites=true&w=majority`;
// connect my mongoDB DB
mongoose.connect(uri);

const noteSchema = new mongoose.Schema({
  text: String,
});
const Note = mongoose.model("Note", noteSchema);

const dataStore = [];
const dataStore2 = [];
// GET
app.get("/api/data", (req, res) => {
  res.send(dataStore);
});

// POST
app.post("/api/data", (req, res) => {
  const recievedData = req.body;
  dataStore.push(recievedData);
  res.json({ newData: recievedData });
});

//********************************************************* */
// GET
app.get("/api/notes", async (req, res) => {
  // res.send(dataStore2);
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.log("Server api/notes is failed!", err);
  }
});

// POST for mongoose
try {
  app.post("/api/notes", async (req, res) => {
    const { userInput } = req.body;
    // create new note
    const note = new Note({ text: userInput });
    // save the note to the DB
    await note.save();
    const recievedData = req.body;
    dataStore2.push(recievedData);
    res.json({ newData: recievedData });
  });
} catch (err) {
  console.log(err);
}
//********************************************************* */

//********************************************************* */
// USer Creation of Model
const registrationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", registrationSchema);
// Register
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // to do
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log("userRegistration Failed", err);
  }
});

// //********************************************************* */

// User login endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid Credentials' })
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // generate and send JWT token
    const token = jwt.sign({ email }, "your secret key");
    res.status(200).json({ token })
  } catch (err) {
    console.log("Login Failed!", err);
  }
});

//********************************************************* */

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
