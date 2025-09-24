import React, { useEffect, useRef, useState } from 'react';
import { Building, Stethoscope, Brain, Heart, ChevronLeft, ChevronRight, Cross, Hospital, HeartPulse } from 'lucide-react';
import { motion } from "framer-motion";
import imageOne from '../assets/Hub.jpg';
import imageTwo from '../assets/Hub1.jpg';
import imageThree from '../assets/Hub2.jpg';
import advancedHub from '../assets/Advnced hub.jpg';
import creditCard from '../assets/credit_card_r9.jpg';

const Centers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const centerTypes = [
    {
      title: "Basic AI Care Hubs",
      description: "Accessible preventive health services with Basic AI diagnostics and health monitoring capabilities.",
      features: ["Basic Health Screening", "Vital Signs Monitoring", "AI Health Analytics", "Preventive Care Guidance"],
      image: imageOne,
      color: "blue",
      icon: Stethoscope,
    },
    {
      title: "Advanced AI Care Hubs",
      description: "Specialized diagnostics and treatment with advanced AI-powered medical equipment and telemedicine capabilities.",
      features: ["Advanced Diagnostics", "Telemedicine Support", "Specialized Equipment", "AI-Powered Analysis"],
      image: imageTwo,
      color: "teal",
      icon: Building,
    },
    {
      title: "Multi-Specialty AI Care Hubs",
      description: "Comprehensive care centers offering multiple specialties with full AI integration and holistic wellness programs.",
      features: ["Multiple Specialties", "Comprehensive Care", "Full AI Integration", "Wellness Programs"],
      image: imageThree,
      color: "purple",
      icon: Hospital,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % centerTypes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + centerTypes.length) % centerTypes.length);
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-white';
      case 'teal':
        return 'bg-white';
      case 'purple':
        return 'bg-white';
      case 'orange':
        return 'bg-white';
      default:
        return 'bg-white';
    }
  };

  return (
    <section id="centers" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* subtle animated gradient background */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-primary bg-clip-text">
              Centers & Model
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI-powered healthcare centers designed for community wellness
            </p>
          </div>

          {/* Center Types Carousel */}
          <div className="relative mb-20">
            <div className="overflow-hidden rounded-2xl shadow-yellow-400 shadow-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {centerTypes.map((center, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      {/* Left Text Section */}
                      <div
                        className={`${getColorClasses(center.color)} p-12 flex flex-col justify-center text-white relative`}
                      >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition" />

                        {/* Content */}
                        <div className="mb-6 relative z-10">
                          <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <center.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-3xl text-black font-bold mb-4">
                            {center.title}
                          </h3>
                          <p className="text-lg text-black opacity-90 leading-relaxed mb-8">
                            {center.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 relative z-10">
                          {center.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className="flex items-center"
                              whileHover={{ x: 5 }}
                            >
                              <div className="w-2 h-2 bg-red-900 rounded-full mr-4"></div>
                              <span className="text-lg text-black">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Bottom-right static image */}
                        {/* Bottom-right static image with hover pop-up */}
                        <div className="absolute bottom-2 right-4 w-32 h-32 group">
                          <div className="relative">
                            <img
                              src={advancedHub}
                              alt="Advanced Hub"
                              className="w-full h-full object-contain rounded-xl shadow-lg object-cover 
                 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2"
                            />

                            {/* Animated Arrow */}

                          </div>
                        </div>

                      </div>
                      {/* Right Image Section with Hover */}
                      <div className="relative w-full h-[450px] mt-10 rounded-2xl overflow-hidden group">
                        <img
                          src={center.image}
                          alt={center.title}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Optional dark overlay */}
                        {/* <div className="absolute inset-0 bg-black/30" /> */}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {centerTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? "bg-primary" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
          {/* Technology Infrastructure */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 bg-white">
            {[
              {
                icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
                title: "Facility Infrastructure",
                color: "bg-blue-100",
                items: [
                  "Modern healthcare facilities",
                  "Community-friendly design",
                  "Accessibility features",
                  "Temple integration"
                ]
              },
              {
                icon: <Brain className="w-8 h-8 text-teal-600" />,
                title: "Technology & AI",
                color: "bg-teal-100",
                items: [
                  "AI diagnostic tools",
                  "IoMT device integration",
                  "Telemedicine capabilities",
                  "Digital health records"
                ]
              },
              {
                icon: <Heart className="w-8 h-8 text-orange-600" />,
                title: "Operations & Support",
                color: "bg-orange-100",
                items: [
                  "24/7 operational support",
                  "Training programs",
                  "Quality assurance",
                  "Community engagement"
                ]
              },
              {
                icon: <Cross className="w-8 h-8 text-rose-600" />,
                title: "Holistic Care Centers",
                color: "bg-rose-100",
                items: [
                  "AYUSH Integration",
                  "Yoga & Meditation",
                  "Soul-Oriented Medicine",
                  "Traditional + Modern Care",
                ]
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0 10px 25px rgba(0,0,0,0.8)] transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{card.title}</h3>
                <div className="space-y-2 text-zinc-900 text-center">
                  {card.items.map((it, i) => (
                    <p key={i}>• {it}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Visa-based Care Plan */}
          <motion.div
            className="bg-white rounded-2xl p-8 lg:p-12 text-black shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Visa-Based Care Plan for Devotees</h3>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  Ensures continuity of free healthcare services across all participating centers, allowing devotees and pilgrims to access care at any NAHM-SOM facility nationwide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Universal Access", desc: "Healthcare at any center" },
                    { title: "Free Services", desc: "No cost to devotees" },
                    { title: "Digital Records for Continuity in Care", desc: "AI-powered tracking & Seamless care records" },
                    { title: "Safe Pilgrimage", desc: "Experience a worry-free pilgrimage across states, knowing your health is protected." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-200 p-4 rounded-lg hover:bg-gray-200 transition"
                      whileHover={{ scale: 1.05 }}
                    >
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm opacity-90">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-center bg-white">
                <img
                  src={creditCard}
                  alt='creditCard'
                />
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Centers;
