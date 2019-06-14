//survey field render a single label and text input.
import React from 'react'

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div className="pa2 cf w-100">
      <div className="fl w-100 w-25-ns navy mv2 ml2-ns">
        <label className="f6 f4-l">{label}</label>
      </div>
      <div className="fl fr-m fr-l w-100 w-70-ns">
        <input className="ba b--lightest-blue pv2 ph1 w-100" {...input}/>
      </div>
      <div className="fr w-100 tr dark-pink b pa1 pl2 mt1">
        {touched && error}
      </div>
    </div>
  )
}

export default SurveyField
