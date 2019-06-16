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


const styles = {
  form: 'w-100 w-80-m w-60-l center hidden bg-white br4 shadow-3 mv2 mv5-ns pa3',
  fields: 'db w-100 center mv2 mv4-l pa2',
  field: 'w-100 center',
  buttons: 'cf w-100 w-70-ns center',
  navCancel: 'fl link no-underline',
  cancel: 'dib f6 f4-ns fw2 normal-l red bg-white hover-dark-red br-pill no-underline ph4 pv2',
  navNext: 'fr',
  next: 'dib f6 f4-m f4-l fw2 normal-l white bg-navy hover-bg-green ba br-pill no-underline grow ph4 pv2'
}
class SurveyForm extends Component {

  renderFields(){
    return _.map(FIELDS, ({label,name}) => {
      return <Field className={styles.field} key={name} component={SurveyField} type="text" label={label} name={name}/>
    });
  }
  render() {
    const { handleSubmit, onSurveySubmit } = this.props;
    return (
      <div style={{fontFamily: "Roboto"}}>
        <form className={styles.form} onSubmit={ handleSubmit(onSurveySubmit) }>
          <div className={styles.fields}>
            {this.renderFields()}
          </div>
          <div className={styles.buttons}>
            <NavLink className={styles.navCancel} exact 
              activeStyle={{backgroundColor: "inherit"}}  to="/surveys" type="submit"
            > 
              <div className={styles.navCancel}> Cancel </div>
            </NavLink>
            <div className={styles.navNext}>
              <button className={styles.next} type="submit">Next</button>
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
  //each field
  _.each(FIELDS, ({ name })=>{
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