import React from 'react'
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries:</h5>
      <button 
        className="yellow darken-3 btn-flat left" 
        onClick={onCancel}
        >Back
      </button>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return { formValues : state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
