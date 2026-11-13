import React, { useMemo, useState } from "react";
import { projectData, featuredProjects, filters } from "./data/projectData";
import profileImage from "./assets/profile-img.jpg";
import { MotionSystem, TechAtmosphere, SignalStrip, SignalDiagram } from "./TechFX";
import "./App.css";
import "./TechFX.css";

const github = "https://github.com/wiilki";
const linkedin = "https://www.linkedin.com/in/thewillkim/";
const email = "thewillkim@icloud.com";

function ExternalArrow() {
  return <span className="link-arrow" aria-hidden="true">↗</span>;
}

function SiteLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ExternalArrow />
    </a>
  );
}

function PreviewArtwork({ project }) {
  return (
    <div className="preview-artwork" aria-label={"Illustrative visual for " + project.title}>
      <div className="artwork-orbit artwork-orbit-one" />
      <div className="artwork-orbit artwork-orbit-two" />
      <div className="artwork-window">
        <div className="artwork-window-top">
          <span className="artwork-dots" aria-hidden="true"><i/><i/><i/></span>
          <span className="artwork-domain">SOURCE-ONLY CONCEPT</span>
          <span className="artwork-menu" aria-hidden="true">•••</span>
        </div>
        <div className="artwork-content">
          <div className="artwork-logo">{project.title.substring(0, 1)}</div>
          <div className="artwork-copy">
            <span className="artwork-kicker">PROJECT / {project.category.toUpperCase()}</span>
            <strong>{project.title}</strong>
            <span className="artwork-rule" />
            <span className="artwork-bars"><i/><i/><i/></span>
          </div>
          <div className="artwork-tiles"><span/><span/><span/></div>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ project, hero = false }) {
  const [sourceIndex, setSourceIndex] = useState(0);

  // Saved browser screenshots load first. External services are fallbacks
  // while captures are being refreshed; illustrations are never called photos.
  const sources = project.live ? [
    "/previews/" + project.id + ".png",
    "https://image.thum.io/get/width/1440/crop/900/noanimate/" + project.live,
    "https://s0.wp.com/mshots/v1/" + encodeURIComponent(project.live) + "?w=1440&h=900",
  ] : [];
  const screenshot = sources[sourceIndex];

  return (
    <div className={"project-preview tone-" + project.tone + (hero ? " preview-hero" : "")}>
      {screenshot ? (
        <img
          className="project-screenshot"
          src={screenshot}
          alt={"Screenshot of " + project.title + " website"}
          loading={hero ? "eager" : "lazy"}
          decoding="async"
          onError={() => setSourceIndex((index) => index + 1)}
        />
      ) : (
        <PreviewArtwork project={project} />
      )}
      <div className="preview-chrome" aria-hidden="true"><i /><i /><i /><span>{project.live ? "LIVE_CAPTURE" : "DESIGN_CONCEPT"}</span></div>
      <span className="preview-type">
        {screenshot ? "ACTUAL WEBSITE CAPTURE" : project.live ? "SCREENSHOT UNAVAILABLE" : "DESIGN ILLUSTRATION"}
      </span>
    </div>
  );
}

function ProjectActions({ project, compact = false }) {
  return (
    <div className={"project-actions" + (compact ? " compact-actions" : "")}>
      {project.live && (
        <SiteLink className="project-live-link" href={project.live}>
          Visit website
        </SiteLink>
      )}
      <SiteLink className="project-repo-link" href={project.repo}>
        GitHub repository
      </SiteLink>
    </div>
  );
}

function onProjectPointerMove(event) {
  if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const box = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width;
  const y = (event.clientY - box.top) / box.height;
  event.currentTarget.style.setProperty("--tilt-y", ((x - .5) * 3.5).toFixed(2) + "deg");
  event.currentTarget.style.setProperty("--tilt-x", ((.5 - y) * 3.5).toFixed(2) + "deg");
  event.currentTarget.style.setProperty("--hover-x", (x * 100).toFixed(1) + "%");
  event.currentTarget.style.setProperty("--hover-y", (y * 100).toFixed(1) + "%");
}

function onProjectPointerLeave(event) {
  event.currentTarget.style.removeProperty("--tilt-y");
  event.currentTarget.style.removeProperty("--tilt-x");
  event.currentTarget.style.removeProperty("--hover-x");
  event.currentTarget.style.removeProperty("--hover-y");
}

