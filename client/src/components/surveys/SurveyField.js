//survey field render a single label and text input.
import React from 'react'

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div className="pa2 cf bg-red">
      <div className="fl w-100 w-50-ns">
        <label className="mr2">{label}</label>
      </div>
      <div className="fl fr-m fr-l w-100 w-50-ns">
        <input className="bn bg-near-white" {...input}/>
      </div>
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default SurveyField
