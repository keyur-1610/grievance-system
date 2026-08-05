require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const officerRoutes = require('./routes/officerRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const complaints = [
  {
    id: 'cmp-1001',
    title: 'Pothole on MG Road',
    description: 'Large pothole causing traffic slowdown near the junction.',
    category: 'Roads',
    priority: 'High',
    status: 'In Progress',
    department: 'Public Works',
    createdAt: new Date().toISOString()
  },
  {
    id: 'cmp-1002',
    title: 'Water leakage near ward office',
    description: 'Continuous leakage reported in the main water line.',
    category: 'Water',
    priority: 'Medium',
    status: 'Pending',
    department: 'Water Supply',
    createdAt: new Date().toISOString()
  },
  {
    id: 'cmp-1003',
    title: 'Street light not working',
    description: 'Three street lights are out near the bus stop.',
    category: 'Electricity',
    priority: 'Low',
    status: 'Resolved',
    department: 'Electricity Board',
    createdAt: new Date().toISOString()
  }
];

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/dashboard/summary', (req, res) => {
  const summary = {
    total: complaints.length,
    pending: complaints.filter((item) => item.status === 'Pending').length,
    inProgress: complaints.filter((item) => item.status === 'In Progress').length,
    resolved: complaints.filter((item) => item.status === 'Resolved').length
  };

  res.json(summary);
});

app.get('/api/complaints', (req, res) => {
  const { role } = req.query;

  if (role === 'officer') {
    return res.json(complaints.filter((item) => item.department === 'Public Works' || item.status !== 'Resolved'));
  }

  if (role === 'citizen') {
    return res.json(complaints.slice(0, 2));
  }

  return res.json(complaints);
});

app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/officer', officerRoutes);
app.use('/api/admin', adminRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
