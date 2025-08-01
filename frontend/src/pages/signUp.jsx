// src/pages/signUp.jsx
import { SignUp } from '@clerk/clerk-react';
import '../styles/signUp.css';

export default function SignUpPage() {
  return (
    <div className="auth-container">
      <SignUp 
        routing="path" 
        path="/sign-up"
        afterSignUpUrl="/onboarding"
      />
    </div>
  );
}
