"use client";
import { FormEvent, useState } from "react";

const phases = [
  { n: "01", name: "Ideation", title: "Shape the business idea", text: "Turn experience, expertise, or a market observation into a clear problem, customer, and business concept worth exploring.", focus: ["Founder readiness", "Problem definition", "Customer hypothesis"], resources: "SCORE Startup Roadmap, SBA planning guidance, and VBOC orientation", operations: "Idea capture, customer definition, and early opportunity framing" },
  { n: "02", name: "Validation", title: "Test the idea before building", text: "Gather evidence that the customer, need, offer, and business model are strong enough to justify the next investment of time and money.", focus: ["Customer discovery", "Market research", "Offer testing"], resources: "SCORE market-research tools, SBDC advising, and mentor feedback", operations: "Interviews, competitor review, pricing tests, and feasibility decisions" },
  { n: "03", name: "Funding & Formation", title: "Fund and form the business", text: "Choose the legal and financial foundation, formalize the company, and prepare the resources needed to move toward launch.", focus: ["Entity formation", "Financial readiness", "Capital planning"], resources: "SBA funding education, SBDC financial advising, VBOC counseling, and official registration resources", operations: "Legal structure, registration, banking, insurance, accounting, and startup capital" },
  { n: "04", name: "Launch & Initial Operations", title: "Launch and establish initial operations", text: "Bring the offer to market, serve the first customers, and establish the essential operating rhythm behind delivery.", focus: ["Go-to-market", "First customers", "Operating systems"], resources: "SCORE launch guidance, SBDC advising, TVC support, and ecosystem referrals", operations: "Sales, delivery, customer service, bookkeeping, technology, and compliance routines" },
  { n: "05", name: "Growth or Scaling", title: "Grow with control", text: "Strengthen demand, delivery capacity, people, partnerships, and capital without losing visibility into the operation.", focus: ["Repeatable growth", "Team capacity", "Capital readiness"], resources: "SBDC growth advising, SURE education, SCORE mentorship, and capital-readiness programs", operations: "Sales channels, hiring, process capacity, partnerships, and financial controls" },
  { n: "06", name: "Mature Operations or Exit", title: "Optimize, transition, or exit", text: "Improve a mature operation, prepare leadership or ownership transitions, or plan an orderly exit based on the operator’s goals.", focus: ["Performance review", "Succession planning", "Exit readiness"], resources: "SCORE transition resources, SBDC performance reviews, and qualified professional referrals", operations: "Metrics, process improvement, valuation readiness, succession, and exit planning" },
];

