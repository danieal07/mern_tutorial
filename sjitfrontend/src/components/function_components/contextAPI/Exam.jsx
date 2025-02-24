import React from 'react'
import Faculty from './Faculty'
import StudentResult from './StudentResult'

const Exam = (props) => {
  return (
    <div>
        {/* <StudentResult sgpa={props.sgpa} cgpa={props.cgpa}/> */}
        <h1>Students are writing exam....</h1>
        <Faculty sgpa={props.sgpa} cgpa={props.cgpa}/>
    </div>
  )
}

export default Exam