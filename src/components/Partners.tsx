import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Landmark,
  Users,
  ArrowRight,
  Handshake,
  Star,
  Globe,
  Heart
} from "lucide-react";
import Building2 from "../assets/4.svg";
import HeartImg  from "../assets/Precise Care.svg";
import Government  from "../assets/4.svg";
import LandmarkImg from '../assets/prambanan.svg'

const Partners = () => {
  const partnerTypes = [
    {
      icon: Building2,
      title: "Corporate Sponsors",
      description: "Leading companies aligning CSR initiatives with meaningful healthcare impact.",
      benefits: [
        "ESG compliance & reporting",
        "Brand visibility & recognition",
        "Employee engagement programs",
        "Sustainable community impact"
      ],
      color: "text-primary",
      bgColor: "bg-primary",
      cta: "Explore CSR Partnership"
    },
    {
      icon: HeartImg ,
      title: "Philanthropists",
      description: "Visionary individuals creating lasting healthcare legacies for communities.",
      benefits: [
        "Legacy building opportunities",
        "Direct community impact",
        "Transparent fund utilization",
        "Recognition & honors"
      ],
      color: "text-primary",
      bgColor: "bg-primary",
      cta: "Build Your Legacy"
    },
    {
      icon: LandmarkImg,
      title: "Temple Trusts / Temple Community",
      description: "Sacred institutions facilitating healthcare access in community centers.",
      benefits: [
        "Enhanced devotee services",
        "Community health programs",
        "Infrastructure development",
        "Spiritual wellness integration"
      ],
      color: "text-primary",
      bgColor: "bg-primary",
      cta: "Partner with Us"
    },
    {
      icon: Government,
      title: "Government Bodies",
      description: "Policy makers and administrators providing strategic guidance and support.",
      benefits: [
        "Policy alignment & compliance",
        "Strategic implementation support",
        "National health mission integration",
        "Public-private collaboration"
      ],
      color: "text-primary",
      bgColor: "bg-primary",
      cta: "Government Collaboration"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Healthcare Policy Advisor",
      message: "NAHM-SOM represents the perfect blend of traditional wisdom and modern technology, creating sustainable healthcare solutions for rural India.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "CSR Director, Tech Corp",
      message: "Partnering with NAHM-SOM has enhanced our CSR impact significantly. The transparency and community focus align perfectly with our values.",
      rating: 5
    },
    {
      name: "Swami Anandananda",
      role: "Temple Trust Leader",
      message: "This initiative brings healthcare to the heart of our communities while respecting our spiritual traditions. Truly transformational.",
      rating: 5
    }
  ];

  return (
    <section
      id="partners"
      className="py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 -z-10"> */}
      {/* <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,200,150,0.2),transparent_70%)]" /> */}
      {/* <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" /> */}
      {/* <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" /> */}
      {/* </div> */}

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-white bg-red-900  rounded-full shadow">
              Our Partners
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
               <span className="text-primary">Building Together</span>
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Join a diverse ecosystem of corporate sponsors, philanthropists, temple trusts,
              and government bodies united in transforming healthcare access across India.
            </p>
          </div>

          {/* Partner Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partnerTypes.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Card
                  key={index}
                  className="group bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={" p-3 mr-4 group-hover:scale-110 transition-transform"}>
                        <img src={Icon} alt={partner.title} className="h-16 w-16" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">{partner.title}</h3>
                        <p className="text-black">{partner.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <div className={`w-2 h-2 ${partner.bgColor} rounded-full mt-2 mr-3`} />
                          <span className="text-black text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* <Button
                      variant="outline"
                      className="w-full rounded-xl border-2 group-hover:bg-red-900 hover:text-white transition"
                    >
                      {partner.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Partnership Benefits */}
          <Card className="bg-white text-black shadow-2xl rounded-2xl">
            <CardContent className="p-10 md:p-14 text-center">
              <Handshake className="h-16 w-16 mx-auto mb-6 text-red-900" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Partner with NAHM-SOM?</h3>
              <p className="text-black/90 leading-relaxed max-w-3xl mx-auto mb-10">
                Join a mission that creates measurable impact while honoring India's rich
                healthcare traditions and spiritual heritage.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 p-6 rounded-xl">
                  <Globe className="h-8 w-8 mx-auto mb-3 text-red-900" />
                  <h4 className="font-semibold mb-2">National Reach</h4>
                  <p className="text-sm text-blac">Impact communities across all states</p>
                </div>
                <div className="bg-gray-100/90 p-6 rounded-xl">
                  <Star className="h-8 w-8 mx-auto mb-3 text-red-900" />
                  <h4 className="font-semibold mb-2">Proven Model</h4>
                  <p className="text-sm text-black">Evidence-based sustainable approach</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <Heart className="h-8 w-8 mx-auto mb-3 text-red-900" />
                  <h4 className="font-semibold mb-2">Meaningful Impact</h4>
                  <p className="text-sm text-black">Direct community health transformation</p>
                </div>
                <div className="bg-gray-100/90 p-6 rounded-xl">
                  <Users className="h-8 w-8 mx-auto mb-3 text-red-900" />
                  <h4 className="font-semibold mb-2">300M+ Devotees</h4>
                  <p className="text-sm text-black">Reaching more than 300 million people in 5 years</p>
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Testimonials */}
          {/* <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">What Partners Say</h3>
            <p className="text-muted-foreground">Voices from our growing partner ecosystem</p>
          </div> */}

          {/* <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-tertiary fill-tertiary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.message}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
