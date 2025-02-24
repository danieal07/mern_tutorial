import React from 'react'
import CoE from './CoE'
import Exam from './Exam'

const StudentResult = (props) => {
  return (
    
    <div>
        <Exam/> 
        <h1>Result:</h1>
        <h2>Sgpa:{props.sgpa}</h2>
        <h2> Cgpa:{props.cgpa}</h2>
    </div>
  )
}

export default StudentResult