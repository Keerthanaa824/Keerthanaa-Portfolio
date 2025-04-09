import { RevealOnScroll } from "../RevealOnScroll";
import Amex from '../../assets/amex.jpg';
import Deloitte from '../../assets/Deloitte.jpg';


export const WorkExperience = () => {
    return (
        <section
            id="workexperience"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 ">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
                        {" "}
                        Work Experience
                    </h2>
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                            <div className="flex space-x-8">

                                <div className="text-gray-300">
                                    <div className="flex items-center space-x-2">
                                        {/* Logo */}
                                        <img
                                            src={Amex}  // Adjust the path to where your logo is located
                                            alt="American Express Logo"
                                            className="w-8 h-8"  // Adjust the size as needed
                                        />
                                        {/* Text */}
                                        <h4 className="font-semibold"> IT cleint Services</h4>
                                    </div>
                                    <p> Help Desk Consultant (June 2024 -may 2024)</p>
                                    <p className="mt-2">
                                        <strong>Achievements:</strong>
                                        <span className="block mt-2">Delievered technical support to faculty, staff,alumini and students by effecienlty diagnosing ,troubleshooting , resolving and escalating complex IT related issues as needed ensuring timely resolution to enhance user satisfaction </span>
                                        <span className="block mt-2">Enhanced Communication through thorough documentation, and swift technical support , yeilding 15% increase in user statisfaction and a 25 % drop in redundant issues.</span>
                                       
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto px-4">
                        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                            <div className="flex space-x-8">

                                <div className="text-gray-300">
                                    <div className="flex items-center space-x-2">
                                        {/* Logo */}
                                        <img
                                            src={Deloitte}  // Adjust the path to where your logo is located
                                            alt="Deloitte Logo"
                                            className="w-8 h-8"  // Adjust the size as needed
                                        />
                                        {/* Text */}
                                        <h4 className="font-semibold">B A S T Associates</h4>
                                    </div>
                                    <p> Financial Analyst  (Oct 2020- Dec 2022)</p>
                                    <p className="mt-2">
                                        <strong>Achievements:</strong>
                                        <span className="block mt-2">Prepared ,reviewed and analyzed over 50 financial statements,achieving a 20 % improvement in reporting accuracy & ensuring complaince with U.S. GAAP & Directed internal auditing processes resulting operational enhancements</span>
                                        <span className="block mt-2">Conducted month end and year end closing financial processes ,including journal entries , account reconciliations, and variance analysis ensuring timely and accurate reporting .</span>
                                        <span className="block mt-2">Boosted financial forecasting and budgeting accuracy by 10 % through process improvements ,scenario analysis and enhancements to financial planning models ,supporting  efficient Decision Making.</span>
                                        <span className="block mt-2">Developed comprehensive financial models to evaluate business performance, track key projects  budgeting and forecasting ,contributing to a 10 % ROI increase for principal investments.</span>
                                        <span className="block mt-2">Led valuation projects using Discounted Cash flow(DCF) and comparable methods,analyzed NPV, IRR and MOIC metrics and supported forward looking  financial strategies and investment decision making.</span>
                                        <span className="block mt-2">Identified and Implemented processes to enhance efficiency and accuracy in financial reporting, forecasting and analysis ,driving operational and strategic benefits for business units.</span>     
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                   

                </div>
            </RevealOnScroll>
        </section>
    )
}
