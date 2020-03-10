var nodemailer=require("nodemailer");
const User = require('../models/Users');
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'rvceabfh@gmail.com',
	pass: 'rvceabfh@123'
    }
};
var smtpTransport = nodemailer.createTransport(smtpConfig);
var rand,mailOptions,host,link;

verify_email=function(email,username,host)
{
    rand=Math.floor((Math.random() * 10000000) + 54);
	
	link="http://"+host+":5000/"+username+"/verify?id="+rand;
	mailOptions={
		to : email,
		subject : "Please confirm your Email account",
		html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"	
    }
   
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
   	 if(error){
        	console.log(error);
		res.end("error");
	 }else{
        	console.log("Message sent: " + response.message);
		res.end("sent");
    	 }
});
return rand;
}
