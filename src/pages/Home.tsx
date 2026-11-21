import React from "react";

function Home() {
  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap hero-in">
          <div>
            <p className="eyebrow">Learn, Connect &amp; Grow</p>
            <h1 id="hero-h" className="mt-2">
              Learn from people who've <em>done it before.</em>
            </h1>
            <p className="hero-sub">
              Book a 1:1 video conversation with a guru who has made the move
              you're about to make. Pay per session, no subscription.
            </p>
            <form className="hero-search" id="heroSearch" role="search">
              <input
                id="heroQ"
                aria-label="What do you want to get better at?"
                placeholder="What do you want to get better at?"
              />
              <button className="btn btn-primary" type="submit">
                <span>Find your guru</span>
              </button>
            </form>
            <div className="hero-tags">
              <span>Popular:</span>
              {/* ${ {["Interview prep", "Fundraising", "Portfolio", "Leadership"]
                .map(
                  (t) =>
                    `<button className="hero-tag" data-q="${t}">${t}</button>`,
                )
                .join("")} } */}
            </div>
            <div className="hero-proof">
              <div>
                <b className="num">1,200+</b>
                <span>gurus vetted</span>
              </div>
              <div>
                <b className="num">4.8 ★</b>
                <span>average session rating</span>
              </div>
              <div>
                <b className="num">30–60 min</b>
                <span>focused sessions</span>
              </div>
            </div>
          </div>
          <div className="stack" aria-hidden="true">
            <div className="ticket">
              <div>
                <span className="chip chip-soon">● Session soon</span>
                <span className="num">30 min · Video call</span>
              </div>
              <h3>Career Strategy Conversation</h3>
              {/* <div style="display:flex;gap:10px;align-items:center;margin-top:10px">${av('Sarah Mitchell', 'violet', 34, true)}<span style="font-size:14px">with <b style="color:var(--ink)">Sarah Mitchell</b></span></div> */}
              <div className="ticket-edge">
                <span className="num">Tue 27 Oct · 10:30 AM</span>
                <span className="btn btn-primary btn-sm">Join call</span>
              </div>
            </div>
            <div className="quote">
              <div className="stars">★★★★★</div>
              <p>
                “Toughest mock interview I've done, in the best way. The
                feedback was worth the fee on its own.”
              </p>
              <p>Ravi Menon · Interview Preparation</p>
            </div>
            <div className="mini-guru">
              {/* ${av("Lina Okoye", "green", 40, true)} */}
              <div>
                <b>Lina Okoye opened new slots</b>
                <div>3 new times next week</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wrap">
        <section className="home-section" aria-labelledby="cat-h">
          <div className="section-title">
            <h2 id="cat-h">Browse by what you're working on</h2>
            <button className="link-btn" data-go="explore">
              See all gurus →
            </button>
          </div>
          <div className="cat-grid">
            {/* ${CATS.map(c => `<button className="cat" data-cat="${c.n}"><span className="cat-icon tint-${c.tint}">${ico(c.icon, 20)}</span><b>${c.n}</b><small>${c.d}</small></button>`).join('')} */}
            <button className="cat" data-cat="">
              <span className="cat-icon text-purple">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 8h16v11H4zM9 8V5h6v3"></path>
                </svg>
              </span>
              <b>Career</b>
              <small className="text-base">Moves, promotions, pivots</small>
            </button>
          </div>
        </section>
        <section className="home-section" aria-labelledby="feat-h">
          <div className="section-title">
            <h2 id="feat-h">Available this week</h2>
            <button className="link-btn" data-go="explore">
              Explore all →
            </button>
          </div>
          <div className="guru-grid">
            {/* ${GURUS.slice(0, 4).map(guruCard).join('')} */}
          </div>
        </section>
        <section className="home-section" aria-labelledby="how-h">
          <div className="section-title">
            <h2 id="how-h">How a session works</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="step-n">1</span>
              <h3 className="text-20 font-bold">Find your guru</h3>
              <p>
                Filter by topic, price and rating. Every profile shows real
                reviews and the next open slot.
              </p>
            </div>
            <div className="step">
              <span className="step-n">2</span>
              <h3 className="text-20 font-bold">Pick a time and pay</h3>
              <p>
                Choose a 30, 45 or 60 minute session. Your payment is held by
                Stripe until the session happens.
              </p>
            </div>
            <div className="step">
              <span className="step-n">3</span>
              <h3 className="text-20 font-bold">Meet, then review</h3>
              <p>
                Join the video call from your browser, message your guru before
                and after, and leave a review.
              </p>
            </div>
          </div>
        </section>
        <section className="guru-band" aria-labelledby="band-h">
          <div>
            <p className="eyebrow">Becoming a guru</p>
            <h2 id="band-h" className="mt-2">
              Your experience is worth someone's next step.
            </h2>
            <p>
              Set your own sessions, prices and weekly availability. Learners
              book and pay up front, and payouts go straight to your bank
              through Stripe.
            </p>
            <div className="flex gap-8 mt-20 flex-wrap">
              <button className="btn btn-primary" data-role="guru">
                Apply to teach
              </button>
              <button className="btn btn-ghost" data-role="guru">
                See the guru dashboard
              </button>
            </div>
          </div>
          <div className="split-bar">
            <b className="text-base">On a $95 session</b>
            <div
              className="split-track"
              role="img"
              aria-label="You keep 75 percent, platform fee 25 percent"
            >
              <span></span>
              <span></span>
            </div>
            <div className="split-legend num">
              <span>
                <b>You keep $71</b> · 75%
              </span>
              <span>Platform fee $24 · 25%</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
