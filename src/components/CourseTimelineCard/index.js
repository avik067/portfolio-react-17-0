import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({details}) => {
  console.log('CourseTimelineCard')
  console.log(details)

  const {courseTitle, description, duration, tagsList} = details

  return (
    <div className="col">
      <div className="row apart align-center">
        <div>
          <h1 className="course-heading">{courseTitle}</h1>
        </div>

        <div className="row center align-center">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <ul className="row wrap start">
        {tagsList.map(each => (
          <li className="list-item">{each.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
