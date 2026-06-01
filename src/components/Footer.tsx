import { Mail, Linkedin, Github, Code2, Heart } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Mail, href: 'mailto:avithdpoojary@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/avith-d-poojary', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-primary border-t border-border-default overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center">
                <Code2 size={18} className="text-accent-primary" />
              </div>
              <span className="font-bold text-xl">
                <span className="text-accent-primary">&lt;</span>
                <span className="text-text-primary">Avith</span>
                <span className="text-accent-primary">/&gt;</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              BCA Student & Web Developer passionate about building modern digital experiences.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-border-default hover:border-accent-primary/40 flex items-center justify-center text-text-secondary hover:text-accent-primary transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-text-secondary hover:text-accent-primary text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-text-muted group-hover:bg-accent-primary transition-colors duration-200" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="text-text-primary font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:avithdpoojary@gmail.com"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-primary text-sm transition-colors duration-200"
              >
                <Mail size={14} />
                avithdpoojary@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/avith-d-poojary"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-primary text-sm transition-colors duration-200"
              >
                <Linkedin size={14} />
                linkedin.com/in/avith-d-poojary
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-text-muted text-sm">
            &copy; 2026 Avith Poojary. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-red-400 fill-red-400" /> and React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
