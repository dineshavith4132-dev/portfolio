import { useEffect, useRef } from 'react';
import { Code2, Globe, Wrench, Monitor } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'from-sky-500/20 to-sky-500/5',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 70 },
      { name: 'DBMS', level: 65 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    color: 'from-emerald-500/20 to-emerald-500/5',
    skills: [
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-amber-500/20 to-amber-500/5',
    skills: [
      { name: 'VS Code', level: 90 },
      { name: 'Git', level: 70 },
    ],
  },
  {
    title: 'Operating Systems',
    icon: Monitor,
    color: 'from-rose-500/20 to-rose-500/5',
    skills: [
      { name: 'Windows', level: 90 },
      { name: 'Linux', level: 60 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const bar = barRef.current?.querySelector('.skill-fill') as HTMLElement;
            if (bar) bar.style.width = `${level}%`;
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    const el = barRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [level, delay]);

  return (
    <div ref={barRef} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text-secondary">{name}</span>
        <span className="text-xs font-semibold text-accent-primary">{level}%</span>
      </div>
      <div className="h-2 bg-bg-primary rounded-full overflow-hidden">
        <div
          className="skill-fill h-full bg-gradient-to-r from-accent-primary to-blue-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" className="relative py-24 lg:py-32 bg-bg-card/30 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="section-animate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <p className="text-accent-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">What I Know</p>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-blue-500 mx-auto rounded-full" />
          <p className="text-text-secondary mt-6 max-w-xl mx-auto leading-relaxed">
            A curated set of technologies and tools I've been learning and working with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map(({ title, icon: Icon, color, skills }) => (
            <div
              key={title}
              className="glass border border-border-default rounded-2xl p-8 card-hover group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} border border-accent-primary/20 flex items-center justify-center group-hover:border-accent-primary/40 transition-all duration-300`}>
                  <Icon size={22} className="text-accent-primary" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">{title}</h3>
              </div>

              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 150} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
