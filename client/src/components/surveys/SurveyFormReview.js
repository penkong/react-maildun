import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const styles = {
  reviewCard: 'w-90 w-80-m w-60-l center hidden bg-white br4 shadow-3 mv2 mv5-ns pa3',
  reviewHeader: 'db w-100 f5 f4-ns navy pa2 pa3-ns',
  fields: 'cf w-100 center pa2',
  label: 'fl w-100 w-25-ns f6 f5-l navy mv2 ml2-ns',
  formValues: 'fl fr-m fr-l w-100 w-70-ns f6 f5-l navy pv2 ph1',
  buttons: 'cf w-100 w-70-ns center mt4',
  back: 'fl center f6 f4-l fw2 red bg-white hover-white hover-bg-red normal-l br-pill ba no-underline grow ph4 pv2 dib',
  send: 'fr center f6 f4-l fw2 white bg-navy hover-white hover-bg-green normal-l br-pill ba no-underline grow ph4 pv2 dib'
}

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  // map over each field
  const reviewFields = _.map(formFields, ({ name , label }) => {
    return (
      <div key={name} className={styles.fields}>
        <label className={styles.label}>{label}</label>
        <div className={styles.formValues}>{formValues[name]}</div>
      </div>
    )
  }) 

  return (
    <div className={styles.reviewCard}>
      <h5 className={styles.reviewHeader}>Please confirm your entries:</h5>
      {reviewFields}
      <div className={styles.buttons}>
        <button className={styles.back}onClick={onCancel}>Back</button>
        <button className={styles.send} onClick={()=> submitSurvey(formValues, history)} >Send Survey</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { formValues : state.form.surveyForm.values };
}

//with router teaches component that have not access to router-dom to receive sth like history obj
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
