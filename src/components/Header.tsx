import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../assets/logonahmsom.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const navItems = [
    { name: "Centers", href: "#centers" },
    { name: 'Governance', href: '#governance' },
    { name: "Objectives", href: "#objectives" },
    { name: "Impact", href: "#impact" },
    { name: "Partners", href: "#partners" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <HashLink smooth to="/#" className="flex items-center space-x-1 cursor-pointer">
            <div className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-8 w-auto object-contain"
              />
              <div className="hidden sm:block leading-tight ml-2">
                <h1 className="text-lg font-bold text-foreground text-red-900">NAHM-SOM</h1>
                <p className="text-xs text-muted-foreground text-red-900">AI Health Mission</p>
              </div>
            </div>
          </HashLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* <Button variant="outline" size="sm">
              Download Proposal
            </Button> */}
            {/* <Button variant="default" size="sm" className="relative text-white shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm px-6 py-3 rounded-md group">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                {/* <Button variant="outline" size="sm">
                  Download Proposal
                </Button> */}
                {/* <Button variant="default" size="sm" className="bg-gradient-primary border-0">
                  Partner With Us
                </Button> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;