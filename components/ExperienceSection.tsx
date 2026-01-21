
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, Users, Star, Mic } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const getIcon = (company: string) => {
    if (company.includes('NABA')) return <Users size={20} />;
    if (company.includes('Voice-Over')) return <Mic size={20} />;
    if (company.includes('Theater')) return <Star size={20} />;
    return <Briefcase size={20} />;
  };

  return (
    <section id="journey" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 apple-gradient">
            Professional History
          </h2>
          <p className="text-neutral-600 max-w-lg font-medium text-lg md:text-xl leading-relaxed">
            Leading initiatives and building products across diverse industries.
          </p>
        </header>

        <div className="relative space-y-16">
          {/* Vertical Timeline Line - Black Accent */}
          <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#1d1d1f] via-blue-500/30 to-transparent hidden md:block"></div>

          {RESUME_DATA.journey.map((item, idx) => (
            <div key={idx} className="relative md:pl-20 group">
              {/* Node Icon - Black Background */}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-[#1d1d1f] border-2 border-[#1d1d1f] flex items-center justify-center text-white group-hover:text-blue-400 group-hover:border-blue-400 group-hover:scale-105 transition-all z-10 hidden md:flex shadow-[0_8px_25px_rgba(29,29,31,0.3)]">
                {getIcon(item.company)}
              </div>

              <div className="bg-gradient-to-br from-white to-neutral-50 p-6 md:p-8 rounded-3xl border-2 border-neutral-200 group-hover:border-[#1d1d1f] transition-all shadow-sm group-hover:shadow-[0_10px_40px_rgba(29,29,31,0.1)]">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${item.type === 'Leadership' ? 'text-white border-[#1d1d1f] bg-[#1d1d1f] shadow-md' : 'text-neutral-600 border-neutral-300 bg-white'}`}>
                      {item.type}
                    </span>
                    <span className="text-xs font-bold text-neutral-500">{item.period}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 group-hover:text-[#1d1d1f] transition-colors text-[#1d1d1f]">
                    {item.role}
                  </h3>
                  <p className="text-lg md:text-xl text-blue-600 font-bold">{item.company}</p>
                </div>

                <ul className="space-y-3 max-w-2xl">
                  {item.description.map((point, i) => (
                    <li key={i} className="text-neutral-600 leading-relaxed text-base md:text-lg flex gap-3">
                      <span className="text-[#1d1d1f] font-black flex-shrink-0">▸</span>
                      <span className="opacity-90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Separator */}
              <div className="mt-10 h-[1px] w-full bg-neutral-200 md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
