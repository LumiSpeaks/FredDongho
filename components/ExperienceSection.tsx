import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, Users, Mic, Laptop, Pin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const getIcon = (company: string) => {
    if (company.includes('AceStudy')) return <Laptop size={10} />;
    if (company.includes('NABA')) return <Users size={10} />;
    if (company.includes('Pinterest')) return <Pin size={10} />;
    if (company.includes('Voice')) return <Mic size={10} />;
    return <Briefcase size={10} />;
  };

  const badgeClass = (type: string) => {
    if (type === 'Leadership' || type === 'Product') {
      return 'text-white border-[#1d1d1f] bg-[#1d1d1f] shadow-md';
    }
    return 'text-neutral-600 border-neutral-300 bg-white';
  };

  return (
    <section id="journey" className="py-8 md:py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <header className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-2 apple-gradient">Professional History</h2>
          <p className="text-neutral-600 max-w-md font-medium text-sm md:text-base leading-relaxed">
            Experience across product, leadership, content, and operations.
          </p>
        </header>

        <div className="relative space-y-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#1d1d1f] via-blue-500/30 to-transparent hidden md:block"></div>

          {RESUME_DATA.journey.map((item, idx) => (
            <div key={idx} className="relative md:pl-10 group">
              <div className="absolute left-0 top-0 w-6 h-6 rounded-xl bg-[#1d1d1f] border border-[#1d1d1f] flex items-center justify-center text-white group-hover:text-blue-400 group-hover:border-blue-400 group-hover:scale-105 transition-all z-10 hidden md:flex shadow-[0_4px_12px_rgba(29,29,31,0.3)]">
                {getIcon(item.company)}
              </div>

              <div className="bg-gradient-to-br from-white to-neutral-50 p-3 md:p-4 rounded-xl border border-neutral-200 group-hover:border-[#1d1d1f] transition-all shadow-sm group-hover:shadow-[0_5px_20px_rgba(29,29,31,0.1)]">
                <div className="flex flex-col mb-2">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest border ${badgeClass(item.type)}`}
                    >
                      {item.type}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-500">{item.period}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight mb-0.5 group-hover:text-[#1d1d1f] transition-colors text-[#1d1d1f]">
                    {item.role}
                  </h3>
                  <p className="text-sm md:text-base text-blue-600 font-bold">{item.company}</p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">{item.location}</p>
                </div>

                <ul className="space-y-1.5 max-w-xl">
                  {item.description.map((point, i) => (
                    <li key={i} className="text-neutral-600 leading-relaxed text-xs md:text-sm flex gap-2">
                      <span className="text-[#1d1d1f] font-black flex-shrink-0">▸</span>
                      <span className="opacity-90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 h-[1px] w-full bg-neutral-200 md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
