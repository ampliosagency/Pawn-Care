import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink pt-32 pb-16 px-6 md:px-12 text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
        <div className="md:col-span-5 space-y-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
              <span className="font-display font-bold text-xl">P</span>
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              Paws<span className="text-brand-primary">.</span>Care
            </span>
          </Link>
          <p className="text-xl text-white/60 max-w-sm leading-relaxed">
            Redefining the standard of veterinary medicine with modern technology and a gentle touch.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-primary transition-all"><Facebook size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-primary transition-all"><Instagram size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-primary transition-all"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li><Link to="/" className="hover:text-brand-primary transition-all">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-primary transition-all">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-all">About Us</Link></li>
            <li><Link to="/location" className="hover:text-brand-primary transition-all">Location</Link></li>
          </ul>
        </div>

        <div className="md:col-span-5 space-y-6">
          <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-6 text-white/60 font-medium">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gray-light shrink-0">
                <MapPin size={20} />
              </div>
              <span>123 Pet Lane, Animal Valley, CA 90210, United States</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gray-light shrink-0">
                <Phone size={20} />
              </div>
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gray-light shrink-0">
                <Mail size={20} />
              </div>
              <span>hello@pawsandcare.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-white/40 font-medium">
        <p>© 2026 Paws.Care / All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
