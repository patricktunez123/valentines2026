export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">MyLove</div>
          <div className="nav-links">
            <a href="#couple">Couple</a>
            <a href="#story">Story</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
            <a href="#rsvp">RSVP</a>
          </div>
        </nav>
        <div className="hero-content">
          <p className="hero-date">Saturday, 16 February 2026</p>
          <h1>
            Olivia <span>&</span> Noah
          </h1>
          <p className="hero-subtitle">
            We are getting married. Save the date for our celebration of love.
          </p>
          <div className="hero-actions">
            <button className="primary">Save the Date</button>
            <button className="ghost">View Story</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span />
          <p>Scroll</p>
        </div>
      </header>

      <section id="couple" className="section couple">
        <div className="section-heading">
          <p>Happy Couple</p>
          <h2>Meet the Bride & Groom</h2>
        </div>
        <div className="couple-grid">
          <div className="profile">
            <div className="profile-image bride" aria-hidden />
            <h3>Olivia Grace</h3>
            <p>
              Dreamer, traveler, and lover of late-night conversations. She brings
              the sparkle and warmth to every moment.
            </p>
          </div>
          <div className="profile">
            <div className="profile-image groom" aria-hidden />
            <h3>Noah James</h3>
            <p>
              Adventurer with a soft heart and a steady hand. He is the calm and
              joyful soul of our story.
            </p>
          </div>
        </div>
      </section>

      <section id="story" className="section story">
        <div className="section-heading">
          <p>Our Story</p>
          <h2>Every love story is beautiful</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <h4>First Meet</h4>
            <span>2018</span>
            <p>
              A coffee shop encounter turned into hours of conversation and
              laughter.
            </p>
          </div>
          <div className="timeline-item">
            <h4>First Date</h4>
            <span>2019</span>
            <p>
              A sunset picnic that made us realize we were something special.
            </p>
          </div>
          <div className="timeline-item">
            <h4>Engagement</h4>
            <span>2025</span>
            <p>
              Surrounded by family and friends, we said yes to forever.
            </p>
          </div>
        </div>
      </section>

      <section id="events" className="section events">
        <div className="section-heading">
          <p>Wedding Events</p>
          <h2>Join our celebration</h2>
        </div>
        <div className="event-grid">
          <div className="event-card">
            <h3>Ceremony</h3>
            <p>St. Mary Cathedral</p>
            <span>3:00 PM</span>
          </div>
          <div className="event-card">
            <h3>Reception</h3>
            <p>Rosewood Ballroom</p>
            <span>6:30 PM</span>
          </div>
          <div className="event-card">
            <h3>After Party</h3>
            <p>Skyline Rooftop</p>
            <span>10:00 PM</span>
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery">
        <div className="section-heading">
          <p>Gallery</p>
          <h2>Sweet moments</h2>
        </div>
        <div className="gallery-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={`gallery-item item-${index + 1}`} />
          ))}
        </div>
      </section>

      <section id="rsvp" className="section rsvp">
        <div className="section-heading">
          <p>RSVP</p>
          <h2>Are you attending?</h2>
        </div>
        <form className="rsvp-form">
          <input placeholder="Your Name" />
          <input placeholder="Email Address" />
          <select defaultValue="">
            <option value="" disabled>
              Number of Guests
            </option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
          <textarea placeholder="Message" rows={4} />
          <button className="primary" type="submit">
            Send RSVP
          </button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <h2>Olivia & Noah</h2>
          <p>Thank you for celebrating with us.</p>
        </div>
        <p className="footer-note">#OliviaAndNoah2026</p>
      </footer>
    </div>
  );
}
