const JobApplicant = require('./models/JobApplicant');

async function insertApplicant() {
  const applicant = new JobApplicant({
    full_name: "Alice Tan",
    applicant_id: "A001",
    email: "alice@example.com",
    password: "hashed_password_here", // You should hash this before storing
    resumes: [
      {
        resume_number: 1,
        resume_name: "Frontend Developer Resume"
      },
      {
        resume_number: 2,
        resume_name: "UI/UX Designer Resume"
      }
    ]
  });

  try {
    const result = await applicant.save();
    console.log("Inserted applicant:", result);
  } catch (err) {
    console.error("Error inserting applicant:", err);
  }
}

insertApplicant();
