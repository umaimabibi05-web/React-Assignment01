import { useEffect, useState } from "react";

const P = (f) => `${process.env.PUBLIC_URL}/images/${f}`;
const IMG = {
  hero: P("hero.jpg"),
  feature: P("feature.jpg"),
  banner: P("banner.jpg"),
};

const NAV = [["Home", "#home"], ["Classes", "#classes"], ["Features", "#features"], ["Reviews", "#reviews"], ["Chefs", "#chefs"]];

const CLASSES = [
  { img: P("pasta.jpg"), t: "Italian Pasta Masterclass", p: 35, r: 32, tag: "Italian" },
  { img: P("curry.jpg"), t: "Desi Karahi & Curries", p: 30, r: 48, tag: "Desi" },
  { img: P("cake.jpg"), t: "Baking Cakes for Beginners", p: 25, r: 21, tag: "Bakery" },
  { img: P("sushi.jpg"), t: "Sushi & Japanese Basics", p: 40, r: 14, tag: "Japanese" },
  { img: P("salad.jpg"), t: "Healthy Meal Prep", p: 20, r: 27, tag: "Healthy" },
  { img: P("burger.jpg"), t: "Street Food at Home", p: 22, r: 36, tag: "Fast Food" },
];

const FEATURES = [
  ["fa-clock", "Flexible Timing", "Learn at your own pace, whenever the kitchen is free."],
  ["fa-video", "HD Video Lessons", "Step-by-step recipes you can pause, rewind and repeat."],
  ["fa-wallet", "Affordable Price", "Restaurant-level skills without restaurant-level fees."],
  ["fa-user-tie", "Chef Support", "Ask your mentor anything and get answers within a day."],
];

const REVIEWS = [
  { n: "Ayesha Khan", r: "Home Cook", t: "My biryani finally tastes like my mother's. The lessons are so clear and easy to follow!", a: "user1.jpg" },
  { n: "Luis Sera", r: "Food Blogger", t: "Best online cooking course I have taken. Great recipes and very friendly chefs.", a: "user2.jpg" },
  { n: "Diana Jordan", r: "Student", t: "I started with zero skills, now I bake cakes for the whole family every weekend.", a: "user3.jpg" },
];

const CHEFS = [
  { n: "Chef Leon", s: "Italian Cuisine", a: "chef1.jpg" },
  { n: "Chef Thuy", s: "Asian Fusion", a: "chef2.jpg" },
  { n: "Chef Rizki", s: "BBQ & Grill", a: "chef3.jpg" },
  { n: "Chef Sana", s: "Pastry & Baking", a: "chef4.jpg" },
];

const FOOTER = {
  Classes: [["Pasta & Italian", "#classes"], ["Desi Cooking", "#classes"], ["Baking", "#classes"], ["Healthy Food", "#classes"]],
  Menu: [["Home", "#home"], ["Features", "#features"], ["Reviews", "#reviews"], ["Chefs", "#chefs"]],
  About: [["Contact Us", "mailto:hello@tastely.com"], ["Privacy Policy", "#home"], ["Terms & Conditions", "#home"], ["FAQ", "#home"]],
};

const SOCIAL = [
  ["Instagram", "https://instagram.com", "fa-instagram"],
  ["YouTube", "https://youtube.com", "fa-youtube"],
  ["Facebook", "https://facebook.com", "fa-facebook-f"],
  ["Twitter", "https://twitter.com", "fa-x-twitter"],
  ["GitHub", "https://github.com", "fa-github"],
];

