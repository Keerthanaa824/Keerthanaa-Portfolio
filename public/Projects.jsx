import { RevealOnScroll } from "../RevealOnScroll";

// Import PDFs from the src/assets folder
import healthDynamicsPdf from "../../assets/Health-Dynamics-Statistical-Insights.pdf";
import portfolioPerformancePdf from "../../assets/Portfolio-Performance-Analysis.pdf";
import uberStockPitchPdf from "../../assets/Uber-Stock-Pitch.pdf";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: Health Dynamics: Statistical Insights */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Health Dynamics: Statistical Insights</h3>
              <p className="text-gray-400 mb-4">
                Conducted a comprehensive mortality rate analysis over two decades, scrutinizing the impact of healthcare spending, alcohol consumption, HIV/TB incidence, and identifying potential biases in data interpretation.
              </p>
              
              <div className="flex justify-between items-center">
                <a
                  href={healthDynamicsPdf}  // Use the imported PDF path
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project → 
                </a>
              </div>
            </div>

            {/* Project 2: Portfolio Performance Analysis */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Portfolio Performance Analysis</h3>
              <p className="text-gray-400 mb-4">
                Constructed and analyzed a 20-security portfolio surpassing the benchmark by 4%, demonstrating strategic asset allocation.
              </p>
              
              <div className="flex justify-between items-center">
                <a
                  href={portfolioPerformancePdf}  // Use the imported PDF path
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project → 
                </a>
              </div>
            </div>

            {/* Project 3: Stock Pitch for Uber Technologies Inc */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Stock Pitch for Uber Technologies Inc</h3>
              <p className="text-gray-400 mb-4">
                Prepared a sell-side equity report for Uber Technologies Inc using Bloomberg Terminal.
              </p>
              
              <div className="flex justify-between items-center">
                <a
                  href={uberStockPitchPdf}  // Use the imported PDF path
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project → 
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
