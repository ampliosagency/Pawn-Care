import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="pt-40 pb-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mb-24 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gray-light rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest">
              <MessageSquare size={14} className="text-brand-accent" />
              <span>Get in Touch with Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight text-brand-primary break-words">
              Let's Talk About<br />Your <span className="text-brand-ink italic font-light">Pet's Health</span>.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl">
              Have a question or want to schedule an appointment? Our friendly team is here to help you and your pet.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-16 rounded-[40px] md:rounded-[60px] border border-brand-primary/5 shadow-2xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-brand-primary uppercase tracking-widest">Your Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-primary focus:ring-0 transition-all outline-none font-medium text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-brand-primary uppercase tracking-widest">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-primary focus:ring-0 transition-all outline-none font-medium text-sm md:text-base"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-brand-primary uppercase tracking-widest">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="(555) 000-0000"
                          className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-primary focus:ring-0 transition-all outline-none font-medium text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-brand-primary uppercase tracking-widest">Service Needed</label>
                        <select className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-primary focus:ring-0 transition-all outline-none appearance-none font-medium text-sm md:text-base">
                          <option>General Wellness</option>
                          <option>Vaccination</option>
                          <option>Surgery</option>
                          <option>Emergency</option>
                          <option>Grooming</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-brand-primary uppercase tracking-widest">Your Message</label>
                      <textarea 
                        rows={5}
                        placeholder="Tell us about your pet's needs..."
                        className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-primary focus:ring-0 transition-all outline-none resize-none font-medium text-sm md:text-base"
                      ></textarea>
                    </div>
                    <button className="btn-primary w-full md:w-auto px-10 md:px-12 py-5 md:py-6 text-base md:text-lg flex items-center justify-center gap-3">
                      Send Message
                      <Send size={20} />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 md:py-20 space-y-6 md:space-y-8">
                    <div className="w-20 md:w-24 h-20 md:h-24 bg-brand-gray-light text-brand-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={48} className="md:w-14 md:h-14" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-primary">Message Sent!</h2>
                    <p className="text-lg md:text-xl text-brand-muted max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Our team will get back to you within 24 hours to confirm your appointment.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-brand-primary font-bold hover:text-brand-ink transition-colors text-base md:text-lg"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>

              {/* Google Maps Embed */}
              <div className="mt-12 rounded-[40px] md:rounded-[60px] overflow-hidden h-[400px] md:h-[500px] shadow-2xl border border-brand-primary/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.401416684785!3d34.052234180605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb298533667d%3A0x86980667e416246!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1647250000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-brand-secondary p-6 sm:p-8 md:p-12 rounded-[30px] md:rounded-[60px] text-white space-y-8 md:space-y-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-bl-full" />
                <h3 className="text-3xl font-display font-bold">Direct Contact</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gray-light">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-xs opacity-60 uppercase tracking-widest font-bold mb-1">Call Us</p>
                      <p className="text-xl font-bold">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gray-light">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-xs opacity-60 uppercase tracking-widest font-bold mb-1">Email Us</p>
                      <p className="text-xl font-bold">hello@pawsandcare.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gray-light">
                      <MessageSquare size={28} />
                    </div>
                    <div>
                      <p className="text-xs opacity-60 uppercase tracking-widest font-bold mb-1">Live Chat</p>
                      <p className="text-xl font-bold">Available 8am - 8pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-ink p-12 rounded-[60px] text-white shadow-xl">
                <h4 className="text-2xl font-display font-bold text-white mb-4">Emergency?</h4>
                <p className="text-white/60 leading-relaxed mb-8">
                  If your pet is experiencing a life-threatening emergency after hours, please call our emergency line immediately.
                </p>
                <a href="tel:5551234567" className="inline-flex items-center gap-3 text-brand-primary font-bold text-xl hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
