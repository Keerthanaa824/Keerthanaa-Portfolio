import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
  const mastersCourseWork = [
    "Financial Statement Analysis",
    "Options",
    "Investment Analysis",
    "Risk Management",
    "Econometric Analysis of Business Data",
    "Advanced Financial Modeling",
    "Futures & Derivatives...",
  ];

  const bachelorsCourseWork = [
    "Principles of Economics",
    "Accounting for Managers",
    "Business Mathematics",
    "Macroeconomics",
    "Marketing Management",
    "Business Law",
    // Add more courses if needed
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Education
          </h2>

          {/* Education Container */}
          <div className="flex flex-col md:flex-row gap-12"> {/* Use flex to align side by side */}
            
            {/* Masters Education */}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all flex-1">
              <p className="text-gray-300 mb-6">Master of Science in Finance</p>
              <p className="text-gray-300 mb-6">University of Massachusetts Boston (2023-2024)</p>

              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2">
                    {mastersCourseWork.map((course, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bachelors Education */}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all flex-1">
              <p className="text-gray-300 mb-6">Bachelor of Arts, Commerce</p>
              <p className="text-gray-300 mb-6">Osmania University (2018-2021)</p>

              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2">
                    {bachelorsCourseWork.map((course, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
