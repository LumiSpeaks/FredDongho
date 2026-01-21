
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Brain, Zap, Target, Globe } from 'lucide-react';

const AceStudySection: React.FC = () => {
  const { project } = RESUME_DATA;

  return (
    <section id="acestudy" className="py-16 md:py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1d1d1f] text-white text-[10px] font-black tracking-widest mb-4 uppercase shadow-md">
              <Globe size={12} className="text-amber-400" />
              <span>WEB APP DEVELOPMENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-[#1d1d1f] to-neutral-700 bg-clip-text text-transparent">
              {project.title}
            </h2>
            <p className="text-lg text-neutral-600 mb-8 font-medium">
              {project.subtitle} — Platform: {project.platform}.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 group/feature">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1d1d1f] text-white rounded-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(29,29,31,0.3)] group-hover/feature:scale-110 group-hover/feature:shadow-[0_12px_35px_rgba(29,29,31,0.5)] transition-all">
                  <Brain size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Brain Boost Engine</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{project.details[1]}</p>
                </div>
              </div>
              <div className="flex gap-4 group/feature">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1d1d1f] text-white rounded-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(29,29,31,0.3)] group-hover/feature:scale-110 group-hover/feature:shadow-[0_12px_35px_rgba(29,29,31,0.5)] transition-all">
                  <Target size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Evidence-Based Learning</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{project.details[0]}</p>
                </div>
              </div>
              <div className="flex gap-4 group/feature">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1d1d1f] text-white rounded-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(29,29,31,0.3)] group-hover/feature:scale-110 group-hover/feature:shadow-[0_12px_35px_rgba(29,29,31,0.5)] transition-all">
                  <Zap size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Data-Driven Growth</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{project.details[3]}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
             {/* Web App Preview - Browser Frame Style */}
             <div className="relative w-full max-w-lg aspect-video bg-neutral-100 rounded-xl border-[8px] border-neutral-900 shadow-xl overflow-hidden group">
                {/* Browser Toolbar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-900 flex items-center px-3 gap-2 z-10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto w-1/2 h-4 bg-neutral-800 rounded flex items-center px-2">
                    <div className="w-full h-0.5 bg-neutral-700 rounded-full"></div>
                  </div>
                </div>
                
                <video 
                  src="/videos/acestudy-demo.mp4"
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 pt-8"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 text-white pt-8 pointer-events-none">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400 mb-1">Coming Dec 2025</span>
                  <h4 className="text-xl font-bold">Reinventing studying</h4>
                </div>
             </div>
             
             {/* Clickable Site Link */}
             <a 
               href="https://acestudy.app/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="mt-4 text-lg font-bold text-[#1d1d1f] hover:text-blue-600 transition-colors flex items-center gap-2 group/link"
             >
               acestudy.app
               <span className="text-blue-600 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AceStudySection;
