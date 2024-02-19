const express = require("express");
const RegistrationVal = require("../middleware/RegistrationVal");
const { Register, Login } = require("../controller/AuthController");
const AuthorizationMiddleware = require("../middleware/AuthrizationMiddleware");
const { default: upload } = require("../middleware/Upload");

const blogRoute = express.Router();

// userRoute.get("/allblog", AuthorizationMiddleware,  );
blogRoute.post("/file", upload.single("file"));

module.exports = {
  blogRoute,
};
