import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { ExperienceItem } from "@/types";
import { TechBadge } from "@/components/ui/tech-badge";
import { Badge } from "@/components/ui/badge";

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative border-l border-slate-800 ml-2 sm:ml-6 pl-4 sm:pl-8 space-y-10 sm:space-y-14">
      {items.map((item, index) => (
        <div key={item.id} className="relative group">
          {/* Timeline node */}
          <div className="absolute -left-[27px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md shadow-indigo-950/50">
            <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-7 space-y-5 sm:space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  {index === 0 && (
                    <Badge variant="emerald" size="sm" dot>
                      Current
                    </Badge>
                  )}
                </div>
                <p className="text-sm sm:text-base font-semibold text-indigo-400">
                  {item.company}
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 sm:gap-2 text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1.5 bg-slate-900/90 px-2.5 sm:px-3 py-1 rounded-lg border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {item.summary}
            </p>

            {/* Key Responsibilities */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Key Engineering Responsibilities
              </h4>
              <ul className="space-y-2">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Projects Highlight */}
            {item.keyProjects && item.keyProjects.length > 0 && (
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Notable Projects Delivered
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.keyProjects.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5"
                    >
                      <h5 className="font-semibold text-xs sm:text-sm text-white">
                        {proj.name}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {proj.description}
                      </p>
                      {proj.technologies && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="pt-2 border-t border-slate-800/60">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} size="sm" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
