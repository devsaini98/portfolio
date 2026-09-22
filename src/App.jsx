import { useState } from "react";

import {
  Mail,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  ArrowUpRight,
  Database,
  BarChart3,
  TrendingUp,
  Users,
  Activity,
  FileSpreadsheet,
  PieChart,
} from "lucide-react";

import {
  FaPython,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiJupyter,
  SiMysql,
  SiPandas,
} from "react-icons/si";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./App.css";


/* ================= DATA ================= */

const salesData = [
  { month: "Jan", sales: 42000 },
  { month: "Feb", sales: 48000 },
  { month: "Mar", sales: 52000 },
  { month: "Apr", sales: 61000 },
  { month: "May", sales: 68000 },
  { month: "Jun", sales: 76000 },
];

const categoryData = [
  { name: "Electronics", value: 78 },
  { name: "Clothing", value: 62 },
  { name: "Furniture", value: 48 },
  { name: "Beauty", value: 35 },
  { name: "Sports", value: 55 },
];

const skills = [
  {
    title: "Python",
    icon: <FaPython />,
    description:
      "Data analysis, automation and programming.",
  },

  {
    title: "Jupyter",
    icon: <SiJupyter />,
    description:
      "EDA, experimentation and data reporting.",
  },

  {
    title: "Power BI",
    icon: <PowerBIIcon />,
    description:
      "Interactive dashboards and business intelligence.",
  },

  {
    title: "Excel",
    icon: <ExcelIcon />,
    description:
      "Formulas, Pivot Tables and data analysis.",
  },

  {
    title: "MySQL",
    icon: <SiMysql />,
    description:
      "SQL queries, joins and database analysis.",
  },

  {
    title: "Pandas",
    icon: <SiPandas />,
    description:
      "Data cleaning and transformation.",
  },
];

const projects = [
  {
    number: "01",
    title: "Sales Analytics Dashboard",
    description:
      "Interactive dashboard for analyzing revenue, sales trends and product categories.",
    tags: ["Python", "Power BI", "SQL"],
  },

  {
    number: "02",
    title: "HR Analytics Dashboard",
    description:
      "Employee analytics dashboard for workforce and department analysis.",
    tags: ["Excel", "Power BI", "SQL"],
  },

  {
    number: "03",
    title: "Customer Data Analysis",
    description:
      "Exploratory analysis project for discovering customer patterns.",
    tags: ["Python", "Pandas", "Jupyter"],
  },

  {
    number: "04",
    title: "Business SQL Analysis",
    description:
      "Business analysis using SQL joins, grouping and aggregation.",
    tags: ["MySQL", "SQL", "Database"],
  },
];


/* ================= POWER BI ICON ================= */

function PowerBIIcon() {
  return (
    <div className="custom-tool powerbi-icon">

      <div className="powerbi-bars">
        <i></i>
        <i></i>
        <i></i>
      </div>

      <span>BI</span>

    </div>
  );
}


/* ================= EXCEL ICON ================= */

function ExcelIcon() {
  return (
    <div className="custom-tool excel-icon">

      <div className="excel-x">
        X
      </div>

      <div className="excel-grid">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

    </div>
  );
}


/* ================= DOLLAR ICON ================= */

function DollarIcon() {
  return (
    <div className="dollar-icon">
      $
    </div>
  );
}


/* ================= ORBIT TOOL ================= */

function OrbitTool({
  className,
  icon,
  title,
}) {

  return (
    <div className={`orbit-tool ${className}`}>

      <div className="orbit-icon">
        {icon}
      </div>

      <span>
        {title}
      </span>

    </div>
  );
}


/* ================= MAIN ORBIT ================= */

function ToolOrbit() {

  return (
    <div className="orbit-stage">

      {/* ROTATING ORBIT */}

      <div className="orbit-system">

        <div className="orbit-circle circle-1"></div>

        <div className="orbit-circle circle-2"></div>

        <div className="orbit-circle circle-3"></div>


        {/* Python */}

        <OrbitTool
          className="orbit-python"
          title="Python"
          icon={<FaPython />}
        />


        {/* Jupyter */}

        <OrbitTool
          className="orbit-jupyter"
          title="Jupyter"
          icon={<SiJupyter />}
        />


        {/* Power BI */}

        <OrbitTool
          className="orbit-powerbi"
          title="Power BI"
          icon={<PowerBIIcon />}
        />


        {/* Excel */}

        <OrbitTool
          className="orbit-excel"
          title="Excel"
          icon={<ExcelIcon />}
        />


        {/* MySQL */}

        <OrbitTool
          className="orbit-mysql"
          title="MySQL"
          icon={<SiMysql />}
        />


        {/* Pandas */}

        <OrbitTool
          className="orbit-pandas"
          title="Pandas"
          icon={<SiPandas />}
        />

      </div>


      {/* CENTER PERSON */}

      <div className="person-center">

        <div className="person-glow"></div>

        <div className="person-image-wrapper">

          <img
            src="/reetu-anime.png"
            alt="Reetu Kashyap"
            className="person-image"
          />

        </div>

      </div>


      {/* CENTER LABEL */}

      <div className="center-label">

        <span>
          DATA
        </span>

        <strong>
          ANALYTICS
        </strong>

        <small>
          INSIGHT • ANALYZE • GROW
        </small>

      </div>


      {/* FLOATING DATA PARTICLES */}

      <span className="data-particle p1"></span>
      <span className="data-particle p2"></span>
      <span className="data-particle p3"></span>
      <span className="data-particle p4"></span>
      <span className="data-particle p5"></span>
      <span className="data-particle p6"></span>

    </div>
  );
}


