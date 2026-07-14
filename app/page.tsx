"use client";
import { FormEvent, useState } from "react";

const phases = [
  ["01", "Explore", "Find the right problem to solve", "Turn lived experience and market observations into a focused business opportunity worth testing.", "Idea validation · Founder readiness · Market discovery"],
  ["02", "Plan", "Build a practical path forward", "Clarify the customer, offer, business model, milestones, and decisions that come before launch.", "Business model · Mentor support · Planning tools"],
  ["03", "Launch", "Move from plan to first customer", "Choose the essentials, formalize the business, and bring the first version of the offer to market.", "Business setup · First offer · Go-to-market"],
  ["04", "Operate", "Create a business that runs clearly", "Connect front-office activity to the systems, people, technology, and routines behind delivery.", "Core operations · Technology stack · Financial rhythm"],
  ["05", "Grow", "Build repeatable momentum", "Strengthen acquisition, delivery, partnerships, and capacity without losing control of the operation.", "Growth channels · Team capacity · Capital readiness"],
  ["06", "Optimize", "Make the whole system work better", "Review results, remove friction, and direct time and resources toward what creates the most value.", "Performance review · Process improvement · Next-stage strategy"],
];

const partners = [
  ["SBA", "U.S. Small Business Administration", "National programs, local assistance, funding guidance, and business education.", "https://www.sba.gov/"],
  ["SCORE", "SCORE", "Experienced mentors, workshops, and practical small-business guidance.", "https://www.score.org/"],
  ["VBOC", "Veterans Business Outreach Centers", "Support for veterans, service members, and military spouses building businesses.", "https://www.sba.gov/local-assistance/resource-partners/veterans-business-outreach-centers-vboc"],
  ["TVC", "Texas Veterans Commission", "Texas-based veteran entrepreneurship, education, and support connections.", "https://tvc.texas.gov/"],
  ["HRVCC", "Houston Regional Veterans Chamber", "Community, visibility, and opportunity for veteran-owned businesses.", "https://hrvcc.org/"],
  ["SBDC", "Small Business Development Centers", "No-cost advising, market research, and growth support through local centers.", "https://www.sba.gov/local-assistance/resource-partners/small-business-development-centers-sbdc"],
];

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);
  const [joined, setJoined] = useState(false);
  const join = (e: FormEvent) => { e.preventDefault(); setJoined(true); };
  return <main>
    <header className="header">
      <a className="brand" href="#top"><span><img src={`${assetBase}/boss-logo.png`} alt="BOSS Libraries" /></span></a>
      <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu}><i/><i/><i/><b className="sr">Menu</b></button>
      <nav className={menu ? "open" : ""}>
        <a href="#about">About</a><a href="#how">How it works</a><a href="#resources">Resources</a><a className="navCta" href="#newsletter">Join the pilot ↗</a>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="heroGrid">
        <div><p className="eyebrow"><span>Veteran-focused pilot</span> · Opening 2026</p>
          <h1>Stop searching.<br/><em>Start navigating.</em></h1>
          <p className="lead">BOSS Libraries turns a fragmented business-support ecosystem into a clear path—so owner-operators can find the right resource, at the right phase, for the right next move.</p>
          <div className="actions"><a className="button" href="#newsletter">Get the sample playbook →</a><a className="textLink" href="#how">See how it works ↓</a></div>
        </div>
        <div className="compass" aria-label="Six business phases">
          <div className="rings"/><div className="compassCore"><b>N</b><span>YOUR<br/>NEXT<br/>MOVE</span></div>
          {phases.map((p,i)=><small className={`o o${i+1}`} key={p[1]}>{p[0]} {p[1]}</small>)}
        </div>
      </div>
      <div className="proof"><p>Built for owner-operators who need a path—not more tabs.</p><div><b>6</b> business phases</div><div><b>1</b> playbook</div><div><b>0</b> pay-to-play rankings</div></div>
    </section>

    <section className="section twoCol" id="about">
      <div><p className="kicker">The idea behind BOSS</p><h2>The resources are out there.<br/><em>The route is missing.</em></h2></div>
      <div className="copy"><p>Entrepreneurs rarely struggle because nobody wants to help. They struggle because programs, people, tools, and opportunities are spread across an ecosystem with no shared map.</p><p>BOSS Libraries is the connective tissue: a trusted education and navigation layer that helps people understand what exists, when it matters, and how the pieces work together.</p><blockquote>“Strong ecosystems aren’t built by adding more resources. They’re built by connecting the right ones.”</blockquote></div>
    </section>

    <section className="section" id="how">
      <Heading kicker="Your business, in context" title={<>Six phases.<br/>One clear route.</>} text="BOSS meets the operator where they are, then organizes practical next steps around the phase ahead." />
      <div className="phaseBox">
        <div className="tabs">{phases.map((p,i)=><button className={i===active?"active":""} onClick={()=>setActive(i)} key={p[1]}><span>{p[0]}</span>{p[1]}</button>)}</div>
        <div className="phase"><p className="kicker">Phase {phases[active][0]}</p><h3>{phases[active][2]}</h3><p>{phases[active][3]}</p><div className="chips">{phases[active][4].split(" · ").map(x=><span key={x}>{x}</span>)}</div><a href="#newsletter">Preview this phase in the playbook ↗</a></div>
      </div>
    </section>

    <section className="ecosystem"><div className="section">
      <Heading light kicker="An ecosystem that works together" title={<>Force. Capability.<br/><em>Navigation.</em></>} text="BOSS is designed to strengthen the organizations already doing the work—not replace them." />
      <div className="systemCards">
        <System n="01" label="THE FORCE" title="Community gathers the operator." text="Veteran business support organizations and chambers build trust, identity, and access."/>
        <System n="02" label="THE CAPABILITY" title="Resource partners build capacity." text="Mentors, educators, agencies, and programs bring deep knowledge and practical support." accent/>
        <System n="03" label="THE NAVIGATION" title="BOSS connects the next move." text="The playbook helps operators reach the right capability through the right trusted source."/>
      </div>
    </div></section>

    <section className="section" id="resources">
      <Heading kicker="The resource ecosystem" title={<>Trusted support.<br/>Made easier to use.</>} text="A starting set of public and nonprofit resources included in the BOSS navigation model."/>
      <div className="partnerGrid">{partners.map(p=><a href={p[3]} target="_blank" rel="noreferrer" key={p[1]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p><b>Explore resource ↗</b></a>)}</div>
    </section>

    <section className="section founder">
      <div className="portrait"><div/><strong>DD</strong><p>Founder &amp;<br/>Ecosystem Architect</p></div>
      <div><p className="kicker">Meet the founder</p><h2>Doug is mapping the system between the systems.</h2><p>BOSS Libraries grew from a simple field observation: entrepreneurs are surrounded by capable organizations, but they still lose time trying to determine where to start and what comes next.</p><p>Doug’s work focuses on making the small-business ecosystem more visible, connected, and useful—beginning with veteran owner-operators in the Houston region.</p><a className="textLink dark" href="#connect">Connect with Doug →</a></div>
    </section>

    <section className="video"><div className="section videoGrid"><div><p className="kicker">A welcome from BOSS</p><h2>See why navigation changes everything.</h2><p>Doug introduces the BOSS Libraries vision and the veteran-focused soft launch.</p></div><iframe src="https://drive.google.com/file/d/1Xr9Dwd4MFv45XtybEQMiu-LK67oKfXzt/preview" title="Introduction to BOSS Libraries" allow="autoplay; fullscreen"/></div></section>

    <section className="section" id="connect">
      <Heading kicker="Choose your way in" title={<>The pilot starts<br/>with veterans.</>} text="Hosted with mission-aligned partners, then designed to expand to more owner-operators in 2027."/>
      <div className="paths"><Path n="01" who="Veteran owner-operator" title="Get early access" text="Receive the sample Navigational Playbook and pilot updates."/><Path n="02" who="Support organization" title="Bring a clearer path to your members" text="Explore how BOSS can complement your programs and referrals."/><Path n="03" who="Mission-aligned sponsor" title="Help make trusted navigation accessible" text="Support the pilot and the infrastructure that connects entrepreneurs to help."/></div>
    </section>

    <section className="newsletter" id="newsletter"><div><p className="kicker">Join the BOSS briefing</p><h2>Know your phase.<br/><em>Find your next move.</em></h2><p>Get pilot updates, ecosystem insights, and the sample Navigational Playbook.</p>
      {joined?<div className="success" role="status">✓ <span><b>You’re on the early-access list.</b><br/>Watch your inbox for the first BOSS briefing.</span></div>:<form onSubmit={join}><input type="email" required placeholder="Email address" aria-label="Email address"/><button>Join early access →</button></form>}
      <small>By joining, you agree to receive BOSS Libraries updates. Unsubscribe anytime.</small></div>
    </section>
    <footer><div><strong>B</strong><span><b>BOSS Libraries™</b><small>Business navigation for owner-operators.</small></span></div><nav><a href="#about">About</a><a href="#how">How it works</a><a href="#resources">Resources</a><a href="#newsletter">Newsletter</a></nav><p>© 2026 BOSS Libraries. Pilot experience.</p></footer>
  </main>;
}

function Heading({kicker,title,text,light=false}:{kicker:string,title:React.ReactNode,text:string,light?:boolean}) { return <div className={`heading ${light?"light":""}`}><div><p className="kicker">{kicker}</p><h2>{title}</h2></div><p>{text}</p></div> }
function System({n,label,title,text,accent=false}:{n:string,label:string,title:string,text:string,accent?:boolean}) { return <article className={accent?"accent":""}><span>{n}</span><p>{label}</p><h3>{title}</h3><small>{text}</small></article> }
function Path({n,who,title,text}:{n:string,who:string,title:string,text:string}) { return <article><span>{n}</span><p>{who}</p><h3>{title}</h3><small>{text}</small><a href="#newsletter">Start here →</a></article> }

