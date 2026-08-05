const router = require('express').Router();

router.get('/dashboard', (req, res) => {
	res.json({ message: 'admin dashboard ready' });
});

module.exports = router;
