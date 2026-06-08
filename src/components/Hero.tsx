import { useEffect, useRef } from 'react';
import { ArrowDown, Download, Mail, Linkedin, Terminal, Sparkles } from 'lucide-react';


export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const timeout = setTimeout(() => {
      el.classList.add('opacity-100');
      el.querySelectorAll('.hero-item').forEach((item, i) => {
        setTimeout(() => {
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).style.transform = 'translateY(0)';
        }, i * 150);
      });
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full opacity-0 transition-opacity duration-500"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Badge */}
            <div
              className="hero-item inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-accent-primary font-medium border border-accent-primary/20"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
              </span>
              Available for Internships & Opportunities
            </div>

            {/* Name */}
            <div
              className="hero-item space-y-2"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <p className="text-text-secondary text-lg font-medium tracking-wider uppercase">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-text-primary">Avith</span>
                <br />
                <span className="text-gradient">Poojary</span>
              </h1>
            </div>

            {/* Title */}
            <div
              className="hero-item"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <div className="flex items-center gap-3">
                <Terminal size={18} className="text-accent-primary flex-shrink-0" />
                <p className="text-xl sm:text-2xl font-semibold text-text-primary">
                  BCA Student{' '}
                  <span className="text-text-secondary">|</span>{' '}
                  Web Developer
                </p>
              </div>
            </div>

            {/* Tagline */}
            <div
              className="hero-item"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-text-secondary leading-snug">
                Building{' '}
                <span className="text-gradient-animate">Modern Digital</span>
                <br />Experiences
              </p>
            </div>

            {/* Description */}
            <div
              className="hero-item"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg">
                Motivated BCA student passionate about web development, programming, and technology.
                Focused on building responsive websites and continuously improving technical skills.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="hero-item flex flex-wrap gap-3"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <a
                href="/resume.pdf"
                download="Avith_Poojary_Resume.pdf"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline flex items-center gap-2 text-sm"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/avith-d-poojary-b27ba7336"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass border border-border-default hover:border-accent-primary/40 text-text-secondary hover:text-accent-primary font-semibold rounded-lg transition-all duration-300 text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div
              className="hero-item grid grid-cols-3 gap-4 pt-2"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              {[
                { label: 'Projects', value: '3+' },
                { label: 'CGPA', value: '7.0' },
                { label: 'Certifications', value: '3+' },
              ].map(({ label, value }) => (
                <div key={label} className="glass rounded-xl p-3 text-center card-hover border border-border-default">
                  <p className="text-2xl font-black text-accent-primary">{value}</p>
                  <p className="text-xs text-text-muted mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-4 rounded-full border border-accent-primary/10 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-accent-primary/5" />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-accent-primary/10 blur-2xl animate-pulse-slow" />

              {/* Profile container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-accent-primary/30 overflow-hidden glass animate-float shadow-glow-lg">
                <img
                  src="download (3).jpg"
                  alt="Avith Poojary"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-3 -left-6 glass border border-border-default rounded-xl px-4 py-2 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 glow-dot" />
                  <span className="text-xs font-medium text-text-primary whitespace-nowrap">Open to Work</span>
                </div>
              </div>

              <div className="absolute -top-2 -right-4 glass border border-border-default rounded-xl px-4 py-2 shadow-card">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent-primary" />
                  <span className="text-xs font-medium text-text-primary">BCA 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-text-muted uppercase tracking-widest">Scroll</p>
          <ArrowDown size={16} className="text-text-muted" />
        </div>
      </div>
    </section>
  );
}
