import Image from "next/image";
import { ProjectsSection } from "../components/projects-section";
import { AboutSection } from "../components/about-section";
import { ContactSection } from "../components/contact-section";
// import { StockTicker } from "../components/stock-ticker";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-black pt-16">
        <main className="flex flex-col items-center text-center gap-8 px-8 py-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full overflow-hidden ring-4 ring-gray-900 shadow-2xl">
              <Image
                src="/IMG_4520.jpg"
                alt="Profile placeholder"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
              Dawit Bonga
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Frontend developer crafting clean, accessible web experiences with modern technologies
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-8">
            {/* GitHub */}
            <a
              href="https://github.com/dawit-bonga"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-900"
              aria-label="GitHub"
            >
              <div className="w-6 h-6 flex items-center justify-center overflow-hidden rounded-sm bg-white">
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="ml-2 font-medium text-gray-900">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dawit-bonga"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-900"
              aria-label="LinkedIn"
            >
              <div className="w-6 h-6 flex items-center justify-center overflow-hidden rounded-sm bg-white">
                <Image
                  src="/linklogo.webp"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="ml-2 font-medium text-gray-900">LinkedIn</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/dawitthebeast"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-900"
              aria-label="Instagram"
            >
              <div className="w-6 h-6 flex items-center justify-center overflow-hidden rounded-sm bg-white">
                <Image
                  src="/image.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="ml-2 font-medium text-gray-900">Instagram</span>
            </a>
          </div>

          {/* Call to action */}
          <div className="mt-12">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
              <span className="ml-2">→</span>
            </a>
          </div>
        </main>
      </div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Stock Ticker */}
      {/* <StockTicker /> */}
    </>
  );
}
