import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Play, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import videoHero from "@assets/video_concatenado.mp4";

interface HomePageProps {
  onContactClick: () => void;
}

export default function HomePage({ onContactClick }: HomePageProps) {
  const [isPhilosophyVisible, setIsPhilosophyVisible] = useState(false);
  const [isRecognitionVisible, setIsRecognitionVisible] = useState(false);
  const [isExpertsVisible, setIsExpertsVisible] = useState(false);
  const [isProductVisible, setIsProductVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [isVideoMp4, setIsVideoMp4] = useState(false);
  
  const philosophyRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<HTMLDivElement>(null);
  const expertsRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const createObserver = (setter: (value: boolean) => void) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        });
      }, observerOptions);
    };

    const philosophyObserver = createObserver(setIsPhilosophyVisible);
    const recognitionObserver = createObserver(setIsRecognitionVisible);
    const expertsObserver = createObserver(setIsExpertsVisible);
    const productObserver = createObserver(setIsProductVisible);
    const reviewsObserver = createObserver(setIsReviewsVisible);

    if (philosophyRef.current) philosophyObserver.observe(philosophyRef.current);
    if (recognitionRef.current) recognitionObserver.observe(recognitionRef.current);
    if (expertsRef.current) expertsObserver.observe(expertsRef.current);
    if (productRef.current) productObserver.observe(productRef.current);
    if (reviewsRef.current) reviewsObserver.observe(reviewsRef.current);

    return () => {
      philosophyObserver.disconnect();
      recognitionObserver.disconnect();
      expertsObserver.disconnect();
      productObserver.disconnect();
      reviewsObserver.disconnect();
    };
  }, []);

  const handleVideoClick = (videoUrl: string, isMp4: boolean = false) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoMp4(isMp4);
    setVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen con video y mensaje épico */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-hero"
        >
          <source src={videoHero} type="video/mp4" />
        </video>

        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-[-0.02em] leading-[1.05] opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]" data-testid="text-hero-title">
            Libertad. Rediseñada.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]" data-testid="text-hero-subtitle">
            La movilidad no debería tener límites. Tampoco la ingeniería que la hace posible.
          </p>
        </div>
      </section>

      {/* Product Showcase Section - Mejorado con animaciones */}
      <section ref={productRef} className="py-32 md:py-40 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 space-y-14">
              <div className={`space-y-8 transition-all duration-1000 ${isProductVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-euro-text tracking-[-0.02em] leading-[1.05]" data-testid="text-product-title">
                  OrthoCarbon Pro I
                </h2>
                <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed" data-testid="text-product-description">
                  La culminación de la ingeniería aeroespacial y el diseño centrado en el ser humano. 
                  Ultraligera. Increíblemente resistente. Radicalmente intuitiva.
                </p>
                <Link href="/carbon" data-testid="link-descubre-mas">
                  <Button variant="ghost" className="text-euro-blue hover:text-euro-blue/80 p-0 h-auto font-medium group text-lg">
                    Descubre más
                    <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <div className={`space-y-8 transition-all duration-1000 delay-300 ${isProductVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-4xl md:text-5xl font-semibold text-euro-text tracking-[-0.02em]" data-testid="text-weight-title">
                  9.8 kilogramos de pura innovación.
                </h3>
                <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed" data-testid="text-weight-description">
                  Su chasis de fibra de carbono no solo reduce drásticamente el peso, sino que absorbe las 
                  vibraciones del terreno para un confort sin precedentes.
                </p>
              </div>
            </div>

            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isProductVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="aspect-square bg-euro-bg-subtle rounded-3xl flex items-center justify-center overflow-hidden shadow-lg">
                <img 
                  src="https://i.imgur.com/anNABbR.png" 
                  alt="OrthoCarbon Pro I - Silla de ruedas eléctrica ultraligera" 
                  className="w-full h-full object-cover premium-image-hover"
                  data-testid="image-product-main"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid Section - Con delays perfectos */}
      <section id="philosophy" ref={philosophyRef} className="py-32 md:py-40 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-euro-text mb-20 md:mb-24 lg:mb-32 tracking-[-0.02em] transition-all duration-1000 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} data-testid="text-philosophy-title">
            Obsesión por cada detalle.
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-14 lg:gap-20">
            <div className={`transition-all duration-1000 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '100ms' }}>
              <div className="aspect-square bg-euro-bg-subtle rounded-2xl mb-8 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                <img 
                  src="https://i.imgur.com/sfDuqSS.png" 
                  alt="Fibra de Carbono - Costado OrthoCarbon Pro I" 
                  className="w-full h-full object-cover premium-image-hover"
                  data-testid="image-carbon-fiber"
                />
              </div>
              <p className="text-center text-euro-text/70 leading-relaxed text-[18px]" data-testid="text-materials">
                Materiales de vanguardia. Resistencia y ligereza que puedes sentir.
              </p>
            </div>

            <div className={`transition-all duration-1000 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '250ms' }}>
              <div className="aspect-square bg-euro-bg-subtle rounded-2xl mb-8 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                <img 
                  src="https://i.imgur.com/RjarBLq.png" 
                  alt="Mando de control intuitivo" 
                  className="w-full h-full object-cover premium-image-hover"
                  data-testid="image-joystick"
                />
              </div>
              <p className="text-center text-euro-text/70 leading-relaxed text-[18px]" data-testid="text-control">
                Control intuitivo. El poder de moverte, en la punta de tus dedos.
              </p>
            </div>

            <div className={`transition-all duration-1000 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
              <div className="aspect-square bg-euro-bg-subtle rounded-2xl mb-8 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                <img 
                  src="https://i.imgur.com/2XTEWPk.png" 
                  alt="Mecanismo de plegado rápido" 
                  className="w-full h-full object-cover premium-image-hover"
                  data-testid="image-folding"
                />
              </div>
              <p className="text-center text-euro-text/70 leading-relaxed text-[18px]" data-testid="text-folding">
                Plegado en 3 segundos. La libertad de ir a cualquier parte, sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section - Carrusel infinito mejorado */}
      <section id="recognition" ref={recognitionRef} className="py-32 md:py-40 lg:py-48 bg-euro-bg-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-20 lg:mb-24">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-euro-text tracking-[-0.02em] transition-all duration-1000 ${isRecognitionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} data-testid="text-recognition-title">
            Reconocido por su innovación.
          </h2>
        </div>

        <div className={`transition-all duration-1000 ${isRecognitionVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative bg-white rounded-3xl shadow-xl border border-euro-text/5 py-14 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

              <div className="flex animate-scroll">
                {/* Primera instancia */}
                <div className="flex items-center gap-12 px-6 shrink-0">
                  {[
                    { src: "https://i.imgur.com/QZJdB6V.png", alt: "Forbes" },
                    { src: "https://i.imgur.com/SuU6j1D.png", alt: "El País" },
                    { src: "https://i.imgur.com/DT6u7ET.png", alt: "Wired" },
                    { src: "https://i.imgur.com/BDlZJGm.png", alt: "TechCrunch" },
                    { src: "https://i.imgur.com/yxyQNF7.png", alt: "Rolling Inspiration" },
                    { src: "https://i.imgur.com/yltUhY7.png", alt: "Living With Disability" },
                    { src: "https://i.imgur.com/ZCF6PJB.png", alt: "Assistive Technology Blog" },
                    { src: "https://i.imgur.com/eeVI55Q.png", alt: "Disability Horizons" },
                    { src: "https://i.imgur.com/oMjpGjK.png", alt: "Enable Magazine" },
                    { src: "https://i.imgur.com/t6hPzzr.png", alt: "Disability Arts Online" },
                    { src: "https://i.imgur.com/lsQHqcs.png", alt: "Mobility Management" },
                    { src: "https://i.imgur.com/qZWL6D9.png", alt: "Push Living" },
                  ].map((logo, idx) => (
                    <div key={`logo-1-${idx}`} className="grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-500 flex-shrink-0">
                      <img src={logo.src} alt={logo.alt} className="h-12 w-36 object-contain" />
                    </div>
                  ))}
                </div>
                
                {/* Segunda instancia (duplicado) */}
                <div className="flex items-center gap-12 px-6 shrink-0">
                  {[
                    { src: "https://i.imgur.com/QZJdB6V.png", alt: "Forbes" },
                    { src: "https://i.imgur.com/SuU6j1D.png", alt: "El País" },
                    { src: "https://i.imgur.com/DT6u7ET.png", alt: "Wired" },
                    { src: "https://i.imgur.com/BDlZJGm.png", alt: "TechCrunch" },
                    { src: "https://i.imgur.com/yxyQNF7.png", alt: "Rolling Inspiration" },
                    { src: "https://i.imgur.com/yltUhY7.png", alt: "Living With Disability" },
                    { src: "https://i.imgur.com/ZCF6PJB.png", alt: "Assistive Technology Blog" },
                    { src: "https://i.imgur.com/eeVI55Q.png", alt: "Disability Horizons" },
                    { src: "https://i.imgur.com/oMjpGjK.png", alt: "Enable Magazine" },
                    { src: "https://i.imgur.com/t6hPzzr.png", alt: "Disability Arts Online" },
                    { src: "https://i.imgur.com/lsQHqcs.png", alt: "Mobility Management" },
                    { src: "https://i.imgur.com/qZWL6D9.png", alt: "Push Living" },
                  ].map((logo, idx) => (
                    <div key={`logo-2-${idx}`} className="grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-500 flex-shrink-0">
                      <img src={logo.src} alt={logo.alt} className="h-12 w-36 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Validation Section - Diseño Premium Impecable */}
      <section ref={expertsRef} className="py-32 md:py-40 lg:py-48 bg-gradient-to-b from-white to-euro-bg-subtle/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-24 md:mb-28 lg:mb-36 transition-all duration-1000 ${isExpertsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-euro-blue/5 border border-euro-blue/10 rounded-full px-5 py-2 mb-8">
              <div className="w-2 h-2 bg-euro-blue rounded-full animate-pulse" />
              <span className="text-euro-blue font-semibold text-[13px] uppercase tracking-[0.1em]" data-testid="text-experts-pretitle">
                Profesionales de confianza
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-euro-text tracking-[-0.03em] mb-6" data-testid="text-experts-title">
              Validado por expertos.
            </h2>
            <p className="text-xl md:text-2xl text-euro-text/60 max-w-2xl mx-auto leading-relaxed">
              La confianza de los profesionales médicos respalda cada innovación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
            {/* Expert 1 - Dr. con pacientes */}
            <div className={`transition-all duration-1000 ${isExpertsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-euro-text/5 border border-euro-text/5 hover:shadow-2xl hover:shadow-euro-blue/10 transition-all duration-700">
                <div 
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group mb-8"
                  onClick={() => handleVideoClick("https://i.imgur.com/yMtdEkA.mp4", true)}
                  data-testid="video-thumbnail-expert-1"
                >
                  <video
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  >
                    <source src="https://i.imgur.com/yMtdEkA.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                      <Play className="w-8 h-8 text-euro-blue ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-5 left-5">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[12px] font-semibold text-euro-text">Profesional Médico</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <blockquote>
                    <p className="text-xl md:text-2xl text-euro-text/80 leading-relaxed font-light" data-testid="text-quote-expert-1">
                      "Mis pacientes han notado un <span className="text-euro-blue font-medium">cambio radical</span> desde que empezaron a usar la OrthoCarbon Pro I. La diferencia en calidad de vida es extraordinaria."
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-4 pt-4 border-t border-euro-text/10">
                    <div className="w-14 h-14 rounded-full bg-euro-blue/10 flex items-center justify-center">
                      <span className="text-euro-blue font-bold text-lg">AR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-euro-text text-[17px]" data-testid="text-attribution-expert-1">Dr. Antonio Ruiz</p>
                      <p className="text-euro-text/50 text-[14px]">Especialista en Rehabilitación</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert 2 - Dr. que recomienda */}
            <div className={`transition-all duration-1000 ${isExpertsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-euro-text/5 border border-euro-text/5 hover:shadow-2xl hover:shadow-euro-blue/10 transition-all duration-700">
                <div 
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group mb-8"
                  onClick={() => handleVideoClick("https://i.imgur.com/8093z7a.mp4", true)}
                  data-testid="video-thumbnail-expert-2"
                >
                  <video
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  >
                    <source src="https://i.imgur.com/8093z7a.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                      <Play className="w-8 h-8 text-euro-blue ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-5 left-5">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[12px] font-semibold text-euro-text">Profesional Médico</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <blockquote>
                    <p className="text-xl md:text-2xl text-euro-text/80 leading-relaxed font-light" data-testid="text-quote-expert-2">
                      "Si me preguntan qué silla recomendaría, solo iría con <span className="text-euro-blue font-medium">Euro Orthopedic</span>. La ingeniería, la fiabilidad... lo es todo."
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-4 pt-4 border-t border-euro-text/10">
                    <div className="w-14 h-14 rounded-full bg-euro-blue/10 flex items-center justify-center">
                      <span className="text-euro-blue font-bold text-lg">MF</span>
                    </div>
                    <div>
                      <p className="font-semibold text-euro-text text-[17px]" data-testid="text-attribution-expert-2">Dr. Miguel Fernández</p>
                      <p className="text-euro-text/50 text-[14px]">Medicina Física y Rehabilitación</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - Diseño Premium con Videos */}
      <section ref={reviewsRef} className="py-32 md:py-40 lg:py-48 bg-euro-text overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 md:mb-24 lg:mb-32 transition-all duration-1000 ${isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 font-medium text-[13px]">4.9/5 valoración</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] mb-6" data-testid="text-reviews-title">
              Lo que opinan nuestros clientes.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed" data-testid="text-reviews-subtitle">
              Familias reales compartiendo sus historias de libertad.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {/* Review 1 */}
            <div className={`transition-all duration-1000 ${isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '100ms' }}>
              <div 
                className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => handleVideoClick("https://i.imgur.com/aEhZibR.mp4", true)}
                data-testid="video-review-1"
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
                  <p className="text-white font-semibold text-sm md:text-[15px] mb-1" data-testid="text-review-name-1">
                    Carlos M.
                  </p>
                  <p className="text-white/70 text-[11px] md:text-[13px] leading-relaxed line-clamp-2" data-testid="text-review-desc-1">
                    "Hace unos meses le compré la silla a mi padre. Ahora él es mucho más libre."
                  </p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className={`transition-all duration-1000 ${isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '200ms' }}>
              <div 
                className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => handleVideoClick("https://i.imgur.com/ztuBj0d.mp4", true)}
                data-testid="video-review-2"
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
                  <p className="text-white font-semibold text-sm md:text-[15px] mb-1" data-testid="text-review-name-2">
                    Laura G.
                  </p>
                  <p className="text-white/70 text-[11px] md:text-[13px] leading-relaxed line-clamp-2" data-testid="text-review-desc-2">
                    "Se la regalé a mi padre en Navidad. Estamos muy contentos con ella."
                  </p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className={`transition-all duration-1000 ${isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '300ms' }}>
              <div 
                className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => handleVideoClick("https://i.imgur.com/zI4IHAy.mp4", true)}
                data-testid="video-review-3"
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
                  <p className="text-white font-semibold text-sm md:text-[15px] mb-1" data-testid="text-review-name-3">
                    María T.
                  </p>
                  <p className="text-white/70 text-[11px] md:text-[13px] leading-relaxed line-clamp-2" data-testid="text-review-desc-3">
                    "Recuerdo mi antigua silla pesada. Esta es muchísimo más ligera y cómoda."
                  </p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className={`transition-all duration-1000 ${isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '400ms' }}>
              <div 
                className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => handleVideoClick("https://i.imgur.com/tzVxAYD.mp4", true)}
                data-testid="video-review-4"
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
                  <p className="text-white font-semibold text-sm md:text-[15px] mb-1" data-testid="text-review-name-4">
                    Javier R.
                  </p>
                  <p className="text-white/70 text-[11px] md:text-[13px] leading-relaxed line-clamp-2" data-testid="text-review-desc-4">
                    "Se la regalé a mi padre hace 2 meses. Es el mejor regalo que le he hecho en 10 años."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Stats */}
          <div className={`mt-20 md:mt-28 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isReviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

      {/* Video Modal - Soporta MP4 e iframes */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0 rounded-2xl animate-[modalFadeIn_0.3s_ease-out]" data-testid="dialog-video-modal">
          <button
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            data-testid="button-close-video"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className={isVideoMp4 ? "max-h-[80vh] flex items-center justify-center" : "aspect-video w-full"}>
            {isVideoMp4 ? (
              <video
                controls
                autoPlay
                className="max-h-[80vh] max-w-full"
                data-testid="video-player"
              >
                <source src={currentVideoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            ) : (
              <iframe
                src={currentVideoUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                data-testid="iframe-video"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
