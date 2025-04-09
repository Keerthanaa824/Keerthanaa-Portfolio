import { RevealOnScroll } from '../RevealOnScroll';
// Import the PDFs (use correct file path)
import leetcodePdf from '../../assets/leetcode100.pdf';


export const Badges = () => {
  return (
    <section id="badges" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <h1>BMC Certificate</h1>
            <a
              href={leetcodePdf}  // Link to the PDF
              target="_blank"     // Open in a new tab
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              <button style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: '#00A4CCFF', color: '#fff' }}>
                View Bloomberg Certification
              </button>
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
