import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { siteConfig as c } from "./config";

import AIStrategy from "./pages/AIStrategy";
import CloudArchitecture from "./pages/CloudArchitecture";
import AIEngineering from "./pages/AIEngineering";
import ModernizationMigration from "./pages/ModernizationMigration";
import DataPlatforms from "./pages/DataPlatforms";
import IntelligentAutomation from "./pages/IntelligentAutomation";

import "./styles.css";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function Logo({ compact = false }) {
  return (
    <img
      className={compact ? "brandLogo compact" : "brandLogo"}
      src="/fifth-cursor-horizontal.svg"
      alt="Fifth Cursor"
    />
  );
}

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Header({ onMenu }) {
  const scroll = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <button
        className="brandButton"
        onClick={() => navigate("/")}
        aria-label="Fifth Cursor home"
      >
        <Logo compact />
      </button>

      <nav>
        {["Capabilities", "Approach", "Work", "Insights"].map((x, i) => (
          <button
            key={x}
            onClick={() =>
              scroll(
                ["capabilities", "approach", "work", "insights"][i]
              )
            }
          >
            {x}
          </button>
        ))}
      </nav>

      <a className="navCta" href={`mailto:${c.brand.email}`}>
        Let's talk
      </a>

      <button
        className="menu"
        onClick={onMenu}
        aria-label="Open navigation"
      >
        <Menu />
      </button>
    </header>
  );
}

