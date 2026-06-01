import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'avithdpoojary@gmail.com',
    href: 'mailto:avithdpoojary@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8296141462',
    href: 'tel:+918296141462',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Karnataka, India',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'avith-d-poojary',
    href: 'https://linkedin.com/in/avith-d-poojary',
  },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('submitting');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-bg-card/30 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="section-animate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <p className="text-accent-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-4">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-blue-500 mx-auto rounded-full" />
          <p className="text-text-secondary mt-6 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="glass border border-border-default rounded-2xl p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Let's Talk</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                I'm currently open to internship opportunities, freelance projects, and collaborations.
                Don't hesitate to reach out — I'll respond within 24 hours.
              </p>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent-primary/40 transition-all duration-300">
                      <Icon size={18} className="text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm font-medium break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-text-secondary text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass border border-border-default rounded-2xl p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-bg-primary/60 border border-border-default hover:border-border-hover focus:border-accent-primary text-text-primary placeholder-text-muted rounded-xl outline-none transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-bg-primary/60 border border-border-default hover:border-border-hover focus:border-accent-primary text-text-primary placeholder-text-muted rounded-xl outline-none transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-bg-primary/60 border border-border-default hover:border-border-hover focus:border-accent-primary text-text-primary placeholder-text-muted rounded-xl outline-none transition-all duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-bg-primary/60 border border-border-default hover:border-border-hover focus:border-accent-primary text-text-primary placeholder-text-muted rounded-xl outline-none transition-all duration-200 text-sm resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                    <p className="text-emerald-400 text-sm">Message sent! I'll get back to you soon.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-3 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent-primary text-bg-primary font-semibold rounded-xl hover:bg-accent-secondary transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-glow hover:shadow-glow-lg"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
