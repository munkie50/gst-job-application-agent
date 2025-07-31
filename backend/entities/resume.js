const mongoose = require('mongoose');
const JobApplicant = require('./script');
addResume();
async function addResume(applicantId) {
  try {
    const applicant = await JobApplicant.findOne({ applicant_id: applicantId });

    if (!applicant) {
      console.log("Applicant not found");
      return;
    }

    const newResume = {
      resume_number: applicant.resumes.length + 1,
      resume_name: "Backend Developer Resume",
      date_created: new Date()
    };

    applicant.resumes.push(newResume);

    const updated = await applicant.save();
    console.log("Updated applicant with new resume:", updated);
  } catch (err) {
    console.error("Error adding resume:", err);
  }
}

addResume("A001"); // use applicant_id here
