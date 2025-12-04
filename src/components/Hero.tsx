import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "A passionate Full Stack Web Developer specializing in building clean, modern, and responsive web applications.";

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isTyping) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isTyping]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced cursor-reactive floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary glow sphere */}
        <div 
          className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse-glow transition-all duration-1000 ease-out"
          style={{ 
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px) scale(${1 + Math.abs(mousePosition.x) * 0.1})`,
            animationDelay: '0s'
          }}
        ></div>
        
        {/* Secondary accent sphere */}
        <div 
          className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse-glow transition-all duration-1000 ease-out" 
          style={{ 
            bottom: '10%',
            right: '5%',
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px) scale(${1 + Math.abs(mousePosition.y) * 0.1})`,
            animationDelay: '1.5s' 
          }}
        ></div>
        
        {/* Center floating orb */}
        <div 
          className="absolute w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float transition-all duration-700 ease-out"
          style={{ 
            top: '50%',
            left: '50%',
            transform: `translate(calc(-50% + ${mousePosition.x * 25}px), calc(-50% + ${mousePosition.y * 25}px))`,
            animationDelay: '0.5s'
          }}
        ></div>
        
        {/* Ambient floating particles with varied sizes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-sm animate-float"
            style={{
              width: `${8 + (i % 4) * 4}px`,
              height: `${8 + (i % 4) * 4}px`,
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              background: i % 2 === 0 ? 'hsl(var(--primary) / 0.4)' : 'hsl(var(--accent) / 0.3)',
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${6 + i * 1.5}s`,
              opacity: 0.6 + (i % 3) * 0.2,
            }}
          ></div>
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Enhanced Profile Image with 3D tilt and glow */}
        <div className="mb-8 opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div 
            className="w-44 h-44 mx-auto rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 hover:scale-110 hover:rotate-6 transition-all duration-700 cursor-pointer relative group"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 12}deg) rotateY(${mousePosition.x * 12}deg)`,
              boxShadow: `0 20px 60px -10px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--accent) / 0.3)`,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src="https://venkat4400.github.io/Portfolio-site/assets/img/jpg/venkat.jpg" 
              alt="Kota Venkat - Full Stack Developer" 
              className="w-full h-full rounded-full object-cover relative z-10 ring-2 ring-primary/20"
            />
          </div>
        </div>

        {/* Main Heading with enhanced sliding reveal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up tracking-tight" style={{ animationDelay: '0.5s' }}>
          Hi, I'm <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300">Venkat Kota</span> 
          <span className="inline-block animate-[wave_1s_ease-in-out_3] ml-2">👋</span>
        </h1>

        {/* Subheading with enhanced typing effect */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto min-h-[4rem] opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: '0.7s' }}>
          {displayedText}
          <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
        </p>

        {/* Enhanced Role Tags with staggered animation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Programmer', 'Web Developer', 'Full Stack Developer'].map((role, i) => (
            <span 
              key={role}
              className="px-5 py-2.5 rounded-full glass-card text-sm font-medium hover:bg-primary/10 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default opacity-0 animate-fade-up"
              style={{ 
                animationDelay: `${0.9 + i * 0.1}s`,
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              {role}
            </span>
          ))}
        </div>

        {/* Enhanced Social Links with staggered colored glows */}
        <div className="flex justify-center gap-5 mb-10">
          {[
            { icon: Linkedin, href: 'https://linkedin.com', color: '#0077b5', glow: 'rgba(59,130,246,0.6)', label: 'LinkedIn' },
            { icon: Github, href: 'https://github.com', color: '#ffffff', glow: 'rgba(255,255,255,0.5)', label: 'GitHub' },
            { icon: Mail, href: 'mailto:kotavenkat2004@gmail.com', color: 'hsl(var(--primary))', glow: 'rgba(251,146,60,0.6)', label: 'Email' }
          ].map(({ icon: Icon, href, color, glow, label }, i) => (
            <a 
              key={label}
              href={href} 
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-14 h-14 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 group opacity-0 animate-fade-up"
              style={{ 
                animationDelay: `${1.2 + i * 0.1}s`,
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 8px 30px ${glow}, 0 0 40px ${glow}`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'}
            >
              <Icon className="w-6 h-6 transition-all duration-300" style={{ color: 'currentColor' }} />
            </a>
          ))}
        </div>

        {/* Enhanced CTA Buttons with premium glow */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center opacity-0 animate-fade-up" style={{ animationDelay: '1.5s' }}>
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </Button>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-button hover:scale-105 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <FileText className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <div className="w-7 h-12 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2 hover:border-primary/60 transition-colors duration-300 cursor-pointer group">
            <div className="w-2 h-3 bg-primary rounded-full animate-bounce group-hover:bg-accent transition-colors duration-300" style={{ animationDuration: '1.5s' }}></div>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-2 tracking-wider uppercase">Scroll</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
