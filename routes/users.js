var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
	if(req.body.user.username !== "admin"){
		res.statusCode = 403;
        res.statusMessage = 'Incorrect username.';
        res.send();
	}
	else if(req.body.user.password !== "admin"){
		res.statusCode = 403;
        res.statusMessage = 'Incorrect password.';
        res.send();
    }
    else{
		res.statusCode = 200;
        res.statusMessage = 'Success';
        res.send({id: 1});
    }
});

module.exports = router;
