import PageTransition from '../components/PageTransition';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const stats = [
  { label: "Years of Experience", value: "25+" },
  { label: "Pets Treated", value: "50k+" },
  { label: "Expert Vets", value: "12" },
  { label: "Happy Clients", value: "15k+" }
];

export default function About() {
  return (
    <PageTransition>
      <div className="pt-40 pb-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-40">
            <div className="space-y-8 md:space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gray-light rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest">
                <Users size={14} className="text-brand-accent" />
                <span>Our Story & Mission</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-tight text-brand-primary">
                Driven by <span className="text-brand-ink">Love</span>,<br />Guided by Science.
              </h1>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-xl">
                Founded in 2001, Paws.Care has grown from a small neighborhood clinic to one of the most respected veterinary hospitals in the region. Our mission remains the same: to provide compassionate, high-quality care that honors the bond between pets and their people.
              </p>
              <div className="grid grid-cols-2 gap-8 md:gap-12 pt-4">
                {stats.map((s, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-4xl md:text-5xl font-display font-bold text-brand-primary tracking-tight">{s.value}</p>
                    <p className="text-[10px] md:text-xs text-brand-muted font-bold uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Clinic" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 glass-card p-6 md:p-8 rounded-[30px] md:rounded-[40px] max-w-[220px] md:max-w-[280px] rotate-3">
                <p className="text-brand-primary font-bold text-xl md:text-2xl leading-snug">
                  "We treat every patient as if they were our own family member."
                </p>
                <p className="text-[10px] md:text-xs text-brand-muted mt-4 font-bold uppercase tracking-widest">— Dr. Emily Rivera</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-brand-secondary rounded-[40px] md:rounded-[60px] p-8 md:p-24 text-white mb-24 md:mb-40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-12 md:mb-20 space-y-6">
                <h2 className="text-4xl md:text-6xl font-display font-bold">Our Core Values</h2>
                <p className="text-lg md:text-xl opacity-70 leading-relaxed">These principles guide everything we do, from routine check-ups to complex surgeries.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {[
                  { icon: Heart, title: "Compassion", desc: "We treat every animal with the same gentleness and respect we would our own pets." },
                  { icon: Award, title: "Excellence", desc: "We pursue the highest standards of medical care through continuous learning and innovation." },
                  { icon: Users, title: "Community", desc: "We are proud to be a trusted resource and partner for pet owners in our local community." },
                  { icon: Sparkles, title: "Integrity", desc: "We believe in transparent communication and honest recommendations for your pet's health." }
                ].map((v, i) => (
                  <div key={i} className="space-y-6 p-8 rounded-[30px] md:rounded-[40px] bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-gray-light flex items-center justify-center text-brand-primary">
                      <v.icon size={24} className="md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold">{v.title}</h3>
                    <p className="opacity-70 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <div className="max-w-3xl mb-12 md:mb-20 space-y-6">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-primary">Meet Our Experts</h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">Our diverse team of veterinarians and specialists are here to provide the best care possible.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { name: "Dr. Emily Rivera", role: "Chief Veterinarian", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500" },
                { name: "Dr. James Wilson", role: "Surgical Specialist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500" },
                { name: "Dr. Sarah Thompson", role: "Emergency Care", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=500" }
              ].map((member, i) => (
                <div key={i} className="group">
                  <div className="rounded-[30px] md:rounded-[40px] overflow-hidden mb-6 md:mb-8 aspect-[4/5] relative shadow-lg">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-brand-primary mb-2">{member.name}</h4>
                  <p className="text-brand-muted font-bold text-xs md:text-sm uppercase tracking-widest">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
