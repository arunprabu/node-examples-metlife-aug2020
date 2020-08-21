var express = require('express');
var router = express.Router();

var multer  = require('multer');

//var upload = multer({ dest: './public/data/uploads/' });

// if you want to have control over the saved file name
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './public/data/uploads/');
   },
  filename: function (req, file, cb) {
      cb(null , file.originalname);
  }
});

var upload = multer({ storage: storage })

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Users api is not implemented');
  res.render('users', { title: 'Contact Manager App - File upload Demo!' });
});


router.post('/upload', upload.single('profile'), function(req, res, next) {
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});









// router.post('/upload', upload.single('profile'), (req, res, next) =>{
//   try {
//     res.send(req.file);
//   }catch(err) {
//     res.send(400);
//   }
// })


module.exports = router;