function ProjectCard({ project, featured = false }) {
  return (
    <article className={"project-card" + (featured ? " featured-card" : "")} onPointerMove={onProjectPointerMove} onPointerLeave={onProjectPointerLeave}>
      <div className="project-card-media">
        <ProjectPreview project={project}/>
        <div className="card-status"><span className={project.live ? "status-dot" : "status-dot status-dot-muted"}/>{project.live ? "Published" : "Code project"}</div>
      </div>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.category}</span><span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="tags" aria-label="Technologies">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <ProjectActions project={project} />
      </div>
    </article>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    {label: "Work", href: "#work"},
    {label: "About", href: "#about"},
    {label: "Expertise", href: "#expertise"},
    {label: "Contact", href: "#contact"}
  ];
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#top" aria-label="Will Kim, back to top">
          <span className="brand-symbol">w<span>.</span></span>
          <span>will kim<span className="brand-suffix"> / portfolio</span></span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        ><span/><span/><span/></button>
        <nav id="primary-navigation" className={"primary-navigation" + (menuOpen ? " is-open" : "")} aria-label="Primary navigation">
          {navItems.map((item) => <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-contact" href={"mailto:" + email} onClick={() => setMenuOpen(false)}>Let's talk <ExternalArrow /></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell hero-layout">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-mark"/> INDEPENDENT DEVELOPER // CALIFORNIA</div>
          <h1 id="hero-title">Ideas engineered into <em>living interfaces.</em></h1>
          <p className="hero-lead">I'm Will — a developer focused on making thoughtful, functional products. I bring design, engineering, and real-world problem-solving together in every project.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-dark">Explore my work <span aria-hidden="true">↘</span></a>
            <SiteLink href={github} className="button button-outline">View GitHub</SiteLink>
          </div>
          <div className="hero-trust"><span className="trust-rule" /> A curated collection of independent projects, experiments, and production-ready interfaces.</div>
          <div className="hero-signal-track" aria-label="Current disciplines">
            <span className="signal-meter" aria-hidden="true"><i/><i/><i/><i/></span>
            DESIGN SYSTEMS // APPLICATIONS // AUTOMATION
          </div>
          <div className="hero-hud" aria-label="Portfolio summary">
            <div className="hero-hud-cell"><strong>{projectData.length.toString().padStart(2, "0")}</strong><span>Selected builds</span></div>
            <div className="hero-hud-cell"><strong>{projectData.filter((p) => p.live).length.toString().padStart(2, "0")}</strong><span>Published sites</span></div>
            <div className="hero-hud-cell"><strong>2026</strong><span>Latest work</span></div>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-image-shell">
            <span className="holo-index" aria-hidden="true">PROJECT_001 // FEATURED</span>
            <div className="hero-floating-label"><span className="pulse-dot"/> FEATURED BUILD / 01</div>
            <ProjectPreview project={featuredProjects[0]} hero />
            <div className="hero-image-caption">
              <div><span>RECENT WORK</span><strong>{featuredProjects[0].title}</strong></div>
              <SiteLink href={featuredProjects[0].live} className="hero-image-action">Explore site</SiteLink>
            </div>
          </div>
          <div className="hero-stamp"><span>DESIGN</span><span>↗</span><span>BUILD</span></div>
        </div>
      </div>
      <div className="shell hero-bottom">
        <span>SCROLL TO EXPLORE</span><span className="hero-bottom-line"/><span>{projectData.length} SELECTED PROJECTS · {projectData.filter((p) => p.live).length} PUBLISHED LINKS</span>
      </div>
    </section>
  );
}

