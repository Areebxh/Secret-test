const router = require('express').Router()
//importing the controllers for this route
const auth = require("../middleware/auth")
const { hostelListing, postAnnouncement } = require('../controller/hostelController');

router.post('/listing', auth, hostelListing);
router.post('/announcement',auth, postAnnouncement);




module.exports = router;