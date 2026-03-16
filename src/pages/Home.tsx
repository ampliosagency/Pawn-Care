import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Clock, Star, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Advanced Diagnostics",
    subtitle: "01 / TECHNOLOGY",
    desc: "We use state-of-the-art imaging and laboratory equipment to get fast, accurate answers for your pet's health.",
    img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=1200",
    color: "bg-brand-gray-light/40"
  },
  {
    title: "Surgical Excellence",
    subtitle: "02 / SURGERY",
    desc: "Our board-certified surgeons perform everything from routine spays to complex orthopedic procedures with precision.",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
    color: "bg-brand-primary/10"
  },
  {
    title: "Compassionate Care",
    subtitle: "03 / PHILOSOPHY",
    desc: "Every patient is treated like family. We focus on fear-free visits to ensure a stress-free experience for everyone.",
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200",
    color: "bg-brand-gray-light/60"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slidesElements = gsap.utils.toArray('.stacked-slide-inner');
      
      slidesElements.forEach((slide: any, i: number) => {
        if (i === slidesElements.length - 1) return;
        
        gsap.to(slide, {
          scrollTrigger: {
            trigger: slide.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false
          },
          opacity: 0,
          scale: 0.9,
          y: -50
        });
      });

      // Hero animations
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={containerRef} className="bg-brand-bg">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-0 overflow-hidden">
          <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 px-6 md:px-12">
            <div className="hero-content space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gray-light rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest">
                <Heart size={14} className="text-brand-accent" />
                <span>Compassionate Care for Your Best Friend</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] text-brand-primary break-words">
                Modern Care.<br />
                <span className="text-brand-ink">Timeless Love.</span>
              </h1>

              <p className="text-lg md:text-xl text-brand-muted max-w-lg leading-relaxed">
                Experience the next generation of veterinary medicine. We combine advanced technology with a gentle touch to keep your pets healthy and happy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="btn-primary text-center">
                  Schedule Appointment
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-2xl font-semibold text-brand-primary border border-brand-primary/10 hover:bg-brand-primary/5 transition-all text-center">
                  Our Services
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/pet${i}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      alt="Happy Pet"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-brand-muted font-medium">Trusted by 5,000+ local pet owners</p>
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200" 
                  alt="Veterinary Care" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-3xl max-w-[240px] -rotate-3 hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-brand-gray-light rounded-xl flex items-center justify-center text-brand-primary">
                    <Clock size={20} />
                  </div>
                  <span className="font-bold text-brand-primary">24/7 Support</span>
                </div>
                <p className="text-xs text-brand-muted">Emergency care is always available for your peace of mind.</p>
              </div>
            </div>
          </div>
          
          {/* Marquee - Full Width */}
          <div className="mt-24 py-10 bg-brand-primary text-white marquee-container w-full">
            <div className="marquee-content">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-20 px-10">
                  <span className="text-xl md:text-2xl font-display font-medium uppercase tracking-widest whitespace-nowrap">Wellness Exams</span>
                  <Heart className="text-brand-accent shrink-0" />
                  <span className="text-xl md:text-2xl font-display font-medium uppercase tracking-widest whitespace-nowrap">Advanced Surgery</span>
                  <Heart className="text-brand-accent shrink-0" />
                  <span className="text-xl md:text-2xl font-display font-medium uppercase tracking-widest whitespace-nowrap">Dental Care</span>
                  <Heart className="text-brand-accent shrink-0" />
                  <span className="text-xl md:text-2xl font-display font-medium uppercase tracking-widest whitespace-nowrap">Emergency Services</span>
                  <Heart className="text-brand-accent shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy / Stats */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-brand-ink text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center mb-24">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl text-white">
                  We believe every pet deserves <span className="text-brand-gray-light">extraordinary</span> care.
                </h2>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Our clinic was founded on the principle that veterinary medicine should be as advanced as human medicine, but delivered with the warmth of a family friend.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { label: "Years Experience", value: "25+" },
                  { label: "Happy Patients", value: "12k" },
                  { label: "Expert Vets", value: "15" },
                  { label: "Success Rate", value: "99%" },
                ].map((stat, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-4xl font-display font-bold text-brand-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-white/50 font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stacked Slides */}
        <section className="relative py-12">
          {slides.map((slide, i) => (
            <div 
              key={i} 
              className="stacked-slide h-screen w-full flex items-center justify-center px-4 md:px-12"
            >
              <div className={`stacked-slide-inner max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 md:gap-20 items-center p-8 md:p-16 rounded-[40px] md:rounded-[60px] shadow-xl ${slide.color}`}>
                <div className="space-y-6 md:space-y-8">
                  <span className="inline-block px-4 py-1 bg-brand-gray-light rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest">{slide.subtitle}</span>
                  <h2 className="text-4xl md:text-7xl text-brand-primary leading-tight">{slide.title}</h2>
                  <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-md">{slide.desc}</p>
                  <div className="pt-4 md:pt-6">
                    <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                      Learn More <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-square rounded-[30px] md:rounded-[60px] overflow-hidden shadow-lg">
                  <img 
                    src={slide.img} 
                    alt={slide.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto bg-brand-primary rounded-[40px] md:rounded-[60px] p-8 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent rounded-full blur-[120px]" />
            </div>
            
            <div className="relative z-10 space-y-8 md:space-y-10">
              <h2 className="text-4xl md:text-7xl font-display font-bold leading-tight">
                Ready to give your pet<br />the best care?
              </h2>
              <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                Join thousands of happy pet owners who trust Paws.Care for their companion's health and wellness.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-6">
                <Link to="/contact" className="btn-secondary text-lg px-12 py-5">
                  Book Appointment
                </Link>
                <Link to="/services" className="px-12 py-5 rounded-2xl font-semibold border border-white/20 hover:bg-white/10 transition-all text-lg">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
