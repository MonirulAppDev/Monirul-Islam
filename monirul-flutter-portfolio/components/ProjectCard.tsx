import { useState, useEffect } from "react";
import { Apple, ExternalLink, Github, Play, ScanSearch } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { PhoneMockup } from "./PhoneMockup";

type Props = { project: Project; onOpen: (project: Project) => void };

export function ProjectCard({ project, onOpen }: Props) {
  const links = [
    { label: "GitHub", href: project.links.github, icon: Github },
    { label: "Play Store", href: project.links.playStore, icon: Play },
    { label: "App Store", href: project.links.appStore, icon: Apple },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images]);

  return <article className={`project ${project.accent}`}>
    <div className="project-copy">
      <div className="project-meta"><span>{project.index}</span><span>{project.category}</span></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <div className="result"><small>Engineering result</small><strong>{project.result}</strong><p>{project.detail}</p></div>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="project-icon-actions" aria-label={`${project.title} links`}>
        {links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" title={`${label} demo link — replace in data/portfolio.ts`} aria-label={`${project.title} on ${label}`}><Icon size={18}/><span>{label}</span></a>)}
      </div>
      <div className="project-actions"><button onClick={() => onOpen(project)}><ScanSearch size={16}/> Full case study</button><a href={project.links.proof} target="_blank" rel="noreferrer">Verified projects <ExternalLink size={15}/></a></div>
    </div>
    <div className="project-visual">
      <div className="demo-label">Demo visual · replace later</div>
      <div className="orb"/>
      {project.images && project.images.length > 0 ? (
        <img src={project.images[currentIndex]} alt={`${project.title} screenshot`} className="phone" style={{ objectFit: "cover", width: 220, height: 430 }} />
      ) : (
        <PhoneMockup type={project.screen}/>
      )}
      <div className="media-dots">
        {project.images && project.images.length > 1 ? (
          project.images.map((_, i) => <span key={i} className={i === currentIndex ? "active" : ""} />)
        ) : (
          <><span className="active"/><span/><span/></>
        )}
      </div>
    </div>
  </article>;
}
