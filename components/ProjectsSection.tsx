import React from 'react';
import { RESUME_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const { projects } = RESUME_DATA;

  return (
    <section id="projects" className="py-16 md:py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2 text-[#1d1d1f]">
          Product & engineering work
        </h2>
        <p className="text-neutral-600 text-sm md:text-base mb-10 max-w-2xl">
          Adaptive training, faith-tech journaling, and an AI learning platform, built with Swift, TypeScript, React, and modern AI tooling.
        </p>

        <div className="space-y-14">
          {projects.map((proj) => (
            <article
              key={proj.title}
              className="border-b border-neutral-200 pb-14 last:border-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline gap-3 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f]">{proj.title}</h3>
                <span className="text-sm text-neutral-500">{proj.year}</span>
              </div>
              <p className="text-lg font-semibold text-neutral-800 mb-4">{proj.subtitle}</p>
              <ul className="space-y-3 mb-6">
                {proj.details.map((line, i) => (
                  <li
                    key={i}
                    className="text-neutral-600 leading-relaxed text-sm md:text-base flex gap-3"
                  >
                    <span className="text-[#1d1d1f] font-bold flex-shrink-0">·</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-bold text-[#1d1d1f] hover:text-blue-600 transition-colors group"
                >
                  acestudy.app
                  <ExternalLink size={18} className="opacity-70 group-hover:opacity-100" aria-hidden />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