function Img({ src, alt, className = "" }) {
  const [bad, setBad] = useState(false);
  if (bad) return <div className={`img-fallback ${className}`}><i className="fa-solid fa-utensils" /></div>;
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setBad(true)} />;
}
const Avatar = ({ n, a, cls }) => <Img src={P(a)} alt={n} className={cls} />;

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((x) => x.isIntersecting && x.target.classList.add("show")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "nav-solid" : ""}`}>
      <div className="container">
        <a className="navbar-brand brand" href="#home"><i className="fa-solid fa-kitchen-set me-2" />Tastely</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Toggle menu">
          <i className="fa-solid fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto">
            {NAV.map(([l, h]) => (
              <li className="nav-item" key={l}><a className="nav-link nav-anim" href={h}>{l}</a></li>
            ))}
          </ul>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-dark rounded-pill px-4">Sign In</button>
            <button className="btn btn-brand rounded-pill px-4">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="home" className="hero">
      <div className="container">
        <div className="row align-items-center gy-5 gx-lg-5">
          <div className="col-lg-6 text-center text-lg-start">
            <span className="badge-soft"><i className="fa-solid fa-fire me-1" /> #1 Online Cooking School</span>
            <h1 className="hero-title mt-3">Cook Delicious Food <span className="underline">Like a Pro</span></h1>
            <p className="lead text-muted my-5">
              Join live and recorded classes with expert chefs. Learn easy recipes, kitchen secrets
              and plating tricks from the comfort of your home.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
              <a href="#classes" className="btn btn-brand btn-lg rounded-pill px-5">Get Started</a>
              <a href="#features" className="btn btn-lg rounded-pill px-4 shadow-sm" style={{ background: "#eaeeef", border: 0 }}>
                <i className="fa-solid fa-circle-play text-warning me-2" />Watch Video
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-art">
              <div className="blob" />
              <Img src={IMG.hero} alt="Delicious food" className="hero-img" />
              <div className="cert-card"><i className="fa-solid fa-award text-warning me-2" /><b>Certificate</b><br /><small>for every class</small></div>
              <div className="rate-card"><i className="fa-solid fa-star text-warning" /> 4.9 <small className="text-muted">(2k reviews)</small></div>
            </div>
          </div>
        </div>
        <div className="row text-center stats reveal">
          {[["fa-users", "10K+", "Students"], ["fa-book-open", "50+", "Cooking Classes"], ["fa-hat-chef", "15+", "Expert Chefs"]].map(([i, n, l]) => (
            <div className="col-4" key={l}>
              <i className={`fa-solid ${i === "fa-hat-chef" ? "fa-user-tie" : i} stat-i`} />
              <h2>{n}</h2><p>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function Classes() {
  return (
    <section id="classes" className="py-6">
      <div className="container">
        <h2 className="section-title reveal">Most Popular <span className="underline">Classes</span></h2>
        <div className="row g-4 mt-2">
          {CLASSES.map((c, i) => (
            <div className="col-md-6 col-lg-4 reveal" style={{ transitionDelay: `${i * 80}ms` }} key={c.t}>
              <div className="card course-card h-100">
                <div className="course-img-wrap">
                  <Img src={c.img} alt={c.t} className="course-img" />
                  <span className="tag">{c.tag}</span>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">{c.t}</h5>
                  <div className="text-warning small">
                    {[...Array(5)].map((_, k) => <i className="fa-solid fa-star" key={k} />)} <span className="text-muted">({c.r})</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="price">${c.p}<small className="text-muted"> / class</small></span>
                    <button className="btn btn-sm btn-brand rounded-pill px-3"><i className="fa-solid fa-cart-shopping me-1" />Enroll</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-6 bg-warm">
      <div className="container">
        <div className="row align-items-center gy-5 gx-lg-5">
          <div className="col-lg-5 reveal">
            <div className="feat-img-wrap">
               <video src="/images/cooking.mp4" className="feat-img" controls poster={IMG.feature} />
              <div className="progress-card"><i className="fa-solid fa-chart-line me-2 text-success" /><b>75%</b> students cook daily</div>
            </div>
          </div>
          <div className="col-lg-7">
            <h2 className="section-title text-lg-start reveal">Make Your Cooking <span className="underline">Enjoyable</span></h2>
            <div className="row g-4 mt-1">
              {FEATURES.map(([i, t, d], k) => (
                <div className="col-sm-6 reveal" style={{ transitionDelay: `${k * 100}ms` }} key={t}>
                  <div className="feature h-100">
                    <div className="icon-circle"><i className={`fa-solid ${i}`} /></div>
                    <h5 className="fw-bold mt-3">{t}</h5>
                    <p className="text-muted mb-0 small">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Banner() {
  return (
    <section className="banner" style={{ backgroundImage: `linear-gradient(rgba(30,20,10,.65),rgba(30,20,10,.65)),url(${IMG.banner})` }}>
      <div className="container text-center text-white reveal">
        <h2 className="fw-bold display-6">Ready to become a great cook?</h2>
        <p className="mb-4">Start your first class today and get a free recipe e-book.</p>
        <a href="#classes" className="btn btn-brand btn-lg rounded-pill px-5">Join Now</a>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-6">
      <div className="container">
        <h2 className="section-title reveal">What Our Students <span className="underline">Say</span></h2>
        <div className="row g-4 mt-2">
          {REVIEWS.map((r, i) => (
            <div className="col-md-4 reveal" style={{ transitionDelay: `${i * 100}ms` }} key={r.n}>
              <div className="review h-100">
                <i className="fa-solid fa-quote-left quote" />
                <p className="mb-4">{r.t}</p>
                <div className="d-flex align-items-center gap-3">
                  <Avatar n={r.n} a={r.a} cls="avatar" />
                  <div><b>{r.n}</b><br /><small className="text-muted">{r.r}</small></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chefs() {
  return (
    <section id="chefs" className="py-6 bg-warm">
      <div className="container">
        <h2 className="section-title reveal">Our Expert <span className="underline">Chefs</span></h2>
        <div className="row g-4 mt-2">
          {CHEFS.map((c, i) => (
            <div className="col-6 col-lg-3 reveal" style={{ transitionDelay: `${i * 100}ms` }} key={c.n}>
              <div className="chef text-center">
                <Avatar n={c.n} a={c.a} cls="chef-img" />
                <h5 className="fw-bold mt-3 mb-0">{c.n}</h5>
                <small className="text-muted">{c.s}</small>
                <div className="chef-social mt-2">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e) => { e.preventDefault(); if (email) { setDone(true); setEmail(""); } };
  return (
    <section className="py-5">
      <div className="container">
        <div className="news reveal text-center">
          <i className="fa-solid fa-envelope-open-text fs-1 mb-3" />
          <h2 className="fw-bold">Subscribe to Our Newsletter</h2>
          <p>Get new recipes and class updates straight to your inbox.</p>
          {done ? (
            <p className="fw-bold"><i className="fa-solid fa-circle-check me-2" />Thank you for subscribing!</p>
          ) : (
            <form className="d-flex gap-2 justify-content-center flex-wrap" onSubmit={submit}>
              <input type="email" required className="form-control rounded-pill news-input" placeholder="Enter your email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="btn btn-dark rounded-pill px-4">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h4 className="brand text-white"><i className="fa-solid fa-kitchen-set me-2" />Tastely</h4>
            <p className="text-white-50">Tastely is an online cooking platform helping food lovers learn since 2018.</p>
            <ul className="list-unstyled text-white-50 small">
              <li><i className="fa-solid fa-location-dot me-2" />Karachi, Pakistan</li>
              <li><i className="fa-solid fa-envelope me-2" />hello@tastely.com</li>
              <li><i className="fa-solid fa-phone me-2" />+92 300 0000000</li>
            </ul>
            <div className="d-flex gap-2">
              {SOCIAL.map(([n, h, i]) => (
                <a key={n} href={h} target="_blank" rel="noreferrer" className="social" aria-label={n}>
                  <i className={`fa-brands ${i}`} />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER).map(([title, links]) => (
            <div className="col-6 col-lg-2" key={title}>
              <h6 className="text-white mb-3">{title}</h6>
              <ul className="list-unstyled">
                {links.map(([l, h]) => (
                  <li key={l} className="mb-2"><a href={h} className="flink"><i className="fa-solid fa-angle-right me-1 small" />{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="border-secondary" />
        <p className="text-center text-white-50 mb-0">&copy; {new Date().getFullYear()} Tastely Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Kitchen() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <Classes />
      <Features />
      <Banner />
      <Reviews />
      <Chefs />
      <Newsletter />
      <Footer />
    </>
  );
}
