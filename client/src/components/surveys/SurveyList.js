import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';


class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys(){
    return this.props.surveys.reverse().map(survey =>{
      return (
        <div className="helvetica w-100 w-40-l br2 shadow-4 center hidden bg-white mv4" key={survey._id}>
          <div className="ml2 pa2">
            <span className="db w-100 f4">title : {survey.title}</span>
            <p className="f6 f5-ns lh-copy measure">
              body : {survey.body}
            </p>
            <p>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="white bg-green center b f6 f4-l fw5 tc pa2 mh2">
            <p><pre>voted till now  <span>Yes:{survey.yes}</span>  <span>No:{survey.no}</span></pre>
            </p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="w-100 center">
        {this.renderSurveys()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList);