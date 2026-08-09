import { AppWindow, ArrowDown, ArrowUpRight, CalendarDays, CircleUserRound, Download, FileCode2, Github, Images, MessageSquareQuote, Moon, PanelsTopLeft, SearchCheck, Smartphone, Sun } from "lucide-react";
import { links } from "@/data/portfolio";

export function Header({ dark, onTheme }: { dark: boolean; onTheme: () => void }) {
  return <header className="nav-wrapper"><nav className="nav shell" aria-label="Primary navigation"><a className="brand" href="#top">MI<span>.</span></a><div className="nav-links"><a href="#work">Projects</a><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#availability">Availability</a></div><div className="nav-actions"><button className="theme-toggle" onClick={onTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? <Sun size={17}/> : <Moon size={17}/>}</button><a className="nav-cta" href={links.calendly} target="_blank" rel="noreferrer">Let&apos;s talk <ArrowUpRight size={15}/></a></div></nav></header>;
}

export function Hero() {
  return <><section className="hero shell" id="top"><div className="hero-copy"><div className="availability"><span/> Flutter engineer · Dhaka, Bangladesh</div><h1>I build mobile products that stay <em>fast, reliable,</em> and ready to scale.</h1><p className="hero-lede">Flutter developer with 3+ years of experience shipping cross-platform products across ticketing, travel, document processing and real-time experiences.</p><div className="hero-actions"><a className="button primary" href="#work">View projects <ArrowDown size={16}/></a><a className="button secondary" href={links.resume} download><Download size={16}/> Download CV</a><a className="button text-button" href={links.calendly} target="_blank" rel="noreferrer"><CalendarDays size={16}/> Schedule interview</a></div></div><aside className="hero-card"><div className="code-window"><div className="window-top"><span/><span/><span/><b>engineer.profile</b></div><pre><code><i>class</i> <strong>MobileEngineer</strong> {'{'}{`\n`}  <span>focus</span> = <q>product impact</q>;{`\n`}  <span>platforms</span> = [<q>iOS</q>, <q>Android</q>, <q>Web</q>];{`\n`}  <span>principles</span> = [<q>clean</q>, <q>tested</q>, <q>fast</q>];{`\n`}{'}'}</code></pre></div><div className="metric-row"><div><strong>15+</strong><span>apps shipped</span></div><div><strong>3+</strong><span>years building</span></div><div><strong>3</strong><span>platforms</span></div></div></aside></section><section className="trust-strip"><div className="shell trust-inner"><span>Built for production with</span><div><b>Flutter</b><b>Firebase</b><b>Clean Architecture</b><b>CI/CD</b><b>App Store</b></div></div></section></>;
}

export function RecruiterToolkit() {
  const items = [
    { icon: Download, label: "Download CV", href: links.resume },
    { icon: Images, label: "Project demos", href: "#work" },
    { icon: Smartphone, label: "Store links", href: "#work" },
    { icon: PanelsTopLeft, label: "Case studies", href: "#work" },
    { icon: Github, label: "GitHub source", href: links.github },
    { icon: MessageSquareQuote, label: "Testimonials", href: "#testimonials" },
    { icon: CircleUserRound, label: "Availability", href: "#availability" },
    { icon: CalendarDays, label: "Schedule call", href: links.calendly },
    { icon: SearchCheck, label: "SEO preview", href: "#top" },
    { icon: AppWindow, label: "Dark mode", href: "#top" },
  ];
  return <section className="toolkit shell" aria-labelledby="toolkit-title"><div className="toolkit-head"><div><p className="eyebrow">Recruiter toolkit</p><h2 id="toolkit-title">Everything important. Visible upfront.</h2></div><span>10 upgrades active</span></div><div className="toolkit-grid">{items.map(({icon:Icon,label,href}) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><Icon size={18}/><span>{label}</span><ArrowUpRight size={13}/></a>)}</div><p className="toolkit-note"><FileCode2 size={15}/> All editable content and project URLs now live in one organized data file.</p></section>;
}