/* ================= APP ================= */

function App() {

  const [darkMode, setDarkMode] =
    useState(true);

  const [menuOpen, setMenuOpen] =
    useState(false);


  const scrollTo = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };


  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app light"
      }
    >

      {/* ================= BACKGROUND ================= */}

      <div className="background">

        <div className="grid-background"></div>

        <div className="glow glow-one"></div>

        <div className="glow glow-two"></div>

        <div className="glow glow-three"></div>

        <span className="floating-dot dot-one"></span>

        <span className="floating-dot dot-two"></span>

        <span className="floating-dot dot-three"></span>

        <span className="floating-dot dot-four"></span>

        <span className="floating-dot dot-five"></span>

      </div>


      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="container navbar-content">

          <button
            className="logo"
            onClick={() =>
              scrollTo("home")
            }
          >
            Reetu<span>.</span>
          </button>


          <nav
            className={
              menuOpen
                ? "nav active"
                : "nav"
            }
          >

            <button
              onClick={() =>
                scrollTo("home")
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollTo("about")
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollTo("skills")
              }
            >
              Skills
            </button>

            <button
              onClick={() =>
                scrollTo("analytics")
              }
            >
              Analytics
            </button>

            <button
              onClick={() =>
                scrollTo("projects")
              }
            >
              Projects
            </button>

            <button
              onClick={() =>
                scrollTo("contact")
              }
            >
              Contact
            </button>

          </nav>


          <div className="nav-actions">

            <button
              className="icon-button"
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >

              {darkMode ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}

            </button>


            <button
              className="menu-button"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >

              {menuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}

            </button>

          </div>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="hero"
      >

        <div className="container hero-container">


          {/* LEFT SIDE */}

          <div className="hero-content">

            <div className="available">

              <span></span>

              Available for opportunities

            </div>


            <p className="hello">
              Hello, I'm
            </p>


            <h1>

              <span className="white-name">
                Reetu
              </span>

              <span className="gradient-name">
                {" "}Kashyap
              </span>

            </h1>


            <h2>

              Data Analyst &

              <br />

              <span>
                Business Intelligence Enthusiast
              </span>

            </h2>


            <p className="hero-description">

              I transform raw data into meaningful
              insights using Python, SQL, Excel,
              Power BI and modern data visualization
              techniques.

            </p>


            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() =>
                  scrollTo("projects")
                }
              >

                View My Work

                <ArrowUpRight size={18} />

              </button>


              <a
                className="secondary-button"
                href="/Reetu_Kashyap_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >

                <Download size={18} />

                Download Resume

              </a>

            </div>


            <div className="social-links">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >

                <FaGithub />

                GitHub

              </a>


              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >

                <FaLinkedin />

                LinkedIn

              </a>


              <a
                href="mailto:your-email@example.com"
              >

                <Mail />

                Email

              </a>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="hero-visual">


            {/* VIDEO */}

            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >

              <source
                src="/background.mp4"
                type="video/mp4"
              />

            </video>


            {/* VIDEO DARK OVERLAY */}

            <div className="video-overlay"></div>


            {/* DATA ORBIT */}

            <ToolOrbit />

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section"
      >

        <div className="container">

          <div className="section-heading">

            <span>
              ABOUT ME
            </span>

            <h2>

              Turning data into

              <strong>
                {" "}meaningful insights.
              </strong>

            </h2>

            <p>

              I am Reetu Kashyap, a passionate
              Data Analytics enthusiast interested
              in transforming raw data into useful
              business insights.

            </p>

          </div>


          <div className="about-grid">


            <div className="about-card">

              <div className="about-icon">
                <Database />
              </div>

              <h3>
                Data Analysis
              </h3>

              <p>
                Cleaning, transforming and analyzing
                datasets to discover useful patterns.
              </p>

            </div>


            <div className="about-card">

              <div className="about-icon">
                <BarChart3 />
              </div>

              <h3>
                Data Visualization
              </h3>

              <p>
                Creating dashboards and visual reports
                to communicate insights.
              </p>

            </div>


            <div className="about-card">

              <div className="about-icon">
                <TrendingUp />
              </div>

              <h3>
                Business Intelligence
              </h3>

              <p>
                Converting business data into actionable
                information using dashboards.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="container">

          <div className="section-heading">

            <span>
              TECHNICAL SKILLS
            </span>

            <h2>

              My analytics

              <strong>
                {" "}toolkit.
              </strong>

            </h2>

          </div>


          <div className="skills-grid">

            {skills.map(
              (skill, index) => (

                <div
                  className="skill-card"
                  key={index}
                >

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h3>
                    {skill.title}
                  </h3>

                  <p>
                    {skill.description}
                  </p>

                  <div className="skill-line">

                    <span></span>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= ANALYTICS ================= */}

      <section
        id="analytics"
        className="section"
      >

        <div className="container">

          <div className="section-heading">

            <span>
              ANALYTICS DASHBOARD
            </span>

            <h2>

              Data visualization

              <strong>
                {" "}in action.
              </strong>

            </h2>

            <p>
              Sample analytics dashboard demonstrating
              interactive charts and business metrics.
            </p>

          </div>


          <div className="analytics-grid">


            <div className="analytics-card">

              <div className="analytics-header">

                <div>

                  <small>
                    REVENUE ANALYSIS
                  </small>

                  <h3>
                    Monthly Sales
                  </h3>

                </div>

                <TrendingUp />

              </div>


              <ResponsiveContainer
                width="100%"
                height={320}
              >

                <LineChart
                  data={salesData}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(148,163,184,.12)"
                  />

                  <XAxis
                    dataKey="month"
                    stroke="#94a3b8"
                  />

                  <YAxis
                    stroke="#94a3b8"
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#20bfff"
                    strokeWidth={4}
                    dot={{
                      r: 5,
                      fill: "#20bfff",
                    }}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>


            <div className="analytics-card">

              <div className="analytics-header">

                <div>

                  <small>
                    CATEGORY ANALYSIS
                  </small>

                  <h3>
                    Product Performance
                  </h3>

                </div>

                <PieChart />

              </div>


              <ResponsiveContainer
                width="100%"
                height={320}
              >

                <BarChart
                  data={categoryData}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(148,163,184,.12)"
                  />

                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={10}
                  />

                  <YAxis
                    stroke="#94a3b8"
                  />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#8b5cf6"
                    radius={[
                      8,
                      8,
                      0,
                      0,
                    ]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>


          <div className="stats-grid">


            <div className="stat">

              <DollarIcon />

              <div>

                <small>
                  Total Revenue
                </small>

                <strong>
                  $347K
                </strong>

              </div>

            </div>


            <div className="stat">

              <TrendingUp />

              <div>

                <small>
                  Growth
                </small>

                <strong>
                  +24.8%
                </strong>

              </div>

            </div>


            <div className="stat">

              <Users />

              <div>

                <small>
                  Customers
                </small>

                <strong>
                  12.4K
                </strong>

              </div>

            </div>


            <div className="stat">

              <Activity />

              <div>

                <small>
                  Performance
                </small>

                <strong>
                  92%
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="container">

          <div className="section-heading">

            <span>
              PROJECTS
            </span>

            <h2>

              Featured

              <strong>
                {" "}projects.
              </strong>

            </h2>

          </div>


          <div className="projects-grid">

            {projects.map(
              (project) => (

                <div
                  className="project-card"
                  key={project.number}
                >

                  <div className="project-number">
                    {project.number}
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="project-tags">

                    {project.tags.map(
                      (tag) => (

                        <span key={tag}>
                          {tag}
                        </span>

                      )
                    )}

                  </div>


                  <button
                    className="project-link"
                    onClick={() =>
                      alert(
                        "Add your GitHub project URL here."
                      )
                    }
                  >

                    Explore Project

                    <ArrowUpRight
                      size={17}
                    />

                  </button>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="container">

          <div className="contact-box">

            <div>

              <span>
                GET IN TOUCH
              </span>

              <h2>

                Let's work with

                <strong>
                  {" "}data.
                </strong>

              </h2>

              <p>

                Interested in Data Analytics,
                Business Intelligence and dashboard
                development? Let's connect.

              </p>

            </div>


            <div className="contact-buttons">

              <a
                href="mailto:your-email@example.com"
                className="primary-button"
              >

                <Mail size={18} />

                Contact Me

              </a>


              <a
                href="/Reetu_Kashyap_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >

                <Download size={18} />

                View Resume

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="container footer">

          <div className="footer-logo">

            Reetu<span>.</span>

          </div>


          <p>
            © 2026 Reetu Kashyap •
            Data Analytics Portfolio
          </p>


          <div className="footer-social">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@example.com"
            >
              <Mail />
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}


export default App;
