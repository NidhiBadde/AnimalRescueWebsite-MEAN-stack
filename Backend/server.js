/**
 * exporting 
 */
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer');

var cors=require('cors');

app.use(cors({origin:true,credentials: true}));


/**
 * converts to JSON 
 */    
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', "*");
    next();
});

/**
 * mongoose instance connection url connection
 */
mongoose.connect('mongodb+srv://AlishaMehta:mongodb@123@noRest-t8upz.mongodb.net/noRest?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});
mongoose.connection.on('connected', function(){
    console.log("Mongo DB is connected");
    //Initialize app
    let initApp = require('./api/app');
    initApp(app);
});

/**
 * display message when URL consists of '/' 
 */
app.get('/', (req, res) => {
    res.send('Welcome to noRest-server');
    res.end();
});

// app.post("/sendmail", (req, res) => {
//     let user = req.body;
//     sendMail(user, info => {
//         res.send(info);
//     })
// });

// let transporter;
// let mailOptions ;
// async function sendMail(){
//     let account = await nodemailer.createTestAccount();
//     transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//             user: "mehta.al@husky.neu.edu",
//             pass: "Northeastern@1"
//         }
//     });
    
// }
// let info =  transporter.sendMail();
//     console.log(info);

// console.log('sent');
/**
 * listen to port
 */
app.listen(port);
console.log('RESTful API server started on: ' + port);