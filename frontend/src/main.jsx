// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import LandingPage from './pages/landingPage';
import SignInPage from './pages/signIn';
import SignUpPage from './pages/signUp';
import './index.css';

const PUBLISHABLE_KEY = 'pk_test_bGl2ZS1iaXNvbi0zMC5jbGVyay5hY2NvdW50cy5kZXYk'; // replace with your real key

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);