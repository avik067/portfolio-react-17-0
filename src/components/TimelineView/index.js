import {Chrono} from 'react-chrono'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const randomId = uuidv4()

class TimelineView extends Component {
  constructor(props) {
    super(props)
    this.state = {datalist: props.timelineItemsList}
  }

  contentType = (details, id) => {
    console.log('')

    if (id === 'COURSE') {
      return <CourseTimelineCard details={details} key={randomId} />
    }
    if (id === 'PROJECT') {
      return <ProjectTimelineCard details={details} key={randomId} />
    }
    return ''
  }

  render() {
    const {datalist} = this.state

    return (
      <div className="">
        <h1 className="head">
          MY JOURNEY OF <span className="blue-head">CCBP 4.0</span>
        </h1>
        <Chrono mode="VERTICAL_ALTERNATING" items={datalist}>
          {datalist.map(each => this.contentType(each, each.categoryId))}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
