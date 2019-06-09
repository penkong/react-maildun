//overall form component for create survey
//survey field and survey form comp inside >> survey form view

//aha >>> survey form show survey form and survey form review
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <SurveyForm/>
      </div>
    );
  }
}

export default SurveyNew;