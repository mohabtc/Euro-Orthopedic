import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/98 backdrop-blur-xl shadow-sm" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="https://i.imgur.com/4SNCjZZ.png" 
              alt="Euro Orthopedic Logo" 
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              data-testid="logo-euro-orthopedic"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/carbon"
              className="text-[15px] text-euro-text/70 hover:text-euro-text transition-all duration-300 font-normal"
              data-testid="link-carbon"
            >
              OrthoCarbon Pro I
            </Link>
            <button
              onClick={() => scrollToSection("philosophy")}
              className="text-[15px] text-euro-text/70 hover:text-euro-text transition-all duration-300 font-normal"
              data-testid="link-philosophy"
            >
              Nuestra Filosofía
            </button>
            <button
              onClick={() => scrollToSection("recognition")}
              className="text-[15px] text-euro-text/70 hover:text-euro-text transition-all duration-300 font-normal"
              data-testid="link-support"
            >
              Soporte
            </button>
          </nav>

          <Button
            onClick={onContactClick}
            className="bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full px-5 md:px-7 h-10 text-[14px] md:text-[15px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            data-testid="header-button-solicitar-llamada"
          >
            <span className="hidden sm:inline">Solicitar llamada</span>
            <span className="sm:hidden">Contacto</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
