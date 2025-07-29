// src/pages/SignInPage.jsx
import { SignIn } from '@clerk/clerk-react';
import '../styles/signIn.css';

export default function SignInPage() {
  return (
    <div className="auth-container">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
