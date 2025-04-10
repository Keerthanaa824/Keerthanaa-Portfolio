import { useEffect, useState } from "react";
import Stars from '../assets/stars.jpg';

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Motivated and detail-oriented Financial Analyst with a Master’s degree in Finance and 2 years of hands-on experience in financial modeling, budgeting, and performance analysis. Skilled in leveraging data to support strategic decision-making and improve financial outcomes. Proficient in Excel, SQL, and financial reporting tools like Power BI and SAP. Strong communication skills with the ability to present complex financial data to both technical and non-technical stakeholders. Eager to contribute analytical expertise to a forward-thinking finance team. />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center text-center"
      style={{
        background: "url(${Stars}) no-repeat center center fixed",  
        backgroundSize: 'cover',  
      }}
    >
   
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

     
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden mb-6">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
