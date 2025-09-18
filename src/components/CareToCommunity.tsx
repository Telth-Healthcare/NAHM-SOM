import { useEffect, useRef, useState } from "react";
import { Zap, Heart, Brain, Battery, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CareToCommunity = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="care-to-community"
            ref={sectionRef}
            className="relative py-16  overflow-hidden"
        >
            <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                    Care to Community
                </h2>
                <p className="text-2xl text-gray-700 mb-6 font-medium">
                    Portable Smart Health in a Suitcase
                </p>
                <p className="text-lg font-medium text-black max-w-xl mx-auto mb-12">
                    Get a full health check anytime, anywhere — no waiting rooms, no hassle.
                    A simple kit that puts 30+ diagnostics at your fingertips.
                </p>

                {/* Feature grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                    {[
                        {
                            icon: Zap,
                            title: "30+ tests",
                            subtitle: "in minutes",
                            color: "from-yellow-400 to-orange-500",
                        },
                        {
                            icon: Heart,
                            title: "Non-invasive &",
                            subtitle: "invasive diagnostics",
                            color: "from-red-400 to-pink-500",
                        },
                        {
                            icon: Brain,
                            title: "AI-backed",
                            subtitle: "real-time insights",
                            color: "from-blue-400 to-indigo-500",
                        },
                        {
                            icon: Battery,
                            title: "Battery-powered",
                            subtitle: "rugged design",
                            color: "from-green-400 to-teal-500",
                        },
                    ].map((feature, index) => (
                        <Card
                            key={index}
                            className="group bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-primary/40 transition"
                        >
                            <CardContent className="p-4 text-center">
                                <div
                                    className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl inline-flex items-center justify-center mb-3 group-hover:scale-110 transition`}
                                >
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">
                                    {feature.title}
                                </h3>
                                <p className="text-xs text-gray-600">{feature.subtitle}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Checklist box BELOW */}
                <div className="mt-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                        All-in-One Preventive & Smart Diagnostics
                    </h3>

                    {/* Three column row - each in Card */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Vitals & Eye Tests */}
                        <Card className="bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 hover:border-primary/30 transition">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-3 rounded-xl mr-4">
                                        <Eye className="h-6 w-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900">Vitals & Eye Tests</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["BMI", "BP", "ECG", "Oxygen", "Vision exams"].map((item, i) => (
                                        <Badge
                                            key={i}
                                            variant="outline"
                                            className="border-blue-200 text-blue-700 hover-glow"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Blood & Risk Screening */}
                        <Card className="bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 hover:border-primary/30 transition">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-gradient-to-br from-red-400 to-red-500 p-3 rounded-xl mr-4">
                                        <Heart className="h-6 w-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900">
                                        Blood & Risk Screening
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Blood panels",
                                        "Cancer",
                                        "Heart",
                                        "COVID-19",
                                        "HIV",
                                        "Mental Health",
                                    ].map((item, i) => (
                                        <Badge
                                            key={i}
                                            variant="outline"
                                            className="border-red-200 text-red-700 hover-glow"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Smart & Portable */}
                        <Card className="bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 hover:border-primary/30 transition">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-gradient-to-br from-green-400 to-green-500 p-3 rounded-xl mr-4">
                                        <Brain className="h-6 w-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900">Smart & Portable</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "AI-powered insights",
                                        "Battery-operated",
                                        "Rugged design",
                                        "Cloud-based reports",
                                    ].map((item, i) => (
                                        <Badge
                                            key={i}
                                            variant="outline"
                                            className="border-green-200 text-green-700 hover-glow"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CareToCommunity;
