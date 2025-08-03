const mongoose = require('mongoose');
const { CoverLetter } = require('./script');

const newCoverLetter = await CoverLetter.create({
  text: "Dear Hiring Manager,\nI am excited to apply for this role because..."
});
console.log('Cover Letter created:', newCoverLetter);
