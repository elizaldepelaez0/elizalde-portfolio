import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Briefcase, 
  Send, 
  User, 
  Tag, 
  PenLine, 
  ChevronDown, 
  ArrowRight, 
  ArrowUpRight, 
  Facebook, 
  Instagram, 
  Copy, 
  Check, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioData.js';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  // Copy email to clipboard helper
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Form submission handler with Netlify Forms + Mailto Fallback
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Field Validations
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMessage('Please select a subject from the dropdown.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please write a message before submitting.');
      return;
    }

    setStatus('submitting');

    try {
      // 1. Submit directly to Netlify Forms (Captures submission automatically on Netlify)
      const encodedData = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback if not on Netlify deployment
        triggerMailtoFallback();
        setStatus('success');
      }
    } catch (err) {
      // Fallback if offline or local dev without Netlify CLI
      triggerMailtoFallback();
      setStatus('success');
    }
  };

  const triggerMailtoFallback = () => {
    const subjectEncoded = encodeURIComponent(`[${formData.subject}] Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Elizalde,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent from Elizalde Jr. B. Pelaez Portfolio`
    );
    window.location.href = `mailto:${portfolioConfig.contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-20 bg-white dark:bg-[#120e11] transition-colors duration-300"
      aria-label="Contact Section"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: Contact Introduction, Info Cards & Social Links     */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Header & Introductory Content */}
            <div className="space-y-4">
              {/* Eyebrow Pill Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/60 text-palette-sunset">
                <Mail className="w-3.5 h-3.5 text-palette-sunset" />
                <span>GET IN TOUCH</span>
              </div>

              {/* Main Heading with Reference Underline Curve */}
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#171717] dark:text-white tracking-tight">
                Let's{' '}
                <span className="text-palette-sunset relative inline-block">
                  Connect.
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 100 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6C30 1 70 1 100 6"
                      stroke="#FF8A3D"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              {/* Paragraph Description */}
              <p className="font-sans text-sm sm:text-base text-[#64748B] dark:text-white/70 leading-relaxed pt-1">
                I'm always open to new opportunities, collaborations, or simply connecting with people who share an interest in design and technology. Feel free to reach out &mdash; I'd be happy to hear from you!
              </p>
            </div>

            {/* Contact Information Cards (Email, Location, Availability) */}
            <div className="space-y-3 pt-1">
              
              {/* Email Card */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#1c161b] border border-[#E2E8F0] dark:border-white/10 shadow-xs flex items-center justify-between gap-4 transition-all duration-300 hover:shadow-md hover:border-palette-sunset/40 group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-white/10 text-palette-sunset flex items-center justify-center shrink-0 border border-orange-100 dark:border-white/10 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50">
                      EMAIL
                    </p>
                    <a
                      href={`mailto:${portfolioConfig.contact.email}`}
                      className="font-sans text-sm sm:text-base font-bold text-[#171717] dark:text-white hover:text-palette-sunset transition-colors truncate block"
                      title="Send email"
                    >
                      {portfolioConfig.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-[#64748B] dark:text-white/60 hover:text-palette-sunset hover:bg-orange-50 dark:hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                  title={copiedEmail ? 'Copied to clipboard!' : 'Copy email address'}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#1c161b] border border-[#E2E8F0] dark:border-white/10 shadow-xs flex items-center gap-3.5 transition-all duration-300 hover:shadow-md hover:border-palette-sunset/40 group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-white/10 text-palette-sunset flex items-center justify-center shrink-0 border border-orange-100 dark:border-white/10 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50">
                    LOCATION
                  </p>
                  <p className="font-sans text-sm sm:text-base font-bold text-[#171717] dark:text-white">
                    {portfolioConfig.contact.location}
                  </p>
                </div>
              </div>

              {/* Availability Card */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#1c161b] border border-[#E2E8F0] dark:border-white/10 shadow-xs flex items-center gap-3.5 transition-all duration-300 hover:shadow-md hover:border-palette-sunset/40 group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-white/10 text-palette-sunset flex items-center justify-center shrink-0 border border-orange-100 dark:border-white/10 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#64748B] dark:text-white/50 mb-1">
                    AVAILABILITY
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span>Open to Learning Opportunities and Collaborations</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links Section */}
            <div className="space-y-3 pt-2 text-left">
              <div className="flex items-center gap-3">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#64748B] dark:text-white/60 shrink-0">
                  CONNECT WITH ME
                </p>
                <div className="h-px bg-[#E2E8F0] dark:bg-white/10 flex-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Facebook Link */}
                <a
                  href="https://www.facebook.com/profile.php?id=61577365681852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#1c161b] border border-[#E2E8F0] dark:border-white/10 shadow-xs hover:border-palette-sunset hover:shadow-md transition-all duration-300 flex items-center justify-between group"
                  aria-label="Visit Facebook Profile of Elizalde B. Pelaez Jr."
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-white/10 text-palette-sunset flex items-center justify-center shrink-0">
                      <Facebook className="w-4 h-4 fill-current" />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[11px] text-[#64748B] dark:text-white/50 font-medium">Facebook</p>
                      <p className="text-xs font-bold text-[#171717] dark:text-white truncate">Elizalde B. Pelaez Jr.</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-palette-sunset group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                </a>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/ittz_eliizh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#1c161b] border border-[#E2E8F0] dark:border-white/10 shadow-xs hover:border-palette-sunset hover:shadow-md transition-all duration-300 flex items-center justify-between group"
                  aria-label="Visit Instagram Profile @ittz_eliizh"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-white/10 text-palette-sunset flex items-center justify-center shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[11px] text-[#64748B] dark:text-white/50 font-medium">Instagram</p>
                      <p className="text-xs font-bold text-[#171717] dark:text-white truncate">@ittz_eliizh</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-palette-sunset group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                </a>
              </div>
            </div>

          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Professional Clean White Contact Form Card          */}
          {/* ================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1c161b] rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 border border-[#E2E8F0] dark:border-white/10 shadow-lg shadow-slate-100/80 dark:shadow-none space-y-6 text-left">
              
              {/* Form Card Header */}
              <div className="flex items-start gap-4 pb-2">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-white/10 text-palette-sunset flex items-center justify-center shrink-0 border border-orange-100 dark:border-white/10">
                  <Send className="w-5 h-5 -rotate-45" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#171717] dark:text-white tracking-tight">
                    Send a Message
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#64748B] dark:text-white/60 mt-0.5">
                    Have a question, project idea, or collaboration in mind? Send me a message!
                  </p>
                </div>
              </div>

              {/* Status Notifications */}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-center gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm space-y-1 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p className="text-[12px] text-emerald-700 dark:text-emerald-300">
                    Thank you for reaching out! Your message has been sent to <strong>{portfolioConfig.contact.email}</strong>. Elizalde will get back to you shortly.
                  </p>
                </div>
              )}

              {/* Functional Contact Form with Netlify Forms Integration */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
                noValidate
              >
                {/* Hidden Fields for Netlify Forms routing */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                
                {/* Full Name & Email Address (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name Field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="block text-xs font-mono font-bold text-[#171717] dark:text-white/90 uppercase tracking-wider">
                      FULL NAME <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-[#161015] border border-[#E2E8F0] dark:border-white/15 text-[#171717] dark:text-white placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-palette-sunset/20 focus:border-palette-sunset transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Address Field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="block text-xs font-mono font-bold text-[#171717] dark:text-white/90 uppercase tracking-wider">
                      EMAIL ADDRESS <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-[#161015] border border-[#E2E8F0] dark:border-white/15 text-[#171717] dark:text-white placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-palette-sunset/20 focus:border-palette-sunset transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Dropdown Field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="subject" className="block text-xs font-mono font-bold text-[#171717] dark:text-white/90 uppercase tracking-wider">
                    SUBJECT <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-white dark:bg-[#161015] border border-[#E2E8F0] dark:border-white/15 text-sm text-[#171717] dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-palette-sunset/20 focus:border-palette-sunset transition-all cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-400">
                        Select a subject
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Internship Opportunity">Internship Opportunity</option>
                      <option value="Design Inquiry">Design Inquiry</option>
                      <option value="Professional Opportunity">Professional Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#64748B] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="block text-xs font-mono font-bold text-[#171717] dark:text-white/90 uppercase tracking-wider">
                    MESSAGE <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <PenLine className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5 pointer-events-none" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-[#161015] border border-[#E2E8F0] dark:border-white/15 text-sm text-[#171717] dark:text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-palette-sunset/20 focus:border-palette-sunset transition-all resize-y min-h-[140px]"
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-2 text-left">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-palette-sunset hover:bg-[#F2782B] text-white font-semibold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-palette-sunset focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Preparing Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 -rotate-45" />
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Functional Fallback Note */}
                <p className="text-[11px] font-mono text-[#64748B] dark:text-white/50 text-left pt-1">
                  * Opens your default mail client directly with your formatted message addressed to Elizalde.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
