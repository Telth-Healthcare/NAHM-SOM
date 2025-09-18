import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  HeartHandshake,
  Users2,
  TrendingUp,
  Shield,
  Eye,
  Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";

const Objectives = () => {
  const objectives = [
    {
      icon: HeartHandshake,
      title: "AI Healthcare",
      description: "Deliver accessible AI-enabled preventive healthcare services to underserved communities across India.",
      color: "text-healthcare",
      bgColor: "bg-healthcare/10"
    },
    {
      icon: Target,
      title: "Spiritual + Community Angle",
      description: "Empowering Growth with Assistance, CRM, and Strategic Alliances.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Target,
      title: "Soul-Oriented Integration",
      description: "Seamlessly integrate traditional soul-oriented medicine with cutting-edge AI care technologies.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Users2,
      title: "Community Governance",
      description: "Build sustainable community-driven healthcare governance models with local leadership.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Scalable CSR Model",
      description: "Create a transparent, scalable CSR-funded model that ensures long-term sustainability.",
      color: "text-tertiary",
      bgColor: "bg-tertiary/10"
    },
    {
      icon: Shield,
      title: "Empower Communities",
      description: "Train and empower community leaders, care managers, and volunteers for sustainable impact.",
      color: "text-healthcare",
      bgColor: "bg-healthcare/10"
    }
  ];

  return (
    <section id="objectives" className="py-20 relative">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-[hsl(var(--background))] to-gray-50 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="bg-red-900 text-white mb-4">Our Mission</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 text-primary">
              Objectives & Vision
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Transforming healthcare delivery through strategic objectives that bridge traditional
              wellness with modern AI technology, creating sustainable impact across communities.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 120 }}
                  whileHover={{ scale: 1.05, rotate: 0.5 }}
                >
                  <Card
                    className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className={`${objective.bgColor} p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-7 w-7 ${objective.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-3">
                        {objective.title}
                      </h3>
                      <p className="text-black leading-relaxed">
                        {objective.description}
                      </p>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Vision Statement */}
          <div className="relative">
            {/* Eye watermark */}
            <Eye className="absolute center-0 top-1/2 mt-5 -translate-y-1/2 h-40 w-40 text-red-800/70" />

            {/* Content block */}
            <div className="relative z-10 text-center col-span-2 md:text-center">
              <h3 className="text-2xl md:text-3xl font-bold justify-center md:justify-center text-primary mb-6">Our Vision</h3>
              <p className="text-xl text-black/90 leading-relaxed max-w-4xl mx-auto mb-8">
                To create a nationwide network of Soul-Oriented AI Health Centers that seamlessly
                align with NDHM (National Digital Health Mission), Ayushman Bharat, and Fit India
                Movement, making quality healthcare universally accessible while honoring India's
                spiritual heritage.
              </p>

              {/* Government Alignment */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-center">
                <Badge variant="secondary" className="bg-primary text-white border-white/30 hover:bg-white/30">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  NDHM Aligned
                </Badge>
                <Badge variant="secondary" className="bg-primary text-white border-white/30 hover:bg-white/30">
                  <Shield className="w-4 h-4 mr-2" />
                  Ayushman Bharat
                </Badge>
                <Badge variant="secondary" className="bg-primary text-white border-red/30 hover:bg-red/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Fit India Movement
                </Badge>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Objectives;
