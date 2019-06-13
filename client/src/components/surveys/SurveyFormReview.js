import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name , label }) => {//each field
    return (
      <div key={name} className="pa2 cf w-100 center">
        <label className="fl w-100 w-25-ns navy mv2 ml2-ns f6 f5-l">{label}</label>
        <div className="fl fr-m fr-l w-100 w-70-ns navy pv2 ph1 f6 f5-l">{formValues[name]}</div>
      </div>
    )
  }) 
  return (
    <div className="w-90 w-80-m w-60-l br4 shadow-3 center hidden bg-white mv2 mv5-ns pa3">
      <h5 className="db w-100 pa2 pa3-ns navy f5 f4-ns">Please confirm your entries:</h5>
      {reviewFields}
      <div className="cf w-100 w-70-ns center mt4">
        <button 
          className="fl center f6 f4-l fw2 red bg-white hover-white hover-bg-red normal-l br-pill ba no-underline grow ph4 pv2 dib"
          onClick={onCancel}
          >Back
        </button>
        <button 
          className="fr center f6 f4-l fw2 white bg-navy hover-white hover-bg-green normal-l br-pill ba no-underline grow ph4 pv2 dib"
          onClick={()=> submitSurvey(formValues, history)} 
          >Send Survey
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return { formValues : state.form.surveyForm.values };
}
//with router teaches component that have not access to router-dom to receive sth like history obj
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
