const passport = require('passport');

const User = require('../models/user');

exports.signup = function (req, callback) {  // 1. get the req from the service 
	console.log('Inside signup of authService');
	//var generator = require('generate-password');  // move it to top
 	//generate temp password 
	// var _tempPassword = generator.generate({
	//                                         length: 14,
	//                                         numbers: true
	//                                   });
		

	// to create a user 
	var userDao = new User(req.body);

	userDao.setPassword(req.body.password);
	console.log(userDao);

	// todo - arun: 
	delete userDao.password;

	userDao.save( (err, data) => {
		let resp;
		if(!err){
			console.log(data);
			resp = {
				status: 'Saved Successfully!'
			}
    }else{
      console.log(err);
    }
    callback(err, resp);
	})

	// generate temp password and 
	// save that after encryption, in db with status = UNVERIFIED
	// send mail to the user (npmjs sendgrid) 

}

exports.login = function (req, callback) {  // 1. get the req from the service 
	console.log('Inside login of authService');

	console.log(req.body);

	//auth flow with passport
	passport.authenticate('local', function(err, user, info){
		// If Passport throws/catches an error
		if (err) {
			callback(err);
		}

		// If a user is found
		if(user){      
			
			var userData = {  
												email : user.email, 
												name: user.name,
												phone: user.phone,
												createdBy: user.createdBy,
												createdOn: user.createdOn,
												updatedBy: user.updatedBy,
												updatedOn: user.updatedOn,
												token: user.generateJWT()
										 }
			callback(err, userData);
		} else {
			// If user is not found, send the following from routes
			//res.status(401).json(info);
			callback(err, info);
		}
	})(req, callback);
	// login 
	// ask the user to reset the p/w and after rest, 
	// change the status to VERIFIED
	// when the user changes the p/w -- 
	// that will also be be encrypted and saved 


}

