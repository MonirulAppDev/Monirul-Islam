"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/portfolio";
import { Header, Hero, RecruiterToolkit } from "./HeaderHero";
import { Projects } from "./Projects";
import { Availability, Experience, Expertise, Testimonials } from "./Credentials";
import { Contact } from "./Contact";

export function PortfolioApp() {
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setDark(window.localStorage.getItem("portfolio-theme") === "dark");
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button'));
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTheme = () => setDark(current => { window.localStorage.setItem("portfolio-theme", current ? "light" : "dark"); return !current; });
  
  return (
    <main className={dark ? "theme-dark" : ""}>
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`} 
        style={{ left: mousePos.x, top: mousePos.y }} 
      />
      <Header dark={dark} onTheme={toggleTheme}/>
      <Hero/>
      <RecruiterToolkit/>
      <Projects selected={selected} onSelect={setSelected}/>
      <div id="testimonials"><Testimonials/></div>
      <Availability/>
      <Expertise/>
      <Experience/>
      <Contact/>
    </main>
  );
}