function Home() {
  const [filter, setFilter] = useState("ALL");

  const filtered = c.cases.filter(
    (x) => filter === "ALL" || x.tags.includes(filter)
  );

  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });

  const filters = ["ALL", "AI platform", "Cloud", "Automation"];

  return (
    <>
      <section className="hero">
        <div className="heroOrb orb1" />
        <div className="heroOrb orb2" />

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.09
              }
            }
          }}
          initial="hidden"
          animate="show"
          className="heroCopy"
        >
          <motion.div variants={fade} className="eyebrow">
            <span /> {c.brand.eyebrow}
          </motion.div>

          <motion.h1 variants={fade}>
            {c.hero.title}
            <br />
            <em>{c.hero.highlight}</em>
          </motion.h1>

          <motion.p variants={fade}>
            {c.hero.description}
          </motion.p>

          <motion.div variants={fade} className="heroActions">
            <a
              className="primary"
              href={`mailto:${c.brand.email}`}
            >
              {c.hero.primaryCta}
            </a>

            <button
              className="ghost"
              onClick={() => scroll("capabilities")}
            >
              {c.hero.secondaryCta}
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="systemVisual"
        >
          <div className="visualCore">
            <Sparkles size={27} />
            <span>INTELLIGENCE</span>
          </div>

          {["AI", "CLOUD", "DATA", "AUTOMATION"].map((x, i) => (
            <div key={x} className={`node n${i}`}>
              <span />{x}
            </div>
          ))}

          <div className="ring r1" />
          <div className="ring r2" />
          <div className="ring r3" />
        </motion.div>

        <div className="scrollHint">
          SCROLL TO EXPLORE
        </div>
      </section>

      <section className="ticker">
        <div>
          {[
            "STRATEGY",
            "ARCHITECTURE",
            "ENGINEERING",
            "AI SYSTEMS",
            "CLOUD",
            "AUTOMATION",
            "DATA"
          ].map((x) => (
            <span key={x}>
              {x} <b>✦</b>
            </span>
          ))}
        </div>
      </section>

      <section className="section intro">
        <div className="sectionKicker">
          01 / THE FOCUS
        </div>

        <div className="introRight">
          <h2>
            Technology should create{" "}
            <span>momentum.</span>
            <br />
            Not complexity.
          </h2>

          <p>
            We partner with teams at the point where ambitious
            ideas meet hard technical problems. Our work sits at
            the intersection of artificial intelligence, cloud
            engineering, and the business outcomes they unlock.
          </p>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="sectionHead">
          <div>
            <div className="sectionKicker">
              02 / CAPABILITIES
            </div>

            <h2>
              Built for the
              <br />
              <span>hard problems.</span>
            </h2>
          </div>

          <p>
            Focused expertise. Senior thinking. Hands-on delivery.
          </p>
        </div>

        <div className="serviceGrid">
          {c.services.map((s) => (
            <motion.article
              whileHover={{ y: -5 }}
              className="service"
              key={s.id}
            >
              <div className="serviceTop">
                <span>{s.id}</span>

                <button
                  className="serviceArrow"
                  onClick={() =>
                    navigate(`/capabilities/${s.slug}`)
                  }
                  aria-label={`Learn more about ${s.title}`}
                >
                  <span aria-hidden="true">↗</span>
                </button>
              </div>

              <h3>{s.title}</h3>

              <p>{s.text}</p>

              <div className="tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="approach" className="darkSection">
        <div className="sectionKicker">
          03 / HOW WE WORK
        </div>

        <div className="approachTitle">
          <h2>
            Clarity first.
            <br />
            <i>Velocity second.</i>
          </h2>

          <p>
            No black boxes. No theater.
            <br />
            We work alongside your team from first hypothesis to
            measurable outcome.
          </p>
        </div>

        <div className="process">
          {c.process.map(([n, t, d]) => (
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="step"
              key={n}
            >
              <div className="stepNum">{n}</div>

              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="section work">
        <div className="sectionHead">
          <div>
            <div className="sectionKicker">
              04 / SELECTED WORK
            </div>

            <h2>
              Proof over
              <br />
              <span>promises.</span>
            </h2>
          </div>

          <div className="filters">
            {filters.map((f) => (
              <button
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
                key={f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="caseGrid">
          {filtered.map((x) => (
            <motion.article
              layout
              whileHover={{ y: -6 }}
              className="case"
              key={x.title}
            >
              <div className="caseArt">
                <div className="caseLines" />
                <span className="caseLabel">
                  {x.label}
                </span>

                <div className="caseMetric">
                  <b>{x.metric}</b>
                  <small>{x.metricLabel}</small>
                </div>
              </div>

              <div className="caseBody">
                <h3>{x.title}</h3>
                <p>{x.result}</p>

                <div className="caseFoot">
                  <span>{x.tags.join(" · ")}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="techSection">
        <div className="sectionKicker">
          05 / THE STACK
        </div>

        <h2>
          Independent of the
          <br />
          <span>hype cycle.</span>
        </h2>

        <p>
          We choose technology based on your problem, not our
          partner badge.
        </p>

        <div className="techCloud">
          {c.technologies.map((x) => (
            <motion.span
              whileHover={{ scale: 1.06 }}
              key={x}
            >
              {x}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="insights" className="section insights">
        <div className="sectionHead">
          <div>
            <div className="sectionKicker">
              06 / INSIGHTS
            </div>

            <h2>
              Ideas worth
              <br />
              <span>shipping.</span>
            </h2>
          </div>

          <button className="ghost">
            View all insights
          </button>
        </div>

        <div className="insightGrid">
          {c.insights.map(([tag, title, time]) => (
            <article className="insight" key={title}>
              <div>
                <span>{tag}</span>
                <small>{time}</small>
              </div>

              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contactGlow" />

        <div className="sectionKicker">
          07 / START HERE
        </div>

        <h2>
          Have a hard
          <br />
          <em>problem?</em>
        </h2>

        <p>
          Tell us what you're trying to build, fix, or figure out.
          We'll bring the right people to the conversation.
        </p>

        <a
          className="primary"
          href={`mailto:${c.brand.email}?subject=Consulting inquiry`}
        >
          Start a conversation
        </a>
      </section>
    </>
  );
}

function MobileNav({ close }) {
  const links = [
    ["Capabilities", "capabilities"],
    ["Approach", "approach"],
    ["Work", "work"],
    ["Insights", "insights"]
  ];

  return (
    <div className="mobileNav">
      {links.map(([x, id]) => (
        <button
          key={x}
          onClick={() => {
            close();

            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                document
                  .getElementById(id)
                  ?.scrollIntoView({
                    behavior: "smooth"
                  });
              }, 100);
            } else {
              document
                .getElementById(id)
                ?.scrollIntoView({
                  behavior: "smooth"
                });
            }
          }}
        >
          {x}
        </button>
      ))}

      <a href={`mailto:${c.brand.email}`}>
        Let's talk
      </a>
    </div>
  );
}

const capabilityPages = {
  "ai-strategy-transformation": AIStrategy,
  "cloud-architecture": CloudArchitecture,
  "ai-engineering": AIEngineering,
  "modernization-migration": ModernizationMigration,
  "data-platforms": DataPlatforms,
  "intelligent-automation": IntelligentAutomation
};

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      setMobile(false);
    };

    window.addEventListener("popstate", onPop);

    return () =>
      window.removeEventListener("popstate", onPop);
  }, []);

  const match = path.match(
    /^\/capabilities\/([^/]+)\/?$/
  );

  const CapabilityComponent = match
    ? capabilityPages[match[1]]
    : null;

  const isDetail = Boolean(CapabilityComponent);

  return (
    <div className="app">
      <div className="grain" />

      <Header
        onMenu={() => setMobile(!mobile)}
      />

      {mobile && (
        <MobileNav
          close={() => setMobile(false)}
        />
      )}

      {isDetail ? (
        <CapabilityComponent />
      ) : (
        <main id="top">
          <Home />
        </main>
      )}

      <footer>
        <div className="footerBrand">
          <Logo compact />

          <div>
            <b>{c.brand.name}</b>
            <small>AI × CLOUD CONSULTANCY</small>
          </div>
        </div>

        <div className="footerLinks">
          <span>© 2026 {c.brand.name}</span>

          <a href={`mailto:${c.brand.email}`}>
            {c.brand.email}
          </a>

          <span>Built for what’s next.</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);
