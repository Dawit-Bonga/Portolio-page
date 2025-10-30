import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Have a project in mind or just want to chat? I&apos;d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <a
          href="mailto:dawitbonga0@gmail.com"
          className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border-2 border-gray-900 flex flex-col items-center"
        >
          {/* Emoji container */}
          <div className="flex items-center justify-center w-16 h-16 mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
            📧
          </div>

          <h3 className="text-xl font-semibold mb-2 text-gray-900">Email</h3>
          <p className="text-gray-700">dawitbonga0@gmail.com</p>
      </a>


<a
  href="https://linkedin.com/in/dawit-bonga"
  target="_blank"
  rel="noopener noreferrer"
  className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border-2 border-gray-900 flex flex-col items-center"
>
  <div className="relative w-16 h-16 mb-4">
    <Image
      src="/linklogo.webp"
      alt="LinkedIn"
      width={64}
      height={64}
      className="object-contain transition-transform duration-300 group-hover:scale-110"
      priority
    />
  </div>
  <h3 className="text-xl font-semibold mb-2 text-gray-900">LinkedIn</h3>
  <p className="text-gray-700">Connect with me</p>
</a>

<a
  href="https://github.com/dawitbonga"
  target="_blank"
  rel="noopener noreferrer"
  className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border-2 border-gray-900 flex flex-col items-center"
>
  {/* Icon container */}
  <div className="relative w-16 h-16 mb-4">
    <Image
      src="/github.png"
      alt="GitHub"
      width={64}
      height={64}
      className="object-contain transition-transform duration-300 group-hover:scale-110"
      priority
    />
  </div>

  <h3 className="text-xl font-semibold mb-2 text-gray-900">GitHub</h3>
  <p className="text-gray-700">View my code</p>
</a>
        </div>

        <div className="bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-900 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Let&apos;s work together!
          </h3>
          <p className="text-gray-700 mb-6">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you need a website, web app, or just want to discuss ideas, 
            I&apos;m here to help.
          </p>
          <a
            href="mailto:dawit@example.com"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Send me an email
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
