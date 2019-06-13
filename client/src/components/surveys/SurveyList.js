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
        <div className="w-100 w-80-m w-50-l br4 shadow-3 center hidden bg-white mv3" key={survey._id}>
          <div className="navy w-100 measure pa2 mb2 ml1 ml4-l">
            <div className="w-100 center f4 mb2 mt3">Title : {survey.title}</div>
            <p className="f6 f5-ns lh-copy mb2">
              body : {survey.body}
            </p>
            <p className="f6 lh-copy mb2">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="white br4 br--bottom bg-green hover-bg-navy center b f6 f4-l fw5 tc pa2 mh2">
            <p><pre>voted till now  <span>Yes:{survey.yes}</span>  <span>No:{survey.no}</span></pre>
            </p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="w-100 center" style={{fontFamily: "Roboto"}}>
        {this.renderSurveys()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList);