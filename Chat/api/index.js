const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const multer = require("multer");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose
  .connect(
    "mongodb+srv://okeyodemichael:S0Zu5Nql1cQGm88W@cluster0.uplu6ft.mongodb.net/?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("Connected to Mongo Db");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });

app.listen(port, () => {
  console.log("Server running on port", port);
});

const AuthGuard = require("./AuthGuard/auth.guard");
const Forum = require("./models/forum");
const Message = require("./models/message");
const User = require("./models/user");

// function to create a token for the user
const createToken = (payload, secret_key, period) =>
  jwt.sign(payload, secret_key, { expiresIn: period });

// user registration
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, image } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, image });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// logging in of particular user
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    // Check for that user in the database
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ message: "Invalid email or password" });

    // Create and send token
    const payload = {
      id: user._id,
    };
    const access_token = createToken(payload, "MsERT?R2431jCW$3b", "1h");
    const refresh_token = createToken(payload, "WsEWW?R231jCW%ZkF", "480h");
    res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    console.error("Error in logging in:\t", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// logging in of particular user
app.get("/logout", async (req, res) => {
  try {
    res.status(200).json({ message: "logged out" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// endpoint to access all the users except the user who's is currently logged in!
app.get("/users", AuthGuard, async (req, res) => {
  try {
    const loggedInUserId = req.user.id;
    const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password -__v");
    return res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving users" });
  }
});

// endpoint to send a request to a user
app.post("/friend-request", AuthGuard, async (req, res) => {
  const { selectedUserId } = req.body;
  const currentUserId = req.user.id;
  try {
    // update the recepient's freindRequestsArray!
    await User.findByIdAndUpdate(selectedUserId, {
      $push: { freindRequests: currentUserId },
    });

    // update the sender's sentFriendRequests array
    await User.findByIdAndUpdate(currentUserId, {
      $push: { sentFriendRequests: selectedUserId },
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
});

// endpoint to send a request to a user
app.put("/friend-request", AuthGuard, async (req, res) => {
  const { selectedUserId } = req.body;
  const currentUserId = req.user.id;
  // console.log(req.body);
  try {
    // update the recepient's freindRequestsArray!
    await User.findByIdAndUpdate(selectedUserId, {
      $pull: { freindRequests: currentUserId },
    });

    // update the sender's sentFriendRequests array
    await User.findByIdAndUpdate(currentUserId, {
      $pull: { sentFriendRequests: selectedUserId },
    });
    res.status(200).json({ message: "Friend request cancelled" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// endpoint to show all the friend-requests of a particular user
app.get("/friend-request", AuthGuard, async (req, res) => {
  try {
    const userId = req.user.id;

    // fetch the user document based on the User id
    const user = await User.findById(userId).populate("freindRequests", "name email image").lean();
    const freindRequests = user.freindRequests;

    res.status(200).json(freindRequests);
    console.log(freindRequests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// endpoint to accept a friend-request of a particular person
app.post("/friend-request/accept", AuthGuard, async (req, res) => {
  try {
    const senderId = req.user.id;
    const recepientId = req.body.selectedUserId;
    console.log("ACCEPT:: \t", recepientId);
    // retrieve the documents of sender and the recipient
    const sender = await User.findById(senderId);
    const recepient = await User.findById(recepientId);

    sender.friends.push(recepient._id);
    recepient.friends.push(sender._id);

    recepient.freindRequests = recepient.freindRequests.filter(
      (request) => request.toString() !== senderId.toString(),
    );

    sender.sentFriendRequests = sender.sentFriendRequests.filter(
      (request) => request.toString() !== recepientId.toString,
    );

    await sender.save();
    await recepient.save();

    res.status(200).json({ message: "Friend Request accepted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// endpoint to unfriend a particular person
app.post("/unfriend", AuthGuard, async (req, res) => {
  try {
    const { recipientId } = req.body;
    const userId = req.user.id;
    await User.updateOne({ _id: userId }, { $pull: { friends: recipientId } });
    res.status(200).json({ message: "removed friend" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// endpoint to access all the friends of the logged in user!
app.get("/accepted-friends", AuthGuard, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("friends", "name email image");
    const acceptedFriends = user.friends;
    res.json(acceptedFriends);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "files/"); // Specify the desired destination folder
  },
  filename(req, file, cb) {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// endpoint to post Messages and store it in the backend
app.post("/messages", AuthGuard, upload.single("imageFile"), async (req, res) => {
  try {
    const { recepientId, messageType, messageText } = req.body;
    const newMessage = new Message({
      senderId: req.user.id,
      recepientId,
      messageType,
      message: messageText,
      timeStamp: new Date(),
      imageUrl: messageType === "image" ? req.file.path : null,
    });

    await newMessage.save();
    res.status(200).json({ message: "Message sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/// endpoint to get the userDetails to design the chat Room header
app.get("/user", AuthGuard, async (req, res) => {
  try {
    // const { userId } = req.params;
    const userId = req.user.id;

    // fetch the user data from the user ID and exclude password
    const recepientId = await User.findById(userId).select("-password");
    console.log(recepientId);

    res.json(recepientId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/// endpoint to get the userDetails to design the chat Room header
app.get("/user/:userId", AuthGuard, async (req, res) => {
  try {
    const userId = req.user.id;

    // fetch the user data from the user ID
    const recepientId = await User.findById(userId);

    res.json(recepientId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// endpoint to fetch the messages between two users in the chatRoom
app.get("/messages/:recepientId", AuthGuard, async (req, res) => {
  try {
    const recepientId = req.params.recepientId;
    const senderId = req.user.id;
    const messages = await Message.find({
      $or: [
        { senderId, recepientId },
        { senderId: recepientId, recepientId: senderId },
      ],
    }).populate("senderId", "_id name");
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// endpoint to delete the messages!
app.post("/deleteMessages", AuthGuard, async (req, res) => {
  try {
    const { messageIds } = req.body;
    if (!Array.isArray(messageIds) || messageIds.length === 0) {
      return res.status(400).json({ message: "invalid req body!" });
    }

    await Message.deleteMany({ _id: { $in: messageIds } });

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server" });
  }
});

app.get("/friend-requests/sent", AuthGuard, async (req, res) => {
  try {
    const { userId } = req.user.id;
    const user = await User.findById(userId)
      .populate("sentFriendRequests", "name email image")
      .lean();
    const sentFriendRequests = user.sentFriendRequests;

    res.status(200).json(sentFriendRequests);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server" });
  }
});

app.get("/friends", AuthGuard, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password -__v").populate({
      path: "friends",
      select: "-password -__v",
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    // console.log(user.friends)
    res.status(200).json(user.friends);
  } catch (error) {
    console.log("Error fetching friends", error);
    res.status(500).json({ message: "internal server error" });
  }
});

// endpoint to get Messages in forum
app.get("/forum/messages", AuthGuard, async (req, res) => {
  try {
    const msgs = await Forum.find({});
    res.status(200).json(msgs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// endpoint to post Messages in forum
app.post("/forum/messages", AuthGuard, upload.single("imageFile"), async (req, res) => {
  try {
    console.log(req.body);
    const { senderId, messageType, messageText, name, likes } = req.body;

    const newMessage = new Forum({
      senderId,
      messageType,
      name,
      likes,
      message: messageText,
      timestamp: new Date(),
      imageUrl: messageType === "image" ? req.file.path : null,
    });

    await newMessage.save();
    res.status(200).json({ message: "Message sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// endpoint to delete Messages in forum
app.delete("/forum/messages/:id", AuthGuard, async (req, res) => {
  try {
    const messageId = req.params.id;
    await Forum.findByIdAndDelete(messageId);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
