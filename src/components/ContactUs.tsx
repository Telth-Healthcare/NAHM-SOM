import React, { useState } from "react";
import { Building, Mail, Phone, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
    const [result, setResult] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");

        const fd = new FormData();
        fd.append("access_key", "5812442a-6352-46ce-a46f-6aa7ce6f3812");
        fd.append("from_name", formData.name);
        fd.append("email", formData.email);
        fd.append("phone", formData.phone);
        fd.append("organization", formData.organization);
        fd.append("message", formData.message);
        fd.append("subject", "New Contact Form Submission");
        fd.append("botcheck", "");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: fd,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                organization: "",
                message: "",
            });
        } else {
            console.error("Error:", data);
            setResult(data.message || "Something went wrong, try again.");
        }
    };

    return (
        <div>
            <Card className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl animate-fade-in">
                <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <Badge variant="outline" className="mb-4 text-white bg-primary">
                                Contact Us
                            </Badge>
                            <h3 className="text-2xl font-bold text-black mb-4">
                                Ready to Make an Impact?
                            </h3>
                            <p className="text-black leading-relaxed mb-6">
                                Connect with our team to explore partnership opportunities,
                                volunteer programs, or learn more about supporting the NAHM-SOM
                                mission.
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
                                    <span className="text-black">
                                        The Chambers, Vardhaman Trade Center, 3rd Floor, Nehru
                                        Place, New Delhi 110019
                                    </span>
                                </div>
                            </div>
                        </div>

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

                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <Button
                                type="submit"
                                className="w-full rounded-xl border-2 group-hover:bg-red-900 hover:text-white transition"
                            >
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </Button>

                            {result && (
                                <p className="text-sm text-gray-700 mt-2 text-center">{result}</p>
                            )}
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactUs;
