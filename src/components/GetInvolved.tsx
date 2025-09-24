import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Handshake,
  Users,
  Heart,
  ArrowRight,
  Mail,
  Phone,
  User,
  Building,
  Send
} from "lucide-react";
import communitycare from "../assets/JaLkO-XqT53iRLum8RsaD.png";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    type: "partner"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:contact@nahm-som.org.com?subject=${encodeURIComponent(
      `New ${formData.type} Form Submission`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\nType: ${formData.type}\nMessage:\n${formData.message}`
    )}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    alert("Thank you! Your email client should open to send the message.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const involvementOptions = [
    {
      icon: Handshake,
      title: "Become a Partner",
      description: "Sponsor a center and scale your CSR impact while transforming community healthcare.",
      benefits: [
        "Impact 3 Crore Devotes",
        "Fund an entire AI Care Hub",
        "CSR compliance & ESG alignment",
        "Brand visibility & recognition",
        "Measurable community impact"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      bgBulletColor: 'bg-black',
      // buttonText: "Partner Today",
      type: "partner"
    },
    {
      icon: Users,
      title: "Volunteer with Us",
      description: "Join as a Community Care Manager or health volunteer and directly serve communities.",
      benefits: [
        "Community Care Manager roles",
        "Health volunteer opportunities",
        "Training & certification programs",
        "Meaningful service impact",
        "Networking with healthcare professionals"
      ],
      color: "text-healthcare",
      bgColor: "bg-healthcare/10",
      bgBulletColor: 'bg-black',
      // buttonText: "Volunteer Now",
      type: "volunteer"
    },
    {
      icon: Heart,
      title: "Donate & Support",
      description: "Support holistic healthcare and soul-oriented wellness through philanthropic giving.",
      benefits: [
        "Premium Partner opportunities",
        "Retired Doctors & Nurses",
        "Transparent fund utilization",
        "Regular impact updates",
        "Recognition & legacy building"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      bgBulletColor: 'bg-black',
      // buttonText: "Donate Today",
      type: "donate"
    }
  ];

  return (
    <section
      id="get-involved"
      className="py-20 relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(200,220,255,0.25),transparent_70%)]" />
        <div className="absolute top-10 left-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-white bg-primary rounded-full shadow">
              Join the Mission
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              <span className="text-primary">Get Involved</span>
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Be part of India's healthcare transformation. Whether through partnership,
              volunteering, or donations, every contribution creates lasting impact.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-16 animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={communitycare}
                alt="Community Healthcare in Action"
                className="w-full h-auto md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2 blur-[0.6px]">
                    Transforming Lives Together
                  </h3>
                  <p className="text-lg text-white/90 blur-[0.6px]">
                    Join thousands making healthcare accessible to all
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Involvement Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {involvementOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card
                  key={index}
                  className="group bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg  hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className={`${option.bgColor} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-8 w-8 ${option.color}`} />
                    </div>

                    <h3 className="text-xl font-semibold text-black mb-3">
                      {option.title}
                    </h3>

                    <p className="text-black leading-relaxed mb-6">
                      {option.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <div className={`w-2 h-2 ${option.bgBulletColor} rounded-full mt-2 mr-3`} />
                          <span className="text-black text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* <Button
                      onClick={() => setFormData({ ...formData, type: option.type })}
                      className="w-full rounded-xl border-2 group-hover:bg-red-900 hover:text-white transition"
                    >
                      {option.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div>
                  <Badge variant="outline" className="mb-4 text-white bg-primary">Contact Us</Badge>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Ready to Make an Impact?
                  </h3>
                  <p className="text-black leading-relaxed mb-6">
                    Connect with our team to explore partnership opportunities, volunteer
                    programs, or learn more about supporting the NAHM-SOM mission.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <span className="text-black">contact@nahm-som.org</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <span className="text-black">+91 82877 77505</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-primary mr-3" />
                      <span className="text-black">The chambers
                        Vardhaman Trade Center, 3rd Floor, Nehru Place, New Delhi  110019</span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Tell us how you would like to contribute to NAHM-SOM"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full  rounded-xl border-2 group-hover:bg-red-900 hover:text-white transition"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
