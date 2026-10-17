import { useState } from "react";

type Moment = {
  image: string;
  alt: string;
  caption: string;
};

type SupportOption = {
  number: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

const moments: Moment[] = [
  {
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1100&q=85",
    alt: "A performer takes the stage beneath theater lights",
    caption: "A Broadway extravaganza · The Wiz",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=85",
    alt: "Friends share a warm moment together",
    caption: "Winter Wonderland",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=85",
    alt: "Family enjoying time together outdoors",
    caption: "A day at the farm",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85",
    alt: "Colorful holiday decorations at a celebration",
    caption: "Helping Hand Christmas · A season of giving",
  },
];

const supportOptions: SupportOption[] = [
  {
    number: "01",
    title: "Give what you can",
    description:
      "Your gift helps bring special events and experiences within reach for local children and teens.",
    href: "https://app.goodworldnow.com/",
    external: true,
  },
  {
    number: "02",
    title: "Volunteer your time",
    description:
      "Support events as a chaperone, mentor, organizer, committee member, or helping hand.",
    href: "mailto:info@specialmoments4kids.org?subject=Volunteer%20with%20Special%20Moments",
  },
  {
    number: "03",
    title: "Bring people together",
    description:
      "Turn a birthday, team gathering, or workplace tradition into a fundraiser for joyful memories.",
    href: "mailto:info@specialmoments4kids.org?subject=Host%20a%20fundraiser",
  },
  {
    number: "04",
    title: "Partner with us",
    description:
      "Organizations, local businesses, and community groups can help make an event extraordinary.",
    href: "mailto:info@specialmoments4kids.org?subject=Become%20a%20community%20partner",
  },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Special Moments home">
      <span className="brand-mark" aria-hidden="true">
        <span>✦</span>
      </span>
      special moments
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topline">
        <a href="#upcoming">
          Legacy &amp; Lineage Pickleball Fiesta
          <span>November 1, 2026&nbsp; →</span>
        </a>
      </div>
      <header className="nav">
        <div className="wrap nav-inner">
          <Brand />
          <button
            className="mobile-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
          <nav
            className={`nav-links${menuOpen ? " open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#story" onClick={closeMenu}>Our story</a>
            <a href="#moments" onClick={closeMenu}>Moments</a>
            <a href="#involved" onClick={closeMenu}>Get involved</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="button" href="#donate" onClick={closeMenu}>
              Make a difference <span>↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">A community nonprofit in Kent, Washington</div>
            <h1>
              Transforming memories<br />
              <em>one child at a time.</em>
            </h1>
            <p className="hero-copy">
              Special Moments creates joyful events and experiences for children
              and teens who are homeless, in foster care, or otherwise vulnerable.
              Every child deserves a chance to feel hope, belonging, and the joy
              of simply being a kid.
            </p>
            <div className="hero-actions">
              <a className="button" href="#donate">
                Donate today <span>↗</span>
              </a>
              <a className="text-link" href="#story">Learn about our mission ↓</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=85"
              alt="A joyful family spending time together outdoors"
            />
            <div className="hero-note">
              <div><b>Since<br />2011</b>creating memories<br />together</div>
            </div>
          </div>
        </div>
      </section>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[1, 2, 3].map((item) => (
            <span key={item}>Joy <i>✳</i> Love <i>✳</i> Hope <i>✳</i> Belonging</span>
          ))}
        </div>
      </div>
    </>
  );
}

function Story() {
  return (
    <section className="intro" id="story">
      <div className="wrap intro-grid">
        <div>
          <div className="section-kicker">Why special moments matter</div>
          <h2>A little wonder can change how a child sees the world.</h2>
        </div>
        <div className="intro-body">
          <p>
            Special Moments believes every child deserves a memory so joyful they
            can let their guard down, feel seen, and enjoy being a kid. A powerful
            moment can bring balance, build hope, and stay with a young person
            long after the day is over.
          </p>
          <p>
            Since 2011, our Kent, Washington nonprofit has brought children and
            teens together through <strong>special events, cultural outings,
            seasonal celebrations, and caring community.</strong>
          </p>
          <div className="mission-line">“Transforming memories, one child at a time.”</div>
        </div>
      </div>
    </section>
  );
}

function UpcomingEvent() {
  return (
    <section className="event-band" id="upcoming">
      <div className="wrap event-grid">
        <div>
          <div className="section-kicker">Coming up · Kent, Washington</div>
          <h2>Legacy &amp; Lineage:<br />Pickleball Fiesta</h2>
          <p>
            Senior sagacity meets youth energy. Bring generations together for an
            afternoon on the court, with a live DJ, prizes, and food. Every team
            pairs one senior and one young player.
          </p>
          <span className="event-tag">Free community event</span>
        </div>
        <div className="event-meta">
          <div className="event-date">Sunday · November 1, 2026</div>
          <h3>2:00 – 7:00 PM</h3>
          <p>Sideout Tsunami Pickleball Center<br />2300 26th Ave S, Seattle, WA</p>
          <a
            className="button lime"
            href="mailto:info@specialmoments4kids.org?subject=Pickleball%20Fiesta%20registration"
          >
            Ask about registration <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Moments() {
  return (
    <section className="moments" id="moments">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">The good stuff stays with you</div>
            <h2 className="section-title">Moments worth<br />remembering.</h2>
          </div>
          <p>
            From opening night to holiday magic, every gathering is a chance to
            feel connected, celebrated, and full of possibility.
          </p>
        </div>
        <div className="gallery">
          {moments.map((moment) => (
            <figure key={moment.caption}>
              <img src={moment.image} alt={moment.alt} loading="lazy" />
              <figcaption>{moment.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section className="ways" id="involved">
      <div className="wrap ways-grid">
        <div className="ways-copy">
          <div className="section-kicker">There’s a place for you here</div>
          <h2 className="section-title">Make a moment possible.</h2>
          <p>
            There are many ways to help a child experience a little more joy,
            love, and hope. Choose the one that feels right for you.
          </p>
          <a className="button" id="donate" href="https://app.goodworldnow.com/" target="_blank" rel="noopener noreferrer">
            Donate today <span>↗</span>
          </a>
        </div>
        <div className="ways-list">
          {supportOptions.map((option) => (
            <a
              className="way"
              href={option.href}
              key={option.number}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
            >
              <span className="way-num">{option.number}</span>
              <div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
              <span className="way-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
            alt="Friends laughing together at an outdoor gathering"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <div className="section-kicker">A community built around kids</div>
          <h2 className="section-title">A small idea with a big heart.</h2>
          <p>
            Special Moments was founded in November 2011 by Laura A. Cook, whose
            passions for travel, event planning, and children came together in
            one purpose: to create meaningful moments for young people who could
            use a reason to feel hopeful.
          </p>
          <p>
            Based in Kent, Washington, Special Moments brings caring people
            together to make those experiences possible. Our board and volunteers
            help create a welcoming community around every event.
          </p>
          <div className="founder">
            <div className="avatar">LC</div>
            <div><strong>Laura A. Cook</strong><span>Founder &amp; President</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <section className="volunteer">
        <div className="wrap volunteer-inner">
          <div>
            <h2>Sometimes the best gift is showing up.</h2>
            <p>
              Join the community creating safe, joyful experiences for children
              and teens. We’d love to hear what inspires you.
            </p>
          </div>
          <a
            className="button"
            href="mailto:info@specialmoments4kids.org?subject=I%20want%20to%20volunteer"
          >
            I’d like to help <span>↗</span>
          </a>
        </div>
      </section>
      <footer className="footer" id="contact">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <Brand />
              <p className="footer-blurb">
                Creating joyful, lasting memories for children and teens, one
                special moment at a time.
              </p>
            </div>
            <div>
              <h3>Explore</h3>
              <div className="footer-links">
                <a href="#story">Our story</a>
                <a href="#moments">Moments</a>
                <a href="#upcoming">Upcoming event</a>
                <a href="#involved">Get involved</a>
              </div>
            </div>
            <div>
              <h3>Say hello</h3>
              <div className="footer-links">
                <span>14102 SE 278th St<br />Kent, WA 98042</span>
                <a href="tel:+12064275567">(206) 427-5567</a>
                <a href="mailto:info@specialmoments4kids.org">info@specialmoments4kids.org</a>
                <a href="https://www.facebook.com/SpecialMoments4kids" target="_blank" rel="noopener noreferrer">
                  Facebook ↗
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Special Moments</span>
            <span>Transforming memories, one child at a time.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <UpcomingEvent />
        <Moments />
        <GetInvolved />
        <About />
      </main>
      <Footer />
    </>
  );
}
