// script.js
const mongoose = require('mongoose');

// Resume Schema (already defined)
const ResumeSchema = new mongoose.Schema({
  resume_number: { type: Number, required: true },
  date_created: { type: Date, default: Date.now },
  resume_name: { type: String, required: true }
}, { strict: false });

// Cover Letter Schema
const CoverLetterSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date_created: { type: Date, default: Date.now }
}, { strict: false });

// Job Application Schema
const JobApplicationSchema = new mongoose.Schema({
  application_status: { type: String, default: 'Pending' }, // e.g., Pending, Interview, Rejected, Hired
  applied_date: { type: Date, default: Date.now },
  job_name: { type: String, required: true },
  date_created: { type: Date, default: Date.now },
  resume: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' }, // optional
  cover_letter: { type: mongoose.Schema.Types.ObjectId, ref: 'CoverLetter' } // required/optional
}, { strict: false });

// User Schema (updated to include job applications)
const UserSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  applicant_id: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resume' }], //resumes: [ResumeSchema]
  job_applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobApplication' }]
}, { strict: false });

// Models
const User = mongoose.model('User', UserSchema);
const Resume = mongoose.model('Resume', ResumeSchema);
const CoverLetter = mongoose.model('CoverLetter', CoverLetterSchema);
const JobApplication = mongoose.model('JobApplication', JobApplicationSchema);

// Export all models
module.exports = { User, Resume, CoverLetter, JobApplication };