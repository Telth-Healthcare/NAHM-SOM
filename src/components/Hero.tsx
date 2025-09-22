import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Building } from "lucide-react";
import templeAiHero from "@/assets/temple.png";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <section
      id="#"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={templeAiHero}
          alt="AI Healthcare in Indian Temple"
          className="w-full h-full object-cover hero-img-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/60 via-[#D6C2A8]/50 to-[#5E4B3B]/60 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[#6B5B4A]/40"></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-teal-300/20 rounded-full blur-2xl"
      />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: [0, 20, 0], opacity: 1 }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-rose-400/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-6 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-xl md:text-3xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block text-white drop-shadow-lg">
              National AI Health Mission
            </span>
            <span className="block text-[#F2E9DC] text-lg">
              for Soul-Oriented Medicine
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[#E0D5C3]/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Blending AI Precision Health with Soul-Oriented Wellness for Every
            Community in India
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <a href="#partners">
              <Button
                size="lg"
                className="relative text-[#FDFBF7] shadow-lg bg-amber-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-10 py-6 rounded-full group"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Quick Highlights */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          >
            {[
              {
                icon: <Building className="h-12 w-12 text-amber-400 mx-auto mb-4" />,
                value: "AYUSH-Integrated Wellness",
              },
              {
                icon: <Users className="h-12 w-12 text-teal-300 mx-auto mb-4" />,
                value: "Quantum-AI Clinical Decision",
              },
              {
                icon: (
                  <Heart className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                ),
                value: "Community-Managed & Self-Sustained",
              },
              {
                icon: (
                  <ArrowRight className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                ),
                value: "Personalized, Precise Care with Traditional Touch",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="flex flex-col items-center justify-center bg-[#2C1F15]/50 backdrop-blur-lg rounded-2xl p-6 border border-[#E0D5C3]/20 hover:scale-105 hover:shadow-2xl transition-all duration-500 min-h-[200px] text-center"
              >
                {item.icon}
                <h5 className="text-lg md:text-xl font-semibold text-[#F2E9DC] leading-snug">
                  {item.value}
                </h5>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
