import React from "react";
import { siteConfig as c } from "../config";

export default function CapabilityLayout({
  id,
  title,
  tags,
  intro,
  overview,
  challenge,
  challenges,
  capabilities,
  architectureTitle,
  architectureIntro,
  architectureItems,
  approach,
  useCases,
  technology,
  deliverables,
  outcomes,
  whyUs
}) {
  return (
    <main className="detailPage">

      {/* HERO */}
      <section className="detailHero">
        <div className="sectionKicker">
          CAPABILITY / {id}
        </div>

        <h1>{title}</h1>

        <p>{intro}</p>

        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="detailBody">
        <div>
          <div className="sectionKicker">
            THE OPPORTUNITY
          </div>

          <h2>
            Strategy that creates
            <br />
            <span>real leverage.</span>
          </h2>
        </div>

        <div className="detailCopy">
          <p className="detailLead">
            {overview}
          </p>

          <p>
            The goal is not to introduce technology for its own sake.
            It is to create a stronger operating model around the
            technology you already have — and make the next generation
            of capabilities easier to build, operate, and scale.
          </p>
        </div>
      </section>


      {/* CHALLENGE */}
      <section className="detailSection">
        <div className="detailSectionHeader">
          <div className="sectionKicker">
            THE CHALLENGE
          </div>

          <h2>
            The hard part isn't
            <br />
            <span>the technology.</span>
          </h2>
        </div>

        <p className="detailLargeCopy">
          {challenge}
        </p>

        <div className="detailChallengeGrid">
          {challenges.map(([heading, text], index) => (
            <div
              className="detailChallenge"
              key={heading}
            >
              <span>
                0{index + 1}
              </span>

              <h3>{heading}</h3>

              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>


      {/* CAPABILITIES */}
      <section className="detailBody detailBodyAlt">
        <div>
          <div className="sectionKicker">
            WHAT WE DO
          </div>

          <h2>
            From first
            <br />
            <span>hypothesis.</span>
          </h2>

          <p className="detailLargeCopy">
            We combine strategy, architecture, engineering, and
            implementation so that ideas can move quickly from
            a business question into a production system.
          </p>
        </div>

        <div className="detailCapabilityList">
          {capabilities.map(([heading, text], index) => (
            <div
              className="detailCapability"
              key={heading}
            >
              <div className="detailCapabilityNumber">
                0{index + 1}
              </div>

              <div>
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ARCHITECTURE */}
      <section className="detailSection detailArchitecture">
        <div className="detailSectionHeader">
          <div className="sectionKicker">
            HOW THE PIECES FIT
          </div>

          <h2>
            Designed as a
            <br />
            <span>system.</span>
          </h2>
        </div>

        <p className="detailLargeCopy">
          {architectureIntro}
        </p>

        <div className="architectureGrid">
          {architectureItems.map(
            ([number, heading, text]) => (
              <div
                className="architectureItem"
                key={heading}
              >
                <span>{number}</span>

                <div>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>


      {/* APPROACH */}
      <section className="detailBand detailApproach">
        <div className="sectionKicker">
          OUR APPROACH
        </div>

        <div className="detailApproachIntro">
          <h2>
            A practical path
            <br />
            <span>from idea to impact.</span>
          </h2>

          <p>
            We don't believe in transformation programs that disappear
            into a strategy deck. Every engagement is designed around
            decisions, implementation, and measurable progress.
          </p>
        </div>

        <div className="detailProcess">
          {approach.map(([number, heading, text]) => (
            <div
              className="detailProcessStep"
              key={number}
            >
              <span>{number}</span>

              <div>
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* USE CASES */}
      <section className="detailSection">
        <div className="detailSectionHeader">
          <div className="sectionKicker">
            WHERE WE CREATE VALUE
          </div>

          <h2>
            Technology tied to
            <br />
            <span>real outcomes.</span>
          </h2>
        </div>

        <div className="useCaseGrid">
          {useCases.map(
            ([heading, text], index) => (
              <div
                className="useCase"
                key={heading}
              >
                <span>0{index + 1}</span>

                <h3>{heading}</h3>

                <p>{text}</p>
              </div>
            )
          )}
        </div>
      </section>


      {/* TECHNOLOGY */}
      <section className="detailBody detailBodyAlt">
        <div>
          <div className="sectionKicker">
            TECHNOLOGY & PATTERNS
          </div>

          <h2>
            Built for the
            <br />
            <span>real world.</span>
          </h2>
        </div>

        <div className="technologyList">
          {technology.map(
            ([heading, text], index) => (
              <div
                className="technologyItem"
                key={heading}
              >
                <span>0{index + 1}</span>

                <div>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>


      {/* DELIVERABLES */}
      <section className="detailSection">
        <div className="detailSectionHeader">
          <div className="sectionKicker">
            DELIVERABLES
          </div>

          <h2>
            What you actually
            <br />
            <span>walk away with.</span>
          </h2>
        </div>

        <div className="detailDeliverables">
          {deliverables.map((item, index) => (
            <div
              className="detailDeliverable"
              key={item}
            >
              <span>
                0{index + 1}
              </span>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>


      {/* OUTCOMES */}
      <section className="detailOutcome">
        <div className="sectionKicker">
          OUTCOMES
        </div>

        <h2>
          Built to create
          <br />
          <span>measurable change.</span>
        </h2>

        <div className="outcomeGrid">
          {outcomes.map((outcome, index) => (
            <div
              className="outcomeItem"
              key={outcome}
            >
              <span>
                0{index + 1}
              </span>

              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </section>


      {/* WHY FIFTH CURSOR */}
      <section className="detailBand">
        <div className="sectionKicker">
          WHY FIFTH CURSOR
        </div>

        <h2>
          Technical depth.
          <br />
          <span>Business context.</span>
        </h2>

        <p>
          {whyUs ||
            "We stay close to the real system: architecture, implementation, trade-offs, and the people who have to operate it after launch."}
        </p>

        <a
          className="primary detailCTA"
          href={`mailto:${c.brand.email}?subject=${encodeURIComponent(
            title + " inquiry"
          )}`}
        >
          Talk to Fifth Cursor
        </a>
      </section>

    </main>
  );
}
