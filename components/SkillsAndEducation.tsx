
import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const SkillsAndEducation: React.FC = () => {
  const { education, skills } = RESUME_DATA;

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#fbfbfd]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education - Large Card */}
          <div className="lg:col-span-7 glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group bg-white border border-neutral-200">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-all duration-700"></div>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-[#1d1d1f] text-white flex items-center justify-center shadow-lg">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">Education</h2>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#1d1d1f]">{education.school}</h3>
              <p className="text-lg text-neutral-600 font-medium mb-4">{education.degree}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="px-4 py-1.5 rounded-full bg-[#007aff] text-white text-[10px] font-black uppercase tracking-widest">GPA {education.gpa}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">{education.graduation}</span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Honors & Distinctions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {education.honors.map((honor, i) => (
                  <div key={i} className="flex items-center gap-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-200 hover:bg-[#1d1d1f] hover:border-[#1d1d1f] transition-all group/honor shadow-sm hover:shadow-[0_8px_25px_rgba(29,29,31,0.2)]">
                    <div className="p-1.5 bg-white rounded-lg group-hover/honor:bg-blue-500 transition-colors">
                      <Award size={16} className="text-blue-600 group-hover/honor:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-neutral-600 group-hover/honor:text-white transition-colors">{honor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills - Side Card */}
          <div className="lg:col-span-5 glass p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between bg-white border border-neutral-200">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-10 text-[#1d1d1f]">Core Skills</h2>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, idx) => (
                  <div key={idx} className="px-4 py-2.5 rounded-2xl bg-neutral-50 text-[#1d1d1f] border border-neutral-200 font-bold text-sm hover:bg-[#1d1d1f] hover:text-white transition-all cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#000000] text-white shadow-[0_10px_40px_rgba(29,29,31,0.3)] relative overflow-hidden group/quote">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover/quote:opacity-100 transition-opacity"></div>
              <p className="text-base font-black italic leading-snug relative z-10">
                "Focused on building products that solve real problems."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsAndEducation;
