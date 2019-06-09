//show user input to add info
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        surveyForm
      </div>
    );
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyForm);