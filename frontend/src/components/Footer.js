import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-sm">
          &copy; {currentYear} HealthLedger SynexAI. All Rights Reserved.
        </p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <a href="/AboutPage" onClick={(e) => { e.preventDefault(); navigate('/AboutPage'); }} className="text-sm hover:underline">
            About Us
          </a>
          <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }} className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="mailto:support@healthledgersynexai.com" className="text-sm hover:underline">
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
