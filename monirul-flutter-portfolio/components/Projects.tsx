import { ExternalLink, Github, X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

type Props = { selected: Project | null; onSelect: (project: Project | null) => void };

export function Projects({ selected, onSelect }: Props) {
  return <>
    <section className="section shell" id="work">
      <div className="section-head"><div><p className="eyebrow">Selected work</p><h2>Engineering outcomes,<br/>not just interfaces.</h2></div><p>Every project now puts the technical story and direct proof links where recruiters can see them.</p></div>
      <div className="projects">{projects.map(project => <ProjectCard key={project.slug} project={project} onOpen={onSelect}/>)}</div>
      <div className="more-work"><p>Also engineered <b>LazyTasks</b>, <b>TubeMate</b>, <b>EasyCast</b>, <b>QADR</b>, and a production-ready QR & Barcode utility.</p></div>
    </section>
    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => onSelect(null)}><section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onMouseDown={event => event.stopPropagation()}><button className="modal-close" onClick={() => onSelect(null)} aria-label="Close case study"><X size={20}/></button><p className="eyebrow">{selected.category} · case study</p><h2 id="case-title">{selected.title}</h2><div className="case-grid"><div><small>Problem</small><p>{selected.caseStudy.problem}</p></div><div><small>My role</small><p>{selected.caseStudy.role}</p></div><div><small>Technical decisions</small><p>{selected.caseStudy.decisions}</p></div><div><small>Challenge</small><p>{selected.caseStudy.challenge}</p></div><div className="case-outcome"><small>Result</small><strong>{selected.result}</strong><p>{selected.caseStudy.outcome}</p></div></div><div className="modal-actions"><span>Store links are demo placeholders</span><a href={selected.links.github} target="_blank" rel="noreferrer"><Github size={15}/> Source available on request <ExternalLink size={14}/></a></div></section></div>}
  </>;
}
