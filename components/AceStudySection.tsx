import React from 'react';
import { RESUME_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

const AceStudySection: React.FC = () => {
  const { project, acestudyUrl } = RESUME_DATA;

  return (
    <section id="acestudy" className="py-16 md:py-24 bg-white text-black">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Featured project
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2 text-[#1d1d1f]">
          {project.title}
        </h2>
        <p className="text-sm text-neutral-500 mb-1">
          {project.role} · {project.period}
        </p>
        <p className="text-sm text-neutral-500 mb-8">{project.location}</p>

        <p className="text-lg text-neutral-700 font-medium leading-relaxed mb-8">
          {project.subtitle}. Stack includes {project.platform}.
        </p>

        <ul className="space-y-4 mb-10">
          {project.details.map((line, i) => (
            <li key={i} className="text-neutral-600 leading-relaxed text-sm md:text-base flex gap-3">
              <span className="text-[#1d1d1f] font-bold flex-shrink-0">·</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <a
          href={acestudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg font-bold text-[#1d1d1f] hover:text-blue-600 transition-colors group"
        >
          acestudy.app
          <ExternalLink size={18} className="opacity-70 group-hover:opacity-100" aria-hidden />
        </a>
      </div>
    </section>
  );
};

export default AceStudySection;
