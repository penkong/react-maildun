//survey field render a single label and text input.
import React from 'react'

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{marginBottom: '5px'}} />
      <div className="red-text" style={{marginBottom: '20px'}}>
      {touched && error}
      </div>
    </div>
  )
}

export default SurveyField
