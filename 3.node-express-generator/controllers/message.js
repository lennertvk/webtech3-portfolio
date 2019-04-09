// get
const message = require('../models/message.js');
let get = ('/messages',(req,res,next)=>{

    message.find({},(err, docs)=>{
    res.json({
      "status": "Whoehoe 😄",
      "data": {
        "messages": docs
      }
    })
    });
    
    });

    module.exports.get=get;


// post

let post = ('/messages',(req,res,next)=>{
  // variabele maken van de user en de tekst dat gestuurd worden
  let text = req.body.text;
  let user = req.body.user;
  console.log(text);
  
  // deze in een nieuwe message zette
  let m =new message();
  m.text =text;
  m.user = user;
  m.save();
  
  res.json ({
    "status":"YES ✉️",
    "message": m.text//"user: " +req.body.user + " text: " + req.body.text
    
  })
  });

module.exports.post = post;

//get id

let getid = (req,res,next) =>{
  console.log(req.params);
  let id = parseInt(req.params.id);
console.log(id);
  res.json ({
    "status":"success",
    "data":{
      "message": "dit bericht heeft id " + id
    }
  });
}

module.exports.getid = getid;

// put

let put =  (req,res,next) =>{
 let id = parseInt(req.params.id);
 let text = req.body.text;


}
module.exports.put = put;