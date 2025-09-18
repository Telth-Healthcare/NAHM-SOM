  import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Stethoscope, Heart, Users } from "lucide-react";
import logoTelth from '../assets/TELTH LOGO.svg';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/[0.08] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge  className="mb-4 bg-red-900">
              About NAHM-SOM
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-red-900 mb-6">
              Bridging AI Healthcare with
              <span className="text-red-900"> Spiritual Wellness</span>
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              The National AI Health Mission for Soul-Oriented Medicine (NAHM-SOM) is a visionary
              program integrating AI-driven precision medicine with soul-oriented wellness,
              delivering accessible, holistic healthcare in temples and community centers across
              India.
            </p>
          </div>

          {/* Organization Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Ameri India Trust */}
            <Card className="relative bg-gradient-to-br from-white/80 to-primary/5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-2xl border border-primary/10 backdrop-blur-md animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Ameri India Trust</h3>
                    <p className="text-black">Programme Promoter</p>
                  </div>
                </div>
                <p className="text-black leading-relaxed mb-6">
                  Leading the mission with deep community connections and extensive experience in
                  healthcare initiatives across India. Brings together philanthropic vision with
                  practical implementation expertise.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-red-900">Community Focus</Badge>
                  <Badge variant="outline" className="border-red-900">Healthcare Access</Badge>
                  <Badge variant="outline" className="border-red-900">Philanthropy</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Telth Healthcare */}
            <Card className="relative bg-gradient-to-br from-white/80 to-primary/5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-2xl border border-primary/10 backdrop-blur-md animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-500 p-3 rounded-xl mr-4">
                    <img src={logoTelth} alt="logo" className="h-8 w-8 text-tertiary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Telth Healthcare</h3>
                    <p className="text-black">Technology Partner</p>
                  </div>
                </div>
                <p className="text-black leading-relaxed mb-6">
                  Provides cutting-edge AI Care Hubs, IoMT devices, technology infrastructure, and
                  continuous innovation. Powers the mission with advanced healthcare technology and
                  training programs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-red-900">AI Technology</Badge>
                  <Badge variant="outline" className="border-red-900">IoMT Devices</Badge>
                  <Badge variant="outline" className="border-red-900">Innovation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-secondary/10 p-5 rounded-2xl inline-flex items-center justify-center mb-4 shadow-inner">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">Holistic Approach</h4>
              <p className="text-black">
                Combining modern AI precision medicine with traditional spiritual wellness practices
                for comprehensive care.
              </p>
            </div>

            <div className="text-center animate-slide-up">
              <div className="bg-healthcare/10 p-5 rounded-2xl inline-flex items-center justify-center mb-4 shadow-inner">
                <Building2 className="h-8 w-8 text-healthcare" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">Community-Centered</h4>
              <p className="text-black">
                Establishing care centers in temples and religious hubs where communities naturally
                gather and trust exists.
              </p>
            </div>

            <div className="text-center animate-slide-up">
              <div className="bg-primary/10 p-5 rounded-2xl inline-flex items-center justify-center mb-4 shadow-inner">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">Accessible Care</h4>
              <p className="text-black">
                Making advanced healthcare technology and preventive medicine accessible to all
                communities across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
