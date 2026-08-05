exports.login = async (req, res) => {
	const { email, role } = req.body;

	res.json({
		user: {
			id: `user-${Date.now()}`,
			name: email ? email.split('@')[0] : 'User',
			email: email || 'user@example.com',
			role: role || 'citizen'
		}
	});
};
