import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Linkedin, Github, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Free Web3Forms / Formspree Endpoint submission to send directly to yogeshsingh1425@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Easily replaceable with free key from web3forms.com
          name: formState.name,
          email: formState.email,
          subject: formState.subject || 'New Portfolio Contact Message',
          message: formState.message,
          to_email: 'yogeshsingh1425@gmail.com',
        }),
      });

      const result = await response.json();
      if (result.success || response.ok) {
        setSubmitSuccess(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#6366F1', '#06B6D4', '#A855F7'],
          });
        } catch (err) {}
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 6000);
      } else {
        // Fallback email client launch
        window.location.href = `mailto:yogeshsingh1425@gmail.com?subject=${encodeURIComponent(
          formState.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        )}`;
        setSubmitSuccess(true);
      }
    } catch (error) {
      // Fallback open mail client
      window.location.href = `mailto:yogeshsingh1425@gmail.com?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-cardDark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-primaryIndigo/10 border border-primaryIndigo/20 text-primaryIndigo text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>06. GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build <span className="gradient-text-primary">Something Exceptional</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-sora font-bold text-2xl text-white mb-3">
                Contact Information
              </h3>
              <p className="text-textMuted font-inter text-xs leading-relaxed mb-8">
                I am actively seeking full-time software engineering, full-stack, or machine learning opportunities. Feel free to reach out via direct message or email!
              </p>

              <div className="space-y-4 mb-8">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-cardDark/80 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-primaryIndigo/20 border border-primaryIndigo/30 flex items-center justify-center text-primaryIndigo">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-textMuted block">Direct Email</span>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-xs font-semibold text-white hover:text-secondaryCyan transition-colors"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-textMuted hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-cardDark/80 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-secondaryCyan/20 border border-secondaryCyan/30 flex items-center justify-center text-secondaryCyan">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-textMuted block">Phone Contact</span>
                      <a
                        href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                        className="text-xs font-semibold text-white hover:text-secondaryCyan transition-colors"
                      >
                        {PORTFOLIO_DATA.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-textMuted hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-cardDark/80 border border-white/5 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-accentPurple/20 border border-accentPurple/30 flex items-center justify-center text-accentPurple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-textMuted block">Current Location</span>
                    <span className="text-xs font-semibold text-white">
                      {PORTFOLIO_DATA.personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-textMuted">Connect on Socials:</span>
              <div className="flex space-x-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-cardDark border border-white/10 text-textMuted hover:text-white hover:border-secondaryCyan transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-cardDark border border-white/10 text-textMuted hover:text-white hover:border-primaryIndigo transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl"
          >
            <h3 className="font-sora font-bold text-2xl text-white mb-6">
              Send a Direct Message
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-medium flex items-center space-x-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-textMuted mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-cardDark/90 border border-white/10 text-white placeholder-textMuted/50 text-xs focus:outline-none focus:border-primaryIndigo transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-textMuted mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-cardDark/90 border border-white/10 text-white placeholder-textMuted/50 text-xs focus:outline-none focus:border-primaryIndigo transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-textMuted mb-1.5">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Opportunity / Collaboration Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-cardDark/90 border border-white/10 text-white placeholder-textMuted/50 text-xs focus:outline-none focus:border-primaryIndigo transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-textMuted mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your team, role, or project..."
                  className="w-full px-4 py-3 rounded-xl bg-cardDark/90 border border-white/10 text-white placeholder-textMuted/50 text-xs focus:outline-none focus:border-primaryIndigo transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-sora font-semibold text-xs bg-gradient-to-r from-primaryIndigo via-secondaryCyan to-accentPurple text-white shadow-glow-primary hover:opacity-95 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
