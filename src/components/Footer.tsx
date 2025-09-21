import React from 'react';
import { BookOpen, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <BookOpen className="text-amber-500 mr-3" size={32} />
              <h3 className="text-2xl font-bold">Sarah Mitchell</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Professional editor and writing consultant dedicated to helping authors
              bring their stories to life with precision, clarity, and creative insight.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:sarah@sarahmitchellediting.com"
                className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:555-123-4567"
                className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-300">Developmental Editing</span>
              </li>
              <li>
                <span className="text-slate-300">Copy Editing</span>
              </li>
              <li>
                <span className="text-slate-300">Proofreading</span>
              </li>
              <li>
                <span className="text-slate-300">Manuscript Consultation</span>
              </li>
              <li>
                <span className="text-slate-300">Writing Coaching</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Sarah Mitchell Editorial Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;