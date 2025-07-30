import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { FileText, Typewriter } from "lucide-react";
import "../styles/onboardingPage.css";

export default function OnboardingPage() {
  //const { user } = useUser();
  const { user, isLoaded, isSignedIn } = useUser();
  console.log("User:", user, "isLoaded:", isLoaded, "isSignedIn:", isSignedIn);

  const navigate = useNavigate();

  const fullName = user?.fullName || "Job Seeker";

  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        <h2 className="onboarding-subtitle">WELCOME,</h2>
        <h1 className="onboarding-name">{fullName}</h1>
        <p className="onboarding-intro">Let's get started.</p>
        <hr className="onboarding-divider" />

        <p className="onboarding-section-title">BUILD A RESUME</p>
        <div className="onboarding-options">
          <button
            onClick={() => navigate("/upload-resume")}
            className="onboarding-option-btn"
          >
            <FileText className="onboarding-icon" />
            <span className="onboarding-option-text">
              Upload Your<br />Existing Resume
            </span>
          </button>
          <button
            onClick={() => navigate("/generate-resume")}
            className="onboarding-option-btn"
          >
            <Typewriter className="onboarding-icon" />
            <span className="onboarding-option-text">
              Generate A<br />New Resume
            </span>
          </button>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="onboarding-skip-btn"
        >
          Skip For Now
        </button>
      </div>
    </div>
  );
}
