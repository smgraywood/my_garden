module.exports = function (req, res, next) {
	//if user is logged in, complete func
	if (req.isAuthenticated()) return next();
	// redirect to login if user is not already logged in
	res.redirect("/auth/google");
};