import { useEffect, useRef } from 'react';
import { User, Target, Heart, Globe, Palette, MapPin } from 'lucide-react';

const interests = [
  { icon: Globe, label: 'Learning New Technologies' },
  { icon: Palette, label: 'Drawing' },
  { icon: MapPin, label: 'Traveling' },
];

const languages = ['English', 'Kannada', 'Hindi'];
const softSkills = ['Communication', 'Teamwork', 'Time Management', 'Quick Learner'];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="section-animate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Get to Know Me</p>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <div className="glass border border-border-default rounded-2xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
                  <User size={20} className="text-accent-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Who I Am</h3>
              </div>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I'm <span className="text-text-primary font-semibold">Avith Poojary</span>, a BCA student at
                  Dr. NSAM First Grade College, Nitte, with a deep passion for web development and technology.
                </p>
                <p>
                  My journey into programming started with curiosity about how websites and applications work.
                  That curiosity has grown into a genuine passion for crafting clean, responsive, and user-friendly
                  digital experiences.
                </p>
                <p>
                  I thrive on learning — whether it's mastering a new programming language, exploring modern
                  frameworks, or picking up industry best practices. Every project is an opportunity to grow.
                </p>
              </div>
            </div>

            <div className="glass border border-border-default rounded-2xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
                  <Target size={20} className="text-accent-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">My Goals</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                I aim to become a proficient <span className="text-text-primary font-medium">full-stack web developer</span> and
                contribute to meaningful projects that solve real-world problems. I'm actively looking for
                internship opportunities and freelance projects to gain practical experience and grow professionally
                in the software industry.
              </p>
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            {/* Soft Skills */}
            <div className="glass border border-border-default rounded-2xl p-8 card-hover">
              <h3 className="text-lg font-bold text-text-primary mb-5">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium rounded-lg hover:bg-accent-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass border border-border-default rounded-2xl p-8 card-hover">
              <h3 className="text-lg font-bold text-text-primary mb-5">Languages</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary" />
                    <span className="text-text-secondary">{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass border border-border-default rounded-2xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
                  <Heart size={20} className="text-accent-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Interests</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {interests.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-bg-primary/50 border border-border-default hover:border-accent-primary/30 transition-all duration-300 text-center"
                  >
                    <Icon size={22} className="text-accent-primary" />
                    <span className="text-text-secondary text-sm leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
