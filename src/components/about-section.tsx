export function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
          About Me
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl leading-relaxed mb-6">
            I’m Dawit Bonga — a Computer Science student at Yale University and an aspiring
            software engineer who loves building tools that solve real problems. 
            From systems programming to machine learning and web apps, I enjoy 
            understanding how things work under the hood and turning that knowledge 
            into projects that feel intuitive and impactful.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            I’ve interned at Amazon Web Services on the Bedrock fine-tuning team, 
            where I worked on integration testing for model pipelines and learned
            how large-scale systems come together. Outside of class, I build 
            side projects — from an NBA prop bet predictor to a college roadmap 
            generator — that combine backend logic with clean, responsive interfaces.
            My goal is to keep creating software that’s both technically sound 
            and easy to use.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            When I’m not coding, you’ll probably find me mentoring students 
            through Code Haven, helping first-generation students navigate college
            through my TikTok projects, or watching a Warriors game(I love Basketball). I'm always down to learn more so I watch/read a lot about other cultures and people. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Full-Stack Development</h3>
              <p className="text-gray-700">
                Building with React, Next.js, FastAPI, and Node.js — from database to design
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Machine Learning</h3>
              <p className="text-gray-700">
                Exploring model fine-tuning, prediction systems, and data-driven insights
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Impact & Mentorship</h3>
              <p className="text-gray-700">
                Empowering students and creating tools that open doors for first-gen communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
