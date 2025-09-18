import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Mail,
  Phone,
  MapPin, 
  ExternalLink,
  Download,
  Linkedin,
  Twitter,
  Facebook,
  Home
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Objectives", href: "#objectives" },
    { name: "AI Care Centers", href: "#centers" },
    { name: "Impact", href: "#impact" },
    { name: "Partners", href: "#partners" },
    { name: "Get Involved", href: "#get-involved" }
  ];

  const resources = [
    { name: "CSR Concept Note", href: "#", icon: Download },
    { name: "Government Proposal", href: "#", icon: Download },
    { name: "Philanthropy Deck", href: "#", icon: Download },
    { name: "Media Kit", href: "#", icon: ExternalLink }
  ];

  const organizations = [
    {
      name: "Ameri India Trust",
      role: "Programme Promoter",
      email: "contact@nahm-som.org",
      phone: "+91 82877 77505",
      address: "The chambers Vardhaman Trade Center, 3rd Floor, Nehru Place, New Delhi  110019"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-20 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className=" rounded-lg p-2">
                <div className="w-8 h-8 bg-red-100 bg-card rounded flex items-center justify-center">
                  <span className="text-red-900 font-bold text-sm">N</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold">NAHM-SOM</h3>
                <p className="text-sm text-white/70">National AI Health Mission</p>
              </div>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed text-lg">
              Blending AI Precision Health with Soul-Oriented Wellness for Every Community in India
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-background mb-4">Resources</h4>
              <div className="space-y-2">
                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <a
                      key={index}
                      href={resource.href}
                      className="flex items-center text-background/70 hover:text-background transition-colors text-sm"
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {resource.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Organizations */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Partner Organizations</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {organizations.map((org, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 hover:border-blue-400/30 rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h5 className="font-bold mb-1">{org.name}</h5>
                    <p className="text-sm text-white/60 mb-3">{org.role}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-white/70">
                        <Mail className="h-4 w-4 mr-2 text-blue-400" />
                        {org.email}
                      </div>
                      <div className="flex items-center text-sm text-white/70">
                        <Phone className="h-4 w-4 mr-2 text-teal-400" />
                        {org.phone}
                      </div>
                       <div className="flex items-center text-sm text-white/70">
                        <Home className="h-10 w-10 mr-2 text-teal-400" />
                        {org.address}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-10 text-center mb-16 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 blur-2xl"></div>
            <h4 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
              Join the Healthcare Revolution
            </h4>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
              Be part of transforming healthcare access across India through AI-powered,
              community-centered wellness programs.
            </p>
            <Button
              size="lg"
              className="relative bg-white text-blue-700 hover:bg-gray-100 rounded-full px-10 py-6 font-medium shadow-xl hover:shadow-2xl transition-all"
            >
              Partner With Us
            </Button>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white/60 mb-4 md:mb-0">
                © 2024 NAHM-SOM. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-5">
                <a href="#" className="text-white/60 hover:text-blue-400 hover:scale-110 transition-transform">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/60 hover:text-sky-400 hover:scale-110 transition-transform">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/60 hover:text-blue-500 hover:scale-110 transition-transform">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* SEO Keywords */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                "AI Healthcare India",
                "Temple Healthcare",
                "Devotee Health Services",
                "Spiritual Wellness Technology",
                "Community Healthcare Centers",
                "CSR Healthcare Partnerships",
                "Digital Health Mission",
                "Soul-Oriented Medicine",
                "Preventive Healthcare",
                "Ayushman Bharat Integration",
                "NDHM Compliance"
              ].map((keyword, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/5 border border-white/10 text-white/50 px-3 py-1 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
