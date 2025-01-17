const express = require('express');
const userRouter = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage()

const upload = multer({ storage: storage })
const userController = require('../controllers/userController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin    = require('../middlewares/isAdmin');


userRouter.get("/getAllUsers", isLoggedIn, userController.getAllUsers);
userRouter.get("/:id", userController.getUser);
 
userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.post("/uploadImage",isLoggedIn,upload.single('file'),userController.uploadImage);

userRouter.put("/updateImageUrl",isLoggedIn,userController.setImageUrl);
userRouter.put("/edit/:id", isLoggedIn, userController.editUser);

userRouter.delete("/delete/:id", isLoggedIn, userController.deleteUser);



module.exports = userRouter;
