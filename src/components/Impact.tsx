import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Heart,
  TrendingUp,
  Award,
  CheckCircle2
} from "lucide-react";
import ndhmLogo from '../assets/logo-abha.png';
import fimLogo from '../assets/images.webp';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Impact = () => {
  const impactMetrics = [
    {
      icon: Building2,
      value: 1000,
      suffix: "+",
      label: "AI Health Centers",
      description: "Planned across India in 5 years",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      icon: Users,
      value: 300,
      suffix: "M",
      label: "Beneficiaries",
      description: "Communities served nationwide",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      icon: Heart,
      value: 85,
      suffix: "%",
      label: "Illness Reduction",
      description: "Preventable diseases detected early",
      color: "text-secondary",
      bgColor: "bg-secondary/20"
    },
    {
      icon: TrendingUp,
      value: 100,
      suffix: "%",
      label: "CSR Funded",
      description: "Transparent philanthropy model",
      color: "text-tertiary",
      bgColor: "bg-tertiary/20"
    }
  ];

  const achievements = [
    "Integration with NDHM (National Digital Health Mission)",
    "Alignment with Ayushman Bharat initiative",
    "Support for Fit India Movement goals",
    "Community-driven governance model",
    "Sustainable CSR funding framework",
    "Spiritual wellness integration"
  ];

  const governmentAlignments = [
    {
      title: "NDHM Integration",
      description: "Full digital health record integration",
      icon: 'https://mohfw.gov.in/sites/all/themes/cmf/images/emblem-dark.png'
    },
    {
      title: "Ayushman Bharat",
      description: "Universal health coverage support",
      icon: ndhmLogo
    },
    {
      title: "Fit India Movement",
      description: "Preventive wellness programs",
      icon: fimLogo
    }
  ];

  return (
    <section id="impact" className="py-20 relative overflow-hidden">
      {/* Floating background shapes */}
      {/* <div className="absolute -top-24 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute top-40 right-0 w-72 h-72 bg-gradient-to-tr from-tertiary/20 to-healthcare/20 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-primary text-white">Measurable Impact</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              <span className="text-primary">Transforming Lives Across India</span>
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Our mission delivers quantifiable impact through technology-enabled healthcare,
              community empowerment, and sustainable wellness programs.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card
                  key={index}
                  className="bg-white backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-amber-100/20 transition-all duration-500 animate-scale-in rounded-2xl border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`${metric.bgColor} w-16 h-16 flex items-center justify-center mx-auto rounded-2xl mb-3`}>
                      <Icon className={`h-8 w-8 ${metric.color}`} />
                    </div>
                    <div className="text-4xl font-extrabold text-black mb-2">
                      <AnimatedCounter
                        target={metric.value}
                        suffix={metric.suffix}
                        duration={2500}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {metric.label}
                    </h3>
                    <p className="text-sm text-black">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Government Alignment */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {governmentAlignments.map((alignment, index) => (
              <Card
                key={index}
                className="bg-white backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-2 hover:bg-amber-100/20 transition-all duration-500 animate-slide-up rounded-2xl border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <img
                      src={alignment.icon}           
                      alt={alignment.title}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {alignment.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {alignment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>


          {/* Key Achievements */}
          <Card className="bg-white text-black shadow-xl rounded-3xl animate-fade-in">
            <CardContent className="p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <Badge variant="outline" className="mb-4 border-red-900 text-black">
                    <Award className="w-4 h-4 mr-2 text-red-900" />
                    Key Achievements
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Strategic Alignment & Community Impact
                  </h3>
                  <p className="text-black/90 leading-relaxed mb-6">
                    Our mission aligns with national health initiatives while building
                    sustainable community-driven healthcare ecosystems that honor traditional
                    wellness practices.
                  </p>
                </div>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle2 className="h-6 w-6 text-red-900 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-black/95">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Impact;
