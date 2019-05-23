exports.isLogged = (req, res, next) => {
	if (!req.isAuthenticated()) return res.status(401).json({ msg: "You're not logged" });
	next();
};

exports.checkRole = (role) => (req, res, next) => {
	role !== req.user.role ? res.redirect('/') : next();
};
