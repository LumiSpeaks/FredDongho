import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 md:pt-0 bg-[#fbfbfd]">
      <div className="absolute inset-0 bg-[#fbfbfd] -z-10"></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] -z-10 rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-left animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1">
          <h2 className="text-xs md:text-sm font-bold text-blue-600 mb-4 tracking-[0.2em] uppercase">
            Business Analytics · Product Management · Operations
          </h2>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold apple-gradient mb-6 leading-[1.1] tracking-tighter">
            Fred Dongho
            <br />
            Tsobjio
          </h1>
          <p className="max-w-lg text-lg md:text-xl text-neutral-600 font-medium leading-relaxed mb-10">
            {RESUME_DATA.summary}
          </p>
          <div className="flex flex-col sm:flex-row items-start lg:items-center gap-6">
            <a
              href="#acestudy"
              className="px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-bold hover:bg-[#007aff] hover:scale-105 transition-all shadow-[0_10px_30px_rgba(29,29,31,0.3)] text-base relative overflow-hidden group"
            >
              <span className="relative z-10">Explore AceStudy</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#007aff] to-[#0051d5] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#journey"
              className="px-6 py-3 border-2 border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-all font-bold text-base flex items-center gap-2 group rounded-full"
            >
              My Journey
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 -z-10"></div>

            <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#1d1d1f] rounded-full opacity-20 blur-2xl hidden md:block -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#1d1d1f] rounded-full opacity-10 blur-3xl hidden md:block -z-10"></div>

            <div className="relative w-64 h-64 md:w-[380px] md:h-[480px] overflow-hidden rounded-[2rem] md:rounded-[3rem] border-4 border-[#1d1d1f] shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-[#1d1d1f] z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1d1d1f] via-[#000000] to-[#1d1d1f] opacity-30"></div>
              <img
                src={RESUME_DATA.headshot}
                alt="Fred Dongho Tsobjio Professional Headshot"
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 relative z-10"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            <div className="absolute -bottom-4 -left-4 md:left-auto md:-right-8 bg-[#1d1d1f] backdrop-blur-2xl border-2 border-[#1d1d1f] px-6 py-4 rounded-[1.5rem] shadow-2xl hidden md:block group/tag hover:scale-105 transition-transform z-20">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-0.5">Based In</p>
              <p className="text-lg font-bold text-white tracking-tight">Pflugerville, Texas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
