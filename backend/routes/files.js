const express = require('express');
const router = express('../modules/user');

router.get('/user/:userId/files', async (req, res) => {
 const userId = req.params.userId;
 const user = await User.findById(userId).populate('files');
 const files = user.files; // files is now an array of File documents
 res.send(files);

 // TODO: render a view or send the files as a JSON response
});

module.exports = router
