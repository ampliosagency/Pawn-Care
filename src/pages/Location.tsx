import PageTransition from '../components/PageTransition';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <PageTransition>
      <div className="pt-40 pb-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mb-24 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gray-light rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest">
              <MapPin size={14} className="text-brand-accent" />
              <span>Our Modern Facility</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight text-brand-primary break-words">
              Visit Our <span className="text-brand-ink font-handwritten italic">Clinic</span>.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl">
              Conveniently located in the heart of Animal Valley, our modern facility is designed to be a stress-free environment for both you and your pets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="bg-white p-12 rounded-[40px] border border-brand-primary/5 shadow-xl space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gray-light flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-2">Our Address</h3>
                    <p className="text-brand-muted leading-relaxed">
                      123 Pet Lane, Animal Valley,<br />
                      CA 90210, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gray-light flex items-center justify-center text-brand-primary shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-2">Business Hours</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-brand-muted font-medium">
                      <p>Mon - Fri:</p><p>8:00 AM - 8:00 PM</p>
                      <p>Saturday:</p><p>9:00 AM - 5:00 PM</p>
                      <p>Sunday:</p><p className="text-brand-primary font-bold">Emergency Only</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gray-light flex items-center justify-center text-brand-primary shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-brand-primary mb-2">Contact Details</h3>
                    <p className="text-brand-muted font-medium">Phone: (555) 123-4567</p>
                    <p className="text-brand-muted font-medium">Email: hello@pawsandcare.com</p>
                  </div>
                </div>

                <button className="btn-primary w-full flex items-center justify-center gap-3">
                  <Navigation size={20} />
                  Get Directions
                </button>
              </div>

              <div className="bg-brand-primary p-6 sm:p-8 md:p-12 rounded-[30px] md:rounded-[40px] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-bl-full" />
                <h4 className="text-2xl font-display font-bold mb-4">Parking Information</h4>
                <p className="opacity-70 leading-relaxed">
                  We offer free dedicated parking for our clients right in front of the clinic. For emergency cases, please use the marked "Emergency" spots closest to the main entrance.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] md:rounded-[60px] overflow-hidden h-[420px] sm:h-[560px] md:h-[700px] shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Map location" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="glass-card p-6 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce">
                  <div className="bg-brand-primary p-3 rounded-2xl text-white">
                    <MapPin size={24} />
                  </div>
                  <span className="font-display font-bold text-brand-primary text-xl whitespace-nowrap">We are here!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
