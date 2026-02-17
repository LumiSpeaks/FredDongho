
import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const SkillsAndEducation: React.FC = () => {
  const { education, skills } = RESUME_DATA;

  return (
    <section id="skills" className="py-8 md:py-12 bg-[#fbfbfd]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Education - Large Card */}
          <div className="lg:col-span-7 glass p-4 md:p-6 rounded-[1.25rem] relative overflow-hidden group bg-white border border-neutral-200">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/5 blur-[50px] pointer-events-none group-hover:bg-blue-500/10 transition-all duration-700"></div>
            
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-xl bg-[#1d1d1f] text-white flex items-center justify-center shadow-lg">
                <GraduationCap size={12} />
              </div>
              <h2 className="text-base font-bold tracking-tight text-[#1d1d1f]">Education</h2>
            </div>
            
            <div className="mb-5">
              <h3 className="text-base md:text-lg font-bold mb-1 text-[#1d1d1f]">{education.school}</h3>
              <p className="text-sm text-neutral-600 font-medium mb-2">{education.degree}</p>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="px-2 py-0.5 rounded-full bg-[#007aff] text-white text-[8px] font-black uppercase tracking-widest">GPA {education.gpa}</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-500">{education.graduation}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-[8px] font-black uppercase tracking-[0.3em] text-neutral-400">Honors & Distinctions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {education.honors.map((honor, i) => (
                  <div key={i} className="flex items-center gap-2 bg-neutral-50 p-2 rounded-xl border border-neutral-200 hover:bg-[#1d1d1f] hover:border-[#1d1d1f] transition-all group/honor shadow-sm hover:shadow-[0_4px_12px_rgba(29,29,31,0.2)]">
                    <div className="p-1 bg-white rounded-md group-hover/honor:bg-blue-500 transition-colors">
                      <Award size={8} className="text-blue-600 group-hover/honor:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-neutral-600 group-hover/honor:text-white transition-colors">{honor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills - Side Card */}
          <div className="lg:col-span-5 glass p-4 md:p-6 rounded-[1.25rem] flex flex-col justify-between bg-white border border-neutral-200">
            <div>
              <h2 className="text-base font-bold tracking-tight mb-5 text-[#1d1d1f]">Core Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, idx) => (
                  <div key={idx} className="px-2 py-1 rounded-xl bg-neutral-50 text-[#1d1d1f] border border-neutral-200 font-bold text-xs hover:bg-[#1d1d1f] hover:text-white transition-all cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 p-3 rounded-xl bg-gradient-to-br from-[#1d1d1f] to-[#000000] text-white shadow-[0_5px_20px_rgba(29,29,31,0.3)] relative overflow-hidden group/quote">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover/quote:opacity-100 transition-opacity"></div>
              <p className="text-xs font-black italic leading-snug relative z-10">
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
