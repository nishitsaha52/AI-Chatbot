const express = require("express");
const multer = require('multer');
const {
  visionController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
  ImageController,
  musicController,
  ttsController,
  sttController,
  tchatController
} = require("../controllers/openiaController");

const router = express.Router();

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes
router.post("/vision", visionController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);
router.post("/image", ImageController);
router.post("/music", musicController);
router.post("/tts", ttsController);
router.post("/stt", upload.single('audio'), sttController);
router.post("/tchat", tchatController);

module.exports = router;
