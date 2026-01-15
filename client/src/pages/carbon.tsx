import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check, X, Calendar, Heart, Play, Star } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CarbonPageProps {
  onContactClick: () => void;
}

export default function CarbonPage({ onContactClick }: CarbonPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [problemSectionVisible, setProblemSectionVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [packVisible, setPackVisible] = useState(false);
  const [comparisonVisible, setComparisonVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [accessibilityVisible, setAccessibilityVisible] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const handleVideoClick = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setVideoModalOpen(true);
  };
  
  const problemRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const packRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const accessibilityRef = useRef<HTMLDivElement>(null);

  const benefitsSlides = [
    {
      title: "Ultraligera",
      image: "https://i.imgur.com/anNABbR.png",
      description: "9.8 kg. Levántala con una mano. Guárdala sin esfuerzo. Di adiós al dolor de espalda.",
    },
    {
      title: "Plegado Instantáneo",
      image: "https://i.imgur.com/2XTEWPk.png",
      description: "3 segundos. De lista para rodar a compacta. Perfecta para coches, taxis y aviones.",
    },
    {
      title: "Resistencia Aeroespacial",
      image: "https://i.imgur.com/sfDuqSS.png",
      description: "Fibra de Carbono. La misma tecnología que impulsa la Fórmula 1, ahora a tu servicio.",
    },
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: "0px 0px -80px 0px" };

    const createObserver = (setter: (value: boolean) => void) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setter(true);
        });
      }, observerOptions);
    };

    const problemObserver = createObserver(setProblemSectionVisible);
    const testimonialsObserver = createObserver(setTestimonialsVisible);
    const packObserver = createObserver(setPackVisible);
    const comparisonObserver = createObserver(setComparisonVisible);
    const benefitsObserver = createObserver(setBenefitsVisible);
    const accessibilityObserver = createObserver(setAccessibilityVisible);

    if (problemRef.current) problemObserver.observe(problemRef.current);
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current);
    if (packRef.current) packObserver.observe(packRef.current);
    if (comparisonRef.current) comparisonObserver.observe(comparisonRef.current);
    if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current);
    if (accessibilityRef.current) accessibilityObserver.observe(accessibilityRef.current);

    return () => {
      problemObserver.disconnect();
      testimonialsObserver.disconnect();
      packObserver.disconnect();
      comparisonObserver.disconnect();
      benefitsObserver.disconnect();
      accessibilityObserver.disconnect();
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefitsSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefitsSlides.length) % benefitsSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mejorado */}
      <section className="pt-32 md:pt-36 lg:pt-44 pb-24 md:pb-28 lg:pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center">
            <div className="space-y-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              <p className="text-[13px] uppercase tracking-[0.15em] text-euro-grey font-semibold" data-testid="text-pretitle">
                OrthoCarbon Pro I
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-euro-text tracking-[-0.025em] leading-[1.05]" data-testid="text-hero-title">
                Devuélveles su independencia. Recupera vuestra libertad.
              </h1>
              <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed" data-testid="text-hero-description">
                La silla de ruedas eléctrica de 9.8 kg que elimina el esfuerzo del transporte y devuelve la 
                dignidad y la alegría de moverse libremente.
              </p>
              <Button
                onClick={onContactClick}
                className="bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full px-10 h-14 text-[18px] font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-solicitar-pack"
              >
                Solicitar llamada y Pack Libertad
              </Button>
            </div>

            <div className="relative opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
              <div className="bg-euro-bg-subtle rounded-3xl aspect-square flex items-center justify-center overflow-hidden shadow-lg">
                <img 
                  src="https://i.imgur.com/anNABbR.png" 
                  alt="OrthoCarbon Pro I - Silla de ruedas eléctrica" 
                  className="w-full h-full object-cover premium-image-hover"
                  data-testid="image-hero-product"
                />
              </div>
              <div className="absolute -bottom-4 right-6 md:right-8 lg:right-10 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-euro-text/5" data-testid="price-badge">
                <p className="text-[13px] text-euro-text/50 font-medium tracking-wide">Empezando desde</p>
                <p className="text-3xl md:text-4xl font-semibold text-euro-text tracking-[-0.02em]">1.785€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Narrative Section - Mejorado con más respiración */}
      <section ref={problemRef} className="py-32 md:py-40 lg:py-48 bg-euro-text text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-24 md:space-y-32 lg:space-y-40">
          <div className={`transition-all duration-1000 ${problemSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.08]" data-testid="text-problem-1">
              Las salidas no deberían ser una fuente de estrés.
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${problemSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.08]" data-testid="text-problem-2">
              Ni una prueba de fuerza.
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${problemSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.08]" data-testid="text-problem-3">
              La espontaneidad no debería desaparecer.
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${problemSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-euro-blue tracking-[-0.02em] leading-[1.08]" data-testid="text-problem-4">
              Es hora de cambiar las reglas.
            </h2>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Comparación - Antes vs Después */}
      <section ref={comparisonRef} className="py-32 md:py-40 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 md:mb-24 lg:mb-32 transition-all duration-1000 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-euro-text mb-6 tracking-[-0.02em]" data-testid="text-comparison-title">
              La diferencia es real.
            </h2>
            <p className="text-xl md:text-2xl text-euro-text/70 max-w-3xl mx-auto leading-relaxed">
              Compara con las sillas tradicionales y entiende por qué es una revolución.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Silla Tradicional */}
            <div className={`transition-all duration-1000 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-euro-bg-subtle rounded-3xl p-10 md:p-12 h-full shadow-md">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-euro-text/10 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-euro-text/40" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-euro-text/60">Silla Tradicional</h3>
                </div>
                
                <ul className="space-y-5">
                  {[
                    "25-35 kg de peso",
                    "Estructura de aluminio o acero",
                    "Difícil de transportar",
                    "Plegado complejo y lento",
                    "Limitada autonomía",
                    "Diseño voluminoso"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-euro-text/50">
                      <X className="w-5 h-5 mt-1 shrink-0 text-euro-text/30" />
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* OrthoCarbon Pro I */}
            <div className={`transition-all duration-1000 delay-200 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-euro-blue/5 border-2 border-euro-blue/20 rounded-3xl p-10 md:p-12 h-full shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-euro-blue rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-euro-blue">OrthoCarbon Pro I</h3>
                </div>
                
                <ul className="space-y-5">
                  {[
                    "Solo 9.8 kg - 70% más ligera",
                    "Fibra de carbono aeroespacial",
                    "Transporta con una mano",
                    "Plegado en 3 segundos",
                    "20 km de autonomía",
                    "Diseño minimalista premium"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-euro-text">
                      <Check className="w-5 h-5 mt-1 shrink-0 text-euro-blue" />
                      <span className="text-lg leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-400 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button
              onClick={onContactClick}
              className="bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full px-10 h-14 text-[18px] font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid="button-comparison-cta"
            >
              Quiero la diferencia
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Carousel Section - Mejorado */}
      <section ref={benefitsRef} className="py-32 md:py-40 lg:py-48 bg-euro-bg-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 md:mb-24 transition-all duration-1000 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-euro-text tracking-[-0.02em]">
              Diseñada para la vida real.
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {benefitsSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                      <div className="order-2 lg:order-1 space-y-10">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-euro-text tracking-[-0.025em] leading-[1.05]" data-testid={`text-benefit-title-${index}`}>
                          {slide.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                          {slide.description}
                        </p>
                      </div>

                      <div className="order-1 lg:order-2 aspect-square bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-xl">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="w-full h-full object-cover"
                          data-testid={`image-benefit-${index}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 mt-16">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-14 h-14 shadow-md hover:shadow-lg transition-all duration-300"
                data-testid="button-prev-slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex gap-3">
                {benefitsSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      currentSlide === index ? "bg-euro-blue w-12" : "bg-euro-text/20 w-2.5 hover:w-6"
                    }`}
                    data-testid={`slide-indicator-${index}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full w-14 h-14 shadow-md hover:shadow-lg transition-all duration-300"
                data-testid="button-next-slide"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Con Videos de Clientes */}
      <section ref={testimonialsRef} className="py-32 md:py-40 lg:py-48 bg-euro-text overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 md:mb-24 lg:mb-32 transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 font-medium text-[13px]">4.9/5 valoración</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] mb-6" data-testid="text-testimonials-title">
              Lo que familias como la tuya están viviendo.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Historias reales de libertad y felicidad recuperada.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {/* Review 1 */}
            <div className={`transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '100ms' }}>
              <div 
                className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => handleVideoClick("https://i.imgur.com/aEhZibR.mp4")}
                data-testid="video-review-carbon-1"
              >
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                >
                  <source src="https://i.imgur.com/aEhZibR.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-euro-blue ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex gap-0.5 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white font-semibold text-sm md:text-[15px] mb-1">
                    Carlos M.
                  </p>
                  <p className="text-white/70 text-[11px] md:text-[13px] leading-relaxed line-clamp-2">
                    "Hace unos meses le compré la silla a mi padre. Ahora él es mucho más libre."
                  </p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className={`transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '200ms' }}>
              <div 
                className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => handleVideoClick("https://i.imgur.com/ztuBj0d.mp4")}
                data-testid="video-review-carbon-2"
              >
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                >
                  <source src="https://i.imgur.com/ztuBj0d.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-euro-blue ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex gap-0.5 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white font-semibold text-sm md:text-[15px] mb-1">
                    Laura G.
                  </p>
                  <p className="text-white/70 text-[11px] md:text-[13px] leading-relaxed line-clamp-2">
                    "Se la regalé a mi padre en Navidad. Estamos muy contentos con ella."
                  </p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className={`transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '300ms' }}>
              <div 
                className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => handleVideoClick("https://i.imgur.com/zI4IHAy.mp4")}
                data-testid="video-review-carbon-3"
              >
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                >
                  <source src="https://i.imgur.com/zI4IHAy.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-euro-blue ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex gap-0.5 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white font-semibold text-sm md:text-[15px] mb-1">
                    María T.
                  </p>
                  <p className="text-white/70 text-[11px] md:text-[13px] leading-relaxed line-clamp-2">
                    "Recuerdo mi antigua silla pesada. Esta es muchísimo más ligera y cómoda."
                  </p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className={`transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '400ms' }}>
              <div 
                className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => handleVideoClick("https://i.imgur.com/tzVxAYD.mp4")}
                data-testid="video-review-carbon-4"
              >
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                >
                  <source src="https://i.imgur.com/tzVxAYD.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-euro-blue ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex gap-0.5 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white font-semibold text-sm md:text-[15px] mb-1">
                    Javier R.
                  </p>
                  <p className="text-white/70 text-[11px] md:text-[13px] leading-relaxed line-clamp-2">
                    "Se la regalé a mi padre hace 2 meses. Es el mejor regalo que le he hecho en 10 años."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Stats */}
          <div className={`mt-20 md:mt-28 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">500+</p>
              <p className="text-white/50 text-sm md:text-base">Familias felices</p>
            </div>
            <div className="text-center border-x border-white/10">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">4.9</p>
              <p className="text-white/50 text-sm md:text-base">Valoración media</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">98%</p>
              <p className="text-white/50 text-sm md:text-base">Nos recomiendan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pack Libertad Section - Mejorado */}
      <section ref={packRef} className="py-32 md:py-40 lg:py-48 bg-euro-bg-subtle">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 md:mb-24 lg:mb-28 transition-all duration-1000 ${packVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-euro-text mb-8 tracking-[-0.02em] leading-tight" data-testid="text-pack-title">
              Consigue más que una silla. Consigue una solución completa.
            </h2>
            <p className="text-xl md:text-2xl text-euro-text/70 max-w-3xl mx-auto leading-relaxed" data-testid="text-pack-description">
              Al solicitar tu llamada a través de esta página, accedes de forma exclusiva y gratuita al "Pack Libertad Total".
            </p>
          </div>

          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-18 lg:mb-20 transition-all duration-1000 delay-300 ${packVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { name: "OrthoCarbon Pro I", img: "https://i.imgur.com/anNABbR.png" },
              { name: "Cojín Viscoelástico", img: "https://i.imgur.com/TKhK4FK.png" },
              { name: "Bolsa de Transporte", img: "https://i.imgur.com/2XTEWPk.png" },
              { name: "Segundo Cargador", img: "https://i.imgur.com/1a80L5V.png" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square bg-white rounded-3xl mb-6 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-testid={`image-pack-item-${index}`}
                  />
                </div>
                <p className="font-semibold text-euro-text text-[17px]" data-testid={`text-pack-item-${index}`}>{item.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={onContactClick}
              className="bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full px-10 h-14 text-[18px] font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid="button-pack-libertad"
            >
              Quiero mi Pack Libertad
            </Button>
          </div>
        </div>
      </section>

      {/* Accesibilidad y Confianza Section */}
      <section ref={accessibilityRef} className="py-32 md:py-40 lg:py-48 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-euro-text mb-20 md:mb-24 lg:mb-28 tracking-[-0.02em] transition-all duration-1000 ${accessibilityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} data-testid="text-accessibility-title">
            Queremos que la libertad sea accesible para todos
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            {/* Financiación Solidaria */}
            <div className={`transition-all duration-1000 ${accessibilityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-euro-bg-subtle rounded-3xl p-10 md:p-12 h-full shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-euro-blue/10 mb-8">
                  <Calendar className="w-8 h-8 text-euro-blue" data-testid="icon-calendar" />
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold text-euro-text mb-6 tracking-[-0.02em]" data-testid="text-financing-title">
                  Paga en 3 cuotas.<br />Cero intereses.
                </h3>

                <p className="text-lg md:text-xl text-euro-text/70 leading-relaxed mb-8" data-testid="text-financing-description">
                  La confianza es la base de Euro Orthopedic. Financiamos tu silla directamente, 
                  sin bancos ni intereses. Paga cómodamente en 3 cuotas para que el presupuesto 
                  no sea un obstáculo.
                </p>

                <Link href="/financiacion">
                  <button className="text-euro-blue text-lg font-semibold hover:underline inline-flex items-center gap-2 group" data-testid="link-financiacion">
                    Conocer el plan de 3 cuotas
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Programa de Ayuda Solidaria */}
            <div className={`transition-all duration-1000 delay-200 ${accessibilityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-euro-bg-subtle rounded-3xl p-10 md:p-12 h-full shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-euro-blue/10 mb-8">
                  <Heart className="w-8 h-8 text-euro-blue" data-testid="icon-heart" />
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold text-euro-text mb-6 tracking-[-0.02em]" data-testid="text-solidarity-title">
                  Programa de Ayuda<br />Solidaria del 25%
                </h3>

                <p className="text-lg md:text-xl text-euro-text/70 leading-relaxed mb-8" data-testid="text-solidarity-description">
                  Creemos en la movilidad como un derecho. Si tu unidad familiar cumple con los 
                  requisitos de nuestro programa social, te ayudamos con un 25% de descuento directo.
                </p>

                <Link href="/solidaridad">
                  <button className="text-euro-blue text-lg font-semibold hover:underline inline-flex items-center gap-2 group" data-testid="link-solidaridad">
                    Ver requisitos del programa
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs / FAQ Section - Mejorado */}
      <section className="py-32 md:py-40 lg:py-48 bg-euro-bg-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-euro-text mb-16 md:mb-20 lg:mb-24 tracking-[-0.02em]" data-testid="text-faq-title">
            Especificaciones Técnicas
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="bg-euro-bg-subtle rounded-3xl px-10 border-none shadow-md">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold text-euro-text hover:no-underline py-7" data-testid="faq-resistencia">
                ¿Qué resistencia tiene la fibra de carbono?
              </AccordionTrigger>
              <AccordionContent className="text-euro-text/70 leading-relaxed text-[18px] pb-7" data-testid="answer-resistencia">
                La fibra de carbono aeroespacial tiene una resistencia a la tracción de hasta 600 MPa, siendo 40% más ligera que el aluminio con la misma resistencia. Soporta hasta 120 kg de carga con total seguridad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-euro-bg-subtle rounded-3xl px-10 border-none shadow-md">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold text-euro-text hover:no-underline py-7" data-testid="faq-garantia">
                ¿Qué garantía incluye?
              </AccordionTrigger>
              <AccordionContent className="text-euro-text/70 leading-relaxed text-[18px] pb-7" data-testid="answer-garantia">
                Ofrecemos 2 años de garantía completa del fabricante, con servicio técnico prioritario en toda España. Además, el chasis de fibra de carbono tiene garantía extendida de 5 años.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-euro-bg-subtle rounded-3xl px-10 border-none shadow-md">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold text-euro-text hover:no-underline py-7" data-testid="faq-proceso">
                ¿Cómo funciona el proceso de llamada?
              </AccordionTrigger>
              <AccordionContent className="text-euro-text/70 leading-relaxed text-[18px] pb-7" data-testid="answer-proceso">
                Al solicitar tu llamada, un especialista certificado te contactará en menos de 24h. Te explicará todas las características, resolverá tus dudas y te informará sobre opciones de financiación y el IVA reducido del 4% si aplica.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-euro-bg-subtle rounded-3xl px-10 border-none shadow-md">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold text-euro-text hover:no-underline py-7" data-testid="faq-iva">
                ¿Puedo beneficiarme del IVA reducido?
              </AccordionTrigger>
              <AccordionContent className="text-euro-text/70 leading-relaxed text-[18px] pb-7" data-testid="answer-iva">
                Sí, si cumples los requisitos para productos de movilidad reducida, puedes aplicar el IVA reducido del 4%. Nuestro especialista te guiará con toda la documentación necesaria durante la llamada.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-20 md:mt-24 lg:mt-28 bg-euro-bg-subtle rounded-3xl p-12 md:p-14 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-semibold text-euro-text mb-10 tracking-[-0.02em]" data-testid="text-specs-title">Especificaciones Completas</h3>
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-6 text-[16px]">
              {[
                { label: "Peso", value: "9.8 kg", testid: "spec-peso" },
                { label: "Material chasis", value: "Fibra de carbono", testid: "spec-material" },
                { label: "Autonomía", value: "20 km", testid: "spec-autonomia" },
                { label: "Tiempo de carga", value: "4-6 horas", testid: "spec-carga" },
                { label: "Tiempo de plegado", value: "3 segundos", testid: "spec-plegado" },
                { label: "Capacidad máxima", value: "120 kg", testid: "spec-capacidad" },
              ].map((spec, idx) => (
                <div key={idx} className="flex justify-between py-4 border-b border-euro-text/10">
                  <span className="text-euro-grey">{spec.label}</span>
                  <span className="text-euro-text font-semibold" data-testid={spec.testid}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
          <div className="relative aspect-[9/16] md:aspect-video w-full">
            <video
              src={currentVideoUrl}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
