// User.js

const mongoose = require('mongoose');
const {User} = require('./script');

mongoose.connect('mongodb://localhost:27017/jobapp_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function insertApplicant() {
  // 🧹 First, delete any existing applicant with the same ID
  await User.deleteOne({ applicant_id: "A001" });

  const applicant = new User({
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
