//overall form component for create survey
//survey field and survey form comp inside >> survey form view

//aha >>> survey form show survey form and survey form review
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  //because no other comp care about state here we cant use state lvl.
  state = { showFormReview: false };
  renderContent(){
    if(this.state.showFormReview) return <SurveyFormReview />;
    return <SurveyForm onSurveySubmit={()=>this.setState({showFormReview: true })}/>
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;