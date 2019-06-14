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
      <div style={{fontFamily: "Roboto"}}>
        <form className="w-100 w-80-m w-60-l br4 shadow-3 center hidden bg-white mv2 mv5-ns pa3"
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          <div className="db w-100 pa2 mv2 mv4-l center">
            {this.renderFields()}
          </div>
          <div className="cf w-100 w-70-ns center">
            <NavLink className="fl link no-underline" exact activeStyle={{backgroundColor: "inherit"}}  to="/surveys" type="submit"> 
              <div className="f6 f4-ns fw2 red bg-white hover-dark-red normal-l br-pill no-underline ph4 pv2 dib">
                Cancel
              </div>
            </NavLink>
            <div className="fr">
              <button className="f6 f4-m f4-l fw2 white bg-navy hover-bg-green normal-l br-pill ba no-underline grow ph4 pv2 dib" type="submit">Next</button>
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