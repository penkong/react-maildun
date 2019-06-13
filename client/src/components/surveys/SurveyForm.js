//show user input to add info
import _ from 'lodash';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// all html el of form come here with Field comp
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
//utils 
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';


class SurveyForm extends Component {

  renderFields(){
    return _.map(FIELDS, ({label,name}) => {
      return <Field className="w-100 center" key={name} component={SurveyField} type="text" label={label} name={name}/>
    });
  }
  render() {
    return (
      <div>
        <form className="avenir w-100 w-80-m w-50-l br4 shadow-3 center hidden bg-white mv3 pa3"
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          <div className="db navy w-100 measure pa2 mv2 mv4-l center">
            {this.renderFields()}
          </div>
          <div className="cf w-50 center">
            <NavLink activeStyle={{fontWeight: "bold", color: "red", borderStyle: "none", backGroundColor: "none" }} to="/surveys" type="submit"> 
              <span className="f6 f4-m f3-l fw2 normal-l b br-pill ba bg-white hover-bg-red hover-white b--red no-underline grow pv2 ph3 dib">
                Cancel
              </span>
            </NavLink>
            <div className="fr">
              <button className="f6 f4-m f3-l fw2 normal-l b br-pill ba bg-white hover-bg-navy hover-white b--navy no-underline grow pv2 ph3 dib" type="submit">Next</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

//values is whole form values >> validate pass by meta
const validate = (values) => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');
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