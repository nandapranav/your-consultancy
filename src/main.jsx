import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {motion, AnimatePresence} from "framer-motion";
import {ArrowUpRight, ArrowRight, Menu, X, Sparkles, Cloud, Bot, Database, Check, Plus} from "lucide-react";
import {siteConfig as c} from "./config";
import "./styles.css";

const fade={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}}};
const stagger={hidden:{},show:{transition:{staggerChildren:.09}}};

function App(){
 const [open,setOpen]=useState(false), [filter,setFilter]=useState("ALL");
 const [selected,setSelected]=useState(null);
 const filtered=c.cases.filter(x=>filter==="ALL" || x.tags.includes(filter));
 const filters=["ALL","AI platform","Cloud","Automation"];
 const scroll=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setOpen(false)};
 return <div className="app">
  <div className="grain"/>
  <header className="nav">
   <button className="logo" onClick={()=>scroll("top")}><span className="logoMark">Y</span>{c.brand.name}</button>
   <nav>{["Capabilities","Approach","Work","Insights"].map((x,i)=><button key={x} onClick={()=>scroll(["capabilities","approach","work","insights"][i])}>{x}</button>)}</nav>
   <button className="navCta" onClick={()=>scroll("contact")}>Let's talk <ArrowUpRight size={15}/></button>
   <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>
  <AnimatePresence>{open&&<motion.div initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} className="mobileNav">{["Capabilities","Approach","Work","Insights"].map((x,i)=><button key={x} onClick={()=>scroll(["capabilities","approach","work","insights"][i])}>{x}</button>)}<button onClick={()=>scroll("contact")}>Let's talk ↗</button></motion.div>}</AnimatePresence>

  <main id="top">
   <section className="hero">
    <div className="heroOrb orb1"/><div className="heroOrb orb2"/>
    <motion.div variants={stagger} initial="hidden" animate="show" className="heroCopy">
      <motion.div variants={fade} className="eyebrow"><span/> {c.brand.eyebrow}</motion.div>
      <motion.h1 variants={fade}>{c.hero.title}<br/><em>{c.hero.highlight}</em></motion.h1>
      <motion.p variants={fade}>{c.hero.description}</motion.p>
      <motion.div variants={fade} className="heroActions"><button className="primary" onClick={()=>scroll("contact")}>{c.hero.primaryCta}<ArrowUpRight size={17}/></button><button className="ghost" onClick={()=>scroll("capabilities")}>{c.hero.secondaryCta}<ArrowRight size={17}/></button></motion.div>
    </motion.div>
    <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:1.1}} className="systemVisual">
      <div className="visualCore"><Sparkles size={27}/><span>INTELLIGENCE</span></div>
      {["AI","CLOUD","DATA","AUTOMATION"].map((x,i)=><div key={x} className={"node n"+i}><span/>{x}</div>)}
      <div className="ring r1"/><div className="ring r2"/><div className="ring r3"/>
    </motion.div>
    <div className="scrollHint">SCROLL TO EXPLORE <span>↓</span></div>
   </section>

   <section className="ticker"><div>{["STRATEGY","ARCHITECTURE","ENGINEERING","AI SYSTEMS","CLOUD","AUTOMATION","DATA"].map(x=><span key={x}>{x} <b>✦</b></span>)}</div></section>

   <section className="section intro">
    <div className="sectionKicker">01 / THE FOCUS</div>
    <div className="introRight"><h2>Technology should create <span>momentum.</span><br/>Not complexity.</h2><p>We partner with teams at the point where ambitious ideas meet hard technical problems. Our work sits at the intersection of artificial intelligence, cloud engineering, and the business outcomes they unlock.</p></div>
   </section>

   <section id="capabilities" className="section">
    <div className="sectionHead"><div><div className="sectionKicker">02 / CAPABILITIES</div><h2>Built for the<br/><span>hard problems.</span></h2></div><p>Focused expertise. Senior thinking. Hands-on delivery.</p></div>
    <div className="serviceGrid">{c.services.map(s=><motion.article whileHover={{y:-5}} className="service" key={s.id}><div className="serviceTop"><span>{s.id}</span><ArrowUpRight size={18}/></div><h3>{s.title}</h3><p>{s.text}</p><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div></motion.article>)}</div>
   </section>

   <section id="approach" className="darkSection">
    <div className="sectionKicker">03 / HOW WE WORK</div><div className="approachTitle"><h2>Clarity first.<br/><i>Velocity second.</i></h2><p>No black boxes. No theater. We work alongside your team from first hypothesis to measurable outcome.</p></div>
    <div className="process">{c.process.map(([n,t,d])=><motion.div variants={fade} initial="hidden" whileInView="show" viewport={{once:true}} className="step" key={n}><div className="stepNum">{n}</div><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={19}/></motion.div>)}</div>
   </section>

   <section id="work" className="section work">
    <div className="sectionHead"><div><div className="sectionKicker">04 / SELECTED WORK</div><h2>Proof over<br/><span>promises.</span></h2></div>
    <div className="filters">{filters.map(f=><button className={filter===f?"active":""} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div></div>
    <div className="caseGrid">{filtered.map((x,i)=><motion.article layout whileHover={{y:-6}} className="case" key={x.title} onClick={()=>setSelected(x)}><div className="caseArt"><div className="caseLines"/><span className="caseLabel">{x.label}</span><div className="caseMetric"><b>{x.metric}</b><small>{x.metricLabel}</small></div></div><div className="caseBody"><h3>{x.title}</h3><p>{x.result}</p><div className="caseFoot"><span>{x.tags.join(" · ")}</span><ArrowUpRight size={18}/></div></div></motion.article>)}</div>
   </section>

   <section className="techSection"><div className="sectionKicker">05 / THE STACK</div><h2>Independent of the<br/><span>hype cycle.</span></h2><p>We choose technology based on your problem, not our partner badge.</p><div className="techCloud">{c.technologies.map((x,i)=><motion.span whileHover={{scale:1.06}} key={x}>{x}</motion.span>)}</div></section>

   <section id="insights" className="section insights"><div className="sectionHead"><div><div className="sectionKicker">06 / INSIGHTS</div><h2>Ideas worth<br/><span>shipping.</span></h2></div><button className="ghost">View all insights <ArrowRight size={17}/></button></div><div className="insightGrid">{c.insights.map(([tag,title,time])=><article className="insight" key={title}><div><span>{tag}</span><small>{time}</small></div><h3>{title}</h3><ArrowUpRight size={19}/></article>)}</div></section>

   <section id="contact" className="contact"><div className="contactGlow"/><div className="sectionKicker">07 / START HERE</div><h2>Have a hard<br/><em>problem?</em></h2><p>Tell us what you're trying to build, fix, or figure out. We'll bring the right people to the conversation.</p><button className="primary" onClick={()=>window.location.href=`mailto:${c.brand.email}?subject=Consulting%20inquiry`}>Start a conversation <ArrowUpRight size={17}/></button></section>
  </main>
  <footer><div className="footerBrand"><span className="logoMark">Y</span><div><b>{c.brand.name}</b><small>AI × CLOUD CONSULTANCY</small></div></div><div className="footerLinks"><span>© 2026 {c.brand.name}</span><a href={`mailto:${c.brand.email}`}>{c.brand.email}</a><span>Built for what’s next.</span></div></footer>

  <AnimatePresence>
    {selected ? (
      <motion.div
        className="modalBack"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected(null)}
      >
        <motion.div
          className="modal"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close" onClick={() => setSelected(null)} aria-label="Close">
            <X />
          </button>
          <div className="sectionKicker">{selected.label}</div>
          <h2>{selected.title}</h2>
          <p>{selected.result}</p>
          <div className="modalMetric">
            <b>{selected.metric}</b>
            <span>{selected.metricLabel}</span>
          </div>
          <div className="tags">
            {selected.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);