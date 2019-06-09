import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name , label }) => {//each field
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  }) 
  return (
    <div>
      <h5>Please confirm your entries:</h5>
      {reviewFields}
      <button 
        className="yellow btn-flat" 
        onClick={onCancel}
        >Back
      </button>
      <button 
        className="green white-text btn-flat right" 
        onClick={()=> submitSurvey(formValues)}
        >Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return { formValues : state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
