import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
  BriefcaseBusiness as LinkedInMark,
  Code2 as GitHubMark,
} from 'lucide-react'
import {
  achievements,
  certification,
  education,
  experience,
  navigation,
  profile,
  projects,
  skills,
} from './data'

type Theme = 'dark' | 'light'
const currentYear = new Date().getFullYear()

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ProjectArtwork({ type }: { type: string }) {
  if (type === 'crm') {
    return (
      <div className="project-art crm-art" aria-hidden="true">
        <div className="art-window">
          <div className="art-window-bar">
            <span />
            <span />
            <span />
            <i>conversation_insights.py</i>
          </div>
          <div className="code-lines">
            <div><b>01</b><span className="code-purple">conversation</span> = <span className="code-green">"Customer call notes"</span></div>
            <div><b>02</b><span className="code-purple">insights</span> = <span className="code-blue">analyze</span>(conversation)</div>
            <div><b>03</b><span className="code-muted"># key client signals</span></div>
            <div><b>04</b><span className="code-purple">sentiment</span> = insights[<span className="code-green">"sentiment"</span>]</div>
            <div><b>05</b><span className="code-purple">next_steps</span> = insights[<span className="code-green">"actions"</span>]</div>
          </div>
          <div className="art-result">
            <span className="result-icon"><Check size={13} /></span>
            <span>Conversation analyzed</span>
            <span className="result-pill">insights ready</span>
          </div>
        </div>
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
      </div>
    )
  }

  return (
    <div className="project-art analytics-art" aria-hidden="true">
      <div className="chart-card">
        <div className="chart-topline"><span>Booking patterns</span><span className="chart-period">DATA OVERVIEW</span></div>
        <div className="chart-legend"><i /> Bookings <i className="legend-muted" /> Cancellations</div>
        <div className="chart">
          <div className="chart-y-axis"><span>100</span><span>75</span><span>50</span><span>25</span></div>
          <div className="chart-grid">
            <div className="chart-row" /><div className="chart-row" /><div className="chart-row" /><div className="chart-row" />
            <svg viewBox="0 0 440 122" preserveAspectRatio="none">
              <path className="chart-area" d="M0 98 C38 92 45 61 83 67 S132 83 168 55 S222 72 258 40 S310 60 346 28 S403 37 440 9 V122 H0 Z" />
              <path className="chart-line" d="M0 98 C38 92 45 61 83 67 S132 83 168 55 S222 72 258 40 S310 60 346 28 S403 37 440 9" />
              <path className="chart-line chart-line-muted" d="M0 108 C39 104 48 91 83 96 S132 78 168 89 S220 92 258 71 S311 83 346 65 S404 76 440 55" />
            </svg>
          </div>
        </div>
        <div className="chart-x-axis"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div>
      </div>
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-wrap mx-auto w-full">
          <a className="brand" href="#home" aria-label={`${profile.name}, home`} onClick={closeMenu}>
            <span className="brand-mark">v<span>.</span></span>
            <span className="brand-name">Virendra Prajapati</span>
          </a>

          <nav className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle icon-button"
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={14} /></a>
            <button
              className="menu-toggle icon-button"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <Reveal>
              <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
              <h1>Building useful software,<br /><span>one thoughtful step at a time.</span></h1>
              <p className="hero-intro">
                Hi, I’m <strong>Virendra</strong> — a Computer Science engineering graduate who enjoys solving
                problems with code and exploring how AI can make everyday work more useful.
              </p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={16} /></a>
                <a className="button button-secondary" href={profile.resume} download="Virendra-Prajapati-Resume.pdf">
                  <ArrowDownToLine size={16} /> Download résumé
                </a>
              </div>
              <div className="hero-socials" aria-label="Social and contact links">
                <a href={profile.github} target="_blank" rel="noreferrer"><GitHubMark size={16} /> GitHub <ArrowUpRight size={12} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInMark size={16} /> LinkedIn <ArrowUpRight size={12} /></a>
                <a href={`mailto:${profile.email}`}><Mail size={16} /> Email <ArrowUpRight size={12} /></a>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-visual" delay={0.12}>
            <div className="visual-grid" />
            <div className="visual-glow" />
            <div className="terminal-card">
              <div className="terminal-top">
                <div className="terminal-dots"><i /><i /><i /></div>
                <span>virendra.py</span>
                <Code2 size={14} />
              </div>
              <div className="terminal-content">
                <div className="terminal-line"><span className="line-no">01</span><span><b>class</b> Developer:</span></div>
                <div className="terminal-line"><span className="line-no">02</span><span className="indent"><b>def</b> <em>build</em>(self):</span></div>
                <div className="terminal-line"><span className="line-no">03</span><span className="indent-more">solve <i>real problems</i></span></div>
                <div className="terminal-line"><span className="line-no">04</span><span className="indent-more">learn <i>every day</i></span></div>
                <div className="terminal-line"><span className="line-no">05</span><span className="indent-more">ship <i>with care</i></span></div>
                <div className="terminal-cursor" />
              </div>
              <div className="terminal-footer"><span><i /> Available for opportunities</span><span>IN · 2026</span></div>
            </div>
            <div className="float-tag tag-python"><span className="tag-symbol">Py</span> Python</div>
            <div className="float-tag tag-ai"><span className="tag-symbol tag-spark">✳</span> curious by nature</div>
            <div className="visual-caption"><span>01 / 04</span><span>curiosity → useful things</span></div>
          </Reveal>
          <a href="#about" className="scroll-cue"><ArrowDown size={14} /> Scroll to explore</a>
        </section>

        <section className="intro-strip" aria-label="Professional summary">
          <div className="section-shell intro-inner">
            <p>Computer Science & Engineering <span>·</span> BIET Jhansi <span>·</span> India</p>
            <a href="#contact">Let’s build something meaningful <ArrowUpRight size={14} /></a>
          </div>
        </section>

        <section className="content-section section-shell" id="about">
          <Reveal>
            <div className="section-heading">
              <span className="section-index">01 — A LITTLE ABOUT ME</span>
              <h2>Curious by default.<br /><span>Practical by design.</span></h2>
            </div>
          </Reveal>
          <div className="about-layout">
            <Reveal className="about-main">
              <p className="about-lead">
                I’m a Computer Science and Engineering graduate with a growing interest in building
                thoughtful software and solving real-world problems.
              </p>
              <p className="body-copy">
                I enjoy working through a problem from the first question to a useful solution. My
                recent work spans Python-based APIs, AI-assisted workflows, and hands-on data analysis.
                I’m keen to keep learning, collaborate with good people, and contribute to products
                that are genuinely helpful.
              </p>
              <a className="text-link" href="#contact">A little more about working together <ArrowRight size={15} /></a>
            </Reveal>
            <Reveal className="about-aside" delay={0.08}>
              <div className="about-note">
                <span className="note-mark">“</span>
                <p>Good software starts with understanding the problem, not just writing the code.</p>
                <span className="note-byline">A principle I try to bring to every project</span>
              </div>
              <div className="location-line"><MapPin size={15} /><span>{profile.location}</span></div>
            </Reveal>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-shell content-section">
            <Reveal>
              <div className="section-heading section-heading-row">
                <div><span className="section-index">02 — TOOLKIT</span><h2>Tools I’m learning<br /><span>to put to work.</span></h2></div>
                <p className="heading-aside">A practical foundation, with plenty<br />of room to keep growing.</p>
              </div>
            </Reveal>
            <div className="skills-grid">
              {skills.map((group, index) => {
                const Icon = [Code2, Layers3, BriefcaseBusiness, Database, Check, GraduationCap][index]
                return (
                  <Reveal key={group.category} delay={index * 0.04}>
                    <article className="skill-card">
                      <div className="skill-card-top"><span className="skill-icon"><Icon size={17} /></span><span className="skill-count">0{index + 1}</span></div>
                      <h3>{group.category}</h3>
                      <ul className="skill-tags">
                        {group.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="content-section section-shell projects-section" id="projects">
          <Reveal>
            <div className="section-heading section-heading-row">
              <div><span className="section-index">03 — SELECTED WORK</span><h2>Projects with a<br /><span>purpose behind them.</span></h2></div>
              <p className="heading-aside">A couple of things I’ve explored<br />and built along the way.</p>
            </div>
          </Reveal>
          <div className="projects-list">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 0.08}>
                <article className="project-card">
                  <ProjectArtwork type={project.preview} />
                  <div className="project-details">
                    <div className="project-meta"><span>{project.number} / PROJECT</span><span>{project.category}</span></div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => <li key={highlight}><span />{highlight}</li>)}
                    </ul>
                    <div className="project-bottom">
                      <ul className="project-tech">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                      <a className="project-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub`}>
                        Source <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-shell content-section">
            <Reveal>
              <div className="section-heading section-heading-row">
                <div><span className="section-index">04 — EXPERIENCE & COMMUNITY</span><h2>Learning by<br /><span>showing up.</span></h2></div>
                <p className="heading-aside">Community, collaboration, and<br />making the most of every opportunity.</p>
              </div>
            </Reveal>
            <div className="experience-list">
              {experience.map((item, index) => (
                <Reveal key={item.organization} delay={index * 0.05}>
                  <article className="experience-item">
                    <span className="experience-number">0{index + 1}</span>
                    <div className="experience-role"><h3>{item.role}</h3><p>{item.organization}</p></div>
                    <p className="experience-detail">{item.detail}</p>
                    <ArrowUpRight className="experience-arrow" size={17} aria-hidden="true" />
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="certification-block">
              <div className="certification-label"><span className="section-index">CERTIFICATION</span><span className="certification-rule" /></div>
              <div className="certification-content">
                <div><h3>{certification.name}</h3><p>{certification.provider}</p></div>
                <ul>{certification.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </div>
            </div>
            <div className="achievement-strip">
              <span className="section-index">MILESTONES</span>
              <ul>{achievements.map((achievement) => <li key={achievement}><span className="achievement-mark">↗</span>{achievement}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="content-section section-shell education-section" id="education">
          <Reveal>
            <div className="section-heading">
              <span className="section-index">05 — EDUCATION</span>
              <h2>Learning is<br /><span>part of the journey.</span></h2>
            </div>
          </Reveal>
          <Reveal>
            <article className="education-card">
              <div className="education-icon"><GraduationCap size={23} /></div>
              <div className="education-main">
                <span className="section-index">BACHELOR’S DEGREE</span>
                <h3>{education.degree}</h3>
                <p>{education.institution}</p>
              </div>
              <div className="education-facts"><span>{education.years}</span><strong>{education.result}</strong></div>
            </article>
          </Reveal>
        </section>

        <section className="resume-section" id="resume">
          <div className="section-shell resume-inner">
            <Reveal className="resume-copy">
              <span className="section-index">06 — THE SHORT VERSION</span>
              <h2>Let the résumé<br /><span>fill in the details.</span></h2>
              <p>A one-page overview of my education, projects, skills, and experience.</p>
              <a className="button button-light" href={profile.resume} download="Virendra-Prajapati-Resume.pdf">
                Download my résumé <ArrowDownToLine size={16} />
              </a>
            </Reveal>
            <Reveal className="resume-preview" delay={0.1}>
              <div className="resume-paper" aria-label="Preview of the résumé PDF">
                <div className="paper-topline"><span>VP / PROFILE</span><span>2026</span></div>
                <div className="paper-name">Virendra<br />Prajapati<span>.</span></div>
                <div className="paper-title">COMPUTER SCIENCE & ENGINEERING</div>
                <div className="paper-divider" />
                <div className="paper-columns">
                  <div><i /><i /><i className="short" /><i /></div>
                  <div><i /><i className="short" /><i /><i className="medium" /></div>
                </div>
                <div className="paper-bottom">EDUCATION · PROJECTS · SKILLS</div>
              </div>
              <div className="resume-file"><span className="file-icon"><ArrowDownToLine size={16} /></span><span><strong>Virendra-Prajapati-Resume.pdf</strong><small>PDF · original résumé</small></span><Check size={16} /></div>
            </Reveal>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <Reveal>
            <span className="section-index">07 — GET IN TOUCH</span>
            <h2>Have something<br /><span>good in mind?</span></h2>
            <p className="contact-intro">I’m open to entry-level software engineering opportunities, interesting projects, and conversations about building useful things.</p>
          </Reveal>
          <Reveal className="contact-layout" delay={0.08}>
            <a className="contact-email" href={`mailto:${profile.email}`}><span>Say hello by email</span><strong>{profile.email}</strong><ArrowUpRight size={21} /></a>
            <div className="contact-side">
              <span className="section-index">ELSEWHERE ON THE WEB</span>
              <a href={profile.github} target="_blank" rel="noreferrer"><GitHubMark size={17} /> GitHub <ArrowUpRight size={14} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInMark size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={17} /> {profile.phone} <ArrowUpRight size={14} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">v<span>.</span></span><span className="brand-name">Virendra Prajapati</span></a>
          <p>Thoughtfully built, with room to grow.</p>
          <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={14} /></a>
          <span className="copyright">© {currentYear} Virendra Prajapati</span>
        </div>
      </footer>
    </>
  )
}

export default App
