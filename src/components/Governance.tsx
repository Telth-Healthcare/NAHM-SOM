import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, UserCheck, Settings, ChevronDown, ArrowRight, Award, DollarSign, Handshake, HeartPulse, Stethoscope } from 'lucide-react';
import logoTelth from '../assets/TELTH LOGO.svg';
import ameriLogo from '../assets/Ameri Logo.png'

const Governance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="governance" ref={sectionRef} className="py-20 bg-gradient-to-br  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-stone-400/5 to-stone-500/5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-stone-300/10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-stone-300/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className=" text-primary">Governance Structure</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              A multi-tiered governance structure designed for accountability, transparency, and community-led implementation
            </p>
          </div>

          {/* Governance Cards - Modern Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div> */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-black text-center mb-4">National Committee</h3>
              <p className="text-black text-center mb-6">Strategic oversight and policy direction</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Oversight & Strategic Direction</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Policy Approvals & Compliance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Government Relations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-black">CSR Partner Coordination</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-teal-200 relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-green-600"></div> */}
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-black text-center mb-4">Local Committees</h3>
              <p className="text-black text-center mb-6">Community implementation and management</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Community Leader Chairs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Care Manager Operations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Finance Management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Volunteer Coordination</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-amber-600"></div> */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src={logoTelth} alt='logo' className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-black text-center mb-4">Telth Healthcare</h3>
              <p className="text-black text-center mb-6">Technology infrastructure and support</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-black">AI Care Hub Provision</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-black">IoMT Device Management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Technology Training</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <span className="text-black">Continuous Innovation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Organizational Structure - Modern Design */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Organizational Structure</h3>
              <p className="text-gray-800 max-w-2xl mx-auto">
                Our hierarchical framework ensures clear accountability and efficient decision-making across all levels
              </p>
            </div>

            <div className="relative">
              {/* Vertical Connection Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-teal-200 rounded-full z-0 hidden lg:block"></div>

              {/* Root - NAHM-SOM */}
              <div className="flex flex-col items-center gap-6 mb-12 relative z-10">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-900 px-8 py-5 rounded-2xl shadow-md w-full max-w-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-center pr-8">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mr-4">
                      <ChevronDown className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold mb-1">NAHM-SOM</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 1 - National Committee */}
              <div className="flex flex-col items-center gap-6 mb-12 relative z-10">
                <div className="bg-gradient-to-r from-blue-200 to-blue-300 text-gray-900 px-8 py-5 rounded-2xl shadow-md w-full max-w-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mr-4">
                      <ChevronDown className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">National Committee</h4>
                      <p className="text-sm opacity-90">Strategic Oversight, Policy & Program Promoter</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 2 - Partners */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 relative z-10">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-15 flex items-center justify-center mr-4">
                      <img src={ameriLogo} alt="amerilogo" className="w-fit h-fit" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Ameri India Trust</h4>
                      <p className="text-sm opacity-90">Device Supplier</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 text-gray-900 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mr-4">
                      <img src={logoTelth} alt="logo" className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">CSR & Partner</h4>
                      <p className="text-sm opacity-90">Technology & Clinical Partner</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center col-span-2 lg:hidden">
                  <ChevronDown className="w-6 h-6 text-blue-300" />
                </div>
              </div>

              {/* Level 3 - Local Committees */}
              <div className="flex flex-col items-center mb-12 relative z-10">
                <div className="bg-gradient-to-r from-teal-100 to-green-100 text-gray-900 px-8 py-5 rounded-2xl shadow-md w-full max-w-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                      <ChevronDown className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold mb-1">Local Committees</h4>
                      <p className="text-sm opacity-90">Operation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 4 - Operational Teams */}
              <div className="grid grid-cols-1 md:grid-cols-3 mb-12 gap-6 relative z-10">
                <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-gray-900 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <Award className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-center">Health & Wealth Community Leaders</h4>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <Users className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-center">Community Care Managers</h4>
                </div>
                <div className="bg-gradient-to-r from-amber-100 to-amber-200 text-gray-900 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <DollarSign className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-center">Funding Manager</h4>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-gradient-to-r from-pink-100 to-pink-200 text-gray-900 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <Stethoscope className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-center">Nurse</h4>
                </div>
                <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-gray-900 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <HeartPulse className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-center">Physician</h4>
                </div>
                <div className="bg-gradient-to-r from-teal-100 to-teal-200 text-gray-900 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <Handshake className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-center">Volunteers</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto">
              Explore Our Governance Model
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Governance;
