import { useEffect, useRef } from 'react';
import { Award, BadgeCheck, Smartphone, Terminal, Briefcase } from 'lucide-react';

const certifications = [
  {
    title: 'Android Application Development',
    issuer: 'Professional Certification',
    icon: Smartphone,
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    description: 'Certified in Android app development, covering UI/UX design, data storage, and API integration for mobile platforms.',
    tags: ['Android', 'Mobile', 'Java/Kotlin'],
  },
  {
    title: 'Linux Programming',
    issuer: 'Professional Certification',
    icon: Terminal,
    color: 'from-sky-500/20 to-sky-500/5',
    iconColor: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    description: 'Proficient in Linux OS fundamentals, shell scripting, file systems, and command-line tools for software development.',
    tags: ['Linux', 'Shell Scripting', 'CLI'],
  },
  {
    title: 'Business Corporate Etiquette',
    issuer: 'Professional Certification',
    icon: Briefcase,
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    description: 'Trained in professional communication, workplace conduct, and corporate etiquette for the modern business environment.',
    tags: ['Communication', 'Professionalism', 'Business'],
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-bg-card/30 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="section-animate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <p className="text-accent-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">What I've Earned</p>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-blue-500 mx-auto rounded-full" />
          <p className="text-text-secondary mt-6 max-w-xl mx-auto leading-relaxed">
            Professional certifications that validate my technical knowledge and commitment to learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map(({ title, issuer, icon: Icon, color, iconColor, borderColor, description, tags }) => (
            <div
              key={title}
              className="relative glass border border-border-default rounded-2xl p-6 card-hover group overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} border ${borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className={iconColor} />
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-2 mb-3">
                  <BadgeCheck size={16} className="text-accent-primary" />
                  <span className="text-xs text-accent-primary font-medium">{issuer}</span>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-3 leading-tight">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{description}</p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-bg-primary/60 border border-border-default text-text-muted text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Award size={40} className="text-accent-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
