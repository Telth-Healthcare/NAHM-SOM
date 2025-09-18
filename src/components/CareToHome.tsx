import { useEffect, useRef, useState } from "react";
import { Stethoscope, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CareToHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver( 
      ([entry]) => { 
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="care-to-home"
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
          Care to Home
        </h2>
        <p className="text-2xl text-gray-700 mb-6 font-medium">
          Healthcare that comes to you.
        </p>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
          Care to Home brings hospital-level care, smart AI diagnostics, and
          expert support straight to your doorstep — for recovery, prevention,
          prediction, and peace of mind.
        </p>
        <p className="text-lg font-medium text-black max-w-2xl mx-auto mb-12">
          It's smarter, safer, and more dignified healthcare, right where you are.
        </p>

        {/* Features - 3 column grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Stethoscope,
              title: "Hospital-Level Care",
              description:
                "Professional medical equipment and expertise at your doorstep",
            },
            {
              icon: Heart,
              title: "AI Diagnostics",
              description:
                "Smart technology for accurate health insights and predictions",
            },
            {
              icon: Shield,
              title: "24/7 Connected",
              description:
                "Continuous monitoring and support whenever you need it",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white hover-lift border border-gray-200 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareToHome;
