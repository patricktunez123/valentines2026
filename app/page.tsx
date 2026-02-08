const weddingParty = [
  { role: "The Bride", name: "Olivia Rose", title: "Fashion Designer" },
  { role: "The Groom", name: "Noah James", title: "Architect" },
];

const schedule = [
  {
    time: "3:00 PM",
    title: "Wedding Ceremony",
    detail: "St. Mary Chapel, Sunset Hill",
  },
  {
    time: "5:00 PM",
    title: "Cocktail Hour",
    detail: "Garden Terrace, Rosewood Hotel",
  },
  {
    time: "7:00 PM",
    title: "Reception",
    detail: "Grand Ballroom, Rosewood Hotel",
  },
];

const gallery = [
  "Engagement in Paris",
  "Sunset on the Coast",
  "A Winter Walk",
  "First Date Night",
  "A Garden Picnic",
  "Our Favorite City",
];

export default function Home() {
  return (
    <main className="flex flex-col gap-24 font-[var(--font-cormorant)]">
      <header className="relative min-h-[90vh] bg-[radial-gradient(circle_at_top,_#fff1f2_0%,_#f9e0df_45%,_#f3d5d0_100%)] px-[6vw] pb-20 pt-10">
        <nav className="flex items-center justify-between gap-8 font-[var(--font-montserrat)] text-[0.8rem] uppercase tracking-[0.1em]">
          <div className="text-lg font-semibold">MyLove</div>
          <div className="hidden gap-6 md:flex">
            <a href="#story">Our Story</a>
            <a href="#gallery">Gallery</a>
            <a href="#events">Events</a>
            <a href="#rsvp">RSVP</a>
          </div>
          <button className="rounded-full bg-burgundy px-6 py-3 text-white">
            Save the Date
          </button>
        </nav>

        <div className="pt-16 text-center">
          <p className="mb-4 font-[var(--font-montserrat)] text-[0.75rem] uppercase tracking-[0.4em] text-burgundy">
            You are invited to celebrate
          </p>
          <h1 className="text-[clamp(3rem,8vw,6rem)]">Olivia &amp; Noah</h1>
          <p className="mb-10 text-lg">
            Saturday, 14 February 2026 · Rosewood Hotel
          </p>
          <div className="mx-auto inline-flex flex-wrap items-center justify-center gap-6 rounded-[999px] bg-white px-10 py-6 shadow-hero">
            {[
              { value: "128", label: "Days" },
              { value: "14", label: "Hours" },
              { value: "32", label: "Minutes" },
              { value: "55", label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="block text-2xl font-semibold">
                  {item.value}
                </span>
                <small className="font-[var(--font-montserrat)] text-[0.6rem] uppercase tracking-[0.2em] text-burgundy">
                  {item.label}
                </small>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute -bottom-16 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-white/60 blur-[10px]"
        />
      </header>

      <section
        className="grid items-center gap-12 px-[8vw] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        id="story"
      >
        <div>
          <p className="mb-4 font-[var(--font-montserrat)] text-[0.75rem] uppercase tracking-[0.4em] text-burgundy">
            Our Love Story
          </p>
          <h2 className="mb-4 text-[2.8rem]">A journey written in the stars</h2>
          <p>
            We met during a spring rainstorm in London and have been chasing
            sunsets ever since. Join us as we exchange vows surrounded by family,
            friends, and candlelit romance.
          </p>
          <div className="mt-6 font-[var(--font-great-vibes)] text-3xl">
            Olivia &amp; Noah
          </div>
        </div>
        <div className="rounded-[24px] bg-soft p-10 shadow-soft">
          <div className="rounded-[20px] bg-white p-8 text-center">
            <h3 className="mb-2 text-[1.8rem]">Wedding Day</h3>
            <p>February 14th, 2026</p>
            <p>Rosewood Hotel · Beverly Hills, CA</p>
            <button className="mt-6 rounded-full border border-burgundy px-6 py-3 text-burgundy">
              Add to Calendar
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-10 px-[8vw] md:grid-cols-2">
        {weddingParty.map((person) => (
          <div
            key={person.role}
            className="flex items-center gap-6 rounded-[30px] bg-white p-8 shadow-soft"
          >
            <div className="h-[90px] w-[90px] rounded-full bg-[linear-gradient(135deg,_#f3b9b6,_#fbe1de)]" />
            <div>
              <p className="mb-2 font-[var(--font-montserrat)] text-[0.75rem] uppercase tracking-[0.4em] text-burgundy">
                {person.role}
              </p>
              <h3 className="text-2xl">{person.name}</h3>
              <p>{person.title}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-10 px-[8vw]">
        <div>
          <p className="mb-4 font-[var(--font-montserrat)] text-[0.75rem] uppercase tracking-[0.4em] text-burgundy">
            The Timeline
          </p>
          <h2 className="text-[2.4rem]">Moments that led us here</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              year: "2019",
              text: "We met at a tiny cafe on Hyde Park, sharing stories and coffee.",
            },
            {
              year: "2021",
              text: "A dreamy proposal overlooking the Amalfi Coast at golden hour.",
            },
            {
              year: "2026",
              text: "The day we become family, surrounded by everyone we love.",
            },
          ].map((moment) => (
            <div key={moment.year} className="rounded-[24px] bg-soft p-8">
              <h4 className="mb-3 text-xl">{moment.year}</h4>
              <p>{moment.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[8vw]" id="gallery">
        <div className="mb-8">
          <p className="mb-4 font-[var(--font-montserrat)] text-[0.75rem] uppercase tracking-[0.4em] text-burgundy">
            Gallery
          </p>
          <h2 className="text-[2.4rem]">Captured memories</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((label) => (
            <div key={label} className="overflow-hidden rounded-[20px] bg-white shadow-soft">
              <div className="h-52 bg-[linear-gradient(180deg,_#f9d6d7,_#fef6f2)]" />
              <span className="block px-5 pb-4 pt-4">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 px-[8vw]" id="events">
        <div>
          <p className="mb-4 font-[var(--font-montserrat)] text-[0.75rem] uppercase tracking-[0.4em] text-burgundy">
            Wedding Events
          </p>
          <h2 className="text-[2.4rem]">Join the celebration</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {schedule.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-5 rounded-[24px] bg-white p-7 shadow-soft"
            >
              <div className="rounded-full bg-soft px-4 py-2 font-[var(--font-montserrat)] text-[0.7rem] uppercase tracking-[0.2em] text-burgundy">
                {item.time}
              </div>
              <div>
                <h3 className="text-xl">{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="grid items-center gap-12 px-[8vw] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        id="rsvp"
      >
        <div>
          <p className="mb-4 font-[var(--font-montserrat)] text-[0.75rem] uppercase tracking-[0.4em] text-burgundy">
            RSVP
          </p>
          <h2 className="mb-4 text-[2.6rem]">Will you join us?</h2>
          <p>
            We cannot wait to celebrate with you. Please respond by January 1st,
            2026.
          </p>
          <form className="mt-6 grid gap-4">
            <input
              className="rounded-full border border-[#e4c9c7] px-4 py-3 font-[var(--font-montserrat)]"
              placeholder="Full name"
            />
            <input
              className="rounded-full border border-[#e4c9c7] px-4 py-3 font-[var(--font-montserrat)]"
              placeholder="Email address"
              type="email"
            />
            <select
              className="rounded-full border border-[#e4c9c7] px-4 py-3 font-[var(--font-montserrat)]"
              defaultValue=""
            >
              <option value="" disabled>
                Attendance
              </option>
              <option>Accepts with pleasure</option>
              <option>Declines with regret</option>
            </select>
            <button className="rounded-full bg-burgundy px-4 py-3 text-white">
              Send RSVP
            </button>
          </form>
        </div>
        <div className="rounded-[24px] bg-soft p-10">
          <h3 className="mb-3 text-2xl">Venue Details</h3>
          <p>Rosewood Hotel</p>
          <p>2250 Santa Monica Blvd</p>
          <p>Beverly Hills, CA 90210</p>
          <p>Valet &amp; shuttle service available</p>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-6 bg-white px-[8vw] py-12">
        <div>
          <h2 className="text-[2.2rem]">Olivia &amp; Noah</h2>
          <p>Thank you for being part of our story.</p>
        </div>
        <div className="flex gap-6 font-[var(--font-montserrat)] text-[0.7rem] uppercase tracking-[0.2em]">
          <span>Instagram</span>
          <span>Registry</span>
          <span>Contact</span>
        </div>
      </footer>
    </main>
  );
}
