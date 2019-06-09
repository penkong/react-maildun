//show user input to add info
import React, { Component } from 'react';
// all html el of form come here with Field comp
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields(){
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} label="Survey Title"/>
        <Field type="text" name="subject" component={SurveyField} label="Subject Line"/>
        <Field type="text" name="body" component={SurveyField} label="Email Body"/>
        <Field type="text" name="emails" component={SurveyField} label="Recipients List"/>
      </div>
    )
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