import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

const styles = {
  landing: 'w-100 center',
  card: 'w-90 w-80-m w-50-l center hidden bg-white br4 shadow-3 mv3',
  cardContent: 'w-100 measure navy mb2 ml1 ml4-l pa2',
  title: 'w-100 center f4 mb2 mt3',
  body: 'f6 f5-ns lh-copy mb2',
  sendTime: 'f6 lh-copy mb2',
  harvest: 'center b f6 f4-l fw5 tc white bg-green hover-bg-navy br4 br--bottom pa2 mh2'
}

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys(){
    return this.props.surveys.reverse().map(survey =>{
      return (
        <div className={styles.card} key={survey._id}>
          <div className={styles.cardContent}>
            <div className={styles.title}>Title : {survey.title}</div>
            <p className={styles.body}> body : {survey.body}</p>
            <p className={styles.sendTime}>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
          </div>
          <div className={styles.harvest}>
            <p>voted till now  
              <span className="f6 f5-ns mh3 pre">Yes : {survey.yes}</span>
              <span className="f6 f5-ns pre">No : {survey.no}</span>
            </p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className={styles.landing} style={{fontFamily: "Roboto"}}>
        {this.renderSurveys()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList);