// src/pages/landingPage.jsx
import { useNavigate } from 'react-router-dom';
import '../styles/landingPage.css';
import astronaut from '../assets/images/astronaut.gif';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <img id="landing-graphic" src={astronaut} alt="Astronaut"/>
      <h1>Embark on your next job expedition</h1>
      <p>Track applications, craft perfect cover letters, and discover your next role.</p>
      <div className="button-group">
        <button id="sign-in-button" onClick={() => navigate('/sign-in')}>Sign In</button>
        <button id="sign-up-button" onClick={() => navigate('/sign-up')}>Sign Up</button>
      </div>
    </div>
  );
}
