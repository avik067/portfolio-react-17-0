import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = ({details}) => {
  console.log('ProjectTimelineCard')
  console.log(details)

  const {projectTitle, projectUrl, imageUrl, duration, description} = details

  return (
    <div className="">
      <img className="project-img" src={imageUrl} alt="project" />
      <div className="row apart align-center">
        <h1>{projectTitle}</h1>
        <div className="row center align-center">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>

      <a className="hyper-text" href={projectUrl} rel="noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
