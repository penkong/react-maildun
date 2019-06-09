//show user input to add info
import _ from 'lodash';
import React, { Component } from 'react';
// all html el of form come here with Field comp
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  {label: 'Survey Title', name:'title'},
  {label: 'Subject Line', name:'subject'},
  {label: 'Email Body', name:'body'},
  {label: 'Recipients Email', name:'emails'}
]

class SurveyForm extends Component {
  renderFields(){
    return _.map(FIELDS, ({label,name}) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
//name cause reduxForm save data with that label
export default reduxForm({ form: 'surveyForm' })(SurveyForm);
//reduxForm => handleSubmit