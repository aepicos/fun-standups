import React from "react"

import _ from 'lodash'
import allStandups from "../standup-data"
import Standup from "./standup";
import getTagColors from "../get-tag-colors";

const RelatedStandups = ({ tags, title }) => {
  const relatedStandups = allStandups.filter((standup) => standup.title !== title && _.intersection(standup.tags, tags).length).slice(0, 3);
  console.log(getTagColors())
  return (
    <div className="related-standups">
      <div className="related-standups-header">Try these next</div>
     {relatedStandups.map((standup) => <Standup standup={standup} tagColors={getTagColors()} />)}
    </div>
  )
}

export default RelatedStandups