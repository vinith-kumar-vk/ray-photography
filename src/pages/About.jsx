import React from 'react';
import { TEAM_MEMBERS, AWARDS } from '../data/websiteData';
import { Camera, Award, ShieldCheck, Cpu, Sparkles, CheckCircle } from 'lucide-react';

const About = ({ setActiveTab }) => {
  const cinemaGear = [
    { title: 'Cinema Cameras', desc: 'RED Komodo 6K & Sony FX3 Cinema Line' },
    { title: 'Prime Glass', desc: 'Sony G-Master & Sigma Art F/1.2 Lenses' },
    { title: 'Aerial Cinema', desc: 'DJI Mavic 3 Cine 4K Drone' },
    { title: 'Audio & Lights', desc: 'Sennheiser Wireless Mics & Aputure COB Lights' }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0a0a0d] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-2">
            <Sparkles size={16} /> About Ray Photography
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-2">
            We Are Storytellers at Heart
          </h1>
          <div className="title-decorator" />
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            More than just wedding photographers, we become trusted companions who are honored to document the grandest day of your lives.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Behind the Lens of Ray Photography
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Founded with a deep passion for human connection and visual elegance, <strong className="text-white">Ray Photography</strong> has grown into one of South India's premier luxury wedding studios.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Our team is constantly exploring new creative horizons, combining high-end editorial aesthetics with raw candid emotion. We believe great wedding photographs happen when you feel completely yourself.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-gray-200">
                <CheckCircle size={16} className="text-[#d4af37]" /> Over 350+ Luxury Weddings Documented
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-200">
                <CheckCircle size={16} className="text-[#d4af37]" /> Featured in Top Wedding Publications & Awards
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-200">
                <CheckCircle size={16} className="text-[#d4af37]" /> Specialized Crew for Destination Weddings
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="img-zoom-container rounded-lg border border-gray-800 h-72">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" alt="Studio Founder" />
            </div>
            <div className="img-zoom-container rounded-lg border border-gray-800 h-72 pt-6">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" alt="Behind the scenes" />
            </div>
          </div>
        </div>

        {/* TEAM MEMBERS */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">The Artists</span>
            <h2 className="text-3xl font-bold font-serif text-white mt-1">Meet Our Lead Crew</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden text-left p-6 space-y-4 hover:border-[#d4af37]/40 transition-all">
                <div className="h-64 rounded-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-white">{member.name}</h3>
                  <p className="text-xs text-[#d4af37] font-semibold mt-0.5">{member.role}</p>
                </div>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GEAR & TECHNOLOGY STACK */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center max-w-4xl mx-auto">
          <Cpu size={32} className="mx-auto text-[#d4af37] mb-3" />
          <h3 className="text-2xl font-bold font-serif text-white mb-2">State-of-the-Art Cinema Tech</h3>
          <p className="text-xs text-gray-300 font-light max-w-xl mx-auto mb-8">
            We use top-tier cinema equipment to ensure uncompromised low-light performance, crisp skin tones, and 4K Ultra HD clarity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {cinemaGear.map((gear, i) => (
              <div key={i} className="bg-black/60 p-4 rounded border border-gray-800">
                <h4 className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">{gear.title}</h4>
                <p className="text-[11px] text-gray-300 mt-1">{gear.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
