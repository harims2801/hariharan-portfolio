"use client";

import { useEffect, useState, type FormEvent } from "react";

type Theme = "dark" | "light";

const stack = [
  { title: "CI/CD", detail: "GitHub Actions, GitLab, Jenkins" },
  { title: "Infrastructure", detail: "Terraform, Kubernetes, Ansible" },
  { title: "Observability", detail: "Prometheus, Grafana, Looker Studio" },
  { title: "Reliability", detail: "Incident response, DR, runbooks" },
];

const highlightedWork = [
  {
    title: "Cloud-native PACS infrastructure",
    description:
      "Designed secure GCP infrastructure for healthcare imaging services using Terraform, Kubernetes and Docker.",
    tags: ["GCP", "Terraform", "Kubernetes", "Healthcare"],
  },
  {
    title: "Enterprise automation at scale",
    description:
      "Owned and stabilized 120+ production automations while reducing manual administration and recurring operational effort.",
    tags: ["PowerShell", "Python", "ServiceNow", "HPE OO"],
  },
  {
    title: "Self-healing cloud operations",
    description:
      "Built monitoring and automated recovery workflows across AWS and Azure for faster, more consistent incident response.",
    tags: ["AWS", "Azure", "Automation", "Observability"],
  },
];

const expertise = [
  {
    title: "Cloud & platforms",
    skills: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
  },
  {
    title: "DevOps & automation",
    skills: ["Terraform", "Ansible", "SaltStack", "PowerShell", "Python", "Bash"],
  },
  {
    title: "SRE & operations",
    skills: ["Grafana", "Prometheus", "PagerDuty", "Rundeck", "ServiceNow"],
  },
];

const experience = [
  {
    company: "Persistent Systems Limited",
    role: "Sr. Site Reliability Engineer · Project Lead",
    period: "March 2026 — Present",
    location: "India",
    points: [
      "Maintaining high-availability CI/CD workflows with GitHub Actions, Bitbucket and Jenkins.",
      "Upgrading enterprise systems to Windows Server 2022 with controlled implementation and validation.",
      "Improving SaltStack reliability and orchestrating multiple states into repeatable workflows.",
      "Supporting incident response, change planning and production maintenance.",
    ],
  },
  {
    company: "Optum Inc.",
    role: "Site Reliability Engineer",
    period: "August 2022 — November 2025",
    location: "Canada",
    points: [
      "Designed scalable GCP infrastructure for PACS services with Terraform, Kubernetes and Docker.",
      "Built monitoring and alerting with Prometheus and Grafana, supporting SLA performance and faster recovery.",
      "Implemented capacity planning, disaster recovery and business-continuity practices.",
      "Created Looker Studio dashboards connecting reliability performance with client outcomes.",
    ],
  },
  {
    company: "ATMECS Technologies",
    role: "Senior Software Engineer",
    period: "August 2018 — January 2020",
    location: "India",
    points: [
      "Automated MarkLogic Data Hub Service provisioning using Python, boto3 and CloudFormation.",
      "Built Jenkins-based deployment validation and CI/CD workflows.",
      "Developed self-healing Azure runbooks for CPU, memory and disk incidents.",
    ],
  },
  {
    company: "Wipro Technologies",
    role: "Automation Engineer",
    period: "December 2013 — August 2018",
    location: "India",
    points: [
      "Managed and stabilized more than 120 production automation scripts.",
      "Reduced user-access administration from 32 hours to 4 hours per week.",
      "Created JIDOKA, improving automation onboarding quality from 2% to 90%.",
      "Reduced wireless-access fulfilment from one day to one minute through automation.",
    ],
  },
];

const projects = [
  {
    title: "PowerShell automation library",
    description:
      "Public scripts and utilities focused on repeatable Windows administration and operational automation.",
    href: "https://github.com/harims2801/Powershell",
    label: "View repository",
  },
  {
    title: "Web application",
    description:
      "A public PHP web application demonstrating full-stack fundamentals and practical application structure.",
    href: "https://github.com/harims2801/Webapp",
    label: "View repository",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const nextTheme: Theme = stored === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    setStatus("Opening your email application…");
    window.location.href = `mailto:harims2801@gmail.com?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#top" aria-label="Hariharan MS home">
            HMS
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            Senior SRE &amp; Cloud Automation Engineer
          </p>
          <h1>Hariharan Minnal Srinivasan</h1>
          <h2>Site Reliability Engineer · Project Lead</h2>
          <p className="hero-description">
            I design reliable cloud infrastructure and production automation
            across GCP, AWS and Azure, with a focus on Kubernetes, observability,
            incident response and operational excellence.
          </p>
          <div className="hero-actions">
            <a
              className="button primary"
              href="https://www.linkedin.com/in/hariharan-ms/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ExternalArrow />
            </a>
            <a
              className="button secondary"
              href="https://github.com/harims2801"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ExternalArrow />
            </a>
            <a
              className="resume-link"
              href="/Hariharan_Minnal_Srinivasan_Resume.doc"
              download
            >
              Download résumé ↓
            </a>
          </div>
          <div className="quick-facts" aria-label="Professional overview">
            <span><strong>12+</strong> years in IT</span>
            <span><strong>6+</strong> years in cloud &amp; SRE</span>
            <span><strong>3</strong> cloud platforms</span>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/hariharan-profile.png" alt="Hariharan Minnal Srinivasan" />
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="section-label">Core toolkit</p>
          <h2>The SRE platform stack</h2>
        </div>
        <div className="stack-grid">
          {stack.map((item) => (
            <article className="stack-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted" id="work">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Selected impact</p>
            <h2>Highlighted work</h2>
            <p>
              Architecture and automation work that improved reliability,
              delivery and operational efficiency.
            </p>
          </div>
          <div className="cards-three">
            {highlightedWork.map((item) => (
              <article className="content-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="section-label">Capabilities</p>
          <h2>Technical expertise</h2>
        </div>
        <div className="cards-three">
          {expertise.map((item) => (
            <article className="content-card expertise-card" key={item.title}>
              <h3>{item.title}</h3>
              <ul className="skill-list">
                {item.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted" id="experience">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Career</p>
            <h2>Experience timeline</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-meta">
                  <p>{item.period}</p>
                  <span>{item.location}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="section-heading">
          <p className="section-label">Public work</p>
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.label} <ExternalArrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Education</p>
            <h2>Academic background</h2>
          </div>
          <div className="education-list">
            <article>
              <span>2013</span>
              <div>
                <h3>Bachelor of Technology</h3>
                <p>Jawaharlal Nehru Technological University</p>
              </div>
            </article>
            <article>
              <span>2021</span>
              <div>
                <h3>Full Stack Web Development</h3>
                <p>Montreal College of Information Technology</p>
              </div>
            </article>
            <article>
              <span>2022</span>
              <div>
                <h3>Business Analysis</h3>
                <p>Montreal College of Information Technology</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section container contact" id="contact">
        <div className="contact-copy">
          <p className="section-label">Get in touch</p>
          <h2>Let&apos;s connect</h2>
          <p>
            I&apos;m open to conversations about SRE leadership, cloud
            infrastructure, platform engineering and automation.
          </p>
          <a href="mailto:harims2801@gmail.com">harims2801@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/hariharan-ms/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/hariharan-ms
          </a>
        </div>
        <form onSubmit={sendMessage}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="button primary" type="submit">
            Send message
          </button>
          <p className="form-status" aria-live="polite">
            {status || "This opens your email application with the message prepared."}
          </p>
        </form>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Hariharan Minnal Srinivasan</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
