import { useEffect, useState } from "react";
import Stars from '../assets/stars.jpg';

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<A big part of financial freedom is having your heart and mind free from worry about the what-ifs of lie : Suze Orman />";

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