const partners = [
  ["SBA", "U.S. Small Business Administration", "National programs, local assistance, funding guidance, and business education.", "https://www.sba.gov/"],
  ["SCORE", "SCORE", "Experienced mentors, workshops, and practical small-business guidance.", "https://www.score.org/"],
  ["VBOC", "Veterans Business Outreach Centers", "Support for veterans, service members, and military spouses building businesses.", "https://www.sba.gov/local-assistance/resource-partners/veterans-business-outreach-centers-vboc"],
  ["TVC", "Texas Veterans Commission", "Texas-based veteran entrepreneurship, education, and support connections.", "https://tvc.texas.gov/"],
  ["SBDC", "Small Business Development Centers", "No-cost advising, market research, and growth support through local centers.", "https://www.sba.gov/local-assistance/resource-partners/small-business-development-centers-sbdc"],
  ["SURE", "University of Houston SURE Program", "Education, consulting, mentoring, and capital preparation for under-resourced entrepreneurs.", "https://www.bauer.uh.edu/cei/sure/what-we-do.php"],
];

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);
  const [joined, setJoined] = useState(false);
  const [contacted, setContacted] = useState(false);
  const join = (e: FormEvent) => { e.preventDefault(); setJoined(true); };
  const contact = (e: FormEvent) => { e.preventDefault(); setContacted(true); };
  const phase = phases[active];
  return <main>
    <header className="header">
      <a className="brand" href="#top"><span><img src={`${assetBase}/boss-logo.png`} alt="BOSS Libraries" /></span></a>
      <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu}><i/><i/><i/><b className="sr">Menu</b></button>
      <nav className={menu ? "open" : ""}>
        <a href="#top">Home</a><a href="#about">About</a><a href="#how">How it works</a><a href="#resources">Resources</a><a href="#connect">Join</a><a href="#newsletter">Newsletter</a><a className="navCta" href="#newsletter">Download playbook ↗</a>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="heroGrid">
        <div><p className="eyebrow"><span>Veteran-focused pilot</span> · Opening 2026</p>
          <h1>Stop searching.<br/><em>Start navigating.</em></h1>
          <p className="lead">BOSS Libraries turns a fragmented business-support ecosystem into a clear path—so owner-operators can find the right resource, at the right phase, for the right next move.</p>
          <div className="actions"><a className="button" href="#newsletter">Download the sample Navigational Playbook →</a><a className="textLink" href="#how">See how it works ↓</a></div>
        </div>
        <div className="compass" aria-label="Six business phases">
          <div className="rings"/><div className="compassCore"><b>N</b><span>YOUR<br/>NEXT<br/>MOVE</span></div>
          {phases.map((p,i)=><small className={`o o${i+1}`} key={p.name}>{p.n} {p.name}</small>)}
        </div>
      </div>
      <div className="proof"><p>Built for owner-operators who need a path—not more tabs.</p><div><b>6</b> business phases</div><div><b>1</b> playbook</div><div><b>0</b> pay-to-play rankings</div></div>
    </section>

    <section className="section twoCol" id="about">
      <div><p className="kicker">The idea behind BOSS</p><h2>The resources are out there.<br/><em>The route is missing.</em></h2></div>
      <div className="copy"><p>Entrepreneurs rarely struggle because nobody wants to help. They struggle because programs, people, tools, and opportunities are spread across an ecosystem with no shared map.</p><p>BOSS Libraries is the connective tissue: a trusted education and navigation layer that helps people understand what exists, when it matters, and how the pieces work together.</p><blockquote>“Strong ecosystems aren’t built by adding more resources. They’re built by connecting the right ones.”</blockquote></div>
    </section>

    <section className="section purpose">
      <Heading kicker="Mission · Vision · Values" title={<>Built for clarity.<br/><em>Grounded in trust.</em></>} text="BOSS organizes the ecosystem around the operator while honoring the organizations already serving them." />
      <div className="valuesGrid"><Value label="Mission" text="Help owner-operators find and use the right trusted business resource at the right phase."/><Value label="Vision" text="A connected support ecosystem where every entrepreneur can see a practical route forward."/><Value label="Values" text="Clarity over noise. Trust over ranking. Connection over duplication. Action over overwhelm."/></div>
    </section>

    <section className="section" id="how">
      <Heading kicker="What’s in the Library" title={<>Six phases.<br/>One clear route.</>} text="Each phase connects practical guidance, relevant free resources, and the business-operations ecosystem needed for the next move." />
      <div className="phaseBox">
        <div className="tabs">{phases.map((p,i)=><button className={i===active?"active":""} onClick={()=>setActive(i)} key={p.name}><span>{p.n}</span>{p.name}</button>)}</div>
        <div className="phase"><p className="kicker">Phase {phase.n}</p><h3>{phase.title}</h3><p>{phase.text}</p><div className="chips">{phase.focus.map(x=><span key={x}>{x}</span>)}</div><div className="phaseDetails"><div><b>Relevant free resources</b><span>{phase.resources}</span></div><div><b>Operations ecosystem</b><span>{phase.operations}</span></div></div><a href="#newsletter">Preview this phase in the playbook ↗</a></div>
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
      <Heading kicker="The resource ecosystem" title={<>Trusted support.<br/>Made easier to use.</>} text="A starting gallery of public and nonprofit resources within the BOSS navigation model."/>
      <div className="partnerGrid">{partners.map(p=><a href={p[3]} target="_blank" rel="noreferrer" key={p[1]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p><b>Explore resource ↗</b></a>)}</div>
      <div className="resourceCallouts"><article><p className="kicker">For ESOs and VBSOs</p><h3>Want your organization represented in the route?</h3><a href="#partner-contact">Talk to Doug →</a></article><article><p className="kicker">For sponsors</p><h3>Help trusted navigation reach more owner-operators.</h3><a href="#partner-contact">Talk to Doug →</a></article></div>
    </section>

    <section className="section founder">
      <div className="portrait"><div/><strong>DD</strong><p>Founder &amp;<br/>Ecosystem Architect</p></div>
      <div><p className="kicker">Meet the founder</p><h2>Doug is mapping the system between the systems.</h2><p>BOSS Libraries grew from a simple field observation: entrepreneurs are surrounded by capable organizations, but they still lose time trying to determine where to start and what comes next.</p><p>Doug’s work focuses on making the small-business ecosystem more visible, connected, and useful—beginning with veteran owner-operators in the Houston region.</p><a className="textLink dark" href="#partner-contact">Connect with Doug →</a></div>
    </section>

    <section className="video"><div className="section videoGrid"><div><p className="kicker">A welcome from BOSS</p><h2>See why navigation changes everything.</h2><p>Doug introduces the BOSS Libraries vision and the veteran-focused soft launch.</p></div><iframe src="https://drive.google.com/file/d/1Xr9Dwd4MFv45XtybEQMiu-LK67oKfXzt/preview" title="Introduction to BOSS Libraries" allow="autoplay; fullscreen"/></div></section>

    <section className="section" id="connect">
      <Heading kicker="Soft launch · How to participate" title={<>The pilot starts<br/>with veterans.</>} text="The CIVVIE Foundation is hosting the veteran-focused launch, with expansion to more owner-operators planned for 2027."/>
      <div className="paths"><Path n="01" who="VBSO or ESO" title="Connect your organization" text="Talk with Doug about programs, referrals, and how your organization can participate." href="#partner-contact"/><Path n="02" who="VBSO or ESO member" title="Enter through your trusted organization" text="Follow your organization’s referral, receive the sample playbook, and join pilot updates." href="#newsletter"/><Path n="03" who="Not yet connected" title="Start directly with BOSS" text="Join the newsletter, download the sample playbook, and find the right support connection." href="#newsletter"/></div>
    </section>

    <section className="pilotPartners" id="pilot-partners"><div className="section">
      <Heading light kicker="Pilot partners" title={<>Building the pilot<br/><em>with trusted organizations.</em></>} text="Confirmed organizations are shown by name. Additional pilot partners will be added as participation is finalized."/>
      <div className="pilotPartnerGrid"><a className="confirmedPartner" href="https://hrvcc.org/" target="_blank" rel="noreferrer"><span>Confirmed pilot partner</span><img src={`${assetBase}/hrvcc-logo.png`} alt="Houston Regional Veterans Chamber of Commerce"/><h3>Houston Regional Veterans Chamber of Commerce</h3><b>Visit HRVCC ↗</b></a><div className="partnerPlaceholder"><span>Partner 02</span><i>Logo</i><h3>Pilot partner to be announced</h3></div><div className="partnerPlaceholder"><span>Partner 03</span><i>Logo</i><h3>Pilot partner to be announced</h3></div><div className="partnerPlaceholder"><span>Partner 04</span><i>Logo</i><h3>Pilot partner to be announced</h3></div></div>
    </div></section>

    <section className="contact" id="partner-contact"><div className="section contactGrid"><div><p className="kicker">Talk with Doug</p><h2>Connect the ecosystem.</h2><p>Use this form if you represent an ESO, VBSO, resource partner, or potential sponsor.</p><p className="contactEmail"><span>Customer service</span><a href="mailto:info@bosslibraries.com">info@bosslibraries.com →</a></p></div>{contacted?<div className="contactSuccess" role="status"><b>Thanks—your note is ready for the BOSS team.</b><span>We’ll follow up using the email you provided.</span></div>:<form onSubmit={contact}><label>Your role<select required defaultValue=""><option value="" disabled>Select one</option><option>ESO or VBSO</option><option>Resource partner</option><option>Sponsor</option><option>Other ecosystem partner</option></select></label><label>Name<input required /></label><label>Organization<input required /></label><label>Email<input type="email" required /></label><label className="wide">How would you like to participate?<textarea required rows={5}/></label><button className="button">Send to Doug →</button></form>}</div></section>

    <section className="newsletter" id="newsletter"><div><p className="kicker">Join the BOSS briefing</p><h2>Know your phase.<br/><em>Find your next move.</em></h2><p>Join the email list to receive pilot updates, ecosystem insights, and the sample Navigational Playbook.</p>
      {joined?<div className="success" role="status">✓ <span><b>You’re on the early-access list.</b><br/>Watch your inbox for the first BOSS briefing.</span></div>:<form onSubmit={join}><input type="email" required placeholder="Email address" aria-label="Email address"/><button>Get the playbook →</button></form>}
      <small>By joining, you agree to receive BOSS Libraries updates. Unsubscribe anytime.</small></div>
    </section>
    <footer><div><strong>B</strong><span><b>BOSS Libraries™</b><small>Business navigation for owner-operators.</small><a href="mailto:info@bosslibraries.com">Customer service: info@bosslibraries.com</a></span></div><nav><a href="#top">Home</a><a href="#about">About</a><a href="#how">How it works</a><a href="#resources">Resources</a><a href="#connect">Join</a><a href="#newsletter">Newsletter</a></nav><p>© 2026 BOSS Libraries. Pilot experience.</p></footer>
  </main>;
}

function Heading({kicker,title,text,light=false}:{kicker:string,title:React.ReactNode,text:string,light?:boolean}) { return <div className={`heading ${light?"light":""}`}><div><p className="kicker">{kicker}</p><h2>{title}</h2></div><p>{text}</p></div> }
function Value({label,text}:{label:string,text:string}) { return <article><p>{label}</p><h3>{text}</h3></article> }
function System({n,label,title,text,accent=false}:{n:string,label:string,title:string,text:string,accent?:boolean}) { return <article className={accent?"accent":""}><span>{n}</span><p>{label}</p><h3>{title}</h3><small>{text}</small></article> }
function Path({n,who,title,text,href}:{n:string,who:string,title:string,text:string,href:string}) { return <article><span>{n}</span><p>{who}</p><h3>{title}</h3><small>{text}</small><a href={href}>Start here →</a></article> }
