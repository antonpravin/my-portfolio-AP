import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Replace the starter text and links below with your own details.
const profile = {
  name: 'Your Name',
  role: 'Aspiring software developer',
  location: 'Your City, Country',
  email: 'hello@example.com',
  intro: 'I build thoughtful digital experiences and enjoy turning ideas into useful, beautiful products.',
  about: 'I am a curious and motivated developer who loves learning, solving problems, and making things for the web. I am currently looking for opportunities to grow, collaborate, and contribute to meaningful projects.',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
};

const skills = ['React', 'JavaScript', 'HTML & CSS', 'Git & GitHub', 'Responsive design', 'Problem solving'];
const projects = [
  { number: '01', name: 'Project One', type: 'Web application', description: 'A short description of what you built, who it helps, and what you learned.', tags: ['React', 'JavaScript'], link: 'https://github.com/' },
  { number: '02', name: 'Project Two', type: 'Website', description: 'Add another project you are proud of. Include the problem it solves and the tools you used.', tags: ['HTML', 'CSS'], link: 'https://github.com/' },
  { number: '03', name: 'Project Three', type: 'Experiment', description: 'Showcase a personal experiment, class project, or contribution that demonstrates your skills.', tags: ['JavaScript', 'UI'], link: 'https://github.com/' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label={`${profile.name} home`}>YN<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> Available for opportunities</div>
            <p className="eyebrow">HELLO, I'M {profile.name.toUpperCase()}</p>
            <h1>{profile.role}<span className="accent-dot">.</span></h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href={`mailto:${profile.email}`}><Mail size={17} /> Get in touch</a>
            </div>
            <div className="hero-meta"><span>{profile.location}</span><span className="meta-divider" /> <span>Scroll to discover <ArrowDown size={14} /></span></div>
          </div>
          <div className="hero-art" aria-label="Decorative abstract portrait illustration" role="img">
            <div className="art-ring ring-one" /><div className="art-ring ring-two" />
            <div className="art-card"><span className="art-card-top">CREATIVE&nbsp; · &nbsp;CURIOUS</span><div className="portrait-shape"><div className="portrait-hair" /><div className="portrait-face"><span className="eye eye-left" /><span className="eye eye-right" /><span className="smile" /></div><div className="portrait-body" /></div><span className="art-card-bottom">MADE WITH INTENTION ✳</span></div>
            <span className="art-star star-one">✳</span><span className="art-star star-two">✦</span><span className="art-note">A little about me ↙</span>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-label"><span>01</span> A BIT ABOUT ME</div>
          <div className="about-content"><h2>Curiosity first.<br /><span>Good work follows.</span></h2><div className="about-text"><p>{profile.about}</p><p className="location-note">Currently based in <strong>{profile.location}</strong></p><a className="inline-link" href={`mailto:${profile.email}`}>More about me <ArrowUpRight size={16} /></a></div></div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading"><div><div className="section-label"><span>02</span> SELECTED WORK</div><h2>Things I've <span>made.</span></h2></div><p>A few projects that reflect what I enjoy building.</p></div>
          <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><ArrowUpRight size={21} /></a></article>)}</div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-label"><span>03</span> MY TOOLKIT</div><div className="skills-content"><h2>Skills I bring<br /><span>to the table.</span></h2><div className="skill-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span className="skill-index">0{index + 1}</span><span>{skill}</span><ArrowUpRight size={16} /></div>)}</div></div>
        </section>

        <section className="contact section-wrap" id="contact"><div className="section-label"><span>04</span> WHAT'S NEXT?</div><div className="contact-content"><p>HAVE A PROJECT IN MIND?</p><h2>Let's make<br />something <span>good.</span></h2><a className="contact-button" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={19} /></a></div><div className="contact-decoration">✳</div></section>
      </main>

      <footer className="site-footer section-wrap"><a className="wordmark" href="#home">YN<span>.</span></a><span>© {new Date().getFullYear()} {profile.name}. Made with care.</span><div className="social-links"><a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a><a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a></div></footer>
    </>
  );
}

export default App;
