//show user input to add info
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// all html el of form come here with Field comp
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
//utils 
import validateEmails from '../../utils/validateEmails';

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
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text" type="submit">Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

//values is whole form values >> validate pass by meta
const validate = (values) => {
  const errors = {};
  errors.emails = validateEmails(values.emails || '');
  _.each(FIELDS, ({ name })=>{//each field
    if(!values[name]) errors[name] = `You must provide ${name}`;
  });
  return errors;
}


//name cause reduxForm save data with that label
// destroyOnUnmount prevent default habit of redux form help us save form info on back and edit
export default reduxForm({ 
  validate , 
  form: 'surveyForm' , 
  destroyOnUnmount: false 
})(SurveyForm);
//reduxForm => handleSubmit