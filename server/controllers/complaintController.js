exports.createComplaint = async (req, res) => {
	const { title, description, category } = req.body;

	res.status(201).json({
		complaint: {
			id: `cmp-${Date.now()}`,
			title: title || 'New complaint',
			description: description || '',
			category: category || 'General',
			status: 'Pending'
		}
	});
};
