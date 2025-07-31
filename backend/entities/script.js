// script.js
const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  resume_number: { type: Number, required: true },
  date_created: { type: Date, default: Date.now },
  resume_name: { type: String, required: true }
}, { strict: false });

const JobApplicantSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  applicant_id: { type: String, required: true, unique: true }, // optional custom ID
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // should be hashed
  resumes: [ResumeSchema]
}, { strict: false });

const JobApplicant = mongoose.model('JobApplicant', JobApplicantSchema);
const Resume = mongoose.model('Resume', ResumeSchema);

module.exports = { JobApplicant, Resume };