import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dr. NSAM First Grade College, Nitte',
    period: '2024 – May 2027',
    score: 'CGPA: 7.0',
    status: 'Ongoing',
    highlights: ['Web Development', 'Programming', 'Database Management', 'Computer Networks'],
  },
  {
    degree: 'Pre-University Course (PUC)',
    institution: 'Dr. NSAM PU College, Nitte',
    period: '2022 – 2024',
    score: 'Percentage: 74%',
    status: 'Completed',
    highlights: ['Computer Science', 'Mathematics', 'Physics', 'Electronics'],
  },
];

export default function Education() {
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
    <section id="education" className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="section-animate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <p className="text-accent-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">My Academic Path</p>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/50 via-accent-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative flex gap-6 sm:gap-8">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <div className="relative z-10 w-16 h-16 rounded-2xl glass border border-accent-primary/30 flex items-center justify-center bg-bg-card shadow-glow">
                    <GraduationCap size={24} className="text-accent-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass border border-border-default rounded-2xl p-6 sm:p-8 card-hover group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary leading-tight">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-text-secondary">
                        <MapPin size={14} className="text-accent-primary flex-shrink-0" />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                    </div>
                    <span
                      className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === 'Ongoing'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20'
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <Calendar size={14} className="text-accent-primary" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <Award size={14} className="text-accent-primary" />
                      <span className="text-accent-primary font-semibold">{edu.score}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 bg-bg-primary/60 border border-border-default text-text-muted text-xs rounded-lg"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
