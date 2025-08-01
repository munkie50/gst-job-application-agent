import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header';
import LandingPage from './pages/landingPage';
import SignInPage from './pages/signIn';
import SignUpPage from './pages/signUp';
import OnboardingPage from './pages/onboardingPage';
import './index.css';

const PUBLISHABLE_KEY = 'pk_test_bGl2ZS1iaXNvbi0zMC5jbGVyay5hY2NvdW50cy5kZXYk';

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>
    </>
  );
}

function App() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} navigate={navigate}>
      <AppRoutes />
    </ClerkProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
