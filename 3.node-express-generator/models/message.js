// MODELS
/* Als je iets wilt versturen moet da json zijn , met mongoose ga je met schema zeggen 
wat je wel en niet wilt. Als je dit niet doet dan kkan iedereen vanalles sturen. Deze schemas zetten 
we in de map models*/




let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let messageSchema =new Schema({
    text: String,
    user: String   
});

let message = mongoose.model("Message", messageSchema);

module.exports = message;