import React from 'react'
import Exam from './Exam'
import CoE from './CoE'

const Faculty = (props) => {
  return (
    <div><h1>Faculty Correcting Paper..</h1>
        <CoE sgpa={props.sgpa} cgpa={props.cgpa}/>
    </div>
  )
}

export default Faculty