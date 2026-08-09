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
  useEffect(() => setDark(window.localStorage.getItem("portfolio-theme") === "dark"), []);
  const toggleTheme = () => setDark(current => { window.localStorage.setItem("portfolio-theme", current ? "light" : "dark"); return !current; });
  return <main className={dark ? "theme-dark" : ""}><Header dark={dark} onTheme={toggleTheme}/><Hero/><RecruiterToolkit/><Projects selected={selected} onSelect={setSelected}/><div id="testimonials"><Testimonials/></div><Availability/><Expertise/><Experience/><Contact/></main>;
}
