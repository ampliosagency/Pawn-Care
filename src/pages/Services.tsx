import { Stethoscope, Shield, Heart, Activity, Scissors, Microscope, Pill, Truck } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const services = [
  {
    title: "Wellness & Prevention",
    desc: "Regular check-ups, vaccinations, and parasite prevention to keep your pet healthy.",
    icon: Stethoscope,
    details: ["Annual Exams", "Vaccinations", "Microchipping", "Nutritional Counseling"]
  },
  {
    title: "Advanced Surgery",
    desc: "State-of-the-art surgical suite for both routine and complex procedures.",
    icon: Shield,
    details: ["Spay & Neuter", "Soft Tissue Surgery", "Orthopedic Surgery", "Laser Surgery"]
  },
  {
    title: "Emergency Care",
    desc: "Immediate medical attention for critical situations when time is of the essence.",
    icon: Activity,
    details: ["24/7 Triage", "Intensive Care", "Trauma Management", "Oxygen Therapy"]
  },
  {
    title: "Dental Health",
    desc: "Professional cleaning and oral surgery to prevent periodontal disease.",
    icon: Heart,
    details: ["Dental Cleaning", "Digital X-Rays", "Extractions", "Oral Surgery"]
  },
  {
    title: "Diagnostics",
    desc: "In-house laboratory and imaging for fast and accurate diagnosis.",
    icon: Microscope,
    details: ["Blood Work", "Digital Radiography", "Ultrasound", "Endoscopy"]
  },
  {
    title: "Pharmacy",
    desc: "Fully stocked pharmacy for all your pet's medication and prescription diet needs.",
    icon: Pill,
    details: ["Prescriptions", "Specialty Diets", "Heartworm Meds", "Online Refills"]
  },
  {
    title: "Grooming & Spa",
    desc: "Professional grooming services to keep your pet looking and feeling their best.",
    icon: Scissors,
    details: ["Bathing", "Haircuts", "Nail Trimming", "Ear Cleaning"]
  },
  {
    title: "Pet Transport",
    desc: "Safe and comfortable transportation for your pet to and from our clinic.",
    icon: Truck,
    details: ["Local Pickup", "Emergency Transport", "Comfortable Vans", "Trained Staff"]
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-40 pb-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mb-24 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gray-light rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest">
              <Shield size={14} className="text-brand-accent" />
              <span>Full-Spectrum Veterinary Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-tight text-brand-primary">
              Comprehensive <span className="text-brand-ink">Care</span><br />for Every Need.
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed max-w-2xl">
              From routine wellness exams to advanced surgical procedures, we offer a full spectrum of veterinary services designed to keep your pet healthy at every stage of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[30px] md:rounded-[40px] border border-brand-primary/10 hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gray-light/50 rounded-bl-[100px] -mr-10 -mt-10 transition-all group-hover:bg-brand-gray-light" />
                
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 border border-brand-primary/5">
                  <s.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-primary mb-4">{s.title}</h3>
                <p className="text-brand-muted mb-8 leading-relaxed text-sm">{s.desc}</p>
                <ul className="space-y-3">
                  {s.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-brand-primary/70 uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
