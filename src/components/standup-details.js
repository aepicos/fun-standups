import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import "../components/standup-details.sass"
import RelatedStandups from "../components/RelatedStandups"

const StandupDetails = ({ pageContext }) => {
  const { standup } = pageContext
  return (
    <Layout>
      <SEO title={`${standup.title}`} description={`${standup.summary}`} />
      <div className="standup-details">
        <a href="/" className="back-link" aria-label="Back to all stand-up formats.">←</a>
        <h1 className="standup-details--title">{standup.title}</h1>
        <p className="standup-details--summary">{standup.summary}</p>
        <p>{standup.description}</p>
        <ul>
          {standup.benefits.map((benefit)=><li key={benefit.slice(0, 10)} className="benefit">{benefit}</li>)}
        </ul>
        { standup.contributor && standup.contributor.github && (
          <p className="contributor">
            Contributed by <a
              href={`https://github.com/${standup.contributor.github}`}
              rel="noopener noreferrer"
            >{standup.contributor.github}</a>.
          </p>
        )}
      </div>
      <RelatedStandups tags={standup.tags} title={standup.title} />
    </Layout>
  )
}

export default StandupDetails