function Work() {
  const [activeFilter, setActiveFilter] = useState("All projects");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => projectData.filter((project) => {
    const matchesFilter = activeFilter === "All projects" || project.category === activeFilter;
    const term = search.trim().toLowerCase();
    const searchable = [project.title, project.description, project.subtitle, project.category, ...project.tags].join(" ").toLowerCase();
    return !project.featured && matchesFilter && (!term || searchable.includes(term));
  }), [activeFilter, search]);

  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-topline"><span>01 / FEATURED WORK</span><span>SELECTED PROJECTS, 2024—2026</span></div>
        <div className="section-heading" data-reveal>
          <div><p className="section-kicker">DESIGN + DEVELOPMENT</p><h2 id="work-title">The work<span className="accent-dot">.</span></h2></div>
          <p>From full-stack applications to quiet, detail-driven interfaces. Each project has its own challenges, decisions, and purpose.</p>
        </div>
        <div className="featured-grid">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} featured />)}</div>

        <div className="archive-heading">
          <div><span className="section-kicker">PROJECT ARCHIVE</span><h3>More things I've built</h3></div>
          <p>Browse by focus area or search the collection.</p>
        </div>
        <div className="work-toolbar">
          <div className="filter-group" role="group" aria-label="Filter projects">
            {filters.map((filter) =>
              <button type="button" key={filter} className={"filter-button" + (activeFilter === filter ? " active" : "")} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>
            )}
          </div>
          <label className="search-box"><span className="search-icon" aria-hidden="true">⌕</span><span className="sr-only">Search projects</span><input type="search" value={search} placeholder="Search projects..." onChange={(event) => setSearch(event.target.value)} /></label>
        </div>
        <div className="projects-count" role="status">{filtered.length} {filtered.length === 1 ? "project" : "projects"} shown</div>
        {filtered.length ? (
          <div className="project-grid">{filtered.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        ) : (
          <div className="empty-state"><h3>No projects found.</h3><p>Try another search term or category.</p><button type="button" onClick={() => {setSearch(""); setActiveFilter("All projects");}}>Clear filters</button></div>
        )}
        <p className="preview-disclaimer">Published projects use saved real-site screenshots, with external captures as fallbacks. Projects without a confirmed public demo display clearly labeled illustrations, not fabricated screenshots.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div className="about-portrait" data-reveal><img src={profileImage} alt="Portrait of Will Kim" loading="lazy"/><span className="portrait-tag">HELLO, I'M WILL.</span></div>
        <div className="about-copy" data-reveal>
          <div className="section-topline"><span>02 / ABOUT ME</span></div>
          <p className="section-kicker">CURIOUS BY DESIGN</p>
          <h2 id="about-title">More than lines of code.</h2>
          <p className="about-lead">I care about the entire experience — how a product looks, how it behaves, and whether it genuinely makes someone's life easier.</p>
          <p>My background spans hands-on business operations, problem-solving, and full-stack development. That perspective helps me translate complex requirements into approachable experiences, with careful attention to the details that make software feel dependable.</p>
          <p>I work with React and JavaScript, build practical backends, and enjoy experimenting with APIs, automation, and thoughtful product design.</p>
          <div className="about-links"><SiteLink href={linkedin}>LinkedIn</SiteLink><SiteLink href={github}>GitHub</SiteLink><a href="/imports/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé (PDF) <ExternalArrow/></a></div>
          <SignalDiagram />
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  // Technologies used across the projects in this portfolio and related
  // Python/data projects. Listing experience does not imply a proficiency level.
  const areas = [
    {
      index: "01",
      title: "Programming languages",
      description: "The languages and web fundamentals I use to build interfaces, logic, and data workflows.",
      skills: ["JavaScript", "Python", "HTML5", "CSS3", "SQL"]
    },
    {
      index: "02",
      title: "Frontend development",
      description: "Responsive, accessible web interfaces with reusable components and thoughtful interaction design.",
      skills: ["React", "Next.js", "Responsive design", "Accessibility"]
    },
    {
      index: "03",
      title: "Backend & databases",
      description: "APIs, server-side application logic, and relational or document-based data storage.",
      skills: ["Node.js", "Express", "REST APIs", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Sequelize"]
    },
    {
      index: "04",
      title: "Tools & workflows",
      description: "Version control, validation, automated workflows, and shipping projects to the web.",
      skills: ["Git", "GitHub", "GitHub Actions", "Testing", "Vercel", "GitHub Pages"]
    }
  ];
  return (
    <section className="section expertise-section" id="expertise" aria-labelledby="expertise-title">
      <div className="shell">
        <div className="section-topline"><span>03 / WHAT I BRING</span></div>
        <div className="section-heading expertise-heading">
          <div><p className="section-kicker">LANGUAGES + TECHNOLOGIES</p><h2 id="expertise-title">Built with intention<span className="accent-dot">.</span></h2></div>
          <p>A practical toolkit shaped by the websites, applications, backends, and data projects I've worked on.</p>
        </div>
        <div className="expertise-grid">{areas.map((area) =>
          <article className="expertise-card" key={area.index} data-reveal>
            <span className="expertise-number">{area.index} /</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <ul className="expertise-skills" aria-label={area.title + " technologies"}>
              {area.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        )}</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-inner" data-reveal>
        <div><p className="section-kicker">04 / GET IN TOUCH</p><h2 id="contact-title">Have something<br/><em>in mind?</em></h2></div>
        <div className="contact-side"><p>I'm always interested in an interesting challenge, a thoughtful collaboration, or a conversation about building something useful.</p><a href={"mailto:" + email} className="contact-cta">Start a conversation <ExternalArrow/></a><div className="contact-terminal"><span aria-hidden="true">&gt;_</span> AVAILABLE FOR THOUGHTFUL COLLABORATION <span className="terminal-cursor" aria-hidden="true" /></div></div>
      </div>
      <footer className="shell footer-inner"><span>© {new Date().getFullYear()} Will Kim. Built with care.</span><div><SiteLink href={github}>GitHub</SiteLink><SiteLink href={linkedin}>LinkedIn</SiteLink><a href="#top">Back to top ↑</a></div></footer>
    </section>
  );
}

export default function App() {
  return <><a className="skip-link" href="#work">Skip to projects</a><MotionSystem/><TechAtmosphere/><Header/><main><Hero/><SignalStrip/><Work/><About/><Expertise/><Contact/></main></>;
}
