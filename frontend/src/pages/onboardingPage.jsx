import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import FileGif from '../assets/images/file-highlight.gif';
import TypewriterGif from '../assets/images/typewriter.gif';
import "../styles/onboardingPage.css";

export default function OnboardingPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  console.log("User:", user, "isLoaded:", isLoaded, "isSignedIn:", isSignedIn);

  if (!isLoaded) {
    return <div style={{ padding: "2rem" }}>Loading onboarding...</div>;
  }

  const fullName = user?.fullName || "Job Seeker";

  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        <h2 className="onboarding-welcome">WELCOME,</h2>
        <h1 className="onboarding-name">{fullName}</h1>
        <p className="onboarding-intro">Let's get started.</p>
        <hr className="onboarding-divider" />

        <p className="onboarding-section-title">BUILD A RESUME</p>
        <div className="onboarding-options">
          <button
            onClick={() => navigate("/upload-resume")}
            className="onboarding-option-btn"
          >
            <div
                className="onboarding-gif-icon file-gif"
                role="img"
                aria-label="Upload Resume Icon"
            />
            <span className="onboarding-option-text">
              Upload Your<br />Existing Resume
            </span>
          </button>
          <button
            onClick={() => navigate("/generate-resume")}
            className="onboarding-option-btn"
          >
            <div
                className="onboarding-gif-icon typewriter-gif"
                role="img"
                aria-label="Generate Resume Icon"
            />
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
