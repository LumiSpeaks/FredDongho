import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, Phone, Linkedin, ArrowUp, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-8 md:py-12 px-4 border-t border-neutral-200 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold apple-gradient mb-6 tracking-tighter">Let&apos;s connect.</h2>

        <div className="flex flex-col lg:flex-row flex-wrap gap-2 mb-10 w-full justify-center">
          <a
            href={`mailto:${RESUME_DATA.email}`}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-[#007aff] transition-all group w-full lg:w-auto shadow-[0_4px_12px_rgba(29,29,31,0.3)] hover:shadow-[0_6px_18px_rgba(0,122,255,0.4)] hover:scale-105"
          >
            <Mail size={10} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold tracking-tight">{RESUME_DATA.email}</span>
          </a>
          <a
            href={`tel:${RESUME_DATA.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-[#007aff] transition-all group w-full lg:w-auto shadow-[0_4px_12px_rgba(29,29,31,0.3)] hover:shadow-[0_6px_18px_rgba(0,122,255,0.4)] hover:scale-105"
          >
            <Phone size={10} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold tracking-tight">{RESUME_DATA.phone}</span>
          </a>
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-[#007aff] transition-all group w-full lg:w-auto shadow-[0_4px_12px_rgba(29,29,31,0.3)] hover:shadow-[0_6px_18px_rgba(0,122,255,0.4)] hover:scale-105"
          >
            <Linkedin size={10} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold tracking-tight">LinkedIn</span>
          </a>
          <a
            href="/FredDongho.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-[#007aff] transition-all group w-full lg:w-auto shadow-[0_4px_12px_rgba(29,29,31,0.3)] hover:shadow-[0_6px_18px_rgba(0,122,255,0.4)] hover:scale-105"
          >
            <FileText size={10} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold tracking-tight">Resume</span>
          </a>
          <a
            href="/transcript.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-[#007aff] transition-all group w-full lg:w-auto shadow-[0_4px_12px_rgba(29,29,31,0.3)] hover:shadow-[0_6px_18px_rgba(0,122,255,0.4)] hover:scale-105"
          >
            <FileText size={10} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold tracking-tight">Transcript</span>
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 pt-6 text-neutral-500 text-xs font-medium">
          <p>© {new Date().getFullYear()} Fred Dongho Tsobjio.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="mt-3 md:mt-0 flex items-center gap-1 hover:text-[#1d1d1f] transition-colors uppercase tracking-[0.2em] font-black text-[8px]"
          >
            Back to Top <ArrowUp size={8} className="text-blue-600" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
