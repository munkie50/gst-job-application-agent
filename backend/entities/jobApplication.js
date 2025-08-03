const mongoose = require('mongoose');
const { JobApplication, Resume, CoverLetter } = require('./script');

// Replace with actual resume ObjectId
const resume = await Resume.findOne(); // or use Resume.create(...) to create a new one

const coverLetter = await CoverLetter.create({
  text: "Dear Hiring Manager,\nI believe I am a great fit for this position because..."
});

const jobApp = await JobApplication.create({
  application_status: 'Pending',
  job_name: 'Software Engineer at OpenAI',
  resume: resume._id, // link the resume
  cover_letter: coverLetter._id // link the cover letter
});

console.log('Job Application created:', jobApp);
