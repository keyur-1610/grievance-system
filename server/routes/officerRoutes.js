const router = require('express').Router();

router.get('/dashboard', (req, res) => {
	res.json({ message: 'officer dashboard ready' });
});

module.exports = router;
