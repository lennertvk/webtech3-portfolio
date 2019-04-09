var express = require('express');
var router = express.Router();
let messageController = require("../controllers/message")


router.get('/messages', messageController.get);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;

/* GET ID */
router.get('/messages/:id', messageController.getid);

/* PUT ID */
router.put('/messages/:id',  messageController.put);

/* POST */
router.post('/messages', messageController.post);

router.post('/messages',(req,res,next)=>{
let text = req.body.text;
let user = req.body.user;

let m =new message();
m.text = text;
m.user = user;
m.save();


res.json ({
  "status":"success",
  "data":{
    "message": m
  }
})
});



/*
router.delete('/messages/:id', (req, res,next)){
  console.log("delete: req.body: " + JSON.stringify(req.body));
  res.json(req.body);
}
*/