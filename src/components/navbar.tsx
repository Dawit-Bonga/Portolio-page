"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Dawit Bonga
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="#projects" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Projects
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="/DawitBonga_resume_Techincal.docx (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <span className="mr-1">📄</span>
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
